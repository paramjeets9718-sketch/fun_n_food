export type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviews: number;
  priceRange: string;
  distance: string;
  image: string;
  tags: string[];
  deal?: string;
  featured?: boolean;
};

export type Dish = {
  id: string;
  name: string;
  restaurant: string;
  price: number;
  rating: number;
  image: string;
  trending?: boolean;
  description: string;
};

export type GalleryItem = {
  id: string;
  image: string;
  label: string;
  category: string;
};

export type Review = {
  id: string;
  name: string;
  avatar: string;
  restaurant: string;
  rating: number;
  text: string;
  date: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
};

export type Coupon = {
  code: string;
  discount: number;
  label: string;
};

export const coupons: Coupon[] = [
  { code: 'FOODFUN50', discount: 50, label: '₹50 off on orders above ₹200' },
  { code: 'TASTY100', discount: 100, label: '₹100 off on orders above ₹500' },
  { code: 'FIRSTBITE', discount: 30, label: '₹30 off your first order' },
];

export const categories: Category[] = [
  { id: 'c1', name: 'Burgers', icon: '🍔', count: 124, color: 'bg-brand-100 text-brand-700' },
  { id: 'c2', name: 'Pizza', icon: '🍕', count: 98, color: 'bg-accent-100 text-accent-700' },
  { id: 'c3', name: 'Indian', icon: '🍛', count: 76, color: 'bg-amber-100 text-amber-700' },
  { id: 'c4', name: 'Street Food', icon: '🌮', count: 112, color: 'bg-lime-100 text-lime-700' },
  { id: 'c5', name: 'Desserts', icon: '🍰', count: 64, color: 'bg-pink-100 text-pink-700' },
  { id: 'c6', name: 'Sushi', icon: '🍣', count: 52, color: 'bg-fresh-100 text-fresh-700' },
  { id: 'c7', name: 'Cafés', icon: '☕', count: 89, color: 'bg-stone-100 text-stone-700' },
  { id: 'c8', name: 'Drinks', icon: '🍹', count: 43, color: 'bg-sky-100 text-sky-700' },
];

export const restaurants: Restaurant[] = [
  {
    id: 'r1',
    name: 'Burger & Beyond',
    cuisine: 'American · Burgers',
    rating: 4.8,
    reviews: 1240,
    priceRange: '₹₹',
    distance: '1.3 km',
    image: 'https://images.pexels.com/photos/15523394/pexels-photo-15523394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Family Friendly', 'Outdoor Seating'],
    deal: '20% off on combos',
    featured: true,
  },
  {
    id: 'r2',
    name: 'Spice Route',
    cuisine: 'Indian · Curry',
    rating: 4.7,
    reviews: 980,
    priceRange: '₹₹',
    distance: '2.0 km',
    image: 'https://images.pexels.com/photos/9792458/pexels-photo-9792458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Vegetarian Options', 'Spicy'],
    deal: 'Free naan with curry',
    featured: true,
  },
  {
    id: 'r3',
    name: 'El Taco Loco',
    cuisine: 'Mexican · Street Food',
    rating: 4.6,
    reviews: 760,
    priceRange: '₹',
    distance: '0.8 km',
    image: 'https://images.pexels.com/photos/36498696/pexels-photo-36498696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Late Night', 'Casual'],
    featured: true,
  },
  {
    id: 'r4',
    name: 'Bella Napoli',
    cuisine: 'Italian · Pizza',
    rating: 4.9,
    reviews: 1530,
    priceRange: '₹₹',
    distance: '2.4 km',
    image: 'https://images.pexels.com/photos/8471699/pexels-photo-8471699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Wood Fired', 'Wine Bar'],
    deal: 'Buy 1 get 1 pizza',
    featured: true,
  },
  {
    id: 'r5',
    name: 'Sakura House',
    cuisine: 'Japanese · Sushi',
    rating: 4.8,
    reviews: 640,
    priceRange: '₹₹₹',
    distance: '3.4 km',
    image: 'https://images.pexels.com/photos/31393436/pexels-photo-31393436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Omakase', 'Quiet Ambience'],
  },
  {
    id: 'r6',
    name: 'Sweet Tooth Café',
    cuisine: 'Desserts · Bakery',
    rating: 4.7,
    reviews: 420,
    priceRange: '₹',
    distance: '0.5 km',
    image: 'https://images.pexels.com/photos/29517897/pexels-photo-29517897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Cozy', 'Instagrammable'],
    deal: 'Happy hour: 3–5 PM',
  },
  {
    id: 'r7',
    name: 'Chatori Gali',
    cuisine: 'Indian · Street Food',
    rating: 4.6,
    reviews: 890,
    priceRange: '₹',
    distance: '0.6 km',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Street Food', 'Quick Bites'],
    deal: 'Combo from ₹99',
    featured: true,
  },
  {
    id: 'r8',
    name: 'Café Delight',
    cuisine: 'Café · Beverages',
    rating: 4.5,
    reviews: 560,
    priceRange: '₹',
    distance: '1.1 km',
    image: 'https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Cold Drinks', 'Snacks'],
    deal: 'Buy 1 get 1 drink',
  },
];

export const trendingDishes: Dish[] = [
  {
    id: 'd1',
    name: 'Truffle Cheeseburger',
    restaurant: 'Burger & Beyond',
    price: 349,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/13163534/pexels-photo-13163534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Juicy patty with truffle aioli, melted cheddar, and caramelized onions in a brioche bun.',
  },
  {
    id: 'd2',
    name: 'Butter Chicken Feast',
    restaurant: 'Spice Route',
    price: 420,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Creamy butter chicken with fragrant basmati rice and two butter naan.',
  },
  {
    id: 'd3',
    name: 'Al Pastor Tacos',
    restaurant: 'El Taco Loco',
    price: 220,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/25391591/pexels-photo-25391591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Three grilled pork tacos with pineapple, cilantro, onion, and lime.',
  },
  {
    id: 'd4',
    name: 'Margherita di Bufala',
    restaurant: 'Bella Napoli',
    price: 380,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3644/pizza-restaurant-dinner-lunch.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Wood-fired pizza with buffalo mozzarella, San Marzano tomatoes, and fresh basil.',
  },
  {
    id: 'd5',
    name: 'Dragon Roll Platter',
    restaurant: 'Sakura House',
    price: 550,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/4353087/pexels-photo-4353087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Assorted sushi rolls with prawn tempura, avocado, and spicy mayo drizzle.',
  },
  {
    id: 'd6',
    name: 'Forest Berry Cheesecake',
    restaurant: 'Sweet Tooth Café',
    price: 180,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/12124881/pexels-photo-12124881.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Creamy baked cheesecake topped with fresh forest berries and berry coulis.',
  },
  {
    id: 'd7',
    name: 'Veg Chowmein',
    restaurant: 'Chatori Gali',
    price: 120,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/2347751/pexels-photo-2347751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Hakka-style stir-fried noodles with crunchy vegetables, soy sauce, and a hint of garlic.',
  },
  {
    id: 'd8',
    name: 'Chole Bhature',
    restaurant: 'Chatori Gali',
    price: 140,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/5488053/pexels-photo-5488053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Spiced chickpea curry served with two fluffy, golden-fried bhature and pickled onions.',
  },
  {
    id: 'd9',
    name: 'Crispy Samosa (2 pcs)',
    restaurant: 'Chatori Gali',
    price: 50,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Golden-fried pastry stuffed with spiced potatoes and peas, served with tamarind chutney.',
  },
  {
    id: 'd10',
    name: 'Grilled Sandwich',
    restaurant: 'Chatori Gali',
    price: 90,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Toasted sandwich loaded with fresh veggies, cheese, and mint chutney. Served hot.',
  },
  {
    id: 'd11',
    name: 'Cold Drink',
    restaurant: 'Café Delight',
    price: 60,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/2531188/pexels-photo-2531188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Chilled soft drink to cool you down. Choose from cola, orange, or lemon-lime.',
  },
  {
    id: 'd12',
    name: 'Chocolate Cake Slice',
    restaurant: 'Sweet Tooth Café',
    price: 150,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/13735441/pexels-photo-13735441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Rich, moist chocolate cake with a glossy ganache topping and chocolate shavings.',
  },
  {
    id: 'd13',
    name: 'Paneer Tikka',
    restaurant: 'Spice Route',
    price: 220,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/9644360/pexels-photo-9644360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Marinated cottage cheese cubes grilled in the tandoor with bell peppers and onions.',
  },
  {
    id: 'd14',
    name: 'Masala Dosa',
    restaurant: 'Chatori Gali',
    price: 130,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Crispy rice crepe stuffed with spiced potato masala, served with coconut chutney and sambar.',
  },
  {
    id: 'd15',
    name: 'Chicken Biryani',
    restaurant: 'Spice Route',
    price: 280,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Fragrant basmati rice layered with spiced chicken, saffron, and fried onions. Dum-cooked.',
  },
  {
    id: 'd16',
    name: 'Pav Bhaji',
    restaurant: 'Chatori Gali',
    price: 110,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/162971/pizza-162971.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Thick spicy vegetable curry served with butter-toasted pav buns and a wedge of lemon.',
  },
  {
    id: 'd17',
    name: 'Vada Pav',
    restaurant: 'Chatori Gali',
    price: 40,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/5488053/pexels-photo-5488053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Mumbai style spicy potato fritter in a soft bun with garlic chutney and fried green chilli.',
  },
  {
    id: 'd18',
    name: 'Gulab Jamun (2 pcs)',
    restaurant: 'Sweet Tooth Café',
    price: 80,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/13735441/pexels-photo-13735441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Soft milk-solid dumplings soaked in warm cardamom-saffron sugar syrup. Served hot.',
  },
  {
    id: 'd19',
    name: 'Onion Pakora',
    restaurant: 'Chatori Gali',
    price: 60,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Crispy deep-fried gram flour fritters with sliced onions and spices. Tea-time classic.',
  },
  {
    id: 'd20',
    name: 'Aloo Paratha',
    restaurant: 'Chatori Gali',
    price: 100,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/5488053/pexels-photo-5488053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Whole wheat flatbread stuffed with spiced mashed potatoes. Served with butter and curd.',
  },
  {
    id: 'd21',
    name: 'Masala Chai',
    restaurant: 'Café Delight',
    price: 30,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    trending: true,
    description: 'Indian spiced tea brewed with milk, ginger, cardamom, and cloves. Perfectly comforting.',
  },
];

export const galleryItems: GalleryItem[] = [
  { id: 'g1', image: 'https://images.pexels.com/photos/5488053/pexels-photo-5488053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Gourmet Burgers', category: 'Burgers' },
  { id: 'g2', image: 'https://images.pexels.com/photos/19781596/pexels-photo-19781596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Indian Curry', category: 'Indian' },
  { id: 'g3', image: 'https://images.pexels.com/photos/34289262/pexels-photo-34289262.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Street Tacos', category: 'Street Food' },
  { id: 'g4', image: 'https://images.pexels.com/photos/34844493/pexels-photo-34844493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'French Pastry', category: 'Desserts' },
  { id: 'g5', image: 'https://images.pexels.com/photos/5903317/pexels-photo-5903317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Wood-fired Pizza', category: 'Pizza' },
  { id: 'g6', image: 'https://images.pexels.com/photos/13869853/pexels-photo-13869853.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Sushi Platter', category: 'Sushi' },
  { id: 'g7', image: 'https://images.pexels.com/photos/13735441/pexels-photo-13735441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Chocolate Cake', category: 'Desserts' },
  { id: 'g8', image: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Classic Combo', category: 'Burgers' },
];

export const reviews: Review[] = [
  {
    id: 'rv1',
    name: 'Priya Sharma',
    avatar: 'https://i.pravatar.cc/100?img=47',
    restaurant: 'Spice Route',
    rating: 5,
    text: 'The butter chicken was the best I have had outside of India. Rich, creamy, and perfectly spiced. The naan was fresh and fluffy!',
    date: '2 days ago',
  },
  {
    id: 'rv2',
    name: 'Marcus Lee',
    avatar: 'https://i.pravatar.cc/100?img=12',
    restaurant: 'Burger & Beyond',
    rating: 5,
    text: 'Juicy patty, melted cheese, and that truffle aioli is unreal. This is now my go-to burger spot in the city.',
    date: '5 days ago',
  },
  {
    id: 'rv3',
    name: 'Sofia Garcia',
    avatar: 'https://i.pravatar.cc/100?img=32',
    restaurant: 'El Taco Loco',
    rating: 4,
    text: 'Authentic street tacos at a great price. The al pastor with fresh pineapple is a must-try. Line moves fast!',
    date: '1 week ago',
  },
  {
    id: 'rv4',
    name: 'James Okoro',
    avatar: 'https://i.pravatar.cc/100?img=15',
    restaurant: 'Bella Napoli',
    rating: 5,
    text: 'Wood-fired perfection. The Margherita di Bufala had the perfect char and the freshest mozzarella. Bellissimo!',
    date: '2 weeks ago',
  },
];

export const events: Event[] = [
  {
    id: 'e1',
    title: 'Global Street Food Festival',
    date: 'Aug 24–26, 2026',
    location: 'Riverside Park',
    image: 'https://images.pexels.com/photos/38431294/pexels-photo-38431294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: '40+ vendors serving street food from around the world. Live music, cooking demos, and family fun.',
  },
  {
    id: 'e2',
    title: 'Burger Battle 2026',
    date: 'Sep 7, 2026',
    location: 'Downtown Square',
    image: 'https://images.pexels.com/photos/38896819/pexels-photo-38896819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Top chefs compete for the title of best burger in the city. Tasting tickets include all entries.',
  },
  {
    id: 'e3',
    title: 'Night Market & Food Trucks',
    date: 'Every Friday',
    location: 'Harbor Boardwalk',
    image: 'https://images.pexels.com/photos/633017/pexels-photo-633017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A weekly celebration of food trucks, live DJs, and waterfront views. Free entry.',
  },
];
