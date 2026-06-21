import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar,
} from 'recharts';
import { Users, Eye, TrendingUp, BarChart3, Loader2 } from 'lucide-react';
import { Container } from '../components/ui/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { posthog } from '../lib/posthog';

const POSTHOG_API_HOST = import.meta.env.VITE_POSTHOG_API_HOST || 'https://us.posthog.com';
const POSTHOG_PERSONAL_API_KEY = import.meta.env.VITE_POSTHOG_PERSONAL_API_KEY;

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

function getWeekLabel(date: Date): string {
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();
  return `${month} ${day}`;
}

function startOfWeek(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() - day);
  d.setHours(0, 0, 0, 0);
  return d;
}

async function fetchDashboardData(): Promise<DashboardStats> {
  if (!POSTHOG_PERSONAL_API_KEY) {
    throw new Error('PostHog personal API key not configured');
  }

  const eightWeeksAgo = new Date();
  eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 56);
  const after = eightWeeksAgo.toISOString().split('T')[0];

  const headers = {
    Authorization: `Bearer ${POSTHOG_PERSONAL_API_KEY}`,
  };

  const [pvRes, visRes] = await Promise.all([
    fetch(
      `${POSTHOG_API_HOST}/api/projects/473185/events/?event=$pageview&after=${after}&limit=1000`,
      { headers }
    ),
    fetch(
      `${POSTHOG_API_HOST}/api/projects/473185/events/?event=$pageview&after=${after}&limit=1000`,
      { headers }
    ),
  ]);

  if (!pvRes.ok) throw new Error(`PostHog API error: ${pvRes.status}`);

  const pvData = await pvRes.json();
  const events = pvData.results || [];

  const weekMap = new Map<string, { pageViews: number; visitorSet: Set<string>; weekStart: Date }>();

  events.forEach((event: { timestamp: string; distinct_id: string }) => {
    const date = new Date(event.timestamp);
    const ws = startOfWeek(date);
    const key = ws.toISOString();

    if (!weekMap.has(key)) {
      weekMap.set(key, { pageViews: 0, visitorSet: new Set(), weekStart: ws });
    }
    const entry = weekMap.get(key)!;
    entry.pageViews++;
    entry.visitorSet.add(event.distinct_id);
  });

  const weeklyData: WeekData[] = Array.from(weekMap.entries())
    .sort((a, b) => a[1].weekStart.getTime() - b[1].weekStart.getTime())
    .map(([, data]) => ({
      week: getWeekLabel(data.weekStart),
      pageViews: data.pageViews,
      visitors: data.visitorSet.size,
    }));

  const totalPageViews = events.length;
  const uniqueVisitors = new Set(events.map((e: { distinct_id: string }) => e.distinct_id));

  return {
    totalPageViews,
    totalVisitors: uniqueVisitors.size,
    weeklyData,
  };
}

function StatCard({
  title, value, icon: Icon, color, delay,
}: {
  title: string;
  value: number | string;
  icon: React.ElementType;
  color: string;
  delay: number;
}) {
  const colorMap: Record<string, string> = {
    blue: 'from-blue-500/10 to-blue-600/5 border-blue-500/20',
    green: 'from-emerald-500/10 to-emerald-600/5 border-emerald-500/20',
    purple: 'from-purple-500/10 to-purple-600/5 border-purple-500/20',
  };
  const iconColorMap: Record<string, string> = {
    blue: 'text-blue-400',
    green: 'text-emerald-400',
    purple: 'text-purple-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-gradient-to-br ${colorMap[color]} border rounded-2xl p-6`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-4xl font-bold text-white mt-2">{value}</p>
        </div>
        <div className={`p-4 rounded-xl bg-gray-800/50 ${iconColorMap[color]}`}>
          <Icon size={32} />
        </div>
      </div>
    </motion.div>
  );
}

function ChartTooltipContent({ active, payload, label }: {
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

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    posthog.capture('dashboard_viewed');

    fetchDashboardData()
      .then(setStats)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      <Header />
      <main className="pt-24 pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Analytics <span className="text-blue-400">Dashboard</span>
            </h1>
            <p className="text-gray-400 mt-3 text-lg">
              Website traffic overview powered by PostHog
            </p>
          </motion.div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-32 text-gray-400">
              <Loader2 className="animate-spin mb-4" size={40} />
              <p>Loading analytics data...</p>
            </div>
          )}

          {error && !loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-8 text-center"
            >
              <p className="text-yellow-300 text-lg font-medium mb-2">
                Unable to load analytics data
              </p>
              <p className="text-yellow-400/70 text-sm">{error}</p>
              <p className="text-gray-400 text-sm mt-4">
                Add <code className="bg-gray-800 px-2 py-1 rounded text-blue-300">VITE_POSTHOG_PERSONAL_API_KEY</code> to your <code className="bg-gray-800 px-2 py-1 rounded text-blue-300">.env</code> file.
                <br />
                Get it from: PostHog Settings → Personal API Keys
              </p>
            </motion.div>
          )}

          {stats && !loading && (
            <>
              {/* Stat Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <StatCard
                  title="Total Visitors"
                  value={stats.totalVisitors.toLocaleString()}
                  icon={Users}
                  color="blue"
                  delay={0.1}
                />
                <StatCard
                  title="Page Views"
                  value={stats.totalPageViews.toLocaleString()}
                  icon={Eye}
                  color="green"
                  delay={0.2}
                />
                <StatCard
                  title="Avg Views/Week"
                  value={
                    stats.weeklyData.length > 0
                      ? Math.round(
                          stats.weeklyData.reduce((s, w) => s + w.pageViews, 0) /
                            stats.weeklyData.length
                        ).toLocaleString()
                      : '0'
                  }
                  icon={TrendingUp}
                  color="purple"
                  delay={0.3}
                />
              </div>

              {/* Page Views Chart */}
              {stats.weeklyData.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 mb-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <BarChart3 className="text-blue-400" size={24} />
                    <h2 className="text-xl font-semibold text-white">
                      Page Views per Week
                    </h2>
                  </div>
                  <ResponsiveContainer width="100%" height={320}>
                    <AreaChart data={stats.weeklyData}>
                      <defs>
                        <linearGradient id="pvGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="week" stroke="#9CA3AF" fontSize={12} />
                      <YAxis stroke="#9CA3AF" fontSize={12} />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="pageViews"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        fill="url(#pvGrad)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </motion.div>
              )}

              {/* Visitors Chart */}
              {stats.weeklyData.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="text-emerald-400" size={24} />
                    <h2 className="text-xl font-semibold text-white">
                      Visitors per Week
                    </h2>
                  </div>
                  <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={stats.weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="week" stroke="#9CA3AF" fontSize={12} />
                      <YAxis stroke="#9CA3AF" fontSize={12} />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="visitors" fill="#10B981" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </motion.div>
              )}
            </>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
