import React from 'react';
import { FaPython, FaJsSquare, FaJava, FaTools, FaReact, FaDocker, FaAws, FaGit, FaNodeJs, FaLaravel, FaHtml5 } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";
import { IoStorefrontSharp } from "react-icons/io5";
import { SiTypescript, SiRubyonrails, SiTerraform, SiRuby, SiPhp, SiPostgresql, SiMysql, SiAmazondynamodb, SiPandas, SiSelenium, SiGraphql } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { PiFileSqlBold } from "react-icons/pi";

const CompetenciesSection = ({ isBackgroundDark }) => {
  const textColor = isBackgroundDark ? 'text-white' : 'text-black';
  const bgColor = isBackgroundDark ? 'bg-[#121212]' : 'bg-white';
  const sectionBackground = isBackgroundDark ? 'bg-gray-900' : 'bg-gray-400';

  return (
    <section className={` ${bgColor} py-2`} id="competencies">
      <div className="container mx-auto px-4">
        <div className="main-title text-center mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold  mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-200  to-blue-900">
              Competencies
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={`service text-center p-6 ${sectionBackground} border-b rounded-b-lg shadow-lg`}>
            <div className="service-icon  mb-4 text-4xl">
                <div style={{ display: 'inline-block' }}><IoMdSettings /></div>
                <div style={{ display: 'inline-block', marginLeft: '5px' }}><FaTools /></div>
            </div>
            <h4 className={`text-xl font-semibold mb-2 ${textColor}`}>Backend Development</h4>
            <p className={`${textColor}`} style={{ textAlign: 'left' }}>I wield a diverse skill set spanning various languages and frameworks for Web servers and other types of task automation as well. Beyond server-side applications, I’ve scripted functions for various tasks that consume different integrations including third parties, and managed data persistence across SQL and NoSQL databases. My deployment proficiency extends to AWS cloud services, as well as Docker containerization with exposed REST endpoints.</p>
            <br/>
            <p className={`${textColor}`} style={{ textAlign: 'left' }}>I approach problems methodically, adhering to best practices and design patterns to ensure robust scalability and performance. Experienced in API integration and crafting bespoke solutions expanding functionality, including writing controller functions, and leveraging third-party services. I’ve contributed to both monolithic and microservice architectures, including serverless deployments.  </p>
            <br/>
            <p className={`${textColor}`} style={{ textAlign: 'left' }}>My capabilities encompass optimizing data structures, service calls, and database operations while prioritizing security best practices.</p>
          </div>
          <div className={`service text-center p-6 ${sectionBackground} border-b rounded-b-lg shadow-lg`}>
            <div className="service-icon mb-4 text-4xl">
                <div style={{ display: 'inline-block' }}><IoStorefrontSharp/></div>
            </div>
            <h4 className={`text-xl font-semibold mb-2 ${textColor}`}>Frontend Development</h4>
            <p className={`${textColor}`} style={{ textAlign: 'left' }}>I am proficient in developing intuitive and visually appealing user interfaces, bringing the intended aesthetic and responsiveness of a page to life. I have collaborated closely with design teams and product stakeholders to translate mockups and wireframes into polished front-end implementations that align with the intended user experience on the client side.</p>
            <br/>
            <p className={`${textColor}`} style={{ textAlign: 'left' }}>With a strong foundation in vanilla HTML, CSS, and JavaScript, I have honed my skills in modern front-end frameworks such as React.js and Vue.js. My expertise extends to creating responsive designs that deliver exceptional user experiences across various devices and screen sizes. Additionally, I possess a keen eye for detail and a commitment to optimizing performance and accessibility standards to ensure that front-end applications are both efficient and inclusive.</p>
          </div>
          <div className={`service text-center p-6 ${sectionBackground} border-b rounded-b-lg shadow-lg`}>
          <div className="service-icon mb-4 text-4xl">
                <div style={{ display: 'inline-block' }}><FaRobot/></div>
            </div>
            <h4 className={`text-xl font-semibold mb-2 ${textColor}`}>Machine Learning</h4>
            <p className={`${textColor}`}  style={{ textAlign: 'left' }}>My academic coursework and practical projects have equipped me with a solid understanding of statistical machine learning, deep learning, and data analysis, enabling me to develop robust and effective machine learning solutions. I have substantial experience in data extraction, cleaning, and standardization, preparing datasets for research and model training purposes.</p>
            <br/>
            <p className={`${textColor}`}  style={{ textAlign: 'left' }}>While my direct production experience with deploying machine learning models is limited, I am eager to contribute to roles where my skills can support model development and deployment operations.</p>
          </div>
          
              
        </div>
        <div className="mt-12">
          <div className="main-title text-center mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold  mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-200  to-blue-900">
                  Skills
                </span>
              </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
         
          <div className={`skills-category text-center ${sectionBackground} p-6 border-b rounded-lg shadow-lg`}>
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
                          <FaHtml5 className="mr-2 text-2xl" />
                          <span className="w-1/5">HTML/CSS</span>
                      </div>
                      <div className="w-2/5 bg-gray-400 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
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

        <div className={`skills-category text-center ${sectionBackground} p-6 border-b rounded-b-lg shadow-lg`} >
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
                      <SiGraphql className="mr-2 text-2xl" />
                      <span className="ml-2">GraphQL</span>
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

          <div className={`skills-category text-center ${sectionBackground} p-6 border-b rounded-lg shadow-lg`}>
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
              <li className="flex items-center mb-2" style={{ marginLeft: '10%' }}>
                <FaGit className="mr-2 text-2xl" />
                <span className="ml-2">Git</span>
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