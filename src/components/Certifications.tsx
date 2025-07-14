import React from 'react';
import { Award, ExternalLink, Shield, CheckCircle } from 'lucide-react';
import { motion, easeInOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      link: "https://www.credly.com/go/vrNycHa0",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: "☁️",
      status: "verified",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology",
      command: "aws configure list"
    }
    // Add more certificates here as needed
  ];

  const plannedCerts = [
    { name: "CKA", status: "in_progress", command: "kubectl version --client" },
    { name: "AWS Solutions Architect", status: "planned", command: "aws sts get-caller-identity" },
    { name: "Docker Certified Associate", status: "planned", command: "docker --version" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut
      }
    }
  };

  const statusVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeInOut
      }
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="text-green-400" size={16} />;
      case "in_progress":
        return <Shield className="text-yellow-400" size={16} />;
      case "planned":
        return <Award className="text-blue-400" size={16} />;
      default:
        return <Award className="text-gray-400" size={16} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "text-green-400";
      case "in_progress":
        return "text-yellow-400";
      case "planned":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section id="certifications" className="py-20 terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="terminal-window max-w-3xl mx-auto mb-8">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-green-400 text-sm font-mono">certifications.sh</span>
              </div>
              <div className="p-6 text-left">
                <div className="command-line mb-4">
                  <span className="text-green-400">$</span> ls -la ~/certifications/
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                  ## Certifications
                </h2>
                <p className="text-green-200 font-mono">
                  # Industry-recognized credentials and ongoing learning journey
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Current Certifications */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-black/90 rounded-2xl p-8 shadow-lg space-y-6">
                <motion.h3 
                  className="text-2xl font-bold text-green-300 font-mono mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  # Achieved Certifications
                </motion.h3>
                {certifications.map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="creative-contact-card group block mb-8 border border-green-800 rounded-xl transition-all duration-300 bg-transparent
                      hover:shadow-2xl hover:scale-105 hover:border-teal-300
                      active:scale-100 active:shadow-lg
                      focus:outline-none focus:ring-2 focus:ring-teal-200"
                  >
                    <div className="creative-contact-card-inner">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl group-hover:animate-bounce transition-all">{cert.icon}</span>
                        <h4 className="font-semibold transition-all text-teal-300 group-hover:text-teal-100 group-active:text-teal-200 font-mono">
                          {cert.title}
                        </h4>
                        {cert.status === "verified" && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-green-700 text-white rounded-full font-mono">Verified</span>
                        )}
                      </div>
                      <div className="text-gray-400 text-sm mb-1 font-mono">{cert.issuer} &bull; {cert.date}</div>
                      <div className="text-gray-300 mb-2 font-mono">{cert.description}</div>
                      <div className="text-xs text-green-400 bg-black/60 px-2 py-1 rounded font-mono w-fit">{cert.command}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Planned Certifications */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3 
                className="text-2xl font-bold text-green-300 font-mono mb-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                # Learning Pipeline
              </motion.h3>
              <div className="space-y-4">
                {plannedCerts.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 5,
                      boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                    className="terminal-window"
                  >
                    <div className="terminal-header">
                      <div className="terminal-dot red"></div>
                      <div className="terminal-dot yellow"></div>
                      <div className="terminal-dot green"></div>
                      <span className="text-green-400 text-sm font-mono">planned_{index + 1}.md</span>
                    </div>
                    <div className="p-4 space-y-3">
                      <motion.div 
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                      >
                        <h4 className="font-semibold text-green-300 font-mono">
                          {cert.name}
                        </h4>
                        <motion.div
                          variants={statusVariants}
                          className="flex items-center space-x-2"
                        >
                          {getStatusIcon(cert.status)}
                          <span className={`text-xs font-mono ${getStatusColor(cert.status)}`}>
                            {cert.status.replace('_', ' ')}
                          </span>
                        </motion.div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-black/50 p-2 rounded text-xs font-mono"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                      >
                        <span className="text-green-400">$</span> {cert.command}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.div
              className="terminal-window max-w-2xl mx-auto"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-green-400 text-sm font-mono">learning_roadmap.md</span>
              </div>
              <div className="p-6">
                <motion.p 
                  className="text-green-200 font-mono text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  Committed to continuous professional development through industry-recognized 
                  certifications. Each certification represents a milestone in my journey to 
                  master cloud technologies and DevOps practices.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;