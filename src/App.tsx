import { useState } from 'react';
import { CartProvider } from '@/cart';
import { Navbar, Hero } from '@/components/Hero';
import { Categories } from '@/components/Categories';
import { FeaturedRestaurants } from '@/components/FeaturedRestaurants';
import { TrendingDishes } from '@/components/TrendingDishes';
import { FoodGallery } from '@/components/FoodGallery';
import { Reviews } from '@/components/Reviews';
import { Events } from '@/components/Events';
import { NearYou } from '@/components/NearYou';
import { BestDeals, Favorites } from '@/components/DealsAndFavorites';
import { OrderPage } from '@/components/OrderPage';
import { SearchPage } from '@/components/SearchPage';
import { Footer } from '@/components/Footer';

function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 px-6 py-16 sm:px-16 sm:py-20 text-center">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 animate-float" />
          <div className="absolute -bottom-16 -left-8 w-56 h-56 rounded-full bg-white/10 animate-float" style={{ animationDelay: '1s' }} />
          <div className="relative z-10">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4 leading-tight">
              Ready to discover your<br />next favorite meal?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of food lovers finding the best restaurants, dishes, and deals near them every day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button className="px-8 py-3.5 rounded-full bg-white text-brand-600 font-bold shadow-xl hover:-translate-y-0.5 transition-transform">
                Sign up free
              </button>
              <button className="px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold hover:bg-white/25 transition-colors">
                Browse restaurants
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <>
      <Hero onSearch={(q) => onNavigate('search:' + q)} />
      <Categories />
      <FeaturedRestaurants />
      <TrendingDishes />
      <FoodGallery />
      <BestDeals />
      <Events />
      <NearYou />
      <Reviews />
      <Favorites />
      <CTA />
    </>
  );
}

function App() {
  const [page, setPage] = useState('home');

  const handleNavigate = (target: string) => {
    setPage(target);
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-stone-50 font-body text-stone-800 antialiased">
        <Navbar onNavigate={handleNavigate} currentPage={page} />
        {page === 'order' ? (
          <OrderPage onNavigate={handleNavigate} />
        ) : page.startsWith('search:') ? (
          <SearchPage onNavigate={handleNavigate} initialQuery={page.slice(7)} />
        ) : (
          <HomePage onNavigate={handleNavigate} />
        )}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
