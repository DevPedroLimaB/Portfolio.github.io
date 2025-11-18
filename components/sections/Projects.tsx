'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  highlights: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'RVL Grupo - Maritime Solutions Platform',
    description: 'Enterprise-grade web application for a maritime surface treatment and naval painting company. Led front-end development with focus on responsive design and optimal user experience.',
    longDescription: 'Architected and implemented a comprehensive digital solution for RVL Grupo, specializing in maritime services. The platform features an intuitive service showcase, dynamic project gallery, and client portal. Emphasized mobile-first responsive design and accessibility standards.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'Spring Boot', 'Responsive Design', 'UX/UI'],
    category: 'fullstack',
    highlights: [
      'Delivered pixel-perfect responsive design across all devices',
      'Integrated Spring Boot backend for robust data management',
      'Implemented modern UI patterns for enhanced user engagement',
    ],
    image: '/images/projeto5.png',
    // github: 'https://github.com/DevPedroLimaB/rvl-grupo',
    // demo: 'https://rvl-grupo.com',
  },
  {
    id: 2,
    title: 'Cri.ative - Hackathon Winner',
    description: 'Award-winning creative collaboration platform developed during a competitive hackathon. Enables teams to brainstorm, prototype, and manage creative projects efficiently.',
    longDescription: 'Built under pressure at a 48-hour hackathon, Cri.ative emerged as the winning solution for fostering creative collaboration. Features include real-time brainstorming boards, project management tools, and multimedia content integration. Judges praised the intuitive UX and technical execution.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Web APIs', 'Collaborative Tools', 'Hackathon'],
    category: 'frontend',
    highlights: [
      '🏆 1st Place Hackathon Winner',
      'Developed complete MVP in 48 hours',
      'Implemented real-time collaboration features',
    ],
    image: '/images/projeto4.png',
    // github: 'https://github.com/DevPedroLimaB/criative',
    // demo: 'https://criative.vercel.app',
  },
  {
    id: 3,
    title: 'WhatsApp Business Automation Suite',
    description: 'Intelligent chatbot infrastructure for WhatsApp Business automation. Handles customer inquiries, lead qualification, and support ticket routing with natural conversation flows.',
    longDescription: 'Enterprise-grade automation solution deployed on AWS infrastructure using Docker containerization. The chatbot leverages NLP capabilities to understand customer intent and provide contextual responses. Integrates with CRM systems for seamless lead management.',
    tags: ['Docker', 'JavaScript', 'Python', 'AWS', 'NLP', 'Automation', 'Microservices'],
    category: 'automation',
    highlights: [
      'Deployed on AWS with high availability architecture',
      'Reduced response time by 80% through intelligent automation',
      'Scalable microservices architecture using Docker',
    ],
    image: '/images/cnvrs.png',
    // github: 'https://github.com/DevPedroLimaB/whatsapp-bot',
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'fullstack', name: 'Full-Stack' },
  { id: 'frontend', name: 'Front-End' },
  { id: 'automation', name: 'Automation' },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-container" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-center">Featured Projects</h2>
          <p className="section-subheading text-center mx-auto mb-12">
            Showcasing my best work in web development, automation, and digital innovation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-glow'
                  : 'bg-background-tertiary text-foreground-secondary hover:bg-background-secondary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-background-tertiary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                {/* Placeholder - replace with actual images */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <span className="text-4xl">🚀</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground-secondary text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-foreground-tertiary flex items-start gap-2">
                      <span className="text-primary mt-0.5">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 bg-background-tertiary text-foreground-tertiary text-xs rounded">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-foreground-secondary mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a href="#contact" className="btn-primary">
            Let's Build Something Amazing
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Required import for useState
import { useState } from 'react';
