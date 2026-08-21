import { TrendingUp, Star, Plus, Check } from 'lucide-react';
import { useState } from 'react';
import { trendingDishes } from '@/data';
import { useCart, formatINR } from '@/cart';
import { SectionHeader } from './SectionHeader';

export function TrendingDishes() {
  return (
    <section id="dishes" className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Trending Dishes"
          title="What everyone's ordering"
          subtitle="The hottest dishes flying out of kitchens near you right now."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingDishes.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} rank={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DishCard({ dish, rank }: { dish: typeof trendingDishes[0]; rank: number }) {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = items.find((i) => i.id === dish.id);

  const handleAdd = () => {
    addItem(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="group relative rounded-3xl overflow-hidden bg-white border border-stone-100 hover:shadow-2xl hover:shadow-brand-900/10 hover:-translate-y-1 transition-all">
      <div className="relative overflow-hidden h-56">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-500 text-white text-xs font-bold shadow-lg">
          <TrendingUp className="w-3.5 h-3.5" />
          Trending #{rank}
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-0.5">{dish.name}</h3>
            <p className="text-white/70 text-sm">{dish.restaurant}</p>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-stone-900 font-bold text-sm">
            {formatINR(dish.price)}
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-stone-500 mb-3 line-clamp-2">{dish.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-sm text-stone-900">{dish.rating}</span>
            <span className="text-sm text-stone-400">/ 5.0</span>
            {inCart && (
              <span className="ml-2 text-xs text-fresh-600 font-semibold">In cart: {inCart.quantity}</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              added
                ? 'bg-fresh-500 text-white'
                : 'bg-brand-50 text-brand-600 hover:bg-brand-500 hover:text-white'
            }`}
          >
            {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {added ? 'Added!' : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  );
}
