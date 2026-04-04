import { Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const whatsappMessage = encodeURIComponent("Hi Suguna Engineering Works, I would like to inquire about your services.");

  return (
    <footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="md:col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/images/suguna_logo.jpg" 
                alt="SEW Logo" 
                className="h-12 w-auto object-contain" 
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-zinc-900 leading-tight">SUGUNA</span>
                <span className="font-bold text-sm tracking-tight text-zinc-900 uppercase leading-tight">Engineering Works</span>
              </div>
            </div>
            <p className="text-sm text-zinc-600 max-w-sm mb-6 leading-relaxed">
              Precision CNC machined components, fabricated assemblies, and sheet metal parts for OEM manufacturers worldwide. Based in Hyderabad, India.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/cad_cam_unity/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`https://wa.me/918500319532?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-[#25D366]/10 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-bold text-zinc-900 mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Home</a></li>
              <li><a href="#capabilities" className="hover:text-yellow-600 transition-colors">Capabilities</a></li>
              <li><a href="#portfolio" className="hover:text-yellow-600 transition-colors">Portfolio</a></li>
              <li><a href="#industries" className="hover:text-yellow-600 transition-colors">Industries</a></li>
              <li><a href="#global" className="hover:text-yellow-600 transition-colors">Global Reach</a></li>
              <li><a href="#contact" className="hover:text-yellow-600 transition-colors">Get a Quote</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-bold text-zinc-900 mb-6 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li>CNC Milling</li>
              <li>Wire EDM</li>
              <li>Laser Cutting</li>
              <li>Fabrication</li>
              <li>Prototyping</li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="font-bold text-zinc-900 mb-6 uppercase text-sm tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm text-zinc-600">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <a href="mailto:sugunaengineeringworks2007@gmail.com" className="hover:text-yellow-600 transition-colors break-words">
                  sugunaengineeringworks2007@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <a href="tel:+918500319532" className="hover:text-yellow-600 transition-colors">
                  +91 8500319532
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Hyderabad, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Suguna Engineering Works. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Precision CNC Machining India
          </p>
        </div>
      </div>
    </footer>
  );
}
