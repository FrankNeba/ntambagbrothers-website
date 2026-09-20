'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart } from 'lucide-react';

export default function Header({ siteConfig }: { siteConfig: any }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Recognition', href: '/recognition' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 sm:w-14 sm:h-14 flex-shrink-0 rounded-full overflow-hidden border border-gray-200 shadow-sm">
            <img 
              src={siteConfig?.logo || "/assets/logo-BBZA-lAV.png"} 
              alt="Ntambag Brothers Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-lg text-gray-900 leading-tight tracking-tight">
              Ntambag Brothers
            </span>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
              CIG
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2 bg-slate-100/70 p-2 rounded-full border border-slate-200/60">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  active
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/donate"
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-6 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-2 text-xs sm:text-sm"
          >
            <Heart className="w-4 h-4 text-gray-900 fill-gray-900" />
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-5 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                isActive(link.href)
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3.5 rounded-xl shadow flex items-center justify-center gap-2 text-base"
            >
              <Heart className="w-5 h-5 fill-gray-900 text-gray-900" />
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
