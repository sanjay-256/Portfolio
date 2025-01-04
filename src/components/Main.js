import React, { useState } from 'react'
import Typing from './Typing'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiMiniDocumentArrowDown } from "react-icons/hi2";
import About from './About';
import Skills from './Skills';
import Timeline from './Timeline';
import Projects from './Projects';
import Contact from './Contact';
import { Link } from 'react-scroll';
import { IoPersonCircle } from "react-icons/io5";
import { TbCodeCircle2Filled } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { FaCircleArrowUp } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";

const Main = () => {
    const [icon, setIcon] = useState('');
    return (
        <div className='relative'>
                <Link to="main" smooth={true} duration={500} className="cursor-pointer my-1 fixed bottom-5 right-5 flex flex-col items-center" onClick={() => { setIcon("main") }}> <FaCircleArrowUp className='text-4xl bg-teal-300 rounded-xl p-2 ' /></Link>
            <div className="flex justify-center gap-3 fixed top-0 w-full">
                <Link to="about" smooth={true} duration={500} className="cursor-pointer my-1 flex flex-col items-center" onClick={() => { setIcon("about") }}><div className={`${icon === "about" ? "h-4" : "h-1"} w-4 bg-teal-300`}></div> <IoPersonCircle className='text-4xl bg-teal-300 rounded-xl p-2 ' /> </Link>
                <Link to="skills" smooth={true} duration={500} className="cursor-pointer my-1 flex flex-col items-center" onClick={() => { setIcon("skills") }}><div className={`${icon === "skills" ? "h-4" : "h-1"} w-4 bg-teal-300`}></div><TbCodeCircle2Filled className='text-4xl bg-teal-300 rounded-xl p-2 ' />  </Link>
                <Link to="qualification" smooth={true} duration={500} className="cursor-pointer my-1 flex flex-col items-center" onClick={() => { setIcon("qualification") }}><div className={`${icon === "qualification" ? "h-4" : "h-1"} w-4 bg-teal-300`}></div><FaGraduationCap className='text-4xl bg-teal-300 rounded-xl p-2 ' />  </Link>
                <Link to="projects" smooth={true} duration={500} className="cursor-pointer my-1 flex flex-col items-center" onClick={() => { setIcon("projects") }}><div className={`${icon === "projects" ? "h-4" : "h-1"} w-4 bg-teal-300`}></div> <FaLaptopCode className='text-4xl bg-teal-300 rounded-xl p-2 ' /> </Link>
                <Link to="internship" smooth={true} duration={500} className="cursor-pointer my-1 flex flex-col items-center" onClick={() => { setIcon("internship") }}> <div className={`${icon === "internship" ? "h-4" : "h-1"} w-4 bg-teal-300`}></div> <MdOutlineWork className='text-4xl bg-teal-300 rounded-xl p-2' /></Link>
                <Link to="contact" smooth={true} duration={500} className="cursor-pointer my-1 flex flex-col items-center" onClick={() => { setIcon("contact") }}> <div className={`${icon === "contact" ? "h-4" : "h-1"} w-4 bg-teal-300`}></div> <BiSolidContact className='text-4xl bg-teal-300 rounded-xl p-2' /></Link>
            </div>
            <section className='main lg:w-4/6 mx-auto pt-5'>
                <div className="grid md:grid-cols-2">
                    <div className="content p-5">
                        <div className="text-2xl md:text-3xl py-2"> Hello, I'M <span className='text-teal-500 font-medium text-3xl md:text-4xl'>Sanjay Kumar</span> </div>
                        <Typing />
                        <p className="text-gray-500 font-sans text-md mx-auto text-justify my-1">
                            "Motivated Computer Science professional skilled in Python, React JS, and CSS Frameworks, with hands-on experience in full-stack development using Java. Proficient in both front-end and back-end technologies, I excel at problem-solving and thrive in collaborative environments"
                        </p>
                        <div className="flex justify-evenly items-center my-5">
                            <div className="text-3xl flex justify-center gap-5">
                                <FaGithub />
                                <FaLinkedin />
                            </div>
                            <a className='bg-cyan-500 text-white px-4 py-2 rounded-md flex items-center gap-2' href="/SANJAY KUMAR D.pdf" download="Resume_SanjayKumar.pdf">Resume<HiMiniDocumentArrowDown className='text-xl' /></a>
                        </div>
                    </div>
                    <div className="image mx-auto p-5">
                        <img src="main.png" alt="main" className='bg-gradient-to-b from-teal-500 rounded-full w-80 h-80' />
                    </div>
                </div>
            </section>
            <section className="about pt-10">
                <About />
            </section>
            <section className="skills">
                <Skills />
            </section>
            <section className="qualification">
                <Timeline />
            </section>
            <section className='projects lg:w-4/6 mx-auto pt-16'>
                <Projects />
            </section>
            <section className="internship lg:w-4/6 mx-auto">
                <div className="py-24 mx-2">
                    <div className="text-center">
                        <h1 className='text-4xl font-bold'>Internship</h1>
                        <p className='text-xl font-semibold mt-2 text-gray-600'>Freelance <span className="text-sm"> ~ Ability Fusion</span> </p>
                    </div>
                    <div className="">
                        <p className="text-center text-lg py-1">
                            "As a front-end developer, I have designed and developed web applications by converting Figma templates into functional and responsive websites. I collaborated closely with senior developers, working extensively with technologies like React, Bootstrap, Tailwind CSS, and Material-Ul, to ensure a seamless and dynamic user experience"
                        </p>
                    </div>
                </div>
            </section>
            <section className="contact lg:w-4/6 mx-auto pt-16">
                <Contact />
            </section>
            <section className="footer mt-20">
                <div className="h-56 bg-slate-100 flex justify-center text-center items-center text-medium text-lg font-sans">
                    𝘤𝘰𝘱𝘺𝘳𝘪𝘨𝘩𝘵 @2024 𝘢𝘭𝘭 𝘳𝘪𝘨𝘩𝘵𝘴 𝘳𝘦𝘴𝘦𝘳𝘷𝘦𝘥 | 𝘵𝘩𝘪𝘴 𝘵𝘦𝘮𝘱𝘭𝘢𝘵𝘦 𝘪𝘴 𝘮𝘢𝘥𝘦 𝘣𝘺 ~Sanjay
                </div>
            </section>
        </div>
    )
}

export default Main