import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Industries', href: '#industries' },
    { name: 'International', href: '#global' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0">
            {imgError ? (
              <div className="bg-zinc-900 text-yellow-400 flex items-center justify-center rounded-lg font-bold w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm shrink-0">
                SEW
              </div>
            ) : (
              <img 
                src="/images/suguna_logo.jfif" 
                alt="SUGUNA Logo" 
                className="w-auto object-contain h-8 sm:h-12 shrink-0" 
                onError={() => setImgError(true)} 
                fetchPriority="high"
                loading="eager"
              />
            )}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 min-w-0">
              <span className="font-bold tracking-tight text-zinc-900 text-base sm:text-xl leading-none truncate">SUGUNA</span>
              <span className="font-bold tracking-tight text-zinc-900 uppercase text-[10px] sm:text-xl leading-none truncate">Engineering Works</span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className={`text-sm ${link.name === 'Home' ? 'font-bold text-zinc-900' : 'font-medium text-zinc-600'} hover:text-yellow-500 transition-colors`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center border border-transparent font-bold rounded-md text-zinc-900 bg-yellow-400 hover:bg-yellow-500 transition-all shadow-sm px-5 py-2.5 text-sm"
            >
              Get a Quote
            </a>
          </div>

          <div className="md:hidden flex items-center shrink-0 ml-4">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 -mr-2 text-zinc-600 hover:text-zinc-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base ${link.name === 'Home' ? 'font-bold text-zinc-900' : 'font-medium text-zinc-600'} hover:text-yellow-500 hover:bg-zinc-50 rounded-md`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-bold text-zinc-900 bg-yellow-400 hover:bg-yellow-500 mt-4 text-center rounded-md shadow-sm"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
