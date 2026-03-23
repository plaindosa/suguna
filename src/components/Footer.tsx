export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="SEW Logo" 
                className="h-10 w-auto grayscale contrast-200 brightness-0" 
                onError={(e) => { 
                  e.currentTarget.outerHTML = '<div class="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded font-bold text-sm">SEW</div>'; 
                }} 
              />
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-zinc-900">SUGUNA</span>
                <span className="font-bold text-lg tracking-tight text-zinc-900 uppercase">Engineering Works</span>
              </div>
            </div>
            <p className="text-sm text-zinc-600 max-w-sm">
              Precision CNC machined components, fabricated assemblies, and sheet metal parts for OEM manufacturers worldwide. Based in Hyderabad, India.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><a href="#" className="hover:text-yellow-600">Home</a></li>
              <li><a href="#process" className="hover:text-yellow-600">Process</a></li>
              <li><a href="#capabilities" className="hover:text-yellow-600">Capabilities</a></li>
              <li><a href="#equipment" className="hover:text-yellow-600">Equipment</a></li>
              <li><a href="#materials" className="hover:text-yellow-600">Materials</a></li>
              <li><a href="#contact" className="hover:text-yellow-600">Get a Quote</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>CNC Milling</li>
              <li>Wire EDM</li>
              <li>Laser Cutting</li>
              <li>Fabrication</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="font-medium text-zinc-900">Email:</span>
                <a href="mailto:sugunaengineeringworks2007@gmail.com" className="hover:text-yellow-600 break-all">sugunaengineeringworks2007@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-zinc-900">Phone:</span>
                <a href="tel:+918500319532" className="hover:text-yellow-600">+91 8500319532</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-zinc-900">Address:</span>
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Suguna Engineering Works. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500">
            Precision CNC Machining India
          </p>
        </div>
      </div>
    </footer>
  );
}
