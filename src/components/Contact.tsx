const ContactUs = () => {
  return (
    <div id="contact" className="w-full px-6 py-12  bg-gray-100 text-gray-600">
      <div className="max-w-8xl flex flex-col  w-full place-content-center place-items-center mx-auto text-center">
        <h2 className="text-4xl text-center mb-10 font-bold  text-gray-600 font-serif cursor-pointer underline underline-offset-8">Contact Us</h2>
        <p className="max-w-5xl text-justify font-poppins  ibm-plex-sans mx-auto ont-light leading-10 fon-poppins text-lg text-gray-700 mb-8 ">
          Have questions or want to know more about our products and services? We’d love to hear from you!
          Reach out to us for personalized consultations, product demonstrations, or any inquiries related to our legal technology solutions.
        </p>
        <p className="max-w-5xl text-justify font-poppins  ibm-plex-sans mx-auto font-light leading-10 text-lg text-gray-700 mb-8  ">
          Contact Us Today to explore how <strong>IPGYAN Technologies</strong> can help you transform your legal processes and empower your legal strategy.
        </p>
         <p className="max-w-5xl text-justify ibm-plex-sans mx-auto  leading-10 font-poppins text-lg text-gray-600 mb-8  ">
        At IPGYAN TECHNOLOGIES PRIVATE LIMITED, we are driven by a passion for innovation and a vision to revolutionize the legal field. Explore our website, discover our groundbreaking products, and join us on our journey to redefine the future of law.
      </p>
      </div>
     
      
      <div className="max-w-5xl gap-10 mx-auto flex flex-col">
        <div className="flex gap-10 flex-col md:flex-row w-full">
          <div className="bg-gray-100   md:w-[50%] shadow-2xl p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-2">Email</h3>
          <p className="max-w-6xl text-center text-poppins  ibm-plex-sans mx-auto font-light leading-10 text-poppins text-lg text-gray-600 mb-8  font-inter">contact@ipgyan.com</p>
        </div>
        <div className="bg-gray-100  shadow-2xl md:w-[50%] p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-2">Phone</h3>
          <p className="max-w-6xl text-center font-poppins  ibm-plex-sans mx-auto leading-10 text-poppins text-lg text-gray-600 mb-8 " >+91 98765 43210</p>
        </div>

        </div>
        
        <div className="bg-gray-100 shadow-2xl p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-2">Address</h3>
          <p className="text-pretty text-poppins  ibm-plex-sans mx-auto font-light leading-10 text-poppins text-lg text-gray-700 mb-8  font-inter">4th Floor, Unit No 405-411, Bizness Square,HNO.1-98/3/5/23 TO 27, Jubilee Enclave, SY Nos 66&67, Madhapur, Serlingampally Mandal, RR DIST, Hyderabad, Telangana- 500081</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
