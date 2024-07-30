import React from "react";
import DynamicButton from "../components/common/DynamicButton";
import { funFact2 } from "../data/fun-fact-data.js";

const Home3 = () => {
  return (
    <div>
      <div className="pt-20 pr-64 hero-section-3 pl-80">
        <div className="font-popfont-poppins">
          <h1 className="font-bold text-56px">
            Manage Your <br /> Business{" "}
            <span className="text-state-success">Finance</span>
            <br /> Easily
          </h1>
          <p className="pl-0 pr-96">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            congue magna at pretium purus pretium ligula.
          </p>
        </div>
        <div className="pt-10">
          <DynamicButton
            text="Start 14 Days Trial"
            className={`w-44 font-poppins text-0.8rem h-12 leading-10`}
          />
        </div>
      </div>
      <div>
        <div>
          {funFact2.map((item) => (
            <div key={funFact2.id}>{funFact2.count}</div>
          ))}
          <h1>{funFact2.count}</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Home3;
