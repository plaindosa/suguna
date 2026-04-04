export default function PortfolioPlaceholder() {
  return (
    <div id="portfolio" className="bg-white py-16 sm:py-24 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <h2 className="text-sm font-bold leading-7 text-yellow-600 uppercase tracking-wider">Our Work</h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Portfolio
          </h3>
          <p className="mt-4 text-lg text-zinc-600">
            Examples of precision machined components, fabricated assemblies, and sheet metal parts we manufacture for various sectors.
          </p>
          <p className="mt-3 text-sm text-zinc-500 italic border-l-2 border-yellow-400 pl-3">
            * Note: The components shown below are either our internal sample works or showcased with explicit permission from our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              src: "/images/portfolioMain/1-sample-work.webp",
              title: "Sample Work",
              description: "Showcase of our manufacturing capability (No specific application).",
              category: "Showcase"
            },
            {
              src: "/images/portfolioMain/2-airframe-structure-optimized.webp",
              title: "Airframe Structure",
              description: "High-precision airframe structure manufactured from Titanium.",
              category: "Aerospace"
            },
            {
              src: "/images/portfolioMain/3-mounting-bracket.webp",
              title: "Mounting Bracket",
              description: "Rigid support component for automation and industrial applications.",
              category: "Automation"
            },
            {
              src: "/images/portfolioMain/4-automation-system-mount.webp",
              title: "Automation System Mount",
              description: "Mounting component for industrial equipment and motion systems.",
              category: "Industrial"
            },
            {
              src: "/images/portfolioMain/5-drive-plate.webp",
              title: "Drive Plate",
              description: "Precision torque transfer component for mechanical systems.",
              category: "Mechanical"
            },
            {
              src: "/images/portfolioMain/6-vibration-fixture.webp",
              title: "Vibration Fixture",
              description: "Specialized fixture for electronic component testing.",
              category: "Electronics"
            },
            {
              src: "/images/portfolioMain/7-laser-cut-part.webp",
              title: "Laser Cut Part",
              description: "Precision laser-cut component with high edge quality.",
              category: "Laser Cutting"
            },
            {
              src: "/images/portfolioMain/8-edm-cut-parts.webp",
              title: "EDM Cut Parts",
              description: "Wire EDM cut parts for EV and other high-precision sectors.",
              category: "EDM"
            }
          ].map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200 shadow-sm transition-all hover:shadow-xl">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img 
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay - only covers bottom half */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Hover Content */}
                <div className="absolute inset-x-0 bottom-0 z-30 p-4 sm:p-5 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                  <span className="text-yellow-400 text-[10px] font-bold uppercase tracking-wider mb-1 block">{item.category}</span>
                  <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                  <p className="text-zinc-300 text-xs leading-snug line-clamp-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-zinc-900 bg-yellow-400 hover:bg-yellow-500 transition-all hover:scale-105 shadow-xl shadow-yellow-400/20">
            Upload Drawing &rarr; Get Quote in 24 Hours
          </a>
        </div>
      </div>
    </div>
  );
}
