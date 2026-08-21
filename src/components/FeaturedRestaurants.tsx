import { Star, MapPin, Flame, Heart } from 'lucide-react';
import { restaurants, type Restaurant } from '@/data';
import { SectionHeader } from './SectionHeader';

export function FeaturedRestaurants() {
  const featured = restaurants.filter((r) => r.featured);
  const rest = restaurants.filter((r) => !r.featured);

  return (
    <section id="restaurants" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured Restaurants"
          title="Hand-picked spots you'll love"
          subtitle="Top-rated restaurants loved by foodies in your area this week."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featured.map((r) => (
            <RestaurantCard key={r.id} r={r} large />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((r) => (
            <RestaurantCard key={r.id} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RestaurantCard({ r, large = false }: { r: Restaurant; large?: boolean }) {
  return (
    <article
      className={`group relative rounded-3xl overflow-hidden bg-white border border-stone-100 hover:shadow-2xl hover:shadow-brand-900/10 hover:-translate-y-1 transition-all ${
        large ? 'flex flex-col sm:flex-row' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${large ? 'sm:w-1/2' : ''}`}>
        <img
          src={r.image}
          alt={r.name}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            large ? 'h-56 sm:h-full' : 'h-52'
          }`}
        />
        {r.deal && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-fresh-500 text-white text-xs font-bold shadow-lg">
            <Flame className="w-3.5 h-3.5" />
            {r.deal}
          </div>
        )}
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-stone-400 hover:text-accent-500 hover:scale-110 transition-all">
          <Heart className="w-4.5 h-4.5" />
        </button>
      </div>

      <div className={`p-5 ${large ? 'sm:w-1/2 flex flex-col justify-center' : ''}`}>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display font-bold text-lg text-stone-900 group-hover:text-brand-600 transition-colors">
            {r.name}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-sm text-stone-900">{r.rating}</span>
            <span className="text-xs text-stone-400">({r.reviews})</span>
          </div>
        </div>
        <p className="text-sm text-stone-500 mb-3">{r.cuisine}</p>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {r.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-stone-700 font-semibold">{r.priceRange} · {r.distance} away</span>
          <span className="inline-flex items-center gap-1 text-brand-600 font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            View
          </span>
        </div>
      </div>
    </article>
  );
}
