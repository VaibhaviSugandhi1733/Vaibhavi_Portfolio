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
      title: "Wanderlust DevOps CI/CD Pipeline",
      description: "A comprehensive DevSecOps automated CI/CD pipeline using Jenkins, SonarQube, OWASP Dependency-Check, and Trivy for security scanning. Features automated testing, Docker containerization, and deployment with quality gates.",
      github: "https://github.com/VaibhaviSugandhi1733/wanderlust_devops.git",
      technologies: ["Jenkins", "SonarQube", "Docker", "Trivy", "OWASP Dependency-Check", "DevSecOps", "CI/CD"]
    },
    {
      title: "Multi-Tier Infrastructure: Ansible, K8s, LAMP Stack",
      description: "A comprehensive multi-tier infrastructure setup using Ansible for automation, Kubernetes for orchestration, and LAMP stack for web applications. Implements scalable, containerized deployment with automated provisioning.",
      github: "https://github.com/VaibhaviSugandhi1733/VaibhaviSugandhi1733-Multi-Tier-Infrastucture-Ansible-K8-LAMP-Stack.git",
      technologies: ["Ansible", "Kubernetes", "Docker", "LAMP Stack", "Linux", "Apache", "MySQL", "PHP", "Infrastructure as Code"]
    },
    {
      title: "DevOps Workflow",
      description: "A streamlined DevOps workflow implementation showcasing best practices for continuous integration, deployment automation, and infrastructure management. Features automated testing, deployment pipelines, and monitoring integration.",
      github: "https://github.com/VaibhaviSugandhi1733/devops-workflow.git",
      technologies: ["CI/CD", "Git", "Docker", "Jenkins", "Monitoring", "Automation", "DevOps", "Infrastructure Management"]
    },
    {
      title: "CI/CD with Jenkins, Ansible, Docker",
      description: "A robust CI/CD pipeline integrating Jenkins for automation, Ansible for configuration management, and Docker for containerization. Enables automated build, test, and deployment workflows for modern applications.",
      github: "https://github.com/VaibhaviSugandhi1733/CICD-Jenkins-ansible-docker.git",
      technologies: ["Jenkins", "Ansible", "Docker", "CI/CD", "Automation", "Configuration Management", "DevOps"]
    },
    {
      title: "Flask App Deployment",
      description: "A CI/CD pipeline for deploying a Flask web application using Jenkins and Docker. Automates the process from code commit to containerized deployment, ensuring rapid and reliable releases.",
      github: "https://github.com/VaibhaviSugandhi1733/Flask_app_deployment.git",
      technologies: ["Flask", "Python", "Jenkins", "Docker", "CI/CD", "Web Application", "Automation"]
    },
    {
      title: "Containerized Microservice",
      description: "A microservice application designed and deployed using Docker containers. Demonstrates best practices in containerization, service isolation, and scalable deployment for cloud-native environments.",
      github: "https://github.com/VaibhaviSugandhi1733/containerized-microservice.git",
      technologies: ["Microservices", "Docker", "Containerization", "Cloud-Native", "DevOps", "Service Isolation"]
    },
    {
      title: "Ansible Cluster Setup",
      description: "A comprehensive Ansible cluster configuration and setup automation. Implements automated provisioning, configuration management, and orchestration for multi-node environments with centralized control.",
      github: "https://github.com/VaibhaviSugandhi1733/AnsibleClusterSetup.git",
      technologies: ["Ansible", "Cluster Management", "Configuration Management", "Automation", "SSH", "Infrastructure as Code"]
    },
    {
      title: "File Management System",
      description: "A Python-based file management system for organizing and managing local files efficiently. Features automated file sorting, categorization, and batch operations with a command-line interface.",
      github: "https://github.com/VaibhaviSugandhi1733/File-Management.git",
      technologies: ["Python", "File System", "CLI", "Automation", "File Organization", "Batch Processing"]
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
                      <Code className="text-green-400" size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-green-300 font-mono">
                      {project.title}
                    </h3>
                  </motion.div>

                  {project.description && (
                    <motion.p 
                      className="text-green-200 leading-relaxed font-mono text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    >
                      {project.description}
                    </motion.p>
                  )}

                  {project.technologies && (
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
                  )}

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