'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-yellow-600">
              LOGO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-yellow-600 transition">
              Нүүр
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-yellow-600 transition">
              Бидний тухай
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-yellow-600 transition">
              Мэдээ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-yellow-600 transition">
              Холбоо барих
            </Link>
          </nav>

          {/* Contact & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              <span>7771 7788</span>
            </div>
            <Link
              href="/login"
              className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
            >
              Нэвтрэх
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-yellow-600 py-2">
                Нүүр
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-yellow-600 py-2">
                Бидний тухай
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-yellow-600 py-2">
                Мэдээ
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-yellow-600 py-2">
                Холбоо барих
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 bg-yellow-600 text-white rounded text-center mt-2"
              >
                Нэвтрэх
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
