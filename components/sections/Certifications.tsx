'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCertificate, FaShieldAlt, FaCode, FaLinux, FaLanguage } from 'react-icons/fa';

const certifications = [
  {
    id: 1,
    title: 'Cybersecurity Fundamentals',
    issuer: 'Professional Certification',
    icon: FaShieldAlt,
    color: '#EF4444',
    skills: ['Network Security', 'Threat Analysis', 'Security Best Practices'],
  },
  {
    id: 2,
    title: 'Ethical Hacking',
    issuer: 'Professional Certification',
    icon: FaShieldAlt,
    color: '#F59E0B',
    skills: ['Penetration Testing', 'Vulnerability Assessment', 'Security Auditing'],
  },
  {
    id: 3,
    title: 'Object-Oriented Programming',
    issuer: 'Professional Certification',
    icon: FaCode,
    color: '#3B82F6',
    skills: ['OOP Principles', 'Design Patterns', 'SOLID Principles'],
  },
  {
    id: 4,
    title: 'Linux Essentials',
    issuer: 'Professional Certification',
    icon: FaLinux,
    color: '#10B981',
    skills: ['Command Line', 'System Administration', 'Shell Scripting'],
  },
  {
    id: 5,
    title: 'Business English',
    issuer: 'Language Certification',
    icon: FaLanguage,
    color: '#8B5CF6',
    skills: ['Professional Communication', 'Technical Writing', 'Business Vocabulary'],
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-container" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-center">Certifications</h2>
          <p className="section-subheading text-center mx-auto mb-16">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-xl card-hover"
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${cert.color}20` }}
              >
                <cert.icon className="w-8 h-8" style={{ color: cert.color }} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
              <p className="text-sm text-foreground-tertiary mb-4">{cert.issuer}</p>

              {/* Skills */}
              <div className="space-y-1">
                {cert.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-sm text-foreground-secondary">
                    <span style={{ color: cert.color }}>●</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              {/* Verified Badge */}
              <div className="mt-4 pt-4 border-t border-foreground-tertiary/10">
                <div className="flex items-center gap-2 text-xs text-success">
                  <FaCertificate />
                  <span>Verified Certification</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground-secondary mb-4">
            Committed to staying current with industry trends and emerging technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20">
              Continuous Learner
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/20">
              Tech Enthusiast
            </span>
            <span className="px-4 py-2 bg-success/10 text-success rounded-lg text-sm font-medium border border-success/20">
              Growth Mindset
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
