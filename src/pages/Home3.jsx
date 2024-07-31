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
        <div className="relative z-10 xxl:pr-64 xmd:pr-96 xmd:pt-28 xmd:pl-52 xxl:pl-80 dxs:pt-5 dxs:pr-0 dxs:pl-0 xxs:-pt-0 xxs:pr-0  smd:pl-48 smd:pr-96 smd:pt-28 md:pl-20 just:pl-20 xs:pl-20 lg:pl-52 lg:pt-32 xlg:pl-64 xlg:pt-36 xl:pl-80 xl:pr-96 xl:pt-44 xxl:pt-10">
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
          <div className="py-10">
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

        <div className="xlg:w-8/12 lg:w-9/12  sm:w-11/12  w-10/12 mx-auto relative flex sm:flex-row flex-col gap-y-6 sm:justify-between items-center sm:divide-x-2 divide-y-2 sm:divide-y-0 divide-text-mid-grey mmd:mt-20 xl:mt-40 smd:mt-10 mt-24 top-[300px]  smd:top-0">
          {
            funFact2.map((data) => (
              <div className="sm:w-[22%] xs:w-[30%] w-[40%] pt-6 pb-4  smd:px-2 xmd:py-4 ">

                <div className="flex flex-col justify-center bg-white  items-center   ">

                  <h1 className="lg:text-[3rem] sm:text-4xl xs:text-[3rem] text-4xl font-bold ">{data.count}</h1>
                  <p>{data.text}</p>
                </div>
              </div>
            ))
          }


        </div>
      </div>

    </div>


  );
};

export default Home3;
