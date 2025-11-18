'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/DevPedroLimaB',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pedrolimasecedev',
    icon: FaLinkedin,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/devpedrolima/',
    icon: FaInstagram,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-foreground-tertiary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Pedro Lima</h3>
            <p className="text-foreground-secondary">
              Full-Stack Developer crafting digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-foreground-secondary hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="block text-foreground-secondary hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#experience" className="block text-foreground-secondary hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#contact" className="block text-foreground-secondary hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-background-tertiary hover:bg-primary flex items-center justify-center transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-foreground-secondary group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-foreground-tertiary/10 text-center text-foreground-secondary">
          <p>© {currentYear} Pedro Lima. All rights reserved.</p>
          <p className="text-sm mt-2">
            Built with <span className="text-primary">Next.js</span>, <span className="text-accent">Tailwind CSS</span>, and passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
