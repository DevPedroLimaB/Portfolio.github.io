'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-center">About Me</h2>
          <p className="section-subheading text-center mx-auto mb-12">
            Get to know who I am and what drives me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-foreground-secondary leading-relaxed">
              I'm a <strong className="text-foreground">Computer Science student</strong> with a passion for building digital solutions that matter. 
              My journey in tech started with curiosity and evolved into a professional commitment to excellence.
            </p>
            <p className="text-foreground-secondary leading-relaxed">
              Currently, I specialize in <strong className="text-foreground">full-stack development</strong>, focusing on creating 
              responsive, user-centric web applications. My recent work includes developing front-end solutions for industrial 
              clients, where I've honed my skills in crafting exceptional user experiences.
            </p>
            <p className="text-foreground-secondary leading-relaxed">
              Beyond development, I'm deeply invested in <strong className="text-foreground">automation</strong>, <strong className="text-foreground">cloud technologies</strong>, 
              and <strong className="text-foreground">cybersecurity</strong>. I believe in continuous learning and staying ahead of industry trends.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">What I Bring</h3>
            
            <div className="glass p-6 rounded-xl space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">🎯 Technical Excellence</h4>
                <p className="text-foreground-secondary text-sm">
                  Proficient in modern frameworks and best practices, delivering production-ready code with attention to detail.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-accent mb-2">💡 Problem Solving</h4>
                <p className="text-foreground-secondary text-sm">
                  Analytical mindset with a proven track record of solving complex technical challenges creatively and efficiently.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-success mb-2">🤝 Collaboration</h4>
                <p className="text-foreground-secondary text-sm">
                  Strong communicator who thrives in team environments, contributing to shared goals and learning from peers.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-warning mb-2">🚀 Growth Mindset</h4>
                <p className="text-foreground-secondary text-sm">
                  Constantly upskilling through certifications in cybersecurity, ethical hacking, OOP, Linux, and business English.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20">
                Freelancer
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/20">
                Open to Work
              </span>
              <span className="px-4 py-2 bg-success/10 text-success rounded-lg text-sm font-medium border border-success/20">
                Remote Ready
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
