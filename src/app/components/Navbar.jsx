'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50">
      <nav
        className="backdrop-blur-md shadow-md border-b"
        style={{
          color: '#01130b',
          borderColor: '#8aa4f5',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo / Team Name */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-[#8aa4f5] via-[#8aa4f5] to-[#6f5bf1] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] transition duration-300 cursor-pointer"
          >
            Nova Squad
          </Link>

          {/* Desktop Links - Centered */}
          <div className="hidden md:flex flex-1 justify-center space-x-8 font-medium">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-[#1ded8f]"
                style={{ color: '#01130b' }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button on Right */}
          <div className="hidden md:flex">
            <button
              className="px-4 py-2 rounded-lg font-semibold transition hover:opacity-90 cursor-pointer"
              style={{
                backgroundColor: '#1ded8f',
                color: '#f6fefb',
              }}
            >
              Join Us
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
            style={{ color: '#01130b' }}
            className="md:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 shadow-xl z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#f6fefb' }}
      >
        <div
          className="flex items-center justify-between p-4 border-b"
          style={{ borderColor: '#8aa4f5' }}
        >
          <h2 className="text-lg font-bold" style={{ color: '#1ded8f' }}>
            Menu
          </h2>
          <button onClick={() => setOpen(false)} aria-label="Close Menu">
            <X size={24} style={{ color: '#01130b' }} />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6 text-lg font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-[#1ded8f]"
              style={{ color: '#01130b' }}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA button inside Drawer */}
          <button
            className="mt-6 px-4 py-2 rounded-lg font-semibold transition hover:opacity-90"
            style={{
              backgroundColor: '#1ded8f',
              color: '#f6fefb',
            }}
          >
            Join Us
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
