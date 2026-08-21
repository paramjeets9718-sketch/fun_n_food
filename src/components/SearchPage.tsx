import { useState, useEffect, useMemo } from 'react';
import { Search, ArrowLeft, Star, MapPin, Plus, Check, UtensilsCrossed } from 'lucide-react';
import { trendingDishes, restaurants, type Dish, type Restaurant } from '@/data';
import { useCart, formatINR } from '@/cart';

type SearchPageProps = {
  onNavigate: (page: string) => void;
  initialQuery: string;
};

export function SearchPage({ onNavigate, initialQuery }: SearchPageProps) {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { dishes: [], restaurants: [] };
    const dishes = trendingDishes.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.restaurant.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q),
    );
    const rests = restaurants.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)),
    );
    return { dishes, restaurants: rests };
  }, [query]);

  const totalResults = results.dishes.length + results.restaurants.length;

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-stone-600 font-semibold mb-6 hover:text-brand-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </button>

        <div className="bg-white rounded-2xl p-2 shadow-xl flex items-center gap-2 mb-8">
          <div className="flex items-center gap-3 flex-1 px-4">
            <Search className="w-5 h-5 text-brand-500 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for dishes or restaurants..."
              className="w-full py-3 text-stone-800 placeholder-stone-400 focus:outline-none bg-transparent"
              autoFocus
            />
          </div>
        </div>

        {query.trim() === '' ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-stone-400" />
            </div>
            <h2 className="font-display font-bold text-xl text-stone-900 mb-2">Search for your favorite food</h2>
            <p className="text-stone-500">Try "burger", "pizza", "indian", "tacos", or a restaurant name.</p>
          </div>
        ) : totalResults === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-6">
              <UtensilsCrossed className="w-10 h-10 text-stone-400" />
            </div>
            <h2 className="font-display font-bold text-xl text-stone-900 mb-2">No results for "{query}"</h2>
            <p className="text-stone-500">Try a different search term.</p>
          </div>
        ) : (
          <div className="space-y-10">
            <p className="text-stone-500 font-medium">
              {totalResults} result{totalResults !== 1 ? 's' : ''} for <span className="text-stone-900 font-bold">"{query}"</span>
            </p>

            {results.dishes.length > 0 && (
              <div>
                <h3 className="font-display font-bold text-lg text-stone-900 mb-4">
                  Dishes <span className="text-stone-400 font-normal">({results.dishes.length})</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {results.dishes.map((dish) => (
                    <DishResultCard key={dish.id} dish={dish} />
                  ))}
                </div>
              </div>
            )}

            {results.restaurants.length > 0 && (
              <div>
                <h3 className="font-display font-bold text-lg text-stone-900 mb-4">
                  Restaurants <span className="text-stone-400 font-normal">({results.restaurants.length})</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {results.restaurants.map((r) => (
                    <RestaurantResultCard key={r.id} r={r} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function DishResultCard({ dish }: { dish: Dish }) {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = items.find((i) => i.id === dish.id);

  const handleAdd = () => {
    addItem(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="group rounded-3xl overflow-hidden bg-white border border-stone-100 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all">
      <div className="relative overflow-hidden h-44">
        <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <h4 className="font-display font-bold text-white">{dish.name}</h4>
          <span className="px-2.5 py-1 rounded-full bg-white/90 text-stone-900 font-bold text-sm">{formatINR(dish.price)}</span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-stone-500 mb-2">{dish.restaurant}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-sm text-stone-900">{dish.rating}</span>
            {inCart && <span className="ml-2 text-xs text-fresh-600 font-semibold">In cart: {inCart.quantity}</span>}
          </div>
          <button
            onClick={handleAdd}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              added ? 'bg-fresh-500 text-white' : 'bg-brand-50 text-brand-600 hover:bg-brand-500 hover:text-white'
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

function RestaurantResultCard({ r }: { r: Restaurant }) {
  return (
    <article className="group rounded-3xl overflow-hidden bg-white border border-stone-100 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all">
      <div className="relative overflow-hidden h-40">
        <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        {r.deal && (
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-brand-500 text-white text-xs font-bold shadow-lg">
            {r.deal}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="font-display font-bold text-stone-900">{r.name}</h4>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-sm text-stone-900">{r.rating}</span>
          </div>
        </div>
        <p className="text-sm text-stone-500 mb-3">{r.cuisine}</p>
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
