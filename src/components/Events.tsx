import { Calendar, MapPin } from 'lucide-react';
import { events } from '@/data';
import { SectionHeader } from './SectionHeader';

export function Events() {
  return (
    <section id="events" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Food Events"
          title="Fun things happening near you"
          subtitle="Festivals, food truck nights, and chef battles — don't miss out."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <article
              key={event.id}
              className="group rounded-3xl overflow-hidden bg-stone-50 border border-stone-100 hover:shadow-2xl hover:shadow-brand-900/10 hover:-translate-y-1 transition-all"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-stone-900 text-xs font-bold inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-500" />
                  {event.date}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-stone-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-stone-500 mb-3 leading-relaxed">{event.description}</p>
                <div className="flex items-center gap-1.5 text-sm text-stone-600 font-medium">
                  <MapPin className="w-4 h-4 text-brand-500" />
                  {event.location}
                </div>
              </div>
              <div className="px-5 pb-5">
                <button className="w-full py-2.5 rounded-full bg-white border border-stone-200 text-stone-700 text-sm font-semibold hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-colors">
                  Get tickets
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
