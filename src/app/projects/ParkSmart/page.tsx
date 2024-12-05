'use client'
import Link from 'next/link'
import PageWrapper from '@/components/layout/PageWrapper'
import TableOfContents from '@/components/TableOfContents'
import ImageGallery from '@/components/ImageGallery'
import { ArrowLeft, Github, Link as LinkIcon, ArrowRight, Star, Users, Shield, Cpu } from 'lucide-react'
import { useState } from 'react'

const projectImages = [
  {
    src: "/ParkSmart/dashboard.png",
    alt: "User Dashboard",
    caption: "Interactive parking dashboard with real-time occupancy map"
  },
  {
    src: "/ParkSmart/admindashboard.png",
    alt: "Admin Dashboard",
    caption: "Admin dashboard with analytics and Kibana integration"
  },
  {
    src: "/ParkSmart/register.png",
    alt: "Authentication System",
    caption: "Secure authentication using AWS Cognito"
  }
]

interface FeatureCardProps {
    icon: React.ElementType; // The type for the Icon prop
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
      title: "User Management",
      description: "Complete user authentication system with role-based access control using AWS Cognito"
    },
    {
      icon: Shield,
      title: "Real-time Monitoring",
      description: "Live parking space monitoring with interactive map visualization and status updates"
    },
    {
      icon: Cpu,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics with Elastic and Kibana integration for data visualization"
    }
  ]

  const technologies = [
    'Next.js', 'AWS', 'DynamoDB', 'Cognito', 'Elastic', 'Tailwind', 'TypeScript'
  ]

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <article className="max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-12">
          {/* Navigation */}
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-600 hover:text-gray-900 mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
    
          {/* Header Section */}
          <header className="text-center mb-8 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              ParkSmart
            </h1>
            <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-8 max-w-2xl mx-auto px-4">
              A modern parking management system with real-time monitoring and analytics
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-4 sm:mb-8 px-4">
              <a 
                href="https://github.com/matthew3168/ParkSmart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                View Source
              </a>
              <a 
                href="https://youtu.be/_LDTzvCVxgk"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
              >
                <LinkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                Live Demo
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
              {technologies.map(tech => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </header>

          {/* Gallery Section */}
          <div className="mb-8 sm:mb-16 bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
            <ImageGallery images={projectImages} />
          </div>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </section>

          {/* Content Tabs */}
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
                    ParkSmart is a comprehensive parking management system designed to monitor and manage parking spaces in real-time. 
                    Built with Next.js and AWS services, it provides both user and admin interfaces for efficient parking space management.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Features</h3>
                    <ul className="space-y-2">
                      {[
                        "Real-time parking space monitoring with interactive map visualization",
                        "Separate user and admin dashboards with role-based access control",
                        "Secure authentication system using AWS Cognito",
                        "Historical parking data analysis with Elastic and Kibana integration",
                        "Responsive design with Tailwind CSS"
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
                        The application is built using a modern stack of technologies:
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Next.js 13+ with App Router for the frontend",
                          "AWS DynamoDB for real-time parking data storage",
                          "AWS Cognito for user authentication and authorization",
                          "Elastic Stack for data analytics and visualization",
                          "Tailwind CSS for responsive styling"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 mt-1 text-blue-500">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Security Features</h3>
                      <ul className="space-y-2">
                        {[
                          "Role-based access control for user and admin interfaces",
                          "Secure session management with AWS Cognito tokens",
                          "Protected API routes with middleware authentication",
                          "Secure password policies and email verification"
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
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Real-time Updates</h3>
                      <p className="text-gray-600 leading-relaxed">
                        One of the main challenges was implementing real-time updates for parking space availability. 
                        This was solved by creating an efficient polling system that updates the parking data every 30 seconds, 
                        with optimized DynamoDB queries to minimize latency.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Visualization</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Another challenge was creating an intuitive visualization of parking spaces. 
                        The solution involved developing an interactive SVG-based map that displays real-time occupancy 
                        with color-coded indicators and location-specific information.
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
                      We have several planned enhancements to make ParkSmart even more powerful and user-friendly:
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Mobile application for easier access on the go",
                        "Integration with payment systems for paid parking",
                        "Predictive analytics for parking space availability",
                        "IoT sensor integration for automated space monitoring",
                        "Push notifications for space availability updates"
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