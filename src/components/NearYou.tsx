import { MapPin, Navigation } from 'lucide-react';
import { restaurants } from '@/data';
import { SectionHeader } from './SectionHeader';

export function NearYou() {
  return (
    <section className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Restaurants Near You"
          title="Just around the corner"
          subtitle="The closest highly-rated spots, sorted by distance from your location."
        />

        <div className="bg-white rounded-3xl border border-stone-100 overflow-hidden">
          {restaurants.map((r, i) => (
            <div
              key={r.id}
              className={`flex items-center gap-4 p-4 hover:bg-brand-50/50 transition-colors cursor-pointer ${
                i !== restaurants.length - 1 ? 'border-b border-stone-100' : ''
              }`}
            >
              <img src={r.image} alt={r.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-stone-900 truncate">{r.name}</h3>
                <p className="text-sm text-stone-400 truncate">{r.cuisine}</p>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-sm text-stone-600 font-medium shrink-0">
                <MapPin className="w-4 h-4 text-brand-500" />
                {r.distance}
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-amber-400">★</span>
                <span className="font-bold text-sm text-stone-900">{r.rating}</span>
              </div>
              <button className="w-9 h-9 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors shrink-0">
                <Navigation className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
