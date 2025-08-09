import React from 'react';
import { Code, Palette, Globe, Smartphone, Database, Code2 } from 'lucide-react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import Lanyard from './Lanyard/Lanyard';
import {motion} from 'framer-motion';

const About = () => {
  return (
    <Section id="about" className="bg-gray-950/80">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ zoom: 0 }}
            whileInView={{ zoom: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-2xl mx-auto">
              <img 
                src="/images/James Tambunan.png"
                alt="James F R Tambunan"
                className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 rounded-lg bg-gray-950/20"></div>
            </div>
          </motion.div>
          
          <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                I am an active 4th semester student majoring in Information Technology at Del of Institute Technology with a GPA 
                of 3.34. And have experience in open source projects and expertise in website and mobile application 
                development languages. Have the ability to work in a team and have good communication, and are committed to 
                developing efficient and attractive technology solutions in the field of software development and are always eager 
                to learn new technologies
              </p>
            
              <div className="space-y-8 mt-8">
                {[
                  { icon: Globe, title: 'Web Development', desc: 'Full-stack development with modern technologies' },
                  { icon: Smartphone, title: 'UI/UX Design', desc: 'Creating beautiful and intuitive interfaces' },
                  { icon: Database, title: 'Web Solutions', desc: 'End-to-end web application solutions' }
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
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default About;