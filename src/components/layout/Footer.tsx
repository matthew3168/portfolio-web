import Link from 'next/link'
import { Mail, Linkedin, Github, Terminal } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/blogs" className="text-gray-400 hover:text-white transition-colors">Blogs</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/certifications" className="text-gray-400 hover:text-white transition-colors">Certifications</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:2201920b@student.tp.edu.sg" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  2201920b@student.tp.edu.sg
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/matthew-tan-392950239/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/matthew3168" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Latest Activity */}
          <div>
            <h3 className="font-semibold mb-4">Latest Activity</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Recent Project: ParkSmart
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Latest Blog: Advent of Code 2024
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Matthew Tan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}