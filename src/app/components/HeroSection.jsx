"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 lg:col-span-7 place-self-center text-center sm:text-left">
          <h1 className="py-10 text-white mb4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-blue-700">
              Hello There, I'm Mkhanyisi!{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "I also go by MK",
                1000,
                "I'm a Software Engineer",
                1000,
                "a Full Stack Developer",
                1000,
                "A Web Developer",
                1000,
                "a Backend Developer",
                1000,
                "a Frontend Developer",
                1000,
                "a Traveler and Outdoor Enthusiast",
                1000,
                "An Avid Basketball, Biking and Gym Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
              className="py-10"
            />
          </h1>
          <p classname="text-[ADB7BE] text-base text-lg mb-6 lg:text-xl">
            Welcome to my corner of the internet. Here, I aim to share and
            encapsulate some of my key skills and experiences. I'm a versatile
            Full Stack Software Engineer passionate about problem-solving
            through computational thinking across various domains. Feel free to
            check out my work and reach out to me.
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
          <div className="bg-[#181818] lg:w-[320px] lg:h-[320px] sm:w-[200px] sm:h-[200px] rounded-full relative hero_image-wrapper ">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hero_profile-image"
              src="/images/mk3.png"
              alt="MK Image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      <style jsx global>
        {`
          @keyframes hover {
            from {
              box-shadow: 0 5px 7px 7px #7a7a7a;
              transform: translateY(0);
            }

            to {
              box-shadow: 0 11px 14px 14px #7a7a7a;
              transform: translateY(-5px);
            }
          }

          .hero_image-wrapper {
            width: 200px;
            height: 200px;
            border-radius: 10%;
            overflow: hidden;
            animation: hover 2s linear infinite alternate;
          }

          .hero_profile-image {
            width: 120%;
            height: 120%;
            object-fit: cover;
            object-position: top;
          }

          @media (min-width: 1000px) {
            .hero_image-wrapper {
              width: 300px;
              height: 300px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
