import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';

const About = () => {
  return (
    <Section id="about" className="bg-gray-900">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative w-full max-w-2xl mx-auto">
            <img 
              src="/images/James Tambunan.png"
              alt="Working on laptop"
              className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 rounded-lg"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              I am an active student majoring in Information Engineering at the Del of Institute Technology with a GPA of 3.45. 
              And has experience in open-source projects and expertise in website and mobile application development 
              languages. Have the ability to work in a team and have good communication, as well as being committed to 
              developing efficient and interesting technology solutions in the field of software development and always 
              enthusiastic about learning new technologies.
            </p>
            
            <div className="space-y-8 mt-8">
              {[
                { icon: Code, title: 'Web Development', desc: 'Full-stack development with modern technologies' },
                { icon: Palette, title: 'UI/UX Design', desc: 'Creating beautiful and intuitive interfaces' },
                { icon: Globe, title: 'Web Solutions', desc: 'End-to-end web application solutions' }
              ].map((item, index) => (
                <div key={index} className="relative flex items-start group transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-3 bg-blue-500/20 rounded-lg">
                    <item.icon className="text-blue-400" size={36} />
                  </div>
                  <div className="relative ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-gray-100">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;