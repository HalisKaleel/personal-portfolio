import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Send,Map,Phone } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/HalisKaleel' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/halis-kaleel/' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Halis
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Data Science & AI Enthusiast
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  className="p-2 bg-red-700 text-gray-100   rounded-full hover:bg-red-100 hover:text-gray-600 d transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-red-600 d transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5" />
                <span>mkmhalis@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5" />
                <span> 0779650063
                </span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Map className="w-5 h-5" />
                <span>Dharga Town, Kalutara</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to my newsletter for updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-700 text-white rounded-r-lg hover:bg-red-900 transition-colors duration-300"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-teal-500"
                >
                  Thank you for subscribing!
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Halis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
