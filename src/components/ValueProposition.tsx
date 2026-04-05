import { CheckCircle, Clock, ShieldCheck, Target, Award, MapPin, History, Users, Banknote } from 'lucide-react';

export default function AboutUs() {
  return (
    <div id="about" className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold leading-7 text-yellow-600 uppercase tracking-wider">About Us</h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Suguna Engineering Works
            </h3>
            <div className="mt-6 space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                Suguna Engineering Works is a precision CNC machining company based in <span className="text-zinc-900 font-semibold">Hyderabad, India</span>.
              </p>
              <p>
                With over <span className="text-zinc-900 font-semibold">20 years of experience</span>, we support OEM manufacturers and engineering companies with reliable, high-quality components.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl my-8">
                <p className="text-zinc-900 font-bold text-xl italic leading-snug">
                  "We are best known for delivering reliable quality at highly competitive price."
                </p>
              </div>

              <p>
                Our work is used in <span className="text-zinc-900 font-semibold">defense, aerospace, and industrial applications</span> where quality is critical.
              </p>
              <p>
                We focus on being a dependable, long-term manufacturing partner.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Experience', value: '20+ Years', icon: History },
              { label: 'Focus', value: 'Precision', icon: Target },
              { label: 'Pricing', value: 'Competitive', icon: Banknote },
              { label: 'Quality', value: 'ISO 9001:2015', icon: ShieldCheck, isStamp: true },
            ].map((stat) => (
              <div 
                key={stat.label} 
                className={`p-6 rounded-2xl border flex flex-col items-center text-center transition-all ${
                  stat.isStamp 
                    ? 'bg-white border-zinc-900 border-2 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] relative overflow-hidden' 
                    : 'bg-zinc-50 border-zinc-100'
                }`}
              >
                {stat.isStamp && (
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-zinc-900 rotate-45" />
                )}
                <stat.icon className={`h-8 w-8 mb-3 ${stat.isStamp ? 'text-zinc-900' : 'text-yellow-500'}`} />
                <p className={`text-xl font-bold leading-tight ${stat.isStamp ? 'text-zinc-900' : 'text-zinc-900'}`}>{stat.value}</p>
                <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${stat.isStamp ? 'text-zinc-500' : 'text-zinc-400'}`}>{stat.label}</p>
                {stat.isStamp && (
                  <a 
                    href="/images/ISO-9001 2015 LATEST.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3 text-[10px] font-bold text-zinc-900 underline underline-offset-2 hover:text-yellow-600 transition-colors"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
            <div className="col-span-2 bg-zinc-900 p-6 rounded-2xl flex items-center gap-4">
              <Award className="h-10 w-10 text-yellow-400 shrink-0" />
              <div>
                <p className="text-white font-bold">Trusted by OEMs</p>
                <p className="text-zinc-400 text-sm">Supporting global supply chains with Indian manufacturing excellence.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
