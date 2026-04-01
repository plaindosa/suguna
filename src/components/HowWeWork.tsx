import { FileText, Settings, Truck } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      icon: FileText,
      title: "1. Upload & Quote",
      description: "Send your rough drawings or CAD files (3D Models/PDF/STEP/IGES). Receive a clear technical quote within 24 hours."
    },
    {
      icon: Settings,
      title: "2. Precision Manufacturing",
      description: "We machine your components using advanced CNC systems and experienced operators."
    },
    {
      icon: Truck,
      title: "3. Quality & Delivery",
      description: "Every part is inspected, securely packed, and delivered to your location."
    }
  ];

  return (
    <div id="how-we-work" className="bg-zinc-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold leading-7 text-yellow-600 uppercase tracking-wider">How We Work</h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Simple. Transparent. Efficient.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-zinc-200 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-zinc-100 shadow-sm flex items-center justify-center mb-6">
                <step.icon className="w-10 h-10 text-yellow-500" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">{step.title}</h4>
              <p className="text-zinc-600 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
