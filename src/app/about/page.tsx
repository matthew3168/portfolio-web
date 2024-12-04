'use client'
import PageWrapper from '@/components/layout/PageWrapper'
import { Github, Linkedin, Mail, Terminal, Code, Plane, Bike, Coffee } from 'lucide-react'
import Link from 'next/link'

const skills = {
  "Languages & Frameworks": [
    "Python", "JavaScript/TypeScript", "React", "Next.js", "Node.js", "Java"
  ],
  "Cloud & DevOps": [
    "AWS", "Docker", "VMWare vSphere", "Terraform", "CI/CD", "Linux"
  ],
  "Security": [
    "Web Security", "Network Security", "Digital Forensics", "Penetration Testing"
  ],
  "Tools & Technologies": [
    "Git", "SQL", "SQLite","MongoDB", "Redis"
  ]
}

const certifications = [
  {
    name: "AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services",
    date: "2024"
  },
  {
    name: "Overview of IoT Technologies",
    issuer: "Huawei",
    date: "2024"
  }
]

const hobbies = [
    {
      icon: Terminal,
      name: "CTF Competitions",
      description: "Participating in cybersecurity challenges and hackathons"
    },
    {
      icon: Plane,
      name: "Travelling",
      description: "Exploring new cuisines and rustic history around the world"
    },
    {
      icon: Bike,
      name: "Road Cycling",
      description: "Training around Singapore on two wheels"
    }
  ]

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-8">
          
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/profile.jpg" 
                alt="Matthew"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">Matthew</h1>
              <p className="text-xl text-gray-600 mb-6">
                Cybersecurity Enthusiast & Full Stack Developer
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-600 leading-relaxed">
                I'm a final-year Cybersecurity student passionate about building secure and scalable applications. 
                With a strong foundation in both offensive and defensive security, I enjoy tackling complex 
                problems and contributing to the tech community through CTF writeups and open-source projects.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-semibold text-lg mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Certifications</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center border-b last:border-0 pb-4 last:pb-0"
                  >
                    <div>
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-gray-600 text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Hobbies Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Beyond Coding</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <hobby.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">{hobby.name}</h3>
                  <p className="text-gray-600 text-sm">{hobby.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageWrapper>
  )
}