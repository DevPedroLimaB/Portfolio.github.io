'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    id: 1,
    company: 'RVL Grupo',
    role: 'Front-End Developer',
    period: '2024',
    type: 'Freelance Project',
    description: 'Led front-end development for a maritime services company, focusing on responsive design and user experience optimization.',
    achievements: [
      'Delivered pixel-perfect responsive design across all device breakpoints',
      'Implemented modern UI patterns that improved user engagement',
      'Collaborated with backend team for seamless API integration',
      'Ensured cross-browser compatibility and web accessibility standards',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UX/UI'],
  },
  {
    id: 2,
    company: 'Hackathon Winner',
    role: 'Full-Stack Developer',
    period: '2024',
    type: 'Competition',
    description: 'Developed award-winning creative collaboration platform in a 48-hour competitive hackathon.',
    achievements: [
      '🏆 Won 1st place among competing teams',
      'Built complete MVP with real-time collaboration features',
      'Designed intuitive UX praised by judges and users',
      'Demonstrated ability to deliver under pressure',
    ],
    technologies: ['JavaScript', 'Web APIs', 'Real-time', 'Rapid Prototyping'],
  },
  {
    id: 3,
    company: 'Freelance',
    role: 'Automation Specialist',
    period: '2023 - Present',
    type: 'Self-Employed',
    description: 'Providing intelligent automation solutions for businesses, specializing in chatbot development and workflow optimization.',
    achievements: [
      'Deployed scalable chatbot infrastructure on AWS',
      'Reduced client response times by 80% through automation',
      'Implemented Docker-based microservices architecture',
      'Managed end-to-end project delivery and client relations',
    ],
    technologies: ['Python', 'Docker', 'AWS', 'Automation', 'NLP'],
  },
  {
    id: 4,
    company: 'Computer Science Degree',
    role: 'Student & Research',
    period: '2021 - Present',
    type: 'Academic',
    description: 'Pursuing Computer Science degree with focus on software engineering, algorithms, and emerging technologies.',
    achievements: [
      'Completed coursework in data structures, algorithms, and software architecture',
      'Participated in coding competitions and tech events',
      'Earned multiple professional certifications',
      'Maintained strong academic performance while freelancing',
    ],
    technologies: ['Java', 'Python', 'Algorithms', 'Data Structures', 'Software Engineering'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-container bg-background-secondary/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-center">Experience</h2>
          <p className="section-subheading text-center mx-auto mb-16">
            My professional journey and key accomplishments
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-transparent"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass p-6 rounded-xl hover:shadow-card-hover transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-sm text-foreground-tertiary mb-4">{exp.period}</p>
                    
                    <p className="text-foreground-secondary mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-foreground-secondary flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-background-tertiary text-foreground-tertiary text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
