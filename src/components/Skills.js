import React from 'react';
import { 
  FaGitAlt, 
  FaGithub, 
  FaReact, 
  FaBootstrap, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaJava 
} from 'react-icons/fa'; 

import { 
  SiPostman, 
  SiSpring, 
  SiMysql, 
  SiPython 
} from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const data = [
    {
      title: 'Tools',
      content: [
        { icon: <FaGitAlt />, name: 'Git' },
        { icon: <FaGithub />, name: 'Github' },
        { icon: <SiPostman />, name: 'Postman' },
      ],
    },
    {
      title: 'Frameworks',
      content: [
        { icon: <SiSpring />, name: 'Spring' },
        { icon: <FaReact />, name: 'React' },
        { icon: <FaBootstrap />, name: 'Bootstrap' },
        { icon: <RiTailwindCssFill />, name: 'TailWind' },
      ],
    },
    {
      title: 'Languages',
      content: [
        { icon: <FaHtml5 />, name: 'HTML' },
        { icon: <FaCss3Alt />, name: 'CSS' },
        { icon: <FaJs />, name: 'JavaScript' },
        { icon: <FaJava />, name: 'Java' },
        { icon: <SiMysql />, name: 'MySQL' },
        { icon: <SiPython />, name: 'Python' },
      ],
    },
  ];

  return (
    <div className='text-center pt-20'>
      <h1 className='text-4xl font-bold'>Skills</h1>
      <p className='text-xl font-semibold mt-2 text-gray-600'>My Technical Skills</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 p-5 lg:w-4/6 mx-auto">
      {data.map((item) => (
        <div key={item.title} className="my-6">
          <div className="border p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
            <div className="grid grid-cols-2 gap-4">
              {item.content.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className="mr-2">{skill.icon}</div>
                  <div>{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      </div>

    </div>
  );
};

export default Skills;
