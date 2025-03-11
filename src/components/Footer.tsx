import React from 'react';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = document.querySelector('.navbar')?.clientHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              IPGYAN TECHNOLOGIES
            </h3>
            <p className="text-white/70 mb-6 text-justify">
              Our mission is to simplify and transform the way legal processes work, making law more accessible and efficient for everyone
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Our Solutions</h4>
            <ul className="space-y-2">
              <li><a href="https://www.kopyright.in/" className="text-white/70 hover:text-white transition-colors">- KOPYRIGHT - IP Protection</a></li>
              <li><a  onClick={() => scrollToSection('brand-builder')} className="text-white/70  transition-colors hover:text-white">- AI TM Chat Brand Builder</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')} className="text-white/70  transition-colors hover:text-white">- Products</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" onClick={() => scrollToSection('about')} className="text-white/70 hover:text-white">- About Us</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')} className="text-white/70 hover:text-white">- Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4" >Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3">📍</span>
                <span className="text-white/70 hover:text-white">4th Floor, Unit No 405-411, Bizness Square,HNO.1-98/3/5/23 TO 27,Jubilee Enclave, SY Nos 66&67, Madhapur, Serlingampally Mandal, RR DIST, Hyderabad, Telangana- 500081</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞 <i className="fab fa-whatsapp"></i></span>
                <span className="text-white/70 hover:text-white">7061034958</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">✉️</span>
                <span className="text-white/70 hover:text-white">contact@ipgyan.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            © {currentYear} IPGYAN Technologies. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
