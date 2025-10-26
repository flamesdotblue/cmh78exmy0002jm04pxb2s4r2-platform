import React, { useEffect, useState } from 'react';
import { Menu, X, Home, LayoutDashboard, User } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a href={href} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-md">
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? 'bg-white/80 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl h-16 px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <div className="h-9 w-9 grid place-items-center rounded-md bg-gradient-to-tr from-indigo-600 to-violet-500 text-white">EA</div>
          <span className="tracking-tight">EAISER</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="#"><span className="inline-flex items-center gap-1"><Home size={16}/> Home</span></NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#metrics">Stats</NavLink>
          <NavLink href="#dashboard"><span className="inline-flex items-center gap-1"><LayoutDashboard size={16}/> Dashboard</span></NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="#signin" className="text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</a>
          <a href="#signup" className="text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md px-4 py-2">Get Started</a>
        </div>

        <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col">
            <a href="#" className="py-2 flex items-center gap-2 text-gray-700"><Home size={16}/> Home</a>
            <a href="#features" className="py-2 text-gray-700">Features</a>
            <a href="#metrics" className="py-2 text-gray-700">Stats</a>
            <a href="#dashboard" className="py-2 flex items-center gap-2 text-gray-700"><LayoutDashboard size={16}/> Dashboard</a>
            <div className="h-px my-2 bg-gray-100" />
            <a href="#signin" className="py-2 flex items-center gap-2 text-gray-700"><User size={16}/> Sign in</a>
            <a href="#signup" className="mt-2 px-4 py-2 rounded-md text-center font-semibold text-white bg-indigo-600 hover:bg-indigo-700">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
