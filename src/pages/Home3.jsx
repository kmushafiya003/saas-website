import React from "react";
import DynamicButton from "../components/common/DynamicButton";
import { funFact2 } from "../data/fun-fact-data.js";
import object2 from "../images/Objects-2.svg";
import mobilescreen from "../images/mobilescreen.svg";
import Navbar2 from "../components/common/Navbar2.jsx";
const Home3 = () => {
  return (

    <div>
      <Navbar2 />
      <div className="relative ">

        <img
          src={object2}
          alt="object-2"
          className="absolute block object-cover h-auto dxs:h-auto dxs:w-auto dasktopimag -top-28 xxs:hidden dxs:hidden xmd:-top-5 lg:-top-36 smd:top-0 md:hidden smd:block mmd:block "
        />
        <div className="relative z-10 xxl:pr-64 xxl:pt-20 xmd:pr-96 xmd:pt-28 xmd:pl-52 xxl:pl-80 dxs:pt-5 dxs:pr-0 dxs:pl-0 xxs:-pt-0 xxs:pr-0 lg:pl-64 lg:pt-5 smd:pl-48 smd:pr-96 smd:pt-28 md:pl-20 just:pl-20 xs:pl-20 lg:pl-52 lg:pt-32 xlg:pl-64 xlg:pt-36 xl:pl-80 xl:pr-96 xl:pt-44 xxl:pt-10">
          <div className="font-popfont-poppins dxs:pl-5">
            <h1 className="font-bold xxl:text-[3.5rem] dxs:text-[2rem]">
              Manage Your <br /> Business{" "}
              <span className="text-state-success">Finance</span>
              <br /> Easily
            </h1>
            <p className="xxl:pl-0 xxl:pr-96 dxs:pr-10 ">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue magna at pretium purus pretium ligula.
            </p>
          </div>
          <div className="pt-10">
            <DynamicButton
              text="Start 14 Days Trial"
              className={`w-44 font-poppins text-0.8rem h-12 leading-10 dxs:leading-0`}
            />
            <img
              src={mobilescreen}
              alt="mobile-image"
              className="absolute top-0 hidden object-cover smd:top-20 smd:h-0 smd:w-0 dxs:block dxs:h-auto dxs:w-auto mobileimage dxs:top-44 dxs:item-center"
            />
          </div>
        </div>
       
          <div className="relative flex justify-center gap-32  border-b-0 pt-36 lg:flex-row dxs:flex-col dxs:pt-[25rem] lg:pt-[10rem] ">
            {
              funFact2.map((data) => (
                <div className="flex flex-col justify-center bg-white border-b-0 border-gray-100 dxs:border-r-0 dxs:justify-center dxs:items-center dxs:border-b-2">
                
                  <h1 className="text-[3rem] font-bold ">{data.count}</h1>
              
                  <p>{data.text}</p>
                </div>
              ))
            }

          
        </div>
      </div>

    </div>


  );
};

export default Home3;
