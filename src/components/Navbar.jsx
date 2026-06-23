import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    { name: 'Education', href: 'education' },
    { name: 'Certifications', href: 'certifications' },
    { name: 'Contact', href: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => document.getElementById(link.href));
      // Offset by ~100px to trigger the highlight slightly before the top of the section hits the window top
      const scrollPosition = window.scrollY + 100; 

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu if open
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '1rem 2rem',
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(3, 7, 18, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)', letterSpacing: '-0.02em', cursor: 'pointer', textDecoration: 'none' }}>
          Ruthraveni<span style={{ color: 'var(--primary-color)' }}>.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              style={{ 
                color: activeSection === link.href ? 'var(--primary-color)' : 'var(--text-sub)',
                fontWeight: 500,
                fontSize: '0.9rem',
                transition: 'color 0.2s',
                textShadow: activeSection === link.href ? '0 0 10px rgba(37, 99, 235, 0.5)' : 'none',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
              onMouseOut={(e) => {
                  if(activeSection !== link.href) e.currentTarget.style.color = 'var(--text-sub)';
              }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf"
            target="_blank"
            className="px-5 py-2 rounded-full font-medium transition-all"
            style={{
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              boxShadow: '0 0 15px rgba(37, 99, 235, 0.4)',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 25px rgba(37, 99, 235, 0.8)'}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 0 15px rgba(37, 99, 235, 0.4)'}
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{ color: 'var(--text-main)', fontSize: '1.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden"
                style={{ 
                    position: 'absolute', 
                    top: '100%', 
                    left: 0, 
                    right: 0, 
                    backgroundColor: 'rgba(3, 7, 18, 0.95)',
                    backdropFilter: 'blur(16px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    padding: '1rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    overflow: 'hidden'
                }}
              >
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={`#${link.href}`}
                      onClick={(e) => scrollToSection(e, link.href)}
                      style={{ 
                        color: activeSection === link.href ? 'var(--primary-color)' : 'var(--text-main)',
                        fontWeight: 500,
                        fontSize: '1rem',
                        transition: 'color 0.2s',
                        padding: '0.5rem 0',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        textDecoration: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                  <a 
                    href="/resume.pdf"
                    target="_blank"
                    className="px-5 py-3 mt-2 rounded-full font-medium transition-all text-center"
                    style={{
                      backgroundColor: 'var(--primary-color)',
                      color: 'white',
                      boxShadow: '0 0 15px rgba(37, 99, 235, 0.4)',
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Download Resume
                  </a>
              </motion.div>
          )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
