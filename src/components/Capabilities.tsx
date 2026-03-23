import { Settings, Sparkles, Target, Zap, Scissors, Wrench, Paintbrush, Layers, Flame, Box, Disc } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      title: 'CNC Machining',
      icon: Target,
      description: 'High-precision 3-axis CNC milling for small to medium components. Capable of handling complex geometries with tight tolerances.',
      points: [
        'HAAS VF-4 Vertical Machining Center',
        'COSMOS CVM 800 VMC',
        'Tolerances up to ±0.01 mm'
      ]
    },
    {
      title: 'Wire EDM',
      icon: Zap,
      description: 'Precision wire-cut EDM for intricate shapes, hard materials, and components requiring exceptional edge quality.',
      points: [
        'FOSTEX FDK 7735 Wire Cut EDM',
        'Travel: 450 × 350 mm',
        'Fine surface finish'
      ]
    },
    {
      title: 'Laser Cutting & Forming',
      icon: Scissors,
      description: 'High-speed fiber laser cutting and hydraulic press-based forming for sheet metal components.',
      points: [
        'FLC 3015 Fiber Laser (8ft × 4ft)',
        'Hydraulic PBM 3040 Cylindrical Rolling',
        'Deep Drawing Process'
      ]
    },
    {
      title: 'Fabrication & Assembly',
      icon: Wrench,
      description: 'Complete fabricated assemblies including certified welding and structural components.',
      points: [
        'MIG Welding (MIG 350)',
        'Fabricated Assemblies',
        'Aluminium Welding'
      ]
    }
  ];

  return (
    <div id="capabilities" className="bg-zinc-50 py-24 sm:py-32 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold leading-7 text-yellow-600 uppercase tracking-wider">Our Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Precision Manufacturing Solutions
          </p>
          <p className="mt-4 text-lg text-zinc-600">
            We simplify complex manufacturing for engineering teams. From initial prototyping through to medium-volume production runs, we deliver with absolute precision.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {capabilities.map((cap) => (
            <div key={cap.title} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 hover:border-yellow-400 transition-colors group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-yellow-400 mb-6 group-hover:bg-yellow-400 group-hover:text-zinc-900 transition-colors">
                <cap.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{cap.title}</h3>
              <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                {cap.description}
              </p>
              <ul className="space-y-3">
                {cap.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-900 font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Materials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">Materials Machined</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Stainless Steel', 'Aluminum', 'Brass', 'Copper', 'Alloy Steels', 'Industrial Plastics'].map((m) => (
              <div key={m} className="bg-white p-4 rounded-xl shadow-sm border border-zinc-200 text-center flex items-center justify-center hover:bg-zinc-50 transition-colors">
                <span className="text-sm font-bold text-zinc-700">{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Processes */}
        <div className="bg-zinc-900 p-10 rounded-3xl shadow-2xl border border-zinc-800 mt-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-zinc-900 shadow-lg shadow-yellow-400/20">
                <Sparkles className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Full-Service Solutions</h3>
                <p className="text-zinc-400 text-base mt-1">Essential post-processing through our verified partner network.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Painting', icon: Paintbrush },
                { name: 'Anodizing', icon: Zap },
                { name: 'Plating', icon: Layers },
                { name: 'Heat Treatment', icon: Flame },
                { name: 'Casting', icon: Box },
                { name: 'Grinding', icon: Disc }
              ].map((service) => (
                <div key={service.name} className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-5 border border-zinc-700 hover:border-yellow-400/50 hover:bg-zinc-800 transition-all group flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-zinc-900 transition-colors">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


