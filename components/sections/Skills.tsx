'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFlutter,
  SiKotlin,
  SiPython,
  SiAngular,
  SiAmazon,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skills = {
  frontend: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
  ],
  mobile: [
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'React Native', icon: SiReact, color: '#61DAFB' },
    { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
  ],
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-container bg-background-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-center">Technical Skills</h2>
          <p className="section-subheading text-center mx-auto mb-16">
            Technologies and tools I work with to build exceptional products
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">●</span> Frontend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-4 rounded-xl flex flex-col items-center justify-center gap-3 group cursor-pointer"
                >
                  <skill.icon className="w-12 h-12 group-hover:scale-110 transition-transform" style={{ color: skill.color }} />
                  <span className="text-sm font-medium text-foreground-secondary group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-accent">●</span> Backend & DevOps
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.backend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-4 rounded-xl flex flex-col items-center justify-center gap-3 group cursor-pointer"
                >
                  <skill.icon className="w-12 h-12 group-hover:scale-110 transition-transform" style={{ color: skill.color }} />
                  <span className="text-sm font-medium text-foreground-secondary group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-success">●</span> Mobile Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.mobile.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-4 rounded-xl flex flex-col items-center justify-center gap-3 group cursor-pointer"
                >
                  <skill.icon className="w-12 h-12 group-hover:scale-110 transition-transform" style={{ color: skill.color }} />
                  <span className="text-sm font-medium text-foreground-secondary group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 glass rounded-2xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['DevSecOps', 'Cybersecurity', 'Ethical Hacking', 'Linux', 'RESTful APIs', 'GraphQL', 'Microservices', 'CI/CD', 'Agile/Scrum', 'Unit Testing'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-background-tertiary rounded-lg text-sm font-medium text-foreground-secondary hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
