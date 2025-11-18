'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/DevPedroLimaB',
      icon: FaGithub,
      color: '#333',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pedrolimasecedev',
      icon: FaLinkedin,
      color: '#0A66C2',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/devpedrolima/',
      icon: FaInstagram,
      color: '#E4405F',
    },
  ];

  return (
    <section id="contact" className="section-container" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-center">Let's Work Together</h2>
          <p className="section-subheading text-center mx-auto mb-16">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-foreground-secondary leading-relaxed">
                I'm currently available for freelance work, open-source collaboration, and full-time opportunities. 
                Whether you have a question, a project proposal, or just want to say hi, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="glass p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground-tertiary">Email</p>
                  <a href="mailto:pedrolimab26@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    pedrolimab26@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <FaLinkedin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground-tertiary">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/pedrolimasecedev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    /in/pedrolimasecedev
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-foreground-tertiary mb-4">Connect on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center hover:shadow-glow transition-all group"
                    aria-label={social.name}
                    style={{ borderColor: `${social.color}40` }}
                  >
                    <social.icon className="w-5 h-5 text-foreground-secondary group-hover:text-foreground transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass p-6 rounded-xl border-l-4 border-success">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-success animate-pulse"></span>
                <span className="font-semibold text-success">Available for Work</span>
              </div>
              <p className="text-sm text-foreground-secondary">
                Currently accepting new projects and opportunities. Let's create something amazing together!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-tertiary rounded-lg border border-foreground-tertiary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address <span className="text-error">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-tertiary rounded-lg border border-foreground-tertiary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background-tertiary rounded-lg border border-foreground-tertiary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="+55 (00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message <span className="text-error">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background-tertiary rounded-lg border border-foreground-tertiary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : 'Send Message'}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-success text-sm"
                >
                  Thank you! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
