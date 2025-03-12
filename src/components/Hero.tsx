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
    <section id="home" className="relative min-h-screen flex overflow-x-hidden items-center pt-16 overflow-hidden bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 z-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
          <div ref={textRef} className="order-2 lg:order-1 w-full">

             <h1 className='hidden md:block text-[22px]  md:text-6xl text-gray-600  text-center lg:text-start  lg:text-6xl font-bold leading- mb-6 '>
                Welcome to <span className="text-6xl leading-4 ">Ipgyan Technologies </span>
            </h1>

            <h1 className="sm:block md:hidden  font-bold  font-poppins mb-4 text-5xl  text-gray-600  text-center">
              Welcome to 
            </h1>
            <h1 className="sm:block md:hidden  ml-2  font-bold mb-4 text-4xl  text-gray-600  text-center ">Ipgyan Technologies </h1>
            
           
            <p className="text-lg text-gray-600 mb-8 text-justify font-poppins leading-10 bg-gray-100 ">
             Ipgyan Technologies Private Limited – where innovation meets legal expertise. As a forward-thinking startup, we are revolutionizing the legal landscape by identifying real-world issues and solving them with cutting-edge technology. Our mission is to simplify and transform the way legal processes work, making law more accessible and efficient for everyone.
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
              alt="IPGYAN TECHNOLOGIES" 
              className="w-full md:h-[450px] h-[400px] object-cover rounded-lg shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
