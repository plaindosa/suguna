import { MessageCircle } from 'lucide-react';
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

  const whatsappMessage = encodeURIComponent("Hi Suguna Engineering Works, I would like to inquire about your services.");

  return (
    <a 
      href={`https://wa.me/918500319532?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full font-bold shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-[#25D366] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span>WhatsApp Us</span>
    </a>
  );
}
