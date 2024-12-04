'use client'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import TerminalDemo from '@/components/Terminal'
import AnimatedIcon from '@/components/AnimatedIcon'
import ProjectCard from '@/components/ProjectCard'
import BlogPostCard from '@/components/BlogPostCard'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-background via-background/95 to-primary/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[80vh] grid md:grid-cols-2 items-center p-8 max-w-7xl mx-auto relative">
        {/* Animated background icons */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <AnimatedIcon 
            emoji="🔒" 
            label="Security" 
            delay={0} 
            className="top-20 left-20" 
          />
          <AnimatedIcon 
            emoji="⚡" 
            label="Performance" 
            delay={2} 
            className="top-40 right-[20%]" 
          />
          <AnimatedIcon 
            emoji="☁️" 
            label="Cloud" 
            delay={4} 
            className="bottom-40 left-[30%]" 
          />
          <AnimatedIcon 
            emoji="🚀" 
            label="Scale" 
            delay={1} 
            className="top-[30%] left-[40%]" 
          />
          <AnimatedIcon 
            emoji="💻" 
            label="Code" 
            delay={3} 
            className="bottom-20 right-20" 
          />
        </div>

        {/* Left side content */}
        <div className="space-y-6 z-10">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Securing the
            <span className="block text-primary">Digital Future</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Cybersecurity enthusiast and developer, exploring the intersection of security, 
            cloud computing, and modern web development.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/projects"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects
            </Link>
            <Link 
              href="/blogs"
              className="border border-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </div>

        {/* Right side terminal */}
        <div className="hidden md:block">
          <TerminalDemo />
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-8 px-8 max-w-7xl mx-auto relative">
        <div className="absolute left-1/2 -top-4 transform -translate-x-1/2 w-[2px] h-8 bg-gradient-to-b from-primary/20 to-transparent"></div>
        <h2 className="text-3xl font-bold text-center mb-8">Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              🔒
            </div>
            <h3 className="text-xl font-bold mb-2">Security Research</h3>
            <p className="text-muted-foreground">
              Web application security, penetration testing, and CTF challenges
            </p>
          </div>
          
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              ☁️
            </div>
            <h3 className="text-xl font-bold mb-2">Cloud Computing</h3>
            <p className="text-muted-foreground">
              Cloud security, AWS & on-prem infrastructure, Infrastructure as Code
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              💻
            </div>
            <h3 className="text-xl font-bold mb-2">Development</h3>
            <p className="text-muted-foreground">
              Full-stack development with modern frameworks and best security practices
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              ✍️
            </div>
            <h3 className="text-xl font-bold mb-2">Technical Writing</h3>
            <p className="text-muted-foreground">
              Detailed writeups, documentation, and security research papers
            </p>
          </div>
        </div>
      </section>

        {/* Featured Projects */}
            <section className="py-12 px-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <Link 
                href="/projects" 
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1"
                >
                View All Projects
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectCard 
                title= "ParkSmart"
                description= "AWS-based IoT Parking Web App"
                tags= {['AWS', 'IoT', 'Python', 'React']}
                link= "/projects/ParkSmart"
                />

            </div>
            </section>

            {/* Featured Blog Posts */}
            <section className="py-12 px-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Featured Blog Posts</h2>
                <Link 
                href="/blogs" 
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1"
                >
                View All Posts
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <BlogPostCard 
                title="Advent of Code 2024"
                description="A writeup of the 25 days Christmas coding advent calendar. Ho ho ho!"
                date="Dec 1, 2024"
                readTime="2"
                tags={['Coding', 'Data Structures and Algorithim', 'Tutorial']}
                link="/blogs/AoC2024"
                />

            </div>
            </section>
      <Footer />
    </div>
  )
}