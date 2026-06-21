import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, Legend,
} from 'recharts';
import { Loader2, GitBranch, BarChart3 } from 'lucide-react';

const POSTHOG_API_HOST = import.meta.env.VITE_POSTHOG_API_HOST || 'https://us.posthog.com';
const POSTHOG_PERSONAL_API_KEY = import.meta.env.VITE_POSTHOG_PERSONAL_API_KEY;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

interface WeekData {
  week: string;
  pageViews: number;
  visitors: number;
}

interface DashboardStats {
  totalPageViews: number;
  totalVisitors: number;
  weeklyData: WeekData[];
}

interface ContributionDay {
  date: string;
  count: number;
  level: string;
}

interface GitHubStats {
  totalContributions: number;
  bestDay: number;
  longestStreak: number;
  weeks: { contributionDays: ContributionDay[] }[];
}

function getWeekLabel(start: Date, end: Date): string {
  const startMonth = start.toLocaleString('en-US', { month: 'short' });
  const endMonth = end.toLocaleString('en-US', { month: 'short' });
  if (startMonth === endMonth) {
    return `${start.getDate()}-${end.getDate()} ${startMonth}`;
  }
  return `${start.getDate()} ${startMonth}-${end.getDate()} ${endMonth}`;
}

function getWeekIndex(date: Date, jan1: Date): number {
  const diffMs = date.getTime() - jan1.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return Math.floor(diffDays / 7);
}

function generateAllWeeks(): { key: number; label: string }[] {
  const year = new Date().getFullYear();
  const jan1 = new Date(year, 0, 1);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const weeks: { key: number; label: string }[] = [];
  let current = new Date(jan1);
  let weekIndex = 0;

  while (current <= today) {
    const weekEnd = new Date(current);
    weekEnd.setDate(weekEnd.getDate() + 6);
    if (weekEnd > today) weekEnd.setTime(today.getTime());

    weeks.push({
      key: weekIndex,
      label: getWeekLabel(current, weekEnd),
    });

    current.setDate(current.getDate() + 7);
    weekIndex++;
  }

  return weeks;
}

function calculateGitHubStats(days: ContributionDay[]): { bestDay: number; longestStreak: number } {
  let bestDay = 0;
  let longestStreak = 0;
  let streak = 0;

  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));

  for (const day of sorted) {
    if (day.count > bestDay) bestDay = day.count;
    if (day.count > 0) {
      streak++;
      if (streak > longestStreak) longestStreak = streak;
    } else {
      streak = 0;
    }
  }

  return { bestDay, longestStreak };
}

async function fetchDashboardData(): Promise<DashboardStats> {
  if (!POSTHOG_PERSONAL_API_KEY || POSTHOG_PERSONAL_API_KEY === 'YOUR_PERSONAL_API_KEY_HERE') {
    throw new Error('PostHog personal API key not configured');
  }

  const year = new Date().getFullYear();
  const jan1 = new Date(year, 0, 1);
  const after = jan1.toISOString().split('T')[0];

  const headers = { Authorization: `Bearer ${POSTHOG_PERSONAL_API_KEY}` };

  const allEvents: { timestamp: string; distinct_id: string }[] = [];
  let url: string | null =
    `${POSTHOG_API_HOST}/api/projects/473185/events/?event=$pageview&after=${after}&limit=100`;

  while (url) {
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`PostHog API error: ${res.status}`);
    const data = await res.json();
    allEvents.push(...(data.results || []));
    url = data.next || null;
  }

  const weekMap = new Map<number, { pageViews: number; visitorSet: Set<string> }>();

  allEvents.forEach((event) => {
    const idx = getWeekIndex(new Date(event.timestamp), jan1);
    if (!weekMap.has(idx)) {
      weekMap.set(idx, { pageViews: 0, visitorSet: new Set() });
    }
    const entry = weekMap.get(idx)!;
    entry.pageViews++;
    entry.visitorSet.add(event.distinct_id);
  });

  const allWeeks = generateAllWeeks();

  const weeklyData: WeekData[] = allWeeks.map((w) => {
    const entry = weekMap.get(w.key);
    return {
      week: w.label,
      pageViews: entry ? entry.pageViews : 0,
      visitors: entry ? entry.visitorSet.size : 0,
    };
  });

  const uniqueVisitors = new Set(allEvents.map((e) => e.distinct_id));

  return { totalPageViews: allEvents.length, totalVisitors: uniqueVisitors.size, weeklyData };
}

async function fetchGitHubContributions(): Promise<GitHubStats> {
  if (!GITHUB_TOKEN) throw new Error('GitHub token not configured');
  if (!GITHUB_USERNAME) throw new Error('GitHub username not configured');

  const query = `query($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              contributionLevel
            }
          }
        }
      }
    }
  }`;

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables: { userName: GITHUB_USERNAME } }),
  });

  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);

  const calendar = json.data.user.contributionsCollection.contributionCalendar;
  const mappedWeeks = calendar.weeks.map((w: any) => ({
    contributionDays: w.contributionDays.map((d: any) => ({
      date: d.date,
      count: d.contributionCount,
      level: d.contributionLevel,
    })),
  }));

  const allDays: ContributionDay[] = mappedWeeks.flatMap((w: any) => w.contributionDays);

  const { bestDay, longestStreak } = calculateGitHubStats(allDays);

  return {
    totalContributions: calendar.totalContributions,
    bestDay,
    longestStreak,
    weeks: mappedWeeks,
  };
}

const LEVEL_COLORS: Record<string, string> = {
  NONE: '#161b22',
  FIRST_QUARTILE: '#0e4429',
  SECOND_QUARTILE: '#006d32',
  THIRD_QUARTILE: '#26a641',
  FOURTH_QUARTILE: '#39d353',
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function ContributionHeatmap({ weeks }: { weeks: { contributionDays: ContributionDay[] }[] }) {
  const monthLabels: { label: string; col: number }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, i) => {
    const firstDay = week.contributionDays[0];
    if (firstDay) {
      const month = new Date(firstDay.date).getMonth();
      if (month !== lastMonth) {
        monthLabels.push({ label: MONTHS[month], col: i });
        lastMonth = month;
      }
    }
  });

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full">
        <div className="relative h-5 mb-2">
          {monthLabels.map((m, i) => (
            <span
              key={i}
              className="absolute text-gray-500 text-sm"
              style={{ left: `${m.col * 19}px` }}
            >
              {m.label}
            </span>
          ))}
        </div>
        <div className="flex gap-[3px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {Array.from({ length: 7 }).map((_, di) => {
                const day = week.contributionDays[di];
                return (
                  <div
                    key={di}
                    className="w-[16px] h-[16px] rounded-[3px]"
                    style={{
                      backgroundColor: day ? LEVEL_COLORS[day.level] || LEVEL_COLORS.NONE : '#161b22',
                    }}
                    title={day ? `${day.count} contributions on ${day.date}` : ''}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end gap-[3px] mt-3 mr-2">
          <span className="text-gray-500 text-xs mr-1">Less</span>
          {Object.values(LEVEL_COLORS).map((color, i) => (
            <div key={i} className="w-[15px] h-[15px] rounded-[3px]" style={{ backgroundColor: color }} />
          ))}
          <span className="text-gray-500 text-xs ml-1">More</span>
        </div>
      </div>
    </div>
  );
}

function ChartTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string; color: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-3 shadow-xl">
      <p className="text-gray-300 font-semibold text-sm mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className="text-sm" style={{ color: entry.color }}>
          {entry.dataKey === 'pageViews' ? 'Page Views' : 'Visitors'}: {entry.value}
        </p>
      ))}
    </div>
  );
}

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [posthogLoading, setPosthogLoading] = useState(true);
  const [posthogError, setPosthogError] = useState<string | null>(null);

  const [github, setGithub] = useState<GitHubStats | null>(null);
  const [githubLoading, setGithubLoading] = useState(true);
  const [githubError, setGithubError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardData()
      .then(setStats)
      .catch((err) => setPosthogError(err.message))
      .finally(() => setPosthogLoading(false));

    fetchGitHubContributions()
      .then(setGithub)
      .catch((err) => setGithubError(err.message))
      .finally(() => setGithubLoading(false));
  }, []);

  return (
    <section id="dashboard" className="relative py-12 bg-gray-950/80 overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Dashboard</h2>
        </motion.div>

        {/* Web Analytics Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8 max-w-5xl mx-auto"
        >
          <BarChart3 className="text-white" size={28} />
          <h3 className="text-2xl font-bold text-white">Web Analytics</h3>
        </motion.div>

        {posthogLoading && (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <Loader2 className="animate-spin mb-4" size={36} />
            <p>Loading web analytics...</p>
          </div>
        )}

        {stats && !posthogLoading && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              {[
                { title: 'Total Visitors', value: stats.totalVisitors, gradient: 'from-blue-500/10 to-blue-600/5 border-blue-500/20', delay: 0 },
                { title: 'Page Views', value: stats.totalPageViews, gradient: 'from-blue-500/10 to-blue-600/5 border-blue-500/20', delay: 0.1 },
                { title: 'Avg Views/Week', value: stats.weeklyData.length > 0 ? Math.round(stats.weeklyData.reduce((s, w) => s + w.pageViews, 0) / stats.weeklyData.length) : 0, gradient: 'from-blue-500/10 to-blue-600/5 border-blue-500/20', delay: 0.2 },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: card.delay }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${card.gradient} border rounded-2xl p-6`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{card.title}</p>
                      <p className="text-4xl font-bold text-white mt-2">{card.value.toLocaleString()}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl max-w-6xl mx-auto"
              style={{ outline: 'none' }}
            >
              <ResponsiveContainer width="95%" height={400}>
                <BarChart data={stats.weeklyData}>
                  <CartesianGrid strokeDasharray="1 1" stroke="#374151" />
                  <XAxis dataKey="week" stroke="#9CA3AF" fontSize={11} angle={-55} textAnchor="end" height={80} interval={0} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip content={<ChartTooltip />} cursor={false} />
                  <Legend
                    verticalAlign="top"
                    height={36}
                    formatter={(value: string) => (
                      <span className="text-gray-300 text-sm">
                        {value === 'pageViews' ? 'Page Views' : 'Visitors'}
                      </span>
                    )}
                  />
                  <Bar dataKey="visitors" fill="#10B981" radius={[2, 2, 0, 0]} activeBar={false} />
                  <Bar dataKey="pageViews" fill="#3B82F6" radius={[2, 2, 0, 0]} activeBar={false} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </>
        )}

        {/* Divider */}
        <div className="max-w-5xl mx-auto my-16">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        </div>

        {/* GitHub Contributions Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8 max-w-5xl mx-auto"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <h3 className="text-2xl font-bold text-white">GitHub Contributions</h3>
        </motion.div>

        {githubLoading && (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <Loader2 className="animate-spin mb-4" size={36} />
            <p>Loading GitHub contributions...</p>
          </div>
        )}

        {github && !githubLoading && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'Total Contributions', value: github.totalContributions.toLocaleString(), delay: 0.4 },
                { title: 'Best Day', value: `${github.bestDay}`, delay: 0.5 },
                { title: 'Longest Streak', value: `${github.longestStreak} days`, delay: 0.6 },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: card.delay }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{card.title}</p>
                      <p className="text-4xl font-bold text-white mt-2">{card.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="px-2"
            >
              <ContributionHeatmap weeks={github.weeks} />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
