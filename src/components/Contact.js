import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import TextInput from './TextInput';
import { HiPencil } from "react-icons/hi2";

const Contact = () => {

  const [data, setData] = useState({ name: "", email: "", subject: "", body: "" });
  const [load, setLoad] = useState(false);

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submit = () => {
    setLoad(true);
    const time = setInterval(() => {
      setLoad(false);
      setData({ ...data, name: "", email: "", subject: "", body: "" });
      clearInterval(time);
    }, 5000);
  }

  return (
    <div className=''>
      <div className="text-center mb-10">
        <h1 className='text-4xl font-bold'>Contact</h1>
        <p className='text-xl font-semibold mt-2 text-gray-600'>Connect Through</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 m-4 gap-4">
        <div className=" text-center mx-auto">
          <p className="font-medium">LinkedIn</p>
          <div className="">
            <FaLinkedin className='text-2xl mx-auto mt-3' />
            <p className="text-gray-500 flex justify-center gap-2 items-center group cursor-pointer"><a href="https://www.linkedin.com/in/sanjay-kumar-857443283/">Let's Connect</a> <FaArrowRight className='transform transition-transform group-hover:translate-x-2 ' /></p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="font-medium flex gap-2">Write an e-mail <HiPencil /></div>
          <TextInput name="name" value={data.name} label="Name" type={"text"} onChange={change} />
          <TextInput name="email" value={data.email} label="Email" type={"email"} onChange={change} />
          <TextInput name="subject" value={data.subject} label="Subject" type={"text"} onChange={change} />
          <TextInput name="body" value={data.body} label="Body" type={"text"} onChange={change} />
          <div onClick={submit} className={`px-3 py-1 rounded text-white font-medium cursor-pointer ${load ? "bg-red-500" : "bg-green-500"}`}>{load ? "submiting..." : "submit"}</div>
        </div>
      </div>
    </div>
  )
}

export default Contact
