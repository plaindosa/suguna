import { CheckCircle2, Target, Lightbulb, Globe2, MessageSquare, TrendingDown } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Consistent Precision",
      description: "Parts delivered exactly as per drawing, every time.",
      icon: Target
    },
    {
      title: "Prototype-Friendly",
      description: "Ideal for testing, iteration, and small-batch production.",
      icon: Lightbulb
    },
    {
      title: "Export Experience",
      description: "Serving clients in USA & Europe with reliable delivery.",
      icon: Globe2
    },
    {
      title: "Direct Communication",
      description: "Work directly with our technical team — no middle layers.",
      icon: MessageSquare
    },
    {
      title: "Cost Advantage",
      description: "Reduce manufacturing costs without compromising quality.",
      icon: TrendingDown
    }
  ];

  return (
    <div id="why-choose-us" className="bg-white py-16 sm:py-24 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold leading-7 text-yellow-600 uppercase tracking-wider">
            Why Clients Choose Us
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Reliable Manufacturing. No Surprises.
          </h3>
          <p className="mt-4 text-lg text-zinc-600">
            Engineering teams choose us when they need a dependable partner — not just a vendor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-6 h-6 text-yellow-500" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
                {reason.title}
              </h4>
              <p className="text-zinc-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
