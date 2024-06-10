import React from 'react';
import { FaPython, FaJsSquare, FaJava, FaTools, FaReact, FaDocker, FaAws, FaGit, FaNodeJs, FaLaravel } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";
import { IoStorefrontSharp } from "react-icons/io5";
import { SiTypescript, SiRubyonrails, SiTerraform } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";

const CompetenciesSection = ({ isBackgroundDark }) => {
  const textColor = isBackgroundDark ? 'text-white' : 'text-black';
  const bgColor = isBackgroundDark ? 'bg-[#121212]' : 'bg-white';

  return (
    <section className={` ${bgColor} py-2`} id="competencies">
      <div className="container mx-auto px-4">
        <div className="main-title text-center mb-8">
          <h2 className={`text-3xl font-bold ${textColor}`}>Competencies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service text-center p-6 border rounded-lg shadow-lg">
            <div className="service-icon mb-4 text-4xl">
                <div style={{ display: 'inline-block' }}><IoMdSettings /></div>
                <div style={{ display: 'inline-block', marginLeft: '5px' }}><FaTools /></div>
            </div>
            <h4 className={`text-xl font-semibold mb-2 ${textColor}`}>Backend Development</h4>
            <p className={`${textColor}`}>I specialize in creating scalable, maintainable, and efficient server-side applications, demonstrating a deep understanding of both the architecture and the code that powers them. My proficiency encompasses a wide range of technologies, including Node.js, Python, Java, and SQL databases.</p>
            <p className={`${textColor}`}>Not only am I experienced in integrating APIs for enhanced functionality, but I also excel in developing custom APIs and server-side solutions from the ground up. This includes designing and managing server architectures to ensure seamless end-to-end solutions that are robust and scalable.</p>
            <p className={`${textColor}`}>My capability extends to working with complex data structures, optimizing database operations, and implementing security best practices, underlining my role as a comprehensive backend engineer.</p>
          </div>
          <div className="service text-center p-6 border rounded-lg shadow-lg">
            <div className="service-icon mb-4 text-4xl">
                <div style={{ display: 'inline-block' }}><IoStorefrontSharp/></div>
            </div>
            <h4 className={`text-xl font-semibold mb-2 ${textColor}`}>Frontend Development</h4>
            <p className={`${textColor}`}>Skilled in creating intuitive, responsive, and visually appealing user interfaces. Proficient in HTML, CSS, JavaScript, and modern frameworks like React.js and Vue.js. Adept at balancing user experience with performance and scalability to deliver top-notch web applications.</p>
          </div>
          <div className="service text-center p-6 border rounded-lg shadow-lg">
          <div className="service-icon mb-4 text-4xl">
                <div style={{ display: 'inline-block' }}><FaRobot/></div>
            </div>
            <h4 className={`text-xl font-semibold mb-2 ${textColor}`}>Machine Learning</h4>
            <p className={`${textColor}`}>Well-versed in designing and implementing machine learning models to solve complex problems. Skilled in using libraries such as TensorFlow, PyTorch, and Scikit-learn. Experienced in data preprocessing, model training and evaluation, and deploying models in a production environment. Committed to leveraging machine learning to drive business growth and innovation.</p>
          </div>
          
              
        </div>
        <div className="mt-12">
          <div className="main-title text-center mb-8">
            <h2 className={`text-3xl font-bold ${textColor}`}>Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="skills-category text-center p-6 border rounded-lg shadow-lg">
              <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Programming Languages</h3>
              <ul className={`${textColor}`}>
                <li className="flex items-center justify-center mb-2">
                  <FaPython className="mr-2 text-2xl" />
                  <span>Python</span>
                </li>
                <li className="flex items-center justify-center mb-2">
                  <FaJsSquare className="mr-2 text-2xl" />
                  <span>JavaScript</span>
                </li>
                <li className="flex items-center justify-center mb-2">
                <SiTypescript className="mr-2 text-2xl" />
                    <span>TypeScript</span>
                </li>
                <li className="flex items-center justify-center mb-2">
                  <FaJava className="mr-2 text-2xl" />
                  <span>Java</span>
                </li>
              </ul>
            </div>
            <div className="skills-category text-center p-6 border rounded-lg shadow-lg">
              <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Frameworks and Libraries</h3>
              <ul className={`${textColor}`}>
                <li className="flex items-center justify-center mb-2">
                  <FaReact className="mr-2 text-2xl" />
                  <span>React</span>
                </li>
                <li className="flex items-center justify-center mb-2">
                    <SiRubyonrails className="mr-2 text-2xl" />
                    <span>Ruby on Rails</span>
                </li>
                <li className="flex items-center justify-center mb-2">
                    <FaLaravel className="mr-2 text-2xl" />
                    <span>Laravel</span>
                </li>
                
              </ul>
            </div>
            <div className="skills-category text-center p-6 border rounded-lg shadow-lg">
              <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Tools and Technologies</h3>
              <ul className={`${textColor}`}>
                <li className="flex items-center justify-center mb-2">
                  <FaDocker className="mr-2 text-2xl" />
                  <span>Docker</span>
                </li>
                <li className="flex items-center justify-center mb-2">
                  <FaAws className="mr-2 text-2xl" />
                  <span>AWS</span>
                </li>
                <li className="flex items-center justify-center mb-2">
                  <FaNodeJs className="mr-2 text-2xl" />
                  <span>Node.js</span>
                </li>
                <li className="flex items-center justify-center mb-2">
                  <FaGit className="mr-2 text-2xl" />
                  <span>Git</span>
                </li>
                <li className="flex items-center justify-center mb-2">
                    <SiTerraform className="mr-2 text-2xl"/>
                    <span> Terraform </span>
                </li>

              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;