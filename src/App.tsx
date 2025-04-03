import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, User, Briefcase, Code, Star, Award, projects, AlignCenterVertical as Certificate, Twitter, Instagram, Youtube, Trophy, Image, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/SVSGOI.jpg?raw=true",
    "https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/BITSCLG.jpg?raw=true",
    "https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/JNTUHy.jpg?raw=true",
    "https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/SVSSHOWCASE.jpg?raw=true",
    "https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/BITSEXPLANATION.jpg?raw=true",
    "https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/Presentation_SVS.jpg?raw=true",
    "https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/NITWGL.jpg?raw=true",
    "https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/FriendsJIJNASA.jpg?raw=true",
    "https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/Presentation.jpg?raw=true",

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
              Hemanthsai Burla
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
              <button onClick={() => scrollToSection('projects')} className="hover:text-gray-300 transition-colors">Projects</button>

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
  className={`md:hidden overflow-hidden ${isMenuOpen ? 'block' : 'hidden'}`}
>

            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Home</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Contact</button>
              <button onClick={() => scrollToSection('certifications')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Certifications</button>
              <button onClick={() => scrollToSection('achievements')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Achievements</button>
              <a href="https://drive.google.com/file/d/1VZx9jZihkR2scCiE41BzUpFMR0QpgzQ3/view?usp=sharing" target="_blank" className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Resume</a>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">Gallery</button>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: "url('https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/Profile_2.jpg?raw=true')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 absolute top-[20%] left-0 right-0 mx-auto"
          >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-2"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hemanthsai Burla
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-10 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Java Developer | UI/UX Designer | YouTuber
          </motion.p>
        </motion.div>

        {/* Social Media Links - Positioned at 70% from top */}
        <motion.div 
          className="absolute left-0 right-0 mx-auto"
          style={{ top: '80%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href="https://github.com/HemanthsaiBurla" 
   target="_blank" 
   rel="noopener noreferrer"
   className="hover:text-gray-400 transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
   <Github size={20} />
   <span>GitHub</span>
</a>

<a href="https://www.linkedin.com/in/hemanthsaiburla/" 
   target="_blank" 
   rel="noopener noreferrer"
   className="hover:text-gray-400 transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
   <Linkedin size={20} />
   <span>LinkedIn</span>
</a>

<a href="https://x.com/HemanthsaiBurla" 
   target="_blank" 
   rel="noopener noreferrer"
   className="hover:text-gray-400 transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
   <Twitter size={20} />
   <span>Twitter</span>
</a>

<a href="https://www.instagram.com/iamhemanthsai" 
   target="_blank" 
   rel="noopener noreferrer"
   className="hover:text-gray-400 transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
   <Instagram size={20} />
   <span>Instagram</span>
</a>

<a href="https://www.youtube.com/@Techchintuintelugu" 
   target="_blank"
   rel="noopener noreferrer"
   className="hover:text-gray-400 transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
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
          Passionate Java Backend Developer with expertise in Spring Boot, MySQL, and modern web technologies.
           I craft functional, visually appealing applications, blending clean code with strong computer science 
           fundamentals. Always eager to learn and innovate.

          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Code className="text-gray-300 mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p>Java, MySQL, Spring Boot, Servlets, Hibernate, SQL, HTML, CSS, JS, GitHub, MS Office, Python</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Star className="text-gray-300 mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">Other</h3>
              <p>UI/UX, Photoshop, Video & Photo Editing, Photography</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Briefcase className="text-gray-300 mb-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p>6 Months, Internship in Java Full Stack</p>
            </div>
          </div>
        </motion.div>
      </section>










{/* Projects Section */}
<section id="projects" className="py-20 px-4 md:px-20 bg-black/50 ">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto"
  >
    <div className="flex items-center mb-12">
      <Trophy className="text-gray-300 mr-4" size={32} />
      <h2 className="text-3xl font-bold">Projects</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
        // change bg color or block project one
>
<h3 className="text-xl font-semibold mb-2 text-white-400">Banking Application</h3> 
        <img src="https://github.com/HemanthsaiBurla/portfolio/blob/main/Project_images/Bank_Home_Screen.jpg?raw=true" alt="Project 1" className="w-full rounded-lg mb-4" />
        {/* //to change the project name heading color */}
        <p>Developed a secure web-based banking system using Java Servlets, JSP, MySQL, and CSS, achieving 95% completion with real-time updates for core banking features.</p>
        <div className="flex justify-between mt-4">
  <div className="flex gap-4">
          <a href="https://github.com/HemanthsaiBurla/Bank_Application" target="_blank" rel="noopener noreferrer" className="text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/posts/hemanthsaiburla_bankapplication-bankmanagementsystem-fintech-activity-7292229064201805825-NeyB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEqD2sgBqdn4XqDQs7FEeJ0JaevL40tXv7o" target="_blank" rel="noopener noreferrer" className="text-blue-400">LinkedIn</a>
        </div>

    <a 
      href="https://github.com/HemanthsaiBurla/Bank_Application/blob/main/README.md"
      target="_blank" 
      rel="noopener noreferrer"
      className="text-green-400 hover:text-green-500"
    >
      ReadMe
    </a>
  </div>
      </motion.div>





  <motion.div
  whileHover={{ scale: 1.02 }}
  className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
  >

  <h3 className="text-xl font-semibold mb-4 text-white">Calculator Android Application(APK)</h3>

        <img src="https://github.com/HemanthsaiBurla/portfolio/blob/main/Project_images/Calculator_Android_UI.jpg?raw=true" alt="Project 2" className="w-full rounded-lg mb-4" />
        {/* <h3 className="text-xl font-semibold mb-2">Project Two</h3> */}
        <p>Developed an Android Calculator Application(APK) using JAVA, JS, CSS, HTML,Android Studio and VS code.</p>
        <div className="flex justify-between mt-4">
  <div className="flex gap-4">
          <a href="https://github.com/HemanthsaiBurla/Calculator_Android_Application-APK" target="_blank" rel="noopener noreferrer" className="text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/posts/hemanthsaiburla_smartcalculator-hybridapp-androiddevelopment-activity-7309448765063503872-db0p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEqD2sgBqdn4XqDQs7FEeJ0JaevL40tXv7o" target="_blank" rel="noopener noreferrer" className="text-blue-400">LinkedIn</a>
        </div>

    <a 
      href="https://www.dropbox.com/scl/fi/9p7g3xt0gjjux7bdsjznh/Calculator.apk?rlkey=abpkwk2ndh01px8yr17s9me09&st=9o8ef3dc&dl=1" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-green-400 hover:text-green-500"
    >
      Test App(APK)
    </a>
  </div>
      </motion.div>





      <motion.div
  whileHover={{ scale: 1.02 }}
  className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
>
  <h3 className="text-xl font-semibold rounded-xl mb-4 text-white">Calculator Web Application( live ⇩ )</h3>

  {/* Wrapper Div to Apply Scaling */}
  <div className="overflow-hidden w-full h-[250px] relative rounded-xl border border-gray-500">
    <iframe 
      src="https://hemanthsaiburla.github.io/Calculator_Web_App/" 
      className="absolute top-0 left-0 w-[250%] h-[245%] scale-[0.41] transform origin-top-left"
      title="Tic Tac Toe"
    ></iframe>
  </div>
  <p>Conversion and Calculator App using HTML, CSS, and JS for real-time conversions (Speed, Length, Time, Temperature, Discount) and dynamic calculations.</p>
  {/* Links */}
  <div className="flex justify-between mt-4">
    
  <div className="flex gap-4">
          <a href="https://github.com/HemanthsaiBurla/Calculator_Web_App" target="_blank" rel="noopener noreferrer" className="text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/posts/hemanthsaiburla_conversionapp-calculatorapp-webcalculator-activity-7305566587938377728-ueza?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEqD2sgBqdn4XqDQs7FEeJ0JaevL40tXv7o" target="_blank" rel="noopener noreferrer" className="text-blue-400">LinkedIn</a>
        </div>    
    <a 
      href="https://hemanthsaiburla.github.io/Calculator_Web_App/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-green-400 hover:text-green-500"
    >
      Test Fullscreen
    </a>
  </div>
</motion.div>




  


      <motion.div
  whileHover={{ scale: 1.02 }}
  className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
>
  <h3 className="text-xl font-semibold rounded-xl mb-4 text-white">Tic-Tac-Toe Game( live ⇩ )</h3>

  {/* Wrapper Div to Apply Scaling */}

  <div className="overflow-hidden w-full h-[250px] relative rounded-xl border border-gray-500">
    
    <iframe 
      src="https://hemanthsaiburla.github.io/Tic-Tac-Toe/" 
      className="absolute top-0 left-0 w-[300%] h-[300%] scale-[0.34] transform origin-top-left"
      title="Tic Tac Toe"
    ></iframe>
  </div>
  <p>A simple web-based Tic Tac Toe game that supports two modes: User vs User and User vs Computer. The game also features a history of results.</p>

  {/* Links */}
  <div className="flex justify-between mt-4">
  <div className="flex gap-4">
          <a href="https://github.com/HemanthsaiBurla/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer" className="text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/hemanthsaiburla/" target="_blank" rel="noopener noreferrer" className="text-blue-400">LinkedIn</a>
        </div>

    <a 
      href="https://hemanthsaiburla.github.io/Tic-Tac-Toe/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-green-400 hover:text-green-500"
    >
      Play Fullscreen
    </a>
  </div>
</motion.div>





<motion.div
  whileHover={{ scale: 1.02 }}
  className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
  >

  <h3 className="text-xl font-semibold mb-4 text-white">Kid's Safety Smart Water Heater</h3>

        <img src="https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/ECE%20project.jpg?raw=true" alt="Project 2" className="w-full rounded-lg mb-4" />
        {/* <h3 className="text-xl font-semibold mb-2">Project Two</h3> */}
        <p>Created and Developed "Kid's Safety Smart Water Heater" designed to protect children(humans) and pets from electric shocks and burns caused by immersion water heaters.</p>
        <div className="flex justify-between mt-4">
  <div className="flex gap-4">
          <a href="https://github.com/HemanthsaiBurla/Kid-s-Safety-Smart-Water-Heater" target="_blank" rel="noopener noreferrer" className="text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/posts/hemanthsaiburla_newinnovative-project-abstract-activity-7210223861441699840-mrbu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEqD2sgBqdn4XqDQs7FEeJ0JaevL40tXv7o" target="_blank" rel="noopener noreferrer" className="text-blue-400">LinkedIn</a>
        </div>

    <a 
      href="https://github.com/HemanthsaiBurla/Kid-s-Safety-Smart-Water-Heater/tree/main/Documentation" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-green-400 hover:text-green-500"
    >
      View Documentation
    </a>
  </div>
      </motion.div>









  
    </div>
  </motion.div>
</section>














      {/* Gallery Section */}
<section id="gallery" className="py-20 px-4 md:px-20 ">
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

    {/* Responsive Gallery */}
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImageIndex}
          src={galleryImages[currentImageIndex]}
          alt={`Gallery image ${currentImageIndex + 1}`}
          className="w-full h-full object-contain md:object-cover" // Fix for mobile cropping
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      
      {/* Navigation Dots */}
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
      <section id="achievements" className="py-20 px-4 md:px-20 bg-black/50">
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
              <h3 className="text-xl font-semibold mb-2">Publishing* Calculator App in Play store</h3>
              <p className="text-gray-300">Successfully created and developed an android application using Android studio, Java, Html, Js, Css. Which is ready to publish.</p>
              <a href="https://2.bp.blogspot.com/-1qwOAVxIu6Q/VpSKk5P8A9I/AAAAAAAAG3U/KSk_oaL4VWY/s1600/no_update.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-400">In progress</a>

            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <Award className="text-gray-300 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2"> Java 5⭐ in Hackerrank | Selected as Content Moderater in Genpact</h3>
              <p className="text-gray-300">As Content moderater in Genpact.</p>
            </motion.div>


            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <Award className="text-gray-300 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Monetized YouTuber as a Techie</h3>
              <p className="text-gray-300">I share technical knowledge on YouTube, simplifying complex concepts to empower learners and inspire innovation in the tech world.</p>
              <a href="https://www.youtube.com/@Techchintuintelugu" target="_blank" rel="noopener noreferrer" className="text-blue-400">YouTube Channel</a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <Award className="text-gray-300 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Awarded in the Project expo's 2024</h3>
              <p className="text-gray-300">Developed a non-existed "Kids Safety Smart Water Heater" and awarded three first prizes in the Project Expo's in national events(JNTUH, BITS, SVSGOI).</p>
              <a href="https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/SPOORTHI.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-400">View Certificates</a>
            </motion.div>
            


          </div>
        </motion.div>
      </section>





      {/* Certifications Section */}
      




{/* Certifications Section */}
<section id="certifications" className="py-20 px-4 md:px-20">
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
          title: "Programming in Java",
          org: "NPTEL",
          date: "2024",
          id: "NPTEL24CS105S562000079",
          description: "Covers Java fundamentals, OOP, exception handling, collections, data structures, and multithreading.",
          topics: ["OOP Principles", "Exception Handling", "Multithreading", "Java Collections"],
          certificateLink: "https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/JAVA_CER.jpg?raw=true"
        },
        {
          title: "Full Stack Java",
          org: "J Spiders",
          date: "2024",
          id: "----",
          description: "Hands-on training in Java backend and frontend development, including Spring Boot and React.",
          topics: ["Spring Boot", "Hibernate", "React.js", "REST APIs"],
          certificateLink: "https://2.bp.blogspot.com/-1qwOAVxIu6Q/VpSKk5P8A9I/AAAAAAAAG3U/KSk_oaL4VWY/s1600/no_update.jpg"
        },
        {
          title: "Cloud Computing",
          org: "NPTEL",
          date: "2024",
          id: "NPTEL24CS17S4704000234",
          description: "Explores cloud concepts, deployment models, security, and AWS services.",
          topics: ["AWS Basics", "Virtualization", "SaaS, PaaS, IaaS"],
          certificateLink: "https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/CLOUDCOMPUTING.jpg?raw=true"
        },
        {
          title: "Internet of Things",
          org: "NPTEL",
          date: "2023",
          id: "NPTEL23CS83S8503000722",
          description: "Focuses on IoT architecture, communication protocols, sensors, and real-world applications.",
          topics: ["IoT Architecture", "Sensors & Actuators", "Edge Computing", "IoT Security"],
          certificateLink: "https://github.com/HemanthsaiBurla/portfolio/blob/main/certificates/IoT.jpg?raw=true"
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
              <p className="text-sm text-gray-400 mt-2">ID: {cert.id}</p>
              <p className="text-gray-200 mt-2">{cert.description}</p>
              <ul className="text-gray-300 list-disc list-inside mt-2">
                {cert.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
              {/* View Certificate Link - Only if available */}
              {cert.certificateLink && (
                <a 
                  href={cert.certificateLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 mt-2 inline-block"
                >
                  View Certificate
                </a>
              )}
            </div>
            <span className="text-sm text-gray-400">{cert.date}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>






















      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-20 bg-black/50">
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
            href="mailto:hemanthsaiburla@gmail.com"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400 bg-black/50">
        <p>© 2025 Hemanthsai Burla. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;