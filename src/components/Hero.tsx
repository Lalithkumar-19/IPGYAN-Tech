import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, {
      opacity: 0,
      y: 50,
    },{
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3,   
      scrollTrigger:{
        start:'top 90%',
        trigger:textRef.current,
        toggleActions:'play none none none'
      }
    });
     gsap.fromTo(imageRef.current, {
      opacity: 0,
      y: 50,
    },{
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3,   
      scrollTrigger:{
        start:'top 90%',
        trigger:imageRef.current,
        toggleActions:'play none none none'
      }
    });

  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 z-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
          <div ref={textRef} className="order-2 lg:order-1 w-full">

            <h1 className="text-[25px] text-pretty md:text-4xl text-gray-600  text-center lg:text-start  lg:text-6xl font-bold leading- mb-6">
              Welcome to IPGYAN TECHNOLOGIES 
            </h1>
            <p className="text-lg text-navy/80 mb-8 text-justify font-inter leading-relaxed">
              IPGYAN TECHNOLOGIES PRIVATE LIMITED – where innovation meets legal expertise. As a forward-thinking startup, we are revolutionizing the legal landscape by identifying real-world issues and solving them with cutting-edge technology. Our mission is to simplify and transform the way legal processes work, making law more accessible and efficient for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 place-content-center lg:place-content-start">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="px-6 py-3 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-lg">
                Contact Us
              </button>
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-gray-700 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors">
                Explore Our Products
              </button>
            </div>
          </div>

          <div ref={imageRef} className="order-1 lg:order-2 relative p-6 ">
          
            <img 
              src="/image1.jpeg" 
              alt="Legal Tech Innovation" 
              className="w-full h-[350px] object-cover rounded-lg shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
