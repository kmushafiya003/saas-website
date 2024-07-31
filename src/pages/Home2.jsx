import React from 'react';
import { funFact1 } from '../data/fun-fact-data'; // Adjust the import path as needed
import Navbar2 from '../components/common/Navbar2';

const Home2 = () => {
  // Background image path
  const bgImage = '/Home2-dbg.svg';
  const whiteCornerSVG = '/home2-whitecorner.svg';
  const svgTopRight= '/Alarm_Clock.svg'; // Replace with the actual path
  const svgBottomLeft = '/rocket.svg';

  return (
    <div className="relative min-h-screen text-custom-blend">

<div className="absolute inset-0 bg-[#FFF8F2] opacity-6 z-15"></div>
      <Navbar2/>




      {/* Background Image */}
      <div

      >
        {/* Color Overlay */}
        
      </div>

      {/* Navbar */}
      <header className="bg-gray-800 text-black shadow-md sticky top-0 z-20 bg-opacity-70">
        
      </header>

      {/* Main Section */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-center bg-no-repeat xsm:w-[] " style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >

         {/* Text Div */}
         <div className="relative z-20  px-5 pt-[180px] pb-[30px]    xsm:text-center md:px-12  md:py-12  lg:px-12 lg:py-16 max-w-screen-xl mx-auto mt-20 text-left  ">
    {/* Heading */}
    <h1 className="text-3xl dxs:text-3xl xxs:text-4xl xsm:text-5xl  xs:text-6xl lg:text-6xl  font-bold leading-tight text-black font-poppins  sm:mt-10 md: lg:">
      <span className="block">A collaborative time</span>
      <span className="block">Tracking that you Need</span>
    </h1>
    {/* Paragraph */}
    <p className="text-xm mt-4 dxs:text-sm  xxs:text-base  xsm:text-lg   xs:text-xl  mb-6   lg:leading-relaxed max-w-lg mx-auto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia aliquam architecto beatae quo quibusdam.
    </p>
    {/* Button */}
    <button className=" px-10 py-5 bg-custom-orange hover:bg-primary-fuel-yellow text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors">
      Start 14 Days Trial
    </button>
  </div>


        {/* Fun Facts Section */}
        <div className="relative z-30 flex flex-col flex-nowrap items-center justify-center w-full mt-auto pb-12  ">
          {/* White SVG */}
          <img src={whiteCornerSVG} alt="White Corner SVG" className="absolute inset-0 z-20" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

          {/* Fun Facts */}

          <div className="relative z-30 gap-2 flex flex-nowrap flex-col xsm:flex-row mr-[10%] mt-[5%]">
      {funFact1.map((item, index) => (
        <div
          key={item.id}
          className={` dxs:${index === funFact1.length - 1 ? 'border-none' : ' bg-white border-b-[1px]  border-gray-100 '}  xxs:border-none p-4 h-40 w-52  sm:p-10 md:p-10 lg:p-8 flex flex-col items-center `}
        >
          <div className="text-2xl mt-6 sm:text-xl md:text-2xl lg:text-3xl mt-2 font-semibold text-black mb-2">
            {item.count}
            {item.text === "Active user" && '+'}
          </div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700">
            {item.text}
          </div>
          
        </div>
      ))}
    </div>


        </div>
        <div className="absolute inset-0 ">
            
            <img src={svgTopRight} alt="Top Right SVG" className="block xsm:hidden absolute top-0 right-12 w-14 h-14" />
            <img src={svgBottomLeft} alt="Bottom Left SVG" className= "block xsm:hidden z-50 absolute bottom-[-200px] left-0 w-16 h-16"/>
            
          </div>
      </section>
    </div>
  );
}

export default Home2;
