import React from 'react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { AnimatedText } from './AnimatedText';
import '../styles/animations.css';
import ProfileCard from './ProfileCard/ProfileCard'
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-3xl lg:ml-6">
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
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ zoom: 0 }}
          animate={{ zoom: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center md:justify-end">
            <div className="w-[250px] h-[400px] sm:w-[300px] sm:h-[450px] md:w-[450px] md:h-[450px] lg:w-[350px] lg:h-[530px] lg:mr-[4em] mt-6 lg:mt-0 animate-float">
              <ProfileCard
                name="James F R Tambunan"
                title="Software Developer"
                handle="jmsrzk14"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/images/JamesF.png"
                iconUrl="https://img.icons8.com/?size=100&id=XLFvWkhcJcr4&format=png&color=000000"
                showUserInfo={true}
                enableTilt={true}
                showBehindGradient={true}
                onContactClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
