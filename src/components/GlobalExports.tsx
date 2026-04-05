import { Globe2, FileCode2, MessageSquare, Package, Plane } from 'lucide-react';

const features = [
  {
    name: 'Technical Fluency',
    description: 'We work directly with your 3D Models, STEP, IGES, and PDF drawings, ensuring exact specifications are met without ambiguity.',
    icon: FileCode2,
  },
  {
    name: 'Clear Communication',
    description: 'Fluent English support means your requirements are understood perfectly. We keep you updated at every stage.',
    icon: MessageSquare,
  },
  {
    name: 'Flexible Production',
    description: 'We welcome prototypes and small-batch production runs, allowing you to test quality before scaling up.',
    icon: Package,
  },
  {
    name: 'Export Logistics',
    description: 'We handle the complexities of international shipping, packaging, and export documentation to deliver securely to your facility.',
    icon: Plane,
  },
];

export default function GlobalExports() {
  return (
    <div id="global" className="bg-zinc-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe2 className="h-5 w-5 text-yellow-400" />
              <h2 className="text-sm font-bold leading-7 text-yellow-400 uppercase tracking-wider">
                Global Manufacturing
              </h2>
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Seamless Manufacturing for US & European Markets
            </h3>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                With over 20 years of manufacturing experience in India, we support engineering teams in the USA and Europe with high-precision CNC components.
              </p>
              <p>
                When domestic manufacturing becomes cost-prohibitive, we offer a reliable alternative — without compromising on quality. We deliver consistent precision, competitive pricing, and dependable lead times.
              </p>
              <p>
                We understand that overseas sourcing requires trust. That’s why we focus on clear communication, strict adherence to your drawings, and hassle-free delivery.
              </p>
              <p className="font-bold text-white text-xl border-l-4 border-yellow-400 pl-4 py-1 mt-8">
                Start with a small batch. Verify our quality. Scale with confidence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2 bg-yellow-400/10 border border-yellow-400/20 p-4 rounded-2xl flex items-center gap-3">
              <Package className="h-6 w-6 text-yellow-400 shrink-0" />
              <p className="text-sm font-bold text-yellow-400">
                Free samples available for qualified international projects.
              </p>
            </div>
            {features.map((feature) => (
              <div key={feature.name} className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-2xl hover:bg-zinc-800 transition-colors">
                <feature.icon className="h-8 w-8 text-yellow-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{feature.name}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
