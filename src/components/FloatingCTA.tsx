import { FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a 
      href="#contact" 
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-zinc-900 px-5 py-3.5 rounded-full font-bold shadow-2xl shadow-yellow-400/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-yellow-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <FileText className="h-5 w-5" />
      <span>Get a Quote</span>
    </a>
  );
}
