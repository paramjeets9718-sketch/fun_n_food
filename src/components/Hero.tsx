import { useEffect, useState } from 'react';
import { Search, MapPin, Menu, X, UtensilsCrossed, ShoppingCart } from 'lucide-react';
import { useCart } from '@/cart';

type NavbarProps = {
  onNavigate: (page: string) => void;
  currentPage: string;
};

export function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'Restaurants', 'Dishes', 'Events', 'Reviews'];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNav = (page: string) => {
    if (page === 'order') {
      onNavigate('order');
    } else if (page === 'home') {
      onNavigate('home');
    } else {
      if (currentPage !== 'home') {
        onNavigate('home');
        setTimeout(() => scrollToSection(page), 100);
      } else {
        scrollToSection(page);
      }
    }
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || currentPage !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-brand-900/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform">
              <UtensilsCrossed className="w-5 h-5 text-white" />
            </div>
            <span className={`font-display font-extrabold text-xl sm:text-2xl ${scrolled || currentPage !== 'home' ? 'text-stone-900' : 'text-white'}`}>
              Food<span className="text-brand-500">&</span>Fun
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  scrolled || currentPage !== 'home'
                    ? 'text-stone-600 hover:text-brand-600 hover:bg-brand-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav('order')}
              className="relative p-2 rounded-lg transition-colors"
              aria-label="View cart"
            >
              <ShoppingCart className={`w-6 h-6 ${scrolled || currentPage !== 'home' ? 'text-stone-700' : 'text-white'}`} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-accent-500 text-white text-xs font-bold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button className={`text-sm font-semibold ${scrolled || currentPage !== 'home' ? 'text-stone-700 hover:text-brand-600' : 'text-white/90 hover:text-white'}`}>
              Log in
            </button>
            <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 text-white text-sm font-semibold shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all">
              Sign up free
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button onClick={() => handleNav('order')} className="relative p-2" aria-label="View cart">
              <ShoppingCart className={`w-6 h-6 ${scrolled || currentPage !== 'home' ? 'text-stone-700' : 'text-white'}`} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-accent-500 text-white text-xs font-bold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className={`p-2 rounded-lg ${scrolled || currentPage !== 'home' ? 'text-stone-900' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl p-4 mb-4 space-y-1">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link.toLowerCase())}
                className="block w-full text-left px-4 py-3 rounded-lg text-stone-700 font-medium hover:bg-brand-50 hover:text-brand-600"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => handleNav('order')}
              className="block w-full text-left px-4 py-3 rounded-lg text-stone-700 font-medium hover:bg-brand-50 hover:text-brand-600"
            >
              View Cart ({itemCount})
            </button>
            <div className="pt-2 border-t border-stone-100 flex gap-2">
              <button className="flex-1 py-2.5 rounded-full border border-stone-200 text-stone-700 text-sm font-semibold">Log in</button>
              <button className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 text-white text-sm font-semibold">Sign up</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export function Hero({ onSearch }: { onSearch: (query: string) => void }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/15082383/pexels-photo-15082383.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt="Gourmet food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-stone-900/60 to-brand-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-fresh-400 animate-pulse" />
            Over 650+ restaurants near you
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Discover great food,
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-amber-300 to-accent-400 bg-clip-text text-transparent">
              have more fun
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Explore trending restaurants, mouth-watering dishes, and food events happening around you — all in one delicious place.
          </p>

          <div className="bg-white rounded-2xl p-2 shadow-2xl flex flex-col sm:flex-row gap-2 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 flex-1 px-4">
              <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full py-3 text-stone-800 placeholder-stone-400 focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex items-center gap-3 flex-1 px-4 border-t sm:border-t-0 sm:border-l border-stone-100">
              <Search className="w-5 h-5 text-brand-500 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search restaurants or dishes"
                className="w-full py-3 text-stone-800 placeholder-stone-400 focus:outline-none bg-transparent"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Search
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { label: 'Restaurants', value: '650+' },
              { label: 'Dishes', value: '12k+' },
              { label: 'Reviews', value: '48k+' },
              { label: 'Events', value: '120+' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-2xl text-white">{s.value}</div>
                <div className="text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}
