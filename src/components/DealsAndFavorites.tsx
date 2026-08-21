import { Tag, Heart, Plus, Check } from 'lucide-react';
import { useState } from 'react';
import { restaurants, trendingDishes } from '@/data';
import { useCart, formatINR } from '@/cart';
import { SectionHeader } from './SectionHeader';

export function BestDeals() {
  const deals = restaurants.filter((r) => r.deal);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Best Deals"
          title="Save more, eat more"
          subtitle="Limited-time offers and happy-hour specials at top restaurants."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((r) => (
            <article
              key={r.id}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-50 to-amber-50 border border-brand-100 p-6 hover:shadow-xl hover:shadow-brand-900/10 hover:-translate-y-1 transition-all"
            >
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Tag className="w-5 h-5" />
              </div>
              <img src={r.image} alt={r.name} className="w-20 h-20 rounded-2xl object-cover mb-4" />
              <h3 className="font-display font-bold text-lg text-stone-900 mb-1">{r.name}</h3>
              <p className="text-sm text-stone-500 mb-3">{r.cuisine}</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-500 text-white font-bold text-sm">
                {r.deal}
              </div>
              <button className="mt-4 w-full py-2.5 rounded-full bg-white border border-brand-200 text-brand-600 text-sm font-semibold hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-colors">
                Claim deal
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Favorites() {
  return (
    <section className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Your Favorite Foods"
          title="Pick up where you left off"
          subtitle="Quick re-order from dishes you've loved before."
        />
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x">
          {trendingDishes.slice(0, 5).map((dish) => (
            <FavoriteCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FavoriteCard({ dish }: { dish: typeof trendingDishes[0] }) {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = items.find((i) => i.id === dish.id);

  const handleAdd = () => {
    addItem(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="group shrink-0 w-64 snap-start rounded-3xl overflow-hidden bg-white border border-stone-100 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all">
      <div className="relative h-36 overflow-hidden">
        <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-accent-500 hover:scale-110 transition-transform">
          <Heart className="w-4 h-4 fill-accent-500" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-display font-bold text-stone-900 text-sm truncate">{dish.name}</h3>
        <p className="text-xs text-stone-400 truncate mb-2">{dish.restaurant}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-stone-900">{formatINR(dish.price)}</span>
            {inCart && <span className="ml-1 text-xs text-fresh-600">×{inCart.quantity}</span>}
          </div>
          <button
            onClick={handleAdd}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              added ? 'bg-fresh-500 text-white' : 'bg-brand-50 text-brand-600 hover:bg-brand-500 hover:text-white'
            }`}
          >
            {added ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
            {added ? 'Added' : 'Add'}
          </button>
        </div>
      </div>
    </article>
  );
}
