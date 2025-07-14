import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Download, ArrowRight, Server, Cloud, Code, GitBranch, Terminal, Cpu } from 'lucide-react';
import { motion, easeInOut } from 'framer-motion';

// Alternative: Import photo as asset (uncomment and add your photo to src/assets/)
// import profilePhoto from '../assets/profile-photo.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'DevOps Enthusiast | Automating the Future, One Pipeline at a Time';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Parallax effect for floating icons
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setParallax({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut
      }
    }
  };

  return (
    <section id="hero" ref={heroRef} className="min-h-screen terminal-bg flex items-center justify-center relative pt-16 overflow-hidden">
      {/* Floating Background Icons with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: `translate3d(${parallax.x * 20}px, ${parallax.y * 10}px, 0)` }}
          className="absolute top-20 left-10 text-green-400 opacity-20"
        >
          <Server size={40} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ transform: `translate3d(${parallax.x * -15}px, ${parallax.y * 15}px, 0)` }}
          className="absolute top-40 right-20 text-green-300 opacity-20"
        >
          <Cloud size={50} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ transform: `translate3d(${parallax.x * 10}px, ${parallax.y * -10}px, 0)` }}
          className="absolute bottom-40 left-20 text-green-500 opacity-20"
        >
          <Code size={35} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -35, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ transform: `translate3d(${parallax.x * -20}px, ${parallax.y * -5}px, 0)` }}
          className="absolute bottom-20 right-10 text-green-400 opacity-20"
        >
          <GitBranch size={45} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          style={{ transform: `translate3d(${parallax.x * 5}px, ${parallax.y * 20}px, 0)` }}
          className="absolute top-60 left-1/2 text-green-300 opacity-20"
        >
          <Terminal size={30} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -40, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          style={{ transform: `translate3d(${parallax.x * -10}px, ${parallax.y * 25}px, 0)` }}
          className="absolute bottom-60 right-1/3 text-green-400 opacity-20"
        >
          <Cpu size={38} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Terminal Window */}
          <motion.div variants={itemVariants} className="terminal-window max-w-4xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-green-400 text-sm font-mono">vaibhavi@devops:~$</span>
            </div>
            <div className="p-8 space-y-6">
              <div className="text-left space-y-6">
                {/* Profile Photo Section */}
                <motion.div 
                  className="flex justify-center mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: easeInOut }}
                >
                  <div className="profile-photo-container relative">
                    <motion.div
                      className="profile-photo-frame"
                      whileHover={{ 
                        scale: 1.05, 
                        rotate: 2,
                        boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="profile-photo-bg">
                        <div className="profile-photo-inner">
                          {/* Profile Photo - Replace with your actual image */}
                          <img 
                            src="/profile-photo.jpg" 
                            alt="Vaibhavi Sugandhi" 
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const placeholder = target.parentElement?.querySelector('.profile-photo-placeholder') as HTMLElement;
                              if (placeholder) placeholder.style.display = 'flex';
                            }}
                          />
                          
                          {/* Fallback placeholder */}
                          <div className="profile-photo-placeholder" style={{ display: 'none' }}>
                            <Terminal size={60} className="text-green-400" />
                            <span className="text-green-300 font-mono text-sm mt-2">Profile Photo</span>
                          </div>
                        </div>
                      </div>
                      <div className="profile-photo-glow"></div>
                    </motion.div>
                  </div>
                </motion.div>

                <div className="command-line">
                  <span className="text-green-400">$</span> whoami
                </div>
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold text-green-300 font-mono hero-glow"
                  data-text="Vaibhavi Sugandhi"
                >
                  Vaibhavi Sugandhi
                </motion.h1>
                
                <div className="command-line mt-6">
                  <span className="text-green-400">$</span> cat /etc/profile
                </div>
                <motion.div className="h-16 md:h-20 flex items-start justify-start">
                  <h2 className="text-lg md:text-xl font-medium text-green-200 font-mono text-left">
                    <span className="typing-cursor strong-typing">{displayText}</span>
                  </h2>
                </motion.div>

                <div className="command-line mt-6">
                  <span className="text-green-400">$</span> echo $MISSION
                </div>
                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-lg text-green-100 font-mono leading-relaxed text-left"
                >
                  "Passionate about cloud infrastructure, automation, and building scalable systems.<br/>
                  I love turning complex problems into elegant solutions through code and CI/CD."
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-400 text-black rounded font-semibold text-lg neon-border font-mono transition-all duration-300 flex items-center space-x-2"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>./view_projects.sh</span>
              <ArrowRight size={20} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 terminal-glass text-green-300 rounded font-semibold text-lg neon-border font-mono transition-all duration-300 flex items-center space-x-2"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download size={20} />
              <span>wget resume.pdf</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center"
            >
              <ChevronDown size={32} className="text-green-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;