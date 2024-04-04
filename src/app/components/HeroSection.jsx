"use client";
import React, { useState } from "react";
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
          </h1>
          <div className="type-animation-wrapper">
            <TypeAnimation
              sequence={[
                "I also go by MK",
                1000,
                "I'm a Software Engineer",
                1000,
                "I'm a versatile Full Stack Developer",
                1000,
                "I'm comfortable with Web Technologies, Cloud Services, Data Processing and Machine Learning",
                1000,
                "I'm A Backend Developer",
                1000,
                "I'm A Frontend Developer",
                1000,
                "I love Music, Traveling and Exploring the Outdoors 🎵🎹  ✈️  🥾 ⛰️  ",
                1000,
                "Away from the Computer Screen, you can find me either at the Gym 🏋️‍♂️ , on my Bike 🚴 or at the Soccer Field ⚽️",
                1000,
              ]}
              wrapper="h3"
              speed={10}
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                padding: "15px",
                borderRadius: "10px",
                fontFamily: "monospace",
                margin: "0",
                background: "transparent",
                backdropFilter: "blur(90%)",
                maxHeight: "12rem",
                display: "inline-block",
                marginLeft: "15px",
                marginRight: "15px",
                marginBottom: "15px",
              }}
              repeat={Infinity}
            />
          </div>

          <p className="text-[#5C677D] text-lg lg:text-xl leading-relaxed mb-6">
            Welcome to my little corner of of the internet! Here, I'm excited to
            showcase some of my key skills and experiences. As a versatile Full
            Stack Software Engineer, I'm deeply passionate about problem-solving
            through computational thinking across diverse domains. Whether
            you're here to explore my work or just chat, feel free to reach out.
            I'm always up for a good discussion!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-900 to-blue-700 hover:bg-slate-200 text-white font-extrabold">
              Let's Talk
            </button>

            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-red-900 to-blue-700 hover:bg-slate-800  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 font-extrabold">
                Download Resume
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="bg-[#181818] lg:w-[320px] lg:h-[320px] sm:w-[200px] sm:h-[200px] relative hero_image-wrapper ">
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

          .hero_bio {
            font-size: 18px;
            font-weight: 300;
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

          .type-animation-wrapper {
            height: 12rem; 
            display: inline-block;
          }

          .type-animation {
            white-space: nowrap; 
          }

          @media (min-width: 1000px) {
            .hero_image-wrapper {
              width: 300px;
              height: 300px;
            }

            .typ
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
