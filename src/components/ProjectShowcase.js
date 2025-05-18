"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Shinde Constructions",
    description: "Professional construction business website with project listings and inquiry form.",
    tag: "Business",
    image: "/const.png",
    video: "/const.mp4",
    link: "https://shindeconstructions.vercel.app/"
  },
  {
    id: 2,
    title: "Sundown Studio",
    description: "Creative design portfolio with scroll animations and vibrant theme.",
    tag: "Competion",
    image: "/Sundown.png",
    video: "/Sundown.mp4",
    link: "https://viggghnesh1711.github.io/Sundown/"
  },
  {
    id: 3,
    title: "Work Studio",
    description: "Minimal agency layout showcasing clients and work timeline.",
    tag: "Images Unavilable",
    image: "/work.png",
    video: "/work.mp4",
    link: "https://viggghnesh1711.github.io/WorkStudio/"
  },
  {
    id: 4,
    title: "Photo Studio",
    description: "Clean photo gallery layout with booking options and image transitions.",
    tag: "Photo Agency",
    image: "/Photost.png",
    video: "/Photost.mp4",
    link: "https://viggghnesh1711.github.io/PhotoStudio/"
  },
  {
    id: 5,
    title: "Tech Explore",
    description: "Tech blog-style site with dark UI and hover-based navigation.",
    tag: "Event",
    image: "/tech.png",
    video: "/tech.mp4",
    link: "https://viggghnesh1711.github.io/TechExplore/"
  },
  {
    id: 6,
    title: "FitTrack",
    description: "Track workouts, get insights, and support development — all-in-one fitness app.",
    tag: "Web-App",
    image: "/fit.png",
    video: "/fittrack.mp4",
    link: "https://www.fittrack.fun/"
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6
    }
  })
}

export default function ProjectShowcase() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="min-h-screen bg-stone-200 py-16 px-6">
      
       <div className="flex flex-col md:flex-row items-start justify-between gap-3 sm:gap-6 mb-10">
    {/* Left: Animated Heading */}
    <motion.h1
      initial={{ opacity: 0, x: -30, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight md:w-1/2"
    >
      MY <span className="text-primary italic text-4xl sm:text-6xl">PROJECTS</span>
    </motion.h1>

    {/* Right: Description */}
    <motion.div 
    initial={{ opacity: 0, x: -30, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="md:w-1/2 text-stone-600 text-lg md:text-base">
      <p
       >
        Explore a curated collection of web and mobile applications that showcase my skills in
        design, development, and real-world problem-solving.<br>
        </br>
        <span className='text-sm text-stone-400 animate-bounce translate-1.5'>CLICK ON IMAGE</span>
      </p>
    </motion.div>
  </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-8xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ amount: 0.3 }}
            className="bg-stone-50 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div
              className="w-full h-40 sm:h-64 relative group"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-opacity duration-500 ${hovered === project.id ? 'opacity-0' : 'opacity-100'}`}
              />
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered === project.id ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>

            <div className="p-5 py-2 backdrop-blur-2xl">
              <h2 className="text-xl font-semibold text-stone-800 mb-1">{project.title}</h2>
              <p className="text-sm text-stone-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs px-3 py-1 bg-stone-200 text-stone-700 rounded-full">
                  {project.tag}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center text-stone-700 hover:text-black text-sm"
                >
                  Visit <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
