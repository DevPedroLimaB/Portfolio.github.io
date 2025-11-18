'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-400"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              👋 Welcome to my digital space
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm <span className="gradient-text">Pedro Lima</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Full-Stack Developer & Tech Innovator building exceptional digital experiences with cutting-edge technologies
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-foreground-tertiary mb-12 max-w-2xl mx-auto"
          >
            Computer Science student specializing in modern web development, cloud solutions, and intelligent automation. 
            Passionate about creating scalable applications that make a difference.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-6 mb-16"
          >
            <a
              href="https://github.com/DevPedroLimaB"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary transition-all duration-300 group"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 text-foreground-secondary group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/pedrolimasecedev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-foreground-secondary group-hover:text-white transition-colors" />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-foreground-tertiary">Scroll to explore</span>
            <HiArrowDown className="w-6 h-6 text-foreground-tertiary animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
