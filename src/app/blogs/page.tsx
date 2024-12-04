'use client'
import { useState } from 'react'
import BlogPostCard from '@/components/BlogPostCard'
import PageWrapper from '@/components/layout/PageWrapper'

const CATEGORIES = ['CTF Writeups', 'Cloud Security', 'Web Development', 'Tutorials', 'Coding', 'Data Structure and Algorithims']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const posts = [
    {
      title: "Advent of Code 2024 Writeup",
      description: "A 25 day Christmas coding challemge.",
      date: "Dec 26, 2024",
      readTime: "25",
      tags: ['Tutorials', 'Coding', 'Data Structure and Algorithims'],
      category: 'Data Structure and Algorithims',
      link: "/blog/AoC2024"
    },
    // ... other posts
  ]

  const filteredPosts = posts
    .filter(post => 
      (!selectedCategory || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       post.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Blogs</h1>

          {/* Search and filters */}
          <div className="mb-8">
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Search & Filter</h2>
              
              {/* Search input */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full transition-all duration-200 ${
                    !selectedCategory 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Posts
                </button>
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-all duration-200 ${
                      selectedCategory === category 
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogPostCard 
                key={index}
                {...post}
              />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}