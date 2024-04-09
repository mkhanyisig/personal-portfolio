"use client";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

const EmailSection = ({ isBackgroundDark }) => {
  const connectColor = isBackgroundDark ? "text-zinc-500" : "text-zinc-900";
  const subjectColor = isBackgroundDark ? "text-white" : "text-black";
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });

      console.log("response:", response);

      if (response.status === 200) {
        alert("Your message has been sent successfully!");
      } else {
        alert(
          "An error occurred while sending your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending your message. Please try again.");
    }
  };

  return (
    <section
      className={` ${
        isBackgroundDark ? "bg-[#121212]" : "bg-white"
      } grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4`}
      id="contact"
    >
      <div>
        <h5 className={`text-red-700 text-3xl font-bold my-2`}>
          Let's Connect
        </h5>
        <p className={`${connectColor} mb-4 font-semibold max-w-md`}>
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="mb-5">
          <a
            href="https://calendly.com/mkhanyisi-g/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-2 py-2 mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-slate-900 to-slate-300 hover:bg-slate-800 mt-1">
              <span className="text-red-400 block text-lg bg-gray-100 hover:bg-gray-300 rounded-full px-3 py-2 font-extrabold">
                Schedule A Call
              </span>
            </button>
          </a>
        </div>
        <div className="flex flex-row gap-2 ">
          <SocialIcon
            url="https://www.linkedin.com/in/mkhanyisifabo/"
            bgColor="#71717a"
            fgColor={isLinkedInHovered ? "#0077cc" : "#fff"}
            onMouseEnter={() => setIsLinkedInHovered(true)}
            onMouseLeave={() => setIsLinkedInHovered(false)}
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://github.com/mkhanyisig"
            bgColor="#71717a"
            fgColor={isGitHubHovered ? "#0077cc" : "#fff"}
            onMouseEnter={() => setIsGitHubHovered(true)}
            onMouseLeave={() => setIsGitHubHovered(false)}
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className={`${subjectColor} block mb-2 text-base font-medium `}
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              required
              placeholder="your_email@domainname.com"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="subject"
              className={`${subjectColor} block mb-2 text-base font-medium `}
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              required
              placeholder="Your subject line here..."
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className={`${subjectColor} block mb-2 text-base font-medium `}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="message"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              required
              placeholder="Let's talk about..."
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-[#71717a] hover:bg-slate-500 text-white font-bold  text-lg py-2.5 px-5 rounded-lg w-full"
            >
              {" "}
              Send message{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
