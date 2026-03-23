import { Image as ImageIcon } from 'lucide-react';

export default function PortfolioPlaceholder() {
  return (
    <div id="industries" className="bg-zinc-50 py-24 sm:py-32 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Industries Served
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Examples of precision machined components, fabricated assemblies, and sheet metal parts we manufacture for various sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-[4/3] bg-zinc-200 rounded-xl flex flex-col items-center justify-center text-zinc-400 border border-zinc-300 border-dashed">
              <ImageIcon className="h-8 w-8 mb-2 opacity-50" />
              <span className="text-sm font-medium">Portfolio Image {i}</span>
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
