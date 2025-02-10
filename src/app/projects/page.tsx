'use client'
import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import PageWrapper from '@/components/layout/PageWrapper'

const TAGS = ['AWS', 'Security', 'Python', 'Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Cloud', 'CTF', 'IoT', 'OpenCV']

export default function ProjectsPage() {
 const [selectedTag, setSelectedTag] = useState<string | null>(null)

 const projects = [
   {
     title: "ParkSmart",
     description: "AWS-based IoT Parking Web App",
     tags: ['AWS', 'IoT', 'Next.js', 'React'],
     link: "/projects/ParkSmart"
   },
   {
    title: "MorseV",
    description: "Computer Vision-based Maritime Morse Code Interpreter that detects, decodes and securely stores light-based Morse code signals in real-time. Features vessel tracking, encrypted storage, and emergency alert system.",
    tags: ['Python', 'OpenCV', 'Security', 'IoT'],
    link: "/projects/MorseV"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio and blog platform built with Next.js, featuring a responsive design, dynamic content filtering, and interactive components. Showcases projects, technical writeups, and cybersecurity expertise.",
    tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    link: "/projects/portfolio"
  },
   // ... other projects
 ]

 const filteredProjects = selectedTag 
   ? projects.filter(project => project.tags.includes(selectedTag))
   : projects

 return (
   <PageWrapper>
     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
       <div className="max-w-7xl mx-auto px-8 py-12">
         <h1 className="text-4xl font-bold mb-8">Projects</h1>
         
         {/* Tags filter */}
          <div className="mb-8">
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Filter by Technology</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-4 py-2 rounded-full transition-all duration-200 ${
                    !selectedTag 
                      ? 'bg-blue-600 text-white shadow-md' // Changed from bg-primary
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200' // Changed hover state
                  }`}
                >
                  All
                </button>
                {TAGS.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full transition-all duration-200 ${
                      selectedTag === tag 
                        ? 'bg-blue-600 text-white shadow-md' // Changed from bg-primary
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200' // Changed hover state
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

         {/* Projects grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {filteredProjects.map((project, index) => (
             <ProjectCard 
               key={index}
               {...project}
             />
           ))}
         </div>
       </div>
     </div>
   </PageWrapper>
 )
}