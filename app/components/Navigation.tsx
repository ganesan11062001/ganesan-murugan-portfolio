'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Products', href: '/products' },
  { label: 'Publications', href: '/publications' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10'
          : 'bg-black/30 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/20">
              <span className="text-sm font-bold text-white tracking-tight">
                GM
              </span>
              <span className="absolute inset-0 rounded-lg ring-1 ring-white/20" />
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">
              Ganesan Murugan
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                    active ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="mailto:murugan.g@northeastern.edu"
              className="group inline-flex items-center gap-1.5 rounded-lg bg-white text-black px-3.5 py-1.5 text-sm font-semibold transition-transform duration-200 hover:scale-[1.02]"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white rounded-md p-1.5 hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/10">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-md px-3 py-2 text-sm transition-colors ${
                      active
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="mailto:murugan.g@northeastern.edu"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-white text-black px-3 py-2 text-sm font-semibold"
              >
                Get in touch
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
