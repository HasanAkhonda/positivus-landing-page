'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/brand.svg'

const menuitems = [
  { href: '/about', label: 'About us' },
  { href: '/services', label: 'Services' },
  { href: '/cases', label: 'Use Cases' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
];

const navButton = {
  href: '###',
  label: 'Request a quote',
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="mt-20  ">
      <nav className=" w-full h-fit fixed top-0 left-0 z-50 bg-white">
        <header className="flex flex-col lg:flex-row justify-between items-center my-5 px-5 xl:px-32">
          <div className="flex w-full lg:w-auto items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src={logo} alt="Logo" width={200} height={200} />
            </Link>
            <div className="block lg:hidden">
              <button onClick={toggleMenu} className="w-8 h-8 text-black cursor-pointer">
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center  gap-8 mt-4 lg:mt-0">
            {menuitems.map((item, index) => (
              <Link key={index} href={item.href} className="text-black hover:text-[#b9ff66] transition text-base font-medium">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a className="px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex" href={navButton.href}>
              <h2 className="text-center text-xl font-normal leading-7">{navButton.label}</h2>
            </a>
          </div>
        </header>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col items-center bg-white w-full gap-4 py-4 px-6">
            {menuitems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={closeMenu}
                className="text-black hover:text-purple-500 transition block py-2 text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={navButton.href}
              onClick={closeMenu}
              className="px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex"
            >
              <h2 className="text-center text-xl font-normal leading-7">{navButton.label}</h2>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
