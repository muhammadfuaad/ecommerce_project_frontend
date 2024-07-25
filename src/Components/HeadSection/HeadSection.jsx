import React from "react";
import img from "../Images/Header.jpg";

const HeadSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${img})`,
        height: 600,
      }}
    >
      <div
        className="flex flex-col justify-center align-middle text-white w-1/2 gap-5 items-center
      "
      >
        <h1 className="text-6xl font-bold">Welcome to MFS Traders</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugiat
          ipsam consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Soluta sunt minus voluptatem.
        </p>
        <button class="border border-white rounded-xl w-1/4 hover:cursor-pointer hover:bg-opacity-50 hover:backdrop-blur-sm flex justify-center my-3 p-2">
          <span class="text-lg">Shop Now</span>
        </button>
      </div>
    </div>
  );
};

export default HeadSection;
