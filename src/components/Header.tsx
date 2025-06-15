import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../content/siteContent';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { header } = siteContent;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 py-3' 
          : 'bg-white/70 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/icon (1).png" 
              alt="GTD Second Brain Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold text-gray-900">{header.logo}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {header.navigation.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={header.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600/90 backdrop-blur-sm text-white px-5 py-2 rounded-full hover:bg-orange-700/90 transition-all duration-300 font-medium border border-orange-500/20 shadow-lg"
            >
              {header.ctaButton}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md absolute top-full left-0 right-0 shadow-xl py-4 px-4 flex flex-col space-y-4 border-t border-white/20 rounded-b-2xl">
            {header.navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href={header.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600/90 backdrop-blur-sm text-white px-5 py-2 rounded-full hover:bg-orange-700/90 transition-all duration-300 w-full font-medium border border-orange-500/20 shadow-lg text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {header.ctaButton}
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;