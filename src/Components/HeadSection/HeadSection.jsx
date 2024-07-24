import React from "react";
import img from "../Images/Header.jpg";

const HeadSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${img})`,
        height:600
      }}
    >
      <div className="flex flex-col justify-center align-middle text-white w-1/2 gap-4
      ">
        <h1 className="text-6xl font-bold">
          Welcome to MFS Traders
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugiat
          ipsam consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Soluta sunt minus voluptatem.
        </p>
        <button class="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
          <span class="text-lg">Shop Now</span>
          <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div class="relative h-full w-10 bg-white/30"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeadSection;
