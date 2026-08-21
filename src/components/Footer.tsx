import { UtensilsCrossed, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-extrabold text-xl text-white">
                Food<span className="text-brand-500">&</span>Fun
              </span>
            </div>
            <p className="text-sm text-stone-400 mb-4 leading-relaxed">
              Discover great food and fun experiences near you. Your next favorite meal is just a tap away.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-brand-500 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Discover', links: ['Restaurants', 'Trending Dishes', 'Food Events', 'Best Deals'] },
            { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Contact'] },
            { title: 'Support', links: ['Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Settings'] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-stone-400 hover:text-brand-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500">© 2026 Food & Fun. All rights reserved.</p>
          <p className="text-sm text-stone-500">Made with love for foodies everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
