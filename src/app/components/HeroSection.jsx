import React, { useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { SocialIcon } from 'react-social-icons';

const HeroSection = ({ isBackgroundDark, forceUpdateKey }) => {
  const welcomeColor = isBackgroundDark ? 'text-zinc-500' : 'text-zinc-900';
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);

  return (
    <section
      className={` ${
        isBackgroundDark ? 'bg-[#121212]' : 'bg-white'
      } h-screen  w-full`}
      id="home"
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
        <div className="col-span-7 lg:col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" text-white mb4 text-4xl sm:text-5xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-blue-700">
              👋 Hello There, I'm Mkhanyisi!
            </span>
          </h1>
          <div className="type-animation-wrapper" style={{ height: '14rem' }}>
            <TypeAnimation
              key={forceUpdateKey}
              sequence={[
                "I'm A Software Engineer",
                1000,
                "I'm A versatile Full Stack Developer. I can handle both Backend and Frontend Development",
                1000,
                "I'm comfortable and competent with Web Technologies, Data Processing, Cloud Services, and Machine Learning",
                1000,
                "I also go by MK incase that's easier to pronounce or remember 😄",
                1000,
                'Away from the Computer Screen, you can find me either at the Gym 🏋️‍♂️ , on my Bike 🚴 or at the Soccer Field ⚽️',
                1000,
                'I love Music, Sports, Traveling and Exploring the Outdoors 🎵🎹  ✈️  🥾 ⛰️  ',
                1000,
              ]}
              wrapper="h3"
              speed={40}
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                padding: '15px',
                borderRadius: '10px',
                fontFamily: 'monospace',
                margin: '0',
                color: isBackgroundDark ? 'white' : 'black',
                background: 'transparent',
                backdropFilter: 'blur(90%)',
                maxHeight: '14rem',
                display: 'inline-block',
                marginLeft: '15px',
                marginRight: '15px',
                marginBottom: '15px',
              }}
              repeat={Infinity}
            />
          </div>

          <p
            className={`${welcomeColor} text-lg sm:text-base lg:text-xl leading-relaxed mb-6`}
          >
            Welcome to my little corner of of the internet! Here I try to
            highlight some of my skills and experiences. I love and enjoy
            solving problems through code. Whether you're here to explore my
            work or just curious, feel free to reach out. I'm always up for a
            good conversation!
          </p>
          <div>
            <a
              href="https://calendly.com/mkhanyisi-g/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-2 py-2 mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-900 to-blue-300 hover:bg-slate-800 mt-1 lg:mt-3">
                <span className="text-blue-700 block text-lg bg-gray-100 hover:bg-gray-400 rounded-full px-3 py-2 font-extrabold">
                  Get In Touch
                </span>
              </button>
            </a>
          </div>

          <div className="flex items-center py-5">
            <div className="flex space-x-4">
              <SocialIcon
                network="linkedin"
                url="https://www.linkedin.com/in/mkhanyisifabo/"
                bgColor="#71717a"
                fgColor={isLinkedInHovered ? '#0077cc' : '#fff'}
                onMouseEnter={() => setIsLinkedInHovered(true)}
                onMouseLeave={() => setIsLinkedInHovered(false)}
                style={{ height: 45, width: 45 }}
              />
              <SocialIcon
                network="github"
                url="https://github.com/mkhanyisig"
                bgColor="#71717a"
                fgColor={isGitHubHovered ? '#0077cc' : '#fff'}
                onMouseEnter={() => setIsGitHubHovered(true)}
                onMouseLeave={() => setIsGitHubHovered(false)}
                style={{ height: 45, width: 45 }}
              />
            </div>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 mb-11">
          <div
            className={`${
              isBackgroundDark ? 'bg-[#121212]' : 'bg-white'
            } lg:w-[320px] lg:h-[320px] sm:w-[200px] sm:py-11  relative hero_image-wrapper`}
          >
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
