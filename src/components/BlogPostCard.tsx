import Link from 'next/link'
import { Clock, Calendar } from 'lucide-react'

interface BlogPostCardProps {
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  link: string
}

export default function BlogPostCard({ 
  title, 
  description, 
  date,
  readTime,
  tags,
  link 
}: BlogPostCardProps) {
  return (
    <Link href={link}>
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200">
        <div className="flex gap-4 text-gray-500 text-sm mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readTime} min read
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}