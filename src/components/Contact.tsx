import React, { useState, useRef } from 'react';
import { Send, Mail, CheckCircle, AlertCircle, Copy, ExternalLink, Github } from 'lucide-react';
import { motion, easeInOut, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Character limits
  const limits = {
    name: 50,
    email: 100,
    subject: 100,
    message: 500
  };

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

  // Real-time validation
  const validateField = (name: string, value: string) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (value.length < 2) error = 'Name must be at least 2 characters';
        else if (value.length > limits.name) error = `Name must be ${limits.name} characters or less`;
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email';
        else if (value.length > limits.email) error = `Email must be ${limits.email} characters or less`;
        break;
      case 'subject':
        if (!value.trim()) error = 'Subject is required';
        else if (value.length < 5) error = 'Subject must be at least 5 characters';
        else if (value.length > limits.subject) error = `Subject must be ${limits.subject} characters or less`;
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        else if (value.length < 10) error = 'Message must be at least 10 characters';
        else if (value.length > limits.message) error = `Message must be ${limits.message} characters or less`;
        break;
    }
    
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: {[key: string]: string} = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Initializing EmailJS...');
      emailjs.init('TrHx9f3bpyA7t4hIQ');

      const result = await emailjs.sendForm(
        'service_k6ox4ob',
        'template_98fe27m',
        formRef.current!,
        'TrHx9f3bpyA7t4hIQ'
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const CONTACTS = [
    {
      label: 'Email',
      value: 'vaibhavi.sugandhi03@gmail.com',
      icon: Mail,
      href: 'mailto:vaibhavi.sugandhi03@gmail.com',
      copyable: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/vaibhavisugandhi',
      icon: ExternalLink,
      href: 'https://www.linkedin.com/in/vaibhavisugandhi',
    },
    {
      label: 'GitHub',
      value: 'github.com/VaibhaviSugandhi1733',
      icon: Github,
      href: 'https://github.com/VaibhaviSugandhi1733',
    },
  ];

  return (
    <section id="contact" className="py-20 terminal-bg">
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
                <span className="text-green-400 text-sm font-mono">contact.sh</span>
              </div>
              <div className="p-6 text-left">
                <div className="command-line mb-4">
                  <span className="text-green-400">$</span> cat /etc/contact
                </div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 font-mono">
                  ## Get In Touch
                </h2>
                <p className="text-green-200 font-mono">
                  # Ready to collaborate? Let's build something amazing together!
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3 
                className="text-2xl font-bold text-green-300 font-mono mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                # Send Message
              </motion.h3>
              <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)",
                  transition: { duration: 0.3 }
                }}
                className="terminal-window"
              >
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-green-400 text-sm font-mono">contact_form.py</span>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-green-300 font-mono mb-2">
                        name = input("Your name: ")
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur()}
                        required
                        className={`w-full px-4 py-3 bg-black/50 border rounded text-green-200 font-mono focus:outline-none focus:ring-2 transition-all duration-300 ${
                          focusedField === 'name' 
                            ? 'border-green-400 focus:ring-green-400/20' 
                            : errors.name 
                              ? 'border-red-500/50' 
                              : 'border-green-500/30'
                        }`}
                        placeholder="Enter your name"
                      />
                      <div className="flex justify-between items-center mt-1">
                        <AnimatePresence>
                          {errors.name && (
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              className="text-red-400 text-xs font-mono"
                            >
                              {errors.name}
                            </motion.span>
                          )}
                        </AnimatePresence>
                        <span className="text-green-400/60 text-xs font-mono">
                          {formData.name.length}/{limits.name}
                        </span>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-green-300 font-mono mb-2">
                        email = input("Your email: ")
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur()}
                        required
                        className={`w-full px-4 py-3 bg-black/50 border rounded text-green-200 font-mono focus:outline-none focus:ring-2 transition-all duration-300 ${
                          focusedField === 'email' 
                            ? 'border-green-400 focus:ring-green-400/20' 
                            : errors.email 
                              ? 'border-red-500/50' 
                              : 'border-green-500/30'
                        }`}
                        placeholder="Enter your email"
                      />
                      <div className="flex justify-between items-center mt-1">
                        <AnimatePresence>
                          {errors.email && (
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              className="text-red-400 text-xs font-mono"
                            >
                              {errors.email}
                            </motion.span>
                          )}
                        </AnimatePresence>
                        <span className="text-green-400/60 text-xs font-mono">
                          {formData.email.length}/{limits.email}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-green-300 font-mono mb-2">
                      subject = input("Subject: ")
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={() => handleBlur()}
                      required
                      className={`w-full px-4 py-3 bg-black/50 border rounded text-green-200 font-mono focus:outline-none focus:ring-2 transition-all duration-300 ${
                        focusedField === 'subject' 
                          ? 'border-green-400 focus:ring-green-400/20' 
                          : errors.subject 
                            ? 'border-red-500/50' 
                            : 'border-green-500/30'
                      }`}
                      placeholder="Enter subject"
                    />
                    <div className="flex justify-between items-center mt-1">
                      <AnimatePresence>
                        {errors.subject && (
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="text-red-400 text-xs font-mono"
                          >
                            {errors.subject}
                          </motion.span>
                        )}
                      </AnimatePresence>
                      <span className="text-green-400/60 text-xs font-mono">
                        {formData.subject.length}/{limits.subject}
                      </span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-green-300 font-mono mb-2">
                      message = input("Your message: ")
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur()}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 bg-black/50 border rounded text-green-200 font-mono focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                        focusedField === 'message' 
                          ? 'border-green-400 focus:ring-green-400/20' 
                          : errors.message 
                            ? 'border-red-500/50' 
                            : 'border-green-500/30'
                      }`}
                      placeholder="Enter your message"
                    />
                    <div className="flex justify-between items-center mt-1">
                      <AnimatePresence>
                        {errors.message && (
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="text-red-400 text-xs font-mono"
                          >
                            {errors.message}
                          </motion.span>
                        )}
                      </AnimatePresence>
                      <span className="text-green-400/60 text-xs font-mono">
                        {formData.message.length}/{limits.message}
                      </span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)",
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-400 text-black rounded font-semibold font-mono transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>send_message()</span>
                        </>
                      )}
                    </motion.button>
                  </motion.div>

                  <AnimatePresence>
                    {submitStatus !== 'idle' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`p-4 rounded font-mono text-sm flex items-center space-x-2 ${
                          submitStatus === 'success' 
                            ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                            : 'bg-red-500/20 border border-red-500/30 text-red-300'
                        }`}
                      >
                        {submitStatus === 'success' ? (
                          <CheckCircle size={16} />
                        ) : (
                          <AlertCircle size={16} />
                        )}
                        <span>{statusMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3 
                className="text-2xl font-bold text-green-300 font-mono mb-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                # Contact Info
              </motion.h3>
              
              {/* Responsive Contact Cards */}
              <div className="flex flex-col gap-4 md:gap-6 w-full">
                {CONTACTS.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    className="w-full"
                  >
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="creative-contact-card group block p-4 sm:p-6 border border-green-800 rounded-xl transition-all duration-300 h-full bg-black/80
                        hover:shadow-2xl hover:scale-105 hover:border-transparent hover:bg-black/90
                        active:scale-100 active:shadow-lg
                        focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <span className="inline-block">
                          <contact.icon className="transition-all text-green-400 group-hover:text-green-200 group-hover:animate-bounce group-active:text-green-300" size={24} />
                        </span>
                        {contact.copyable && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              copyToClipboard(contact.value, contact.label.toLowerCase());
                            }}
                            className="rounded transition-colors bg-black/50 hover:bg-black/70 active:bg-green-900"
                            style={{ padding: '0.375rem' }}
                          >
                            {copiedField === contact.label.toLowerCase() ? (
                              <CheckCircle size={16} className="text-green-400" />
                            ) : (
                              <Copy size={16} className="text-green-400" />
                            )}
                          </button>
                        )}
                      </div>
                      <h4 className="font-semibold transition-all mb-2 text-base text-green-300 group-hover:text-green-100 group-active:text-green-200">
                        {contact.label}
                      </h4>
                      <p className="transition-all break-all text-sm text-green-200 group-hover:text-green-100 group-active:text-green-50">
                        {contact.value}
                      </p>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;