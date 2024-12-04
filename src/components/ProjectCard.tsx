import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Link href={link}>
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200">
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