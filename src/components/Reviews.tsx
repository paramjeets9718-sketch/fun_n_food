import { Star, Quote } from 'lucide-react';
import { reviews } from '@/data';
import { SectionHeader } from './SectionHeader';

export function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="Loved by food lovers"
          subtitle="Real stories from people who discovered their new favorite spot."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="relative rounded-3xl bg-white border border-stone-100 p-6 hover:shadow-xl hover:shadow-brand-900/5 transition-all"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-100" />
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-100"
                />
                <div>
                  <h4 className="font-display font-bold text-stone-900">{review.name}</h4>
                  <p className="text-sm text-stone-400">{review.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-200'}`}
                  />
                ))}
                <span className="ml-2 text-sm text-stone-400">· {review.restaurant}</span>
              </div>
              <p className="text-stone-600 leading-relaxed">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
