import React from 'react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { AnimatedText } from './AnimatedText';
import '../styles/animations.css';

const Hero = () => {
  const words = ["Back End Developer", "Front End Developer", "Mobile Programming"];

  return (
    <Section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://img.pikbest.com/wp/202344/high-tech-texture-futuristic-circuit-board-abstract-background-with-technological_9925654.jpg!sw800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-950/80"></div>
      </div>

      <Container className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-6">
            Hi, I'm <span className="text-blue-500">James Frans Rizky Tambunan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            I'm a <span className="text-blue-500">
              <AnimatedText words={words} interval={3000} />
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/images/Resume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download CV
              <img 
                src="/images/resume_pdf.png" 
                alt="PDF Icon" 
                className="ml-3 w-7 h-7" 
              />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[420px] lg:h-[420px] lg:mr-[4em] animate-float">
            <img 
              src="/images/JamesT.png" 
              alt="Profile" 
              className="w-full h-full rounded-full rainbow-border object-cover blur-[1px] hover:blur-[0.5]"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;