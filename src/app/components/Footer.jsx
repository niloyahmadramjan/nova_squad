import Link from 'next/link'
import { Github, Linkedin, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer
      className="backdrop-blur-md border-t mt-10"
      style={{
        backgroundColor: '#f6fefb',
        color: '#01130b',
        borderColor: '#8aa4f5',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Left: Logo + tagline */}
        <div>
          <h2 className="text-2xl font-bold" style={{ color: '#1ded8f' }}>
            Nova Squad
          </h2>
          <p className="text-sm mt-1" style={{ color: '#8aa4f5' }}>
            Building the Future Together
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="hidden lg:flex flex-col space-y-3">
          <Link
            href="#about"
            className="transition-colors"
            style={{ color: '#01130b' }}
          >
            About
          </Link>
          <Link
            href="#team"
            className="transition-colors"
            style={{ color: '#01130b' }}
          >
            Team
          </Link>
          <Link
            href="#skills"
            className="transition-colors"
            style={{ color: '#01130b' }}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="transition-colors"
            style={{ color: '#01130b' }}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="transition-colors"
            style={{ color: '#01130b' }}
          >
            Contact
          </Link>
        </div>

        {/* Right: Social Links */}
        <div className="flex space-x-6 lg:justify-end">
          <Link
            href="https://github.com"
            target="_blank"
            aria-label="GitHub"
            className="p-2 rounded-full transition"
            style={{ backgroundColor: '#8aa4f5' + '33' }}
          >
            <Github color="#01130b" className="transition-colors" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            className="p-2 rounded-full transition"
            style={{ backgroundColor: '#8aa4f5' + '33' }}
          >
            <Linkedin color="#01130b" className="transition-colors" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            className="p-2 rounded-full transition"
            style={{ backgroundColor: '#8aa4f5' + '33' }}
          >
            <Facebook color="#01130b" className="transition-colors" />
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="text-center text-sm border-t py-5"
        style={{ color: '#8aa4f5', borderColor: '#8aa4f5' }}
      >
        © 2025{' '}
        <span style={{ color: '#1ded8f', fontWeight: 600 }}>Nova Squad</span> –
        All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
