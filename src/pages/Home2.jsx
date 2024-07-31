import React from 'react';
import { funFact1 } from '../data/fun-fact-data'; // Adjust the import path as needed

const Home2 = () => {
  // Background image path
  const bgImage = '/Home2-dbg.svg';
  const whiteCornerSVG = '/home2-whitecorner.svg';

  return (
    <div className="relative min-h-screen">
      {/* Background Color */}
      <div className="absolute inset-0 bg-[#FFF8F2] z-0"></div>

      {/* Background Image */}
      <div
      
      >
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[#FFF8F2] opacity-10 z-15"></div>
      </div>

      {/* Navbar */}
      <header className="bg-gray-800 text-black shadow-md sticky top-0 z-20 bg-opacity-70">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <div className="text-xl font-bold">
            <a href="#" className="text-black hover:text-gray-600">Level Sabke <br />Niklenge</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-black hover:text-gray-600">Home</a>
            <a href="#" className="text-black hover:text-gray-600">About</a>
            <a href="#" className="text-black hover:text-gray-600">Services</a>
            <a href="#" className="text-black hover:text-gray-600">Contact</a>
          </div>
          <button className="md:hidden text-black hover:text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
      </header>

      {/* Main Section */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-center bg-no-repeat xsm:w-[] " style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
         {/* Text Div */}
         <div className="relative z-20  px-5 pt-[4%]    xsm:text-center md:px-12  md:py-12  lg:px-12 lg:py-16 max-w-screen-xl mx-auto mt-20 text-left  ">
    {/* Heading */}
    <h1 className="text-3xl dxs:text-3xl xxs:text-4xl xsm:text-5xl  xs:text-6xl lg:text-6xl  font-bold leading-tight text-black font-poppins  sm:mt-10 md: lg:">
      <span className="block">A collaborative time</span>
      <span className="block">Tracking that you Need</span>
    </h1>
    {/* Paragraph */}
    <p className="text-xm mt-4 dxs:text-sm mt-6 xxs:text-base  xsm:text-lg   xs:text-xl text-black mb-6   lg:leading-relaxed max-w-lg mx-auto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia aliquam architecto beatae quo quibusdam.
    </p>
    {/* Button */}
    <button className=" px-10 py-5 bg-custom-orange text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors">
      Start 14 Days Trial
    </button>
  </div>

        {/* Fun Facts Section */}
        <div className="relative z-30 flex flex-col flex-nowrap items-center justify-center w-full mt-auto pb-12  ">
          {/* White SVG */}
          <img src={whiteCornerSVG} alt="White Corner SVG" className="absolute inset-0 z-20" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

          {/* Fun Facts */}
          <div className="relative z-30 gap-2  flex flex-nowrap flex-col gap-6 xsm:flex-row mr-[10%] mt-[5%]">
  {funFact1.map(({ id, count, text }) => (
    <div key={id} className="bg-white border-b-2 border-gray-100 p-4 h-40 p-10 w-52 sm:p-10   md:p-10 lg:p-8  flex flex-col items-center ">
      <div className="text-2xl  sm:text-xl md:text-2xl lg:text-3xl mt-2 font-semibold text-black mb-2">
        {count}
        {text === "Active user" && '+'}
      </div>
      <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
        {text}
      </div>
    </div>
  ))}
</div>

        </div>
      </section>
    </div>
  );
}

export default Home2;
