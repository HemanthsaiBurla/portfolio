import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, User, Briefcase, Code, Star, Award, AlignCenterVertical as Certificate, Twitter, Instagram, Youtube, Trophy, Image, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold"
            >
              JD
            </motion.span>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hidden md:flex space-x-8"
            >
              <button onClick={() => scrollToSection('home')} className="hover:text-gray-300 transition-colors">Home</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-300 transition-colors">Contact</button>
              <button onClick={() => scrollToSection('certifications')} className="hover:text-gray-300 transition-colors">Certifications</button>
              <button onClick={() => scrollToSection('achievements')} className="hover:text-gray-300 transition-colors">Achievements</button>
              <a href="/resume.pdf" target="_blank" className="hover:text-gray-300 transition-colors">Resume</a>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-gray-300 transition-colors">Gallery</button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? 'auto' : 0
            }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Home</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Contact</button>
              <button onClick={() => scrollToSection('certifications')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Certifications</button>
              <button onClick={() => scrollToSection('achievements')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Achievements</button>
              <a href="/resume.pdf" target="_blank" className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Resume</a>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Gallery</button>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            John Doe
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer & UI/UX Designer
          </motion.p>
        </motion.div>

        {/* Social Media Links - Positioned at 70% from top */}
        <motion.div 
          className="absolute left-0 right-0 mx-auto"
          style={{ top: '70%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Twitter size={20} />
              <span>Twitter</span>
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Youtube size={20} />
              <span>YouTube</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-8">
            <User className="text-gray-300 mr-4" size={32} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <p className="text-lg leading-relaxed mb-8">
            I'm a passionate developer with a love for creating beautiful, functional websites and applications. 
            With expertise in modern web technologies and a keen eye for design, I bring ideas to life through code.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Code className="text-gray-300 mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p>React, Node.js, TypeScript, Python</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Star className="text-gray-300 mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p>UI/UX, Figma, Adobe XD</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Briefcase className="text-gray-300 mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p>5+ Years Professional Experience</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 md:px-20 bg-black/20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-12">
            <Image className="text-gray-300 mr-4" size={32} />
            <h2 className="text-3xl font-bold">Gallery</h2>
          </div>
          
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={galleryImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-12">
            <Trophy className="text-gray-300 mr-4" size={32} />
            <h2 className="text-3xl font-bold">Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <Award className="text-gray-300 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Best Developer Award 2023</h3>
              <p className="text-gray-300">Recognized for outstanding contributions to open-source projects and innovative solutions.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <Award className="text-gray-300 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Innovation Excellence</h3>
              <p className="text-gray-300">Led the development of a revolutionary AI-powered web application.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <Award className="text-gray-300 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Community Leader</h3>
              <p className="text-gray-300">Built and managed a tech community of over 10,000 developers.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <Award className="text-gray-300 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Hackathon Winner</h3>
              <p className="text-gray-300">First place in International Web Dev Hackathon 2023.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 md:px-20 bg-black/20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-12">
            <Certificate className="text-gray-300 mr-4" size={32} />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                title: "AWS Certified Solutions Architect",
                org: "Amazon Web Services",
                date: "2023",
                credentialId: "AWS-123456"
              },
              {
                title: "Google Cloud Professional Developer",
                org: "Google Cloud",
                date: "2023",
                credentialId: "GCP-789012"
              },
              {
                title: "Meta Frontend Developer",
                org: "Meta",
                date: "2022",
                credentialId: "MFE-345678"
              },
              {
                title: "Advanced React & GraphQL",
                org: "Wes Bos",
                date: "2022",
                credentialId: "ARG-901234"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-gray-300">{cert.org}</p>
                    <p className="text-sm text-gray-400 mt-2">Credential ID: {cert.credentialId}</p>
                  </div>
                  <span className="text-sm text-gray-400">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Mail className="text-gray-300 mx-auto mb-4" size={32} />
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <motion.a
            href="mailto:contact@example.com"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400">
        <p>© 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;