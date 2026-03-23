import { motion } from 'motion/react';

export default function Trusted() {
  return (
    <div className="bg-zinc-950 py-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold text-yellow-500 uppercase tracking-[0.3em] mb-12">
            Trusted by Leading Engineering Organizations
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mb-10">
            {[
              { name: "ISRO", subtitle: "Direct Supply" },
              { name: "Larsen & Toubro", subtitle: "Direct Supply" },
              { name: "VAG Valves", subtitle: "" },
              { name: "DRDO", subtitle: "Supply Chain" }
            ].map((company, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="text-xl md:text-2xl font-black text-white tracking-tighter mb-1 group-hover:text-yellow-400 transition-colors">
                  {company.name}
                </div>
                {company.subtitle && (
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    {company.subtitle}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-sm text-zinc-400 font-medium italic">
            "Supplying precision components for defense, aerospace, and industrial applications."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
