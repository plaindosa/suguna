import { ArrowRight, FileText, Settings, Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative bg-zinc-900 pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1565439390118-bbf16b060b4f?auto=format&fit=crop&q=80&w=2000" 
          alt="CNC Machining" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/80 to-zinc-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs sm:text-sm font-bold tracking-wide uppercase">
                <Settings className="w-4 h-4" />
                Concept → Prototype → Production
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Precision CNC Machining Partner for <span className="text-yellow-400">Prototypes & Production</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Trusted by ISRO, Larsen & Toubro, and global engineering companies. Delivering precision components from India to the USA and Europe.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
              {[
                "Competitive pricing",
                "Tolerances up to ±0.01 mm",
                "Consistent quality"
              ].map((point, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-zinc-300 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-zinc-900 bg-yellow-400 hover:bg-yellow-500 transition-all hover:scale-105 shadow-xl shadow-yellow-400/20">
                Upload Drawing → Get Quote in 24 Hours
              </a>
              <a href="#capabilities" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-zinc-600 text-lg font-medium rounded-md text-white bg-zinc-800/50 hover:bg-zinc-700 transition-all backdrop-blur-sm">
                <FileText className="mr-2 h-5 w-5 text-zinc-400" />
                View Capabilities
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
