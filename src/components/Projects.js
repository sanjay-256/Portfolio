import React from 'react'
import { CiShare1 } from 'react-icons/ci';

const Projects = () => {
    const data=[
        {
            "id": 1,
        "image": "food_app.jpg",
        "title": "Food Ordering Application (User)",
        "content": "This application allows users to browse menus, place orders, and manage their cart. I utilized React for building dynamic and responsive components, Bootstrap for styling the user interface, and Firebase for real-time database management.",
        "technologies": ["React", "Tailwind", "Firebase"], 
        "links": [
          {
            "icon": <CiShare1/>,
            "name": "Vist",
            "link": "https://kaimanam.vercel.app/"
          }
        ]
      },
      {
        "id": 2,
    "image": "admin_app.jpg",
    "title": "Food Ordering Application (Admin)",
    "content": "This application allows admin to manage menus, place orders, food items and manage the billing section. I utilized React for building dynamic and responsive components, Bootstrap for styling the user interface, and Firebase for real-time database management.",
    "technologies": ["React", "Tailwind", "Firebase"], 
    "links": [
      {
        "icon": <CiShare1/>,
        "name": "Vist",
        "link": "https://admin-nu-sooty.vercel.app/"
      }
    ]
  },
  {
    "id": 3,
"image": "allinall.jpg",
"title": "All In All",
"content": "I have developed a full-stack e-commerce application for a dress shopping experience, utilizing React and Tailwind CSS for the front-end, and Java Spring Boot for the back-end. The application allows users to browse and select products, add them to their cart, and make secure purchases.",
"technologies": ["React", "Tailwind", "Java","Springboot","postman"], 
"links": [
  {
    "icon": <CiShare1/>,
    "name": "Vist",
    "link": "https://kaimanam.vercel.app/"
  }
]
},
    ]
  return (
    <div className=''>
      <div className="text-center mb-10">
      <h1 className='text-4xl font-bold'>Projects</h1>
      <p className='text-xl font-semibold mt-2 text-gray-600'>My Works</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.map((item)=>(
            <div className="card w-80 border rounded mx-auto p-5">
                <div className="">
                <img src={item.image} alt={item.imgAlt} className='h-48'/>
                </div>
                <div className="my-2 font-medium text-lg">{item.title}</div>
                <p className="font-sans text-gray-700 text-justify">{item.content}</p>
                <div className="flex flex-wrap gap-2 my-4">
                {item.technologies.map((lang, index) => (
                  <span key={index} className="p-1 px-2 bg-gray-300 rounded-md text-xs">{lang}</span>
                ))}
              </div>
              {item.links.map((link)=>(
                <a href={link.link} className="flex items-center gap-2">{link.name} <span className="text-xl">{link.icon}</span> </a>
              ))}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
