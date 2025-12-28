import React from 'react';
import { Code, Palette, Globe, Smartphone, Database, Code2 } from 'lucide-react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
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
            className='w-[100vh] flex justify-start items-start'
          >
            <div className="relative w-full max-w-3xl mx-auto mr-[55vh] sm:mr-0">
              <img 
                src="/images/ding.png"
                alt="James F R Tambunan"
                className="w-[35em] h-auto rounded-lg  object-cover aspect-[4/3]"
                style={{ filter: "grayscale(70%) contrast(120%)" }}
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
              <p className="text-gray-300 text-lg w-[45vh] sm:w-[80vh] ">
                I'm a software and IoT developer with designing and implementing scalable, high-performance systems. 
                Experienced in JavaScript, TypeScript, PHP, Go, Dart, Java, Arduino, and Raspberry Pi, with strong 
                proficiency in RESTful API development, database optimization, and IoT architecture. Adept at building 
                full-stack solutions using Laravel, Next.js, and Flutter, with a commitment to delivering secure, 
                efficient, and impactful technology solutions that accelerate organizational growth.
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
                      <p className="text-gray-400 w-[40vh] sm:w-[100vh]">{item.desc}</p>
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