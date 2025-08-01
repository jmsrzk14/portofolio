import React from 'react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { AnimatedCard } from './ui/AnimatedCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'BeritaKu',
    description: 'Get the latest news easily and reliably',
    image: '/images/BeritaKu.png',
    technologies: ['React', 'Golang', 'Laravel', 'Tailwind'],
    githubLink: 'https://github.com/jmsrzk14/winicode_beritaku',
  },
  {
    title: 'Sahulos Information System',
    description: 'Explore deeper into Batak traditional traditions',
    image: '/images/sahulos.png',
    technologies: ['React', 'TypeScript', 'JavaScript', 'Tailwind'],
    githubLink: 'https://github.com/jmsrzk14/sahulos_batak',
    liveLink: 'https://sahulos.netlify.app'
  },
  {
    title: 'KawalPTNku Information System',
    description: 'Providing recommendations for entering PTN',
    image: '/images/KawalPTN.png',
    technologies: ['React', 'Fiber', 'MySQL', 'Tailwind'],
    githubLink: 'https://github.com/jmsrzk14/PA2-Kel08',
    liveLink: 'https://kawalptn.netlify.app'
  },
  {
    title: 'HIMATIF Apps',
    description: 'Get to know more about HIMATIF IT DEL',
    image: '/images/himatif apps.png',
    technologies: ['Flutter', 'SQLite', 'Dart'],
    githubLink: 'https://github.com',
  },
  {
    title: 'Marudut Tani Shop Website',
    description: 'Make it easy to manage the store',
    image: '/images/Marudut Tani Home.png',
    technologies: ['Laravel 9', 'MySQL', 'Bootstrap', 'PHP'],
    githubLink: 'https://github.com/jmsrzk14/PA1-Kel06.git',
  },
  {
    title: 'Monitoring Number of People',
    description: 'View and monitor people around you',
    image: '/images/IoT.png',
    technologies: ['Python', 'Laravel 11', 'MySQL', 'Bootstrap'],
    githubLink: 'https://github.com',
  },
  {
    title: 'HKBP SITOLUAMA Website',
    description: 'Find information about HKBP Sitoluama',
    image: '/images/Sitoluama.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    githubLink: 'https://github.com/jmsrzk14/PA1-Kel06',
  },
];

const Projects = () => {
  return (
    <Section id="projects" className="bg-gray-800">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">My Projects</h2>
        </motion.div>   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={index} {...project} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;