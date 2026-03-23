import { Shield, Plane, Droplets, Settings2, Factory, ChevronRight } from 'lucide-react';

const industries = [
  {
    name: 'Defense',
    description: 'Precision components for mission-critical systems and tactical hardware.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1580654712603-fe452770429b?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Aerospace',
    description: 'High-performance parts meeting the most stringent aviation quality standards.',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Oil & Gas',
    description: 'Rugged components engineered for high-pressure and corrosive environments.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Valves & Flow Control',
    description: 'Accurately machined valve bodies and stems for precise fluid regulation.',
    icon: Settings2,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Industrial Equipment',
    description: 'Heavy-duty parts for automation, machinery, and manufacturing systems.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Industries() {
  return (
    <div id="industries" className="bg-zinc-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold leading-7 text-yellow-600 uppercase tracking-wider">Industries We Serve</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Precision for Critical Applications
          </p>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            Our components are trusted in sectors where failure is not an option. We deliver reliability across diverse engineering fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-yellow-400 rounded-lg">
                    <industry.icon className="h-5 w-5 text-zinc-900" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">{industry.name}</h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
          
          <div className="flex flex-col justify-center p-8 bg-zinc-900 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">And Many More...</h3>
            <p className="text-zinc-400 text-sm mb-6">
              From medical devices to renewable energy, our precision machining capabilities adapt to any industry requiring high-quality metal components.
            </p>
            <ul className="space-y-3">
              {['Medical Technology', 'Renewable Energy', 'Automotive OEM', 'Robotics'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-yellow-400">
                  <ChevronRight className="h-4 w-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
