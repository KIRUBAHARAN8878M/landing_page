"use client";

import React, { Suspense } from "react";

// Lazy load the Image component
const Image = React.lazy(() => import("next/image"));

const Landingpage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="main bg-[#e2f5fb] w-full min-h-[156vh] px-5 relative z-0">
        <div className="w-full h-full mt-10">
          {/* Heading */}
          <h1 className="heading text-[40px] sm:text-[60px] md:text-[100px] lg:text-[155px] text-[#003569] font-bold flex justify-center items-center pt-8 text-center">
            Essential Vitamins
          </h1>

          {/* Content Section */}
          <div className="heading2 flex flex-col md:flex-row relative px-4 sm:px-12 lg:px-44">
            {/* Left Section */}
            <div className="online w-full md:w-[400px] mt-10 md:mt-36 capitalize text-center md:text-left">
              <p className="text-[20px] md:text-[26px] font-normal text-[#727272]">
                Online medical supplies
              </p>
              <h2 className="text-[24px] md:text-[34px] text-[#17414F] font-medium mt-4 md:mt-7 tracking-tight leading-snug md:leading-10">
                Get your vitamins & minerals
              </h2>
              <input
                className="hover:cursor-pointer bg-[#17414F] w-[150px] md:w-[189px] h-12 md:h-14 rounded-full text-left pl-4 md:pl-10 mt-4 text-[#FFFFFF] font-semibold text-[14px] md:text-[16px]"
                type="submit"
                value="EXPLORE"
              />
            </div>

            {/* Center Section */}
            <div className="probiotics relative mt-10 md:mt-0">
              <div className="w-[200px] sm:w-[300px] md:w-[434px] h-[200px] sm:h-[300px] md:h-[462px] absolute z-10">
                <Image
                  src={"/Assets/2023, 15_42_43 GMT+3.png"}
                  width={500}
                  height={500}
                  className="mt-0 md:-mt-28 ml-0 md:-ml-6"
                  alt="2023"
                />
              </div>
              <div className="w-[200px] sm:w-[300px] md:w-[393px] h-[200px] sm:h-[300px] md:h-[391px] bg-[#FFE9B5] z-0 rounded-tl-[50px] sm:rounded-tl-[100px] md:rounded-tl-[130px] rounded-br-[50px] sm:rounded-br-[100px] md:rounded-br-[130px] mt-7 ml-5"></div>
            </div>

            {/* Right Section */}
            <div className="right w-full md:w-[300px] h-auto md:h-[380px] ml-0 md:ml-20 mt-10 md:mt-20 py-5 md:py-10 flex items-start justify-between flex-col">
              {[{
                  src: "/Assets/vitamins.png",
                  title: "Vitamins",
                  description: "Increased Vitamins and minerals in your diet",
                },
                {
                  src: "/Assets/Frame-8364.png.png",
                  title: "Weight Loss",
                  description: "Find scientifically proven solutions",
                },
                {
                  src: "/Assets/functional-foods.png",
                  title: "Functional Foods",
                  description: "From protein powers to baby formula",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full h-auto flex items-center justify-start gap-5 mb-5"
                >
                  <Image
                    src={item.src}
                    width={75}
                    height={74}
                    alt={item.title}
                  />
                  <div className="right3 w-full">
                    <h3 className="text-[20px] md:text-[26px] font-semibold text-[#17414F]">
                      {item.title}
                    </h3>
                    <p className="text-[12px] md:text-[14px] font-normal w-full text-[#727272]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Section */}
          <div className="flex justify-left mt-10  gap-2" style={{marginLeft:"7.5rem"}}>
            <div className="dot w-4 md:w-10 h-4 md:h-10 rounded-full bg-slate-400"></div>
            <div className="dot w-4 md:w-10 h-4 md:h-10 rounded-full bg-slate-400"></div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Landingpage;
