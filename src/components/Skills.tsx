import React from 'react';
import { 
  Terminal, 
  Globe, 
  Code, 
  GitBranch, 
  Cloud, 
  Settings, 
  Workflow, 
  Container,
  Cpu,
  Database
} from 'lucide-react';
import { motion, easeInOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      category: "OS",
      icon: <Terminal className="text-green-400" size={24} />,
      skills: [
        { name: "Linux", level: 85, command: "uname -a" }
      ]
    },
    {
      category: "Languages",
      icon: <Code className="text-green-300" size={24} />,
      skills: [
        { name: "Python", level: 80, command: "python3 --version" },
        { name: "Bash", level: 75, command: "bash --version" }
      ]
    },
    {
      category: "Version Control",
      icon: <GitBranch className="text-green-400" size={24} />,
      skills: [
        { name: "Git", level: 85, command: "git status" },
        { name: "GitHub", level: 80, command: "gh repo list" }
      ]
    },
    {
      category: "Cloud",
      icon: <Cloud className="text-green-300" size={24} />,
      skills: [
        { name: "AWS", level: 70, command: "aws s3 ls" }
      ]
    },
    {
      category: "Config Mgmt",
      icon: <Settings className="text-green-500" size={24} />,
      skills: [
        { name: "Ansible", level: 75, command: "ansible-playbook deploy.yml" }
      ]
    },
    {
      category: "Containerization",
      icon: <Container className="text-green-400" size={24} />,
      skills: [
        { name: "Docker", level: 80, command: "docker ps" },
        { name: "Kubernetes", level: 65, command: "kubectl get pods" }
      ]
    },
    {
      category: "CI/CD",
      icon: <Workflow className="text-green-300" size={24} />,
      skills: [
        { name: "Jenkins", level: 70, command: "jenkins-cli build" },
        { name: "GitHub Actions", level: 75, command: "gh workflow run" }
      ]
    }
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: easeInOut,
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="py-20 terminal-bg">
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
                <span className="text-green-400 text-sm font-mono">skills.sh</span>
              </div>
              <div className="p-6 text-left">
                <div className="command-line mb-4">
                  <span className="text-green-400">$</span> cat /etc/skills
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                  ## Technical Skills
                </h2>
                <p className="text-green-200 font-mono">
                  # Proficiency levels across various technologies and tools
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.08, 
                  y: -15,
                  boxShadow: "0 0 40px rgba(34, 197, 94, 0.6)",
                  transition: { duration: 0.4, ease: easeInOut }
                }}
                whileTap={{ scale: 0.98 }}
                className="skill-card terminal-window group cursor-pointer"
              >
                <div className="terminal-header group-hover:bg-gradient-to-r group-hover:from-green-500/20 group-hover:to-green-400/20 transition-all duration-300">
                  <div className="terminal-dot red group-hover:animate-pulse"></div>
                  <div className="terminal-dot yellow group-hover:animate-pulse"></div>
                  <div className="terminal-dot green group-hover:animate-pulse"></div>
                  <span className="text-green-400 text-sm font-mono group-hover:text-green-300 transition-colors duration-300">
                    {category.category.toLowerCase()}
                  </span>
                </div>
                <div className="p-6 space-y-6 group-hover:bg-black/30 transition-all duration-300">
                  <motion.div 
                    className="flex items-center space-x-3 skill-header"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                      className="skill-icon-container"
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-green-300 font-mono group-hover:text-green-200 transition-colors duration-300">
                      {category.category}
                    </h3>
                  </motion.div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + skillIndex * 0.1, duration: 0.6 }}
                        className="space-y-2 skill-item group/item"
                        whileHover={{ 
                          x: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-green-200 font-mono group-hover/item:text-green-100 transition-colors duration-200">
                            {skill.name}
                          </span>
                          <motion.span 
                            className="text-xs text-green-400 font-mono skill-percentage"
                            whileHover={{ 
                              scale: 1.2,
                              color: "#4ade80",
                              transition: { duration: 0.2 }
                            }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden skill-progress-container">
                          <motion.div
                            custom={skill.level}
                            variants={progressVariants}
                            className="progress-bar h-full rounded-full skill-progress-bar"
                            style={{ '--progress': `${skill.level}%` } as React.CSSProperties}
                            whileHover={{ 
                              scaleY: 1.5,
                              transition: { duration: 0.3 }
                            }}
                          />
                        </div>
                        <motion.div 
                          className="bg-black/50 p-2 rounded text-xs font-mono skill-command group-hover/item:bg-black/70 transition-all duration-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 + skillIndex * 0.1 }}
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 0 10px rgba(34, 197, 94, 0.3)",
                            transition: { duration: 0.2 }
                          }}
                        >
                          <span className="text-green-400 group-hover/item:text-green-300 transition-colors duration-200">$</span> {skill.command}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
                <span className="text-green-400 text-sm font-mono">skill_summary.md</span>
              </div>
              <div className="p-6">
                <motion.p 
                  className="text-green-200 font-mono text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  Continuously expanding my skill set through hands-on projects, 
                  certifications, and real-world applications. Always eager to learn 
                  new technologies and methodologies in the ever-evolving DevOps landscape.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;