import React, { useEffect, useRef } from 'react';
import { Shield, Cpu } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?:string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  const cardRef = useRef(null);
  // const colors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-red-100", "bg-purple-100"];


  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className={"bg-purple-100 p-6 rounded-lg  border border-gray-300 h-full font-sans transform transition-transform duration-300 hover:scale-105 hover:border-gray-400 shadow-xl hover:shadow-elegant"}
    >
      <div className="text-gray-600 mb-4">{icon}</div>
      {link ? (
        <a className="text-2xl font-bold mb-3 text-gray-700 font-poppins cursor-pointer" href={link}>
          {title}
        </a>
      ) : (
        <h1 className="text-2xl font-bold mb-3 text-gray-700 font-poppins cursor-pointer">{title}</h1>
      )}
      <p
        className="max-w-2xl mx-auto text-justify font-light leading-10 text-poppins text-lg text-gray-700 mb-8 font-poppins"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};



const Services: React.FC = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power2.out' }
    );
  }, []);

  const services = [
    {
      title: "Intellectual Property (IP)",
      description: `
  Our pioneering product, 
  <a href="https://www.kopyright.in/" target="_blank" style="color: gray; text-decoration: underline; font-weight: bold;">
    KOPYRIGHT
  </a>, 
  is the first homegrown legal tech solution in the intellectual property segment. Designed to safeguard your creative assets, 
  <a href="https://www.kopyright.in/" target="_blank" style="color: gray; text-decoration: underline; font-weight: bold;">
    KOPYRIGHT
  </a> 
  leverages advanced technology to ensure your intellectual property is protected in today’s fast-evolving digital world.
`,
      icon: <Shield size={40} />, 
      link:"https://www.kopyright.in/"
    },
    {
      title: "AI-Driven Brand Building",
      description: "We offer a cutting-edge AI TM Chat Brand Builder designed to help businesses create, manage, and grow their brand identities efficiently. This tool harnesses artificial intelligence to streamline brand development, making it easier than ever to navigate the complex legal considerations in branding.",
      icon: <Cpu size={40} />, 
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-4 bg-gray-100 font-poppins">
      <div className="section-container">
        <div className="text-center mb-16 cursor-pointer">
          
          <h2 className="text-4xl font-extrabold text-navy mb-4  underline underline-offset-8 font-poppins">What We Build</h2>
          <p className="max-w-2xl mx-auto font-light leading-10 text-poppins text-lg text-gray-600 mb-8  font-poppins">
            We specialize in developing legal technology products that span multiple segments of the legal sector. Our portfolio includes innovative tools designed to address complex legal challenges with precision and ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title}  link={service.link?service.link:""} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
