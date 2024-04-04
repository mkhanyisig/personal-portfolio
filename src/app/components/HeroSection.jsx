"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 lg:col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-blue-700">
              Hello, I'm{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Mkhanyisi",
                1000,
                "a Software Engineer",
                1000,
                "a Web Developer",
                1000,
                "a Backend Developer",
                1000,
                "a Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p classname="text-[ADB7BE] text-base text-lg mb-6 lg:text-xl">
            I'm a Full Stack Software Engineer
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-900 to-blue-700 hover:bg-slate-200 text-white">
              Let's Talk
            </button>

            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-red-900 to-blue-700 hover:bg-slate-800  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="bg-[#181818] lg:w-[320px] lg:h-[320px] w-[250px] h-[250px] rounded-full relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/mk3.png"
              alt="MK Image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
