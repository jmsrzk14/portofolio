import React from 'react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { ExperienceCard } from './ExperienceCard';
import { TechLogo } from './TechLogo';
import '../styles/animations.css';

const experiences = [
  {
    title: 'Assistant Matriculation Commite',
    company: 'Institute Technology Del',
    period: 'Aug 2024',
    description: ['Assisted 60+ first year students in Programming Introduction', 
                 'Familiar with C, HTML, and Microsoft Office for processing documents, data and presentations',
                 'Responsible for introducing the world of lectures to first year students'],
    imageUrl: 'https://srgjo27.github.io/my-web-portofolio/static/media/Institut%20Teknologi%20Del.628d1d1ed1695f96ed50.png',
  },
  {
    title: 'Technician System',
    company: 'PT. BPR Bandar Jaya',
    period: 'Feb 2022 - May 2022',
    description: ['Maintain all hardware and software ready for use before business hours', 
                 'Install the new hardware so it is ready for use',
                 'Manage and analyze financial data at the bank using Microsoft Office'],
    imageUrl: '/images/bpr.png',
  }
];

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png', label: 'HTML' },
  { src: 'https://1000marcas.net/wp-content/uploads/2021/02/CSS-Logo-tumb-150x150.png', label: 'CSS' },
  { src: 'https://www.kenantomfiebukit.site/assets/javascript-BjiGfaT-.png', label: 'JavaScript' },
  { src: 'https://img.icons8.com/?size=100&id=YrKoPXb4jv9l&format=png&color=000000', label: 'PHP' },
  { src: 'https://www.kenantomfiebukit.site/assets/mysql-D1fmG43W.png', label: 'MySQL' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png', label: 'Laravel' },
  { src: 'https://img.icons8.com/?size=48&id=7AFcZ2zirX6Y&format=png', label: 'Dart' },
  { src: 'https://img.icons8.com/?size=48&id=13679&format=png', label: 'Java' },
  { src: 'https://img.icons8.com/?size=48&id=l75OEUJkPAk4&format=png', label: 'Python' },
  { src: 'https://img.icons8.com/?size=48&id=pCvIfmctRaY8&format=png', label: 'Flutter' },
  { src: 'https://img.icons8.com/?size=48&id=20906&format=png', label: 'Git' },
  { src: 'https://img.icons8.com/?size=48&id=62452&format=png', label: 'Firebase' },
  { src: 'https://img.icons8.com/?size=48&id=EzPCiQUqWWEa&format=png', label: 'Bootstrap' },
];

const Experience = () => {
  return (
    <Section id="experience" className="bg-gray-900">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">Experience</h2>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Tech Logos Section */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-12 md:mx-12">
              {logos.map((logo, index) => (
                <TechLogo key={index} {...logo} />
              ))}
            </div>
          </div>

          {/* Experience Cards Section */}
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} {...experience} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Experience;