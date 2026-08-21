import { categories } from '@/data';

export function Categories() {
  return (
    <section className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-2">Browse by craving</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900">What are you hungry for?</h2>
          </div>
          <a href="#restaurants" className="hidden sm:inline-flex text-brand-600 font-semibold text-sm hover:underline">
            View all categories →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-stone-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-stone-900 text-sm">{cat.name}</div>
                <div className="text-xs text-stone-400">{cat.count} places</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
