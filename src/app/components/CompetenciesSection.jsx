import React from 'react';
import { FaPython, FaJsSquare, FaJava, FaTools, FaReact, FaDocker, FaAws, FaGit, FaNodeJs, FaLaravel } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";
import { IoStorefrontSharp } from "react-icons/io5";
import { SiTypescript, SiRubyonrails, SiTerraform, SiRuby, SiPhp, SiPostgresql, SiMysql, SiAmazondynamodb, SiPandas, SiSelenium } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { PiFileSqlBold } from "react-icons/pi";

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
                <li className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <FaPython className="mr-2 text-2xl" />
                    <span className="w-1/5">Python</span>
                </div>
                <div className="w-2/5 bg-gray-400 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
                </li>
                <li className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <FaJsSquare className="mr-2 text-2xl" />
                    <span className="w-1/5">JavaScript</span>
                </div>
                <div className="w-2/5 bg-gray-400 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '84%' }}></div>
                </div>
                </li>
                <li className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <SiTypescript className="mr-2 text-2xl" />
                    <span className="w-1/5">TypeScript</span>
                </div>
                <div className="w-2/5 bg-gray-400 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '79%' }}></div>
                </div>
                </li>
                <li className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <FaJava className="mr-2 text-2xl" />
                    <span className="w-2/5">Java</span>
                </div>
                <div className="w-2/5 bg-gray-400 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '68%' }}></div>
                </div>
                </li>
                <li className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <PiFileSqlBold className="mr-2 text-2xl" />
                    <span className="w-2/5">SQL</span>
                </div>
                <div className="w-2/5 bg-gray-400 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                </li>
                <li className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <SiPhp className="mr-2 text-2xl" />
                    <span className="w-1/5">PHP</span>
                </div>
                <div className="w-2/5 bg-gray-400 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                </li>
                <li className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <SiRuby className="mr-2 text-2xl" />
                    <span className="w-1/5">Ruby</span>
                </div>
                <div className="w-2/5 bg-gray-400 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '38%' }}></div>
                </div>
                </li>
                
            </ul>
        </div>

        <div className="skills-category text-center p-6 border rounded-lg shadow-lg">
              <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Frameworks and Libraries</h3>
              <ul className={`${textColor}`}>
                  <li className="flex items-center mb-2" style={{ marginLeft: '10%' }}>
                    <FaReact className="mr-2 text-2xl" />
                    <span>React</span>
                  </li>

                  <li className="flex items-center mb-2" style={{ marginLeft: '10%' }}>
                      <RiNextjsFill className="mr-2 text-2xl" />
                      <span className="ml-2">NextJS</span>
                  </li>
                  <li className="flex items-center mb-2" style={{ marginLeft: '10%' }}>
                      <SiRubyonrails className="mr-2 text-2xl" />
                      <span className="ml-2">Ruby on Rails</span>
                  </li>
                  <li className="flex items-center mb-2" style={{ marginLeft: '10%' }}>
                      <FaLaravel className="mr-2 text-2xl" />
                      <span className="ml-2">Laravel</span>
                  </li>
                 
              </ul>
            </div>

        <div className="skills-category text-center p-6 border rounded-lg shadow-lg">
          <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Tools and Technologies</h3>
          <ul className={`${textColor}`}>
              <li className="flex items-center mb-2" style={{ marginLeft: '10%' }}>
                <FaNodeJs className="mr-2 text-2xl" />
                <span className="ml-2">Node.js</span>
              </li>
              <li className="flex items-center mb-2" style={{ marginLeft: '10%' }}>
                <FaAws className="mr-2 text-2xl" />
                <span className="ml-2">AWS</span>
              </li>
              <li className="flex items-center mb-2" style={{ marginLeft: '10%' }}>
                <FaGit className="mr-2 text-2xl" />
                <span className="ml-2">Git</span>
              </li>
              <li className="flex items-center mb-2" style={{ marginLeft: '10%' }}>
                  <SiPostgresql className="mr-2 text-2xl" />
                  <span className="ml-2">PostgreSQL</span>
              </li>
              <li className="flex items-center mb-2" style={{ marginLeft: '10%' }}>
                  <SiMysql className="mr-2 text-2xl" />
                  <span className="ml-2">MySQL</span>
              </li>
              <li className="flex items-center mb-2" style={{ marginLeft: '10%' }}>
                  <SiAmazondynamodb className="mr-2 text-2xl" />
                  <span className="ml-2">DynamoDB</span>
              </li>
              <li className="flex items-center mb-2" style={{ marginLeft: '10%' }}>
                <FaDocker className="mr-2 text-2xl" />
                <span className="ml-2">Docker</span>
              </li>
              <li className="flex items-center mb-2" style={{ marginLeft: '10%' }}>
                <SiTerraform className="mr-2 text-2xl" />
                <span className="ml-2">Terraform</span>
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