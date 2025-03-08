import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      imageRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="about" className=" relative bg-transparen font-sans py-10 px-6 lg:px-12 bg-gray-100">
      <h1 className='text-4xl text-center mb-10 font-bold  text-navy font-serif cursor-pointer underline underline-offset-8'>About Us</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div ref={imageRef} className="relative">
          <div className="absolute top-0 left-0 w-48 h-48 bg-gray-50 rounded-lg -z-10"></div>
          <img 
            src="/image2.jpeg" 
            alt="Legal Tech Team" 
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-2 border-gray-100 rounded-lg -z-10"></div>
        </div>

        <div ref={textRef} className="text-gray-100 bg-gray-100 space-y-6">
          <p className="text-lg text-navy/80 mb-8 text-justify font-inter leading-relaxed bg-gray-100 ">
            At IPGYAN Technologies, we believe that the future of law lies in technology. Our team is dedicated to creating disruptive legal tech products that not only streamline legal procedures but also enhance legal research, compliance, and management.
          </p>
          <p className="text-lg text-navy/80 mb-8 text-justify font-inter leading-relaxed bg-gray-100 ">
            We combine deep legal insights with innovative tech solutions to address challenges in the legal realm and drive meaningful change. With a commitment to excellence and a passion for innovation, we are continuously exploring new avenues to redefine the legal industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
