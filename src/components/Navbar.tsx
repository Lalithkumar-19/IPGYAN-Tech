import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when the mobile menu is open
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden"; // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);

    if (element) {
      const navbarOffset = document.querySelector('.navbar')?.clientHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`navbar bg-gray-10 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white backdrop-blur-sm shadow-elegant py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <h1 className="text-navy text-xl md:text-2xl font-bold font-playfair">
            <span className=" text-gray-700 ">I</span>PGYAN TECHNOLOGIE<span className="text-gray-700 ">S</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('blog')} className="nav-link">Blog</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-gray-600 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={` fixed top-12 right-0 w-full h-screen bg-gray-100 z-50 flex flex-col pt-20 px-4 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
       
        <div className="flex flex-col space-y-6 items-center bg-gray-100 text-lg mt-10">
          <button onClick={() => scrollToSection('home')} className="nav-link w-20 text-center py-3">Home</button>
          <button onClick={() => scrollToSection('services')} className="nav-link w-20 text-center py-3">Products</button>
          <button onClick={() => scrollToSection('about')} className="nav-link w-20 text-center py-3">About</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link w-20 text-center py-3">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
