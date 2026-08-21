import { galleryItems } from '@/data';
import { SectionHeader } from './SectionHeader';

export function FoodGallery() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Food Gallery"
          title="Feast your eyes"
          subtitle="A visual celebration of the best dishes from restaurants around you."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.label}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                  i === 0 || i === 5 ? 'h-full min-h-[280px]' : 'h-40 sm:h-52'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-2.5 py-1 rounded-full bg-brand-500 text-white text-xs font-bold mb-2">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-white text-lg">{item.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
