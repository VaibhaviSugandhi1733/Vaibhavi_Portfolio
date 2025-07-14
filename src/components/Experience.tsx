import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion, easeInOut } from 'framer-motion';
import './Contact.css';

const Experience = () => {
  return (
    <section id="experience" className="py-20 terminal-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeInOut }}
          className="space-y-12"
        >
          <div className="terminal-window max-w-2xl mx-auto mb-8">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-green-400 text-sm font-mono">experience.sh</span>
            </div>
            <div className="p-6 text-left">
              <div className="command-line mb-4">
                <span className="text-green-400">$</span> cat ~/experience
              </div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                ## Experience
              </h2>
              <p className="text-green-200 font-mono">
                # My professional journey and hands-on roles
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeInOut }}
              className="w-full"
            >
              <div className="creative-contact-card group block border border-green-800 rounded-xl transition-all duration-300 bg-transparent
                 hover:shadow-2xl hover:scale-105 hover:border-teal-300
                 active:scale-100 active:shadow-lg
                 focus:outline-none focus:ring-2 focus:ring-teal-200">
                <div className="creative-contact-card-inner">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl group-hover:animate-bounce transition-all"><Briefcase /></span>
                    <h4 className="font-semibold transition-all text-teal-300 group-hover:text-teal-100 group-active:text-teal-200 font-mono">
                      DevOps Intern <span className="text-teal-400">@ LINUXWORLD PVT LTD</span>
                    </h4>
                  </div>
                  <div className="text-gray-400 text-sm mb-1 font-mono">January 2025 - Present</div>
                  <div className="text-gray-300 mb-2 font-mono">
                    Currently working as a DevOps Intern, where I'm learning to automate deployments using Jenkins and Docker. I'm gaining hands-on experience with AWS, Ansible, and Linux server management. Actively exploring CI/CD workflows, infrastructure as code, and real-world problem-solving. Continuously improving my skills while contributing to team automation tasks and documentation.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 