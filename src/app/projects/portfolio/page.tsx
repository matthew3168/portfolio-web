'use client'
import Link from 'next/link'
import PageWrapper from '@/components/layout/PageWrapper'
import TableOfContents from '@/components/TableOfContents'
import ImageGallery from '@/components/ImageGallery'
import { ArrowLeft, Github, Link as LinkIcon, ArrowRight, Star, Users, Shield, Cpu } from 'lucide-react'
import { useState } from 'react'

const projectImages = [
  {
    src: "/portfolio/home.png",
    alt: "Portfolio Homepage",
    caption: "Modern homepage with animated icons and terminal demo"
  },
  {
    src: "/portfolio/projects.png",
    alt: "Projects Page",
    caption: "Filterable projects grid with technology tags"
  },
  {
    src: "/portfolio/blog.png",
    alt: "Blog System",
    caption: "Dynamic blog with search and category filtering"
  }
]

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}
  
const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-100 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="ml-3 text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface TechBadgeProps {
  name: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => (
  <div className="flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors duration-200">
    <span className="text-sm font-medium">{name}</span>
  </div>
);

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: Users,
      title: "Dynamic Content",
      description: "Interactive blog system with search functionality and category filtering"
    },
    {
      icon: Shield,
      title: "Modern Design",
      description: "Responsive layout with animated components and smooth transitions"
    },
    {
      icon: Cpu,
      title: "Project Showcase",
      description: "Filterable project grid with detailed case studies and image galleries"
    }
  ]

  const technologies = [
    'Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Lucide Icons', 'Markdown'
  ]

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <article className="max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-12">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-600 hover:text-gray-900 mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
    
          <header className="text-center mb-8 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Portfolio Website
            </h1>
            <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-8 max-w-2xl mx-auto px-4">
              A modern portfolio and blog platform showcasing projects and technical expertise
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-4 sm:mb-8 px-4">
              <a 
                href="https://github.com/matthew3168/portfolio-web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                View Source
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
              {technologies.map(tech => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </header>

          {/* <div className="mb-8 sm:mb-16 bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
            <ImageGallery images={projectImages} />
          </div> */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </section>

          <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-lg">
            <div className="overflow-x-auto -mx-4 px-4 sm:overflow-visible sm:px-0">
              <div className="flex gap-4 mb-8 border-b min-w-max sm:min-w-0">
                {['overview', 'technical', 'challenges', 'future'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 sm:px-4 py-2 font-medium transition-colors duration-200 border-b-2 text-sm sm:text-base whitespace-nowrap ${
                      activeTab === tab 
                        ? 'border-blue-600 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {activeTab === 'overview' && (
                <>
                  <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
                  <p className="text-gray-600 leading-relaxed">
                    A modern portfolio website built with Next.js and TailwindCSS, featuring a dynamic blog system,
                    project showcase, and interactive components. The site serves as a platform to share technical
                    expertise and project work.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Features</h3>
                    <ul className="space-y-2">
                      {[
                        "Interactive terminal demo with typing animation",
                        "Dynamic blog system with search and filtering",
                        "Project showcase with filterable technology tags",
                        "Responsive design with modern animations",
                        "Image gallery with modal view for project screenshots"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 text-blue-500">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {activeTab === 'technical' && (
                <>
                  <h2 className="text-3xl font-bold text-gray-900">Technical Implementation</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Architecture</h3>
                      <p className="text-gray-600 mb-3">
                        Built with modern web technologies for optimal performance:
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Next.js 13+ with App Router for optimized routing",
                          "React components for modular design",
                          "TailwindCSS for responsive styling",
                          "TypeScript for type safety",
                          "Markdown processing for blog content"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 mt-1 text-blue-500">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Features</h3>
                      <ul className="space-y-2">
                        {[
                          "Server-side rendering for improved initial load",
                          "Image optimization with next/image",
                          "Component-level code splitting",
                          "Optimized animations using CSS transforms"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 mt-1 text-blue-500">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'challenges' && (
                <>
                  <h2 className="text-3xl font-bold text-gray-900">Challenges & Solutions</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Optimization</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Balancing smooth animations with performance was a key challenge. This was addressed by
                        using CSS transforms for animations and implementing proper code splitting to ensure
                        fast initial page loads.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Responsive Design</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Creating a consistent experience across devices required careful planning of the layout
                        and component structure. TailwindCSS&apos;s utility classes helped create a fully responsive
                        design that works seamlessly on all screen sizes.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'future' && (
                <>
                  <h2 className="text-3xl font-bold text-gray-900">Future Improvements</h2>
                  <div className="space-y-2">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Planned enhancements to improve the portfolio website:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Dark mode implementation",
                        "Interactive project demos",
                        "Advanced blog features with categories and tags",
                        "Integration with GitHub API for live project updates",
                        "Performance monitoring and analytics"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 text-blue-500">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </article>
      </div>
    </PageWrapper>
  )
}