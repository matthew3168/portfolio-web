import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Matthew
      </Link>
      <div className="flex gap-6">
        <Link href="/blogs">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  )
}