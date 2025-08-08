'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition duration-300">
            Ganesan Murugan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition duration-300">
              About
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-blue-400 transition duration-300">
              Projects
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-blue-400 transition duration-300">
              Products
            </Link>
            <Link href="/publications" className="text-gray-300 hover:text-blue-400 transition duration-300">
              Publications
            </Link>
            <Link href="/certifications" className="text-gray-300 hover:text-blue-400 transition duration-300">
              Certifications
            </Link>
            <Link href="/posts" className="text-gray-300 hover:text-blue-400 transition duration-300">
              Posts
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/projects" 
                className="text-gray-300 hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/products" 
                className="text-gray-300 hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/publications" 
                className="text-gray-300 hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Publications
              </Link>
              <Link 
                href="/certifications" 
                className="text-gray-300 hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Certifications
              </Link>
              <Link 
                href="/posts" 
                className="text-gray-300 hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Posts
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
