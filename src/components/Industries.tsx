import { Shield, Plane, Droplets, Settings2, Factory, ChevronRight } from 'lucide-react';

const industries = [
  {
    name: 'Defense',
    description: 'Precision components for mission-critical systems and tactical hardware.',
    icon: Shield,
  },
  {
    name: 'Aerospace',
    description: 'High-performance parts meeting the most stringent aviation quality standards.',
    icon: Plane,
  },
  {
    name: 'Oil & Gas',
    description: 'Rugged components engineered for high-pressure and corrosive environments.',
    icon: Droplets,
  },
  {
    name: 'Valves & Flow Control',
    description: 'Accurately machined valve bodies and stems for precise fluid regulation.',
    icon: Settings2,
  },
  {
    name: 'Industrial Equipment',
    description: 'Heavy-duty parts for automation, machinery, and manufacturing systems.',
    icon: Factory,
  },
];

export default function Industries() {
  return (
    <div id="industries" className="bg-zinc-50 py-16 sm:py-24">
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
            <div key={industry.name} className="group relative bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 hover:shadow-xl hover:border-yellow-400/50 transition-all duration-300">
              <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                <industry.icon className="h-7 w-7 text-yellow-600 group-hover:text-zinc-900 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{industry.name}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {industry.description}
              </p>
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
