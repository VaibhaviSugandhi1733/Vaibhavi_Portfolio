import { Github, ExternalLink, Code, Container, FileText, Terminal } from 'lucide-react';
import { motion, easeInOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Flask Docker Deployment with Jenkins CI/CD (Freestyle Job)",
      description: "A CI/CD pipeline using Jenkins Freestyle Job to build, test, and deploy a Flask application in Docker containers. Automates the process from code commit to deployment.",
      icon: <Terminal className="text-green-400" size={32} />,
      github: "https://github.com/VaibhaviSugandhi1733/Flask_app_deployment.git",
      technologies: ["Flask", "Docker", "Jenkins", "CI/CD", "Python"],
      features: [
        "Automated build and deployment",
        "Jenkins Freestyle Job integration",
        "Dockerized Flask app",
        "Continuous Integration and Delivery",
        "Easy rollback and redeployment"
      ],
      commands: [
        "git clone https://github.com/VaibhaviSugandhi1733/Flask_app_deployment.git",
        "docker build -t flask-app .",
        "docker run -p 5000:5000 flask-app"
      ]
    },
    {
      title: "Custom Ansible Cluster in Docker + Kubernetes",
      description: "Manual setup of Ansible master and managed nodes using Red Hat-based Docker containers deployed in Kubernetes Pods with SSH configuration.",
      icon: <Container className="text-green-300" size={32} />,
      github: "https://github.com/VaibhaviSugandhi1733/AnsibleClusterSetup.git",
      technologies: ["Ansible", "Docker", "Kubernetes", "SSH", "Red Hat"],
      features: [
        "Custom Ansible cluster configuration",
        "Kubernetes Pod deployment",
        "SSH key management", 
        "Red Hat container images",
        "Automated provisioning"
      ],
      commands: [
        "kubectl apply -f ansible-cluster.yaml",
        "ansible-playbook -i inventory site.yml",
        "ssh ansible-master 'ansible all -m ping'"
      ]
    },
    {
      title: "Web Scraper using Python & Docker",
      description: "A scalable web scraping solution built with Python, featuring CSV export capabilities, robust error handling, and containerized deployment with Docker.",
      icon: <Code className="text-green-400" size={32} />,
      github: "https://github.com/VaibhaviSugandhi1733/Web-Scrapper-project.git",
      technologies: ["Python", "Docker", "BeautifulSoup", "Requests", "CSV"],
      features: [
        "Automated web data extraction",
        "CSV export functionality", 
        "Error handling and logging",
        "Containerized deployment",
        "Scalable scraping logic"
      ],
      commands: [
        "docker build -t web-scraper .",
        "docker run -v $(pwd)/data:/app/data web-scraper",
        "python scraper.py --output data.csv"
      ]
    },
    {
      title: "File Management using Python",
      description: "A command-line interface tool for organizing and managing local files efficiently with various sorting and categorization options.",
      icon: <FileText className="text-green-500" size={32} />,
      github: "https://github.com/VaibhaviSugandhi1733/File-Management.git",
      technologies: ["Python", "CLI", "OS Module", "File System"],
      features: [
        "File organization automation",
        "Multiple sorting options",
        "Command-line interface",
        "Batch file operations",
        "Safe file handling"
      ],
      commands: [
        "python file_manager.py --organize ~/Downloads",
        "python file_manager.py --sort-by date",
        "./file_manager.py --help"
      ]
    },
    {
      title: "Chromakey – Simple Green Screen Web App",
      description: "A web application that allows users to apply chromakey (green screen) effects to images or videos directly in the browser. Built for easy background removal and creative compositing.",
      icon: <Code className='text-green-400' size={32} />,
      github: "https://github.com/VaibhaviSugandhi1733/chromakey.git",
      technologies: ["JavaScript", "HTML5", "Canvas", "Web App", "Chromakey"],
      features: [
        "Real-time green screen effect",
        "Easy image/video upload",
        "Adjustable chromakey tolerance",
        "Download composited result",
        "No server required (client-side only)"
      ],
      commands: [
        "git clone https://github.com/VaibhaviSugandhi1733/chromakey.git",
        "Open index.html in your browser"
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

  return (
    <section id="projects" className="py-20 terminal-bg">
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
                <span className="text-green-400 text-sm font-mono">projects.sh</span>
              </div>
              <div className="p-6 text-left">
                <div className="command-line mb-4">
                  <span className="text-green-400">$</span> ls -la ~/projects/
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                  ## Featured Projects
                </h2>
                <p className="text-green-200 font-mono">
                  # Showcase of DevOps automation and infrastructure projects
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)",
                  transition: { duration: 0.3 }
                }}
                className="project-card terminal-window"
              >
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-green-400 text-sm font-mono">project_{index + 1}.md</span>
                </div>
                <div className="p-6 space-y-6">
                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 rounded bg-black/50 neon-border">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-bold text-green-300 font-mono">
                      {project.title}
                    </h3>
                  </motion.div>

                  <motion.p 
                    className="text-green-200 leading-relaxed font-mono text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  >
                    <h4 className="font-semibold text-green-300 font-mono"># Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="text-sm text-green-200 flex items-center font-mono"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + featureIndex * 0.05, duration: 0.4 }}
                        >
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  >
                    <h4 className="font-semibold text-green-300 font-mono"># Usage:</h4>
                    <div className="bg-black/50 p-3 rounded text-xs font-mono space-y-1">
                      {project.commands.map((command, cmdIndex) => (
                        <motion.div 
                          key={cmdIndex} 
                          className="text-green-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.0 + cmdIndex * 0.1, duration: 0.4 }}
                        >
                          $ {command}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="tech-badge px-3 py-1 text-green-300 text-xs font-medium rounded font-mono"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-green-500/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-clone-btn group flex items-center justify-center space-x-2 text-green-300 hover:text-green-400 transition-all duration-300 font-mono text-sm px-4 py-3 rounded cursor-pointer relative overflow-hidden"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log('Opening GitHub link:', project.github);
                        window.open(project.github, '_blank', 'noopener,noreferrer');
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)",
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Github size={18} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="relative z-10 font-semibold">git clone</span>
                      <div className="absolute inset-0 border border-green-500/30 rounded group-hover:border-green-400/60 transition-colors duration-300"></div>
                    </motion.a>
                    
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-view-btn group flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500/20 to-green-400/20 hover:from-green-500/30 hover:to-green-400/30 text-green-300 hover:text-green-400 transition-all duration-300 font-mono text-sm px-4 py-3 rounded cursor-pointer relative overflow-hidden"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log('Opening GitHub link:', project.github);
                        window.open(project.github, '_blank', 'noopener,noreferrer');
                      }}
                      whileHover={{ 
                        scale: 1.03, 
                        y: -1,
                        boxShadow: "0 0 15px rgba(34, 197, 94, 0.4)",
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="font-semibold">View Code</span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants} 
            className="text-center"
          >
            <motion.a
              href="https://github.com/VaibhaviSugandhi1733"
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-btn group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-400 text-black rounded-lg font-semibold transition-all duration-300 font-mono relative overflow-hidden shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                console.log('Opening main GitHub profile');
                window.open('https://github.com/VaibhaviSugandhi1733', '_blank', 'noopener,noreferrer');
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Terminal size={22} className="relative z-10 group-hover:rotate-6 transition-transform duration-300" />
              <span className="relative z-10 font-bold">cd ~/github && ls -la</span>
              <ExternalLink size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 border-2 border-green-600/30 rounded-lg group-hover:border-green-600/60 transition-colors duration-300"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;