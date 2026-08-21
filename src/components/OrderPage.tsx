import { useState } from 'react';
import {
  MapPin,
  Trash2,
  Minus,
  Plus,
  Tag,
  Check,
  ShoppingBag,
  ArrowLeft,
  CreditCard,
  Wallet,
  Banknote,
  CheckCircle2,
  Truck,
} from 'lucide-react';
import { useCart, formatINR } from '@/cart';
import { coupons } from '@/data';

type OrderPageProps = {
  onNavigate: (page: string) => void;
};

type PaymentMethod = 'card' | 'upi' | 'cod';

export function OrderPage({ onNavigate }: OrderPageProps) {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    discount,
    deliveryFee,
    taxes,
    total,
    itemCount,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState(false);
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formError, setFormError] = useState('');

  const handleApplyCoupon = () => {
    if (!couponInput.trim()) return;
    setCouponError('');
    setCouponSuccess(false);
    const success = applyCoupon(couponInput);
    if (success) {
      setCouponSuccess(true);
    } else {
      setCouponError('Invalid coupon code. Try one of the available offers below.');
    }
  };

  const handlePlaceOrder = () => {
    if (items.length === 0) return;
    if (!location.trim() || !city.trim() || !pincode.trim() || !phone.trim()) {
      setFormError('Please fill in all delivery details.');
      return;
    }
    if (pincode.trim().length !== 6) {
      setFormError('Please enter a valid 6-digit pincode.');
      return;
    }
    if (phone.trim().length !== 10) {
      setFormError('Please enter a valid 10-digit phone number.');
      return;
    }
    setFormError('');
    setOrderPlaced(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-stone-50 pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-stone-100 p-8 sm:p-12 text-center shadow-xl shadow-brand-900/5">
            <div className="w-20 h-20 rounded-full bg-fresh-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-fresh-600" />
            </div>
            <h1 className="font-display font-extrabold text-3xl text-stone-900 mb-3">Order placed successfully!</h1>
            <p className="text-stone-500 text-lg mb-2">
              Your order total of <span className="font-bold text-stone-900">{formatINR(total)}</span> has been confirmed.
            </p>
            <p className="text-stone-500 mb-8">
              {paymentMethod === 'cod' ? 'Pay cash on delivery.' : paymentMethod === 'upi' ? 'Payment via UPI confirmed.' : 'Payment via card confirmed.'}
            </p>
            <div className="bg-stone-50 rounded-2xl p-5 mb-8 text-left">
              <div className="flex items-center gap-2 text-stone-600 mb-2">
                <Truck className="w-4 h-4 text-brand-500" />
                <span className="text-sm font-semibold">Delivering to:</span>
              </div>
              <p className="text-sm text-stone-500">{location}, {city} - {pincode}</p>
              <p className="text-sm text-stone-500 mt-1">Phone: {phone}</p>
              <p className="text-sm text-stone-500 mt-1">{itemCount} item(s) in your order</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  clearCart();
                  onNavigate('home');
                }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 text-white font-bold shadow-lg hover:-translate-y-0.5 transition-transform"
              >
                Back to home
              </button>
              <button
                onClick={() => {
                  clearCart();
                  setOrderPlaced(false);
                }}
                className="px-8 py-3 rounded-full bg-white border border-stone-200 text-stone-700 font-bold hover:bg-stone-50 transition-colors"
              >
                Order again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-stone-100 p-8 sm:p-12 text-center shadow-xl shadow-brand-900/5">
            <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-stone-400" />
            </div>
            <h1 className="font-display font-extrabold text-2xl text-stone-900 mb-3">Your cart is empty</h1>
            <p className="text-stone-500 mb-8">Add some delicious dishes to get started!</p>
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 text-white font-bold shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              <ArrowLeft className="w-4 h-4" />
              Browse dishes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-stone-600 font-semibold mb-6 hover:text-brand-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to menu
        </button>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 mb-8">Your Order</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Cart items + delivery details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart items */}
            <div className="bg-white rounded-3xl border border-stone-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">
                <h2 className="font-display font-bold text-lg text-stone-900">
                  Cart Items <span className="text-stone-400 font-normal">({itemCount})</span>
                </h2>
                <button
                  onClick={clearCart}
                  className="text-sm text-stone-400 hover:text-accent-500 font-medium transition-colors"
                >
                  Clear all
                </button>
              </div>
              <div className="divide-y divide-stone-100">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 sm:p-6">
                    <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-stone-900 truncate">{item.name}</h3>
                      <p className="text-sm text-stone-400 truncate">{item.restaurant}</p>
                      <p className="text-brand-600 font-bold text-sm mt-1">{formatINR(item.price)}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-stone-900 w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 hover:bg-brand-500 hover:text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="hidden sm:block text-right shrink-0 w-20">
                      <p className="font-bold text-stone-900">{formatINR(item.price * item.quantity)}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-stone-300 hover:text-accent-500 hover:bg-accent-50 transition-colors shrink-0"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery location */}
            <div className="bg-white rounded-3xl border border-stone-100 p-6">
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-5 h-5 text-brand-500" />
                <h2 className="font-display font-bold text-lg text-stone-900">Delivery Location</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-stone-700 mb-1.5">Full Address</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="House no, street, area, landmark"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-1.5">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Mumbai"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-1.5">Pincode</label>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="6-digit pincode"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-stone-700 mb-1.5">Phone Number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Payment method */}
            <div className="bg-white rounded-3xl border border-stone-100 p-6">
              <h2 className="font-display font-bold text-lg text-stone-900 mb-5">Payment Method</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'upi' as const, label: 'UPI', icon: Wallet, desc: 'Google Pay, PhonePe' },
                  { id: 'card' as const, label: 'Card', icon: CreditCard, desc: 'Credit / Debit' },
                  { id: 'cod' as const, label: 'Cash on Delivery', icon: Banknote, desc: 'Pay at door' },
                ].map((method) => {
                  const Icon = method.icon;
                  const active = paymentMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${
                        active
                          ? 'border-brand-500 bg-brand-50'
                          : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${active ? 'text-brand-500' : 'text-stone-400'}`} />
                      <div className={`font-bold text-sm ${active ? 'text-brand-700' : 'text-stone-800'}`}>{method.label}</div>
                      <div className="text-xs text-stone-400">{method.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Coupon + Payment summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Coupon */}
              <div className="bg-white rounded-3xl border border-stone-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-brand-500" />
                  <h2 className="font-display font-bold text-lg text-stone-900">Apply Coupon</h2>
                </div>

                {appliedCoupon ? (
                  <div className="flex items-center justify-between bg-fresh-50 border border-fresh-200 rounded-xl p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-fresh-600" />
                      <div>
                        <div className="font-bold text-sm text-fresh-700">{appliedCoupon.code}</div>
                        <div className="text-xs text-fresh-600">{appliedCoupon.label}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        removeCoupon();
                        setCouponInput('');
                        setCouponSuccess(false);
                      }}
                      className="text-xs text-stone-400 hover:text-accent-500 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-1 px-3 py-2.5 rounded-xl border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors text-sm"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-4 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-bold hover:bg-brand-600 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                )}

                {couponError && <p className="text-xs text-accent-500 mb-3">{couponError}</p>}

                {!appliedCoupon && (
                  <div className="mt-4 space-y-2">
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Available offers</p>
                    {coupons.map((c) => (
                      <button
                        key={c.code}
                        onClick={() => {
                          setCouponInput(c.code);
                          setCouponError('');
                        }}
                        className="w-full text-left p-3 rounded-xl border border-dashed border-stone-200 hover:border-brand-300 hover:bg-brand-50/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-brand-600">{c.code}</span>
                          <span className="text-xs font-bold text-fresh-600">-{formatINR(c.discount)}</span>
                        </div>
                        <p className="text-xs text-stone-400 mt-0.5">{c.label}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Payment summary */}
              <div className="bg-white rounded-3xl border border-stone-100 p-6">
                <h2 className="font-display font-bold text-lg text-stone-900 mb-5">Payment Summary</h2>
                <div className="space-y-3 mb-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-500">Item total ({itemCount} items)</span>
                    <span className="font-semibold text-stone-900">{formatINR(subtotal)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-fresh-600">Coupon discount</span>
                      <span className="font-semibold text-fresh-600">-{formatINR(discount)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-500">Delivery fee</span>
                    <span className="font-semibold text-stone-900">
                      {deliveryFee === 0 ? <span className="text-fresh-600">FREE</span> : formatINR(deliveryFee)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-500">Taxes & charges (5%)</span>
                    <span className="font-semibold text-stone-900">{formatINR(taxes)}</span>
                  </div>
                  {deliveryFee > 0 && (
                    <p className="text-xs text-stone-400 pt-1">
                      Add {formatINR(500 - (subtotal - discount))} more for free delivery
                    </p>
                  )}
                </div>
                <div className="border-t border-stone-100 pt-4 flex items-center justify-between mb-6">
                  <span className="font-display font-bold text-lg text-stone-900">To Pay</span>
                  <span className="font-display font-extrabold text-2xl text-brand-600">{formatINR(total)}</span>
                </div>

                {formError && (
                  <p className="text-sm text-accent-500 mb-3 text-center">{formError}</p>
                )}

                <button
                  onClick={handlePlaceOrder}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 text-white font-bold shadow-lg shadow-brand-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Place Order · {formatINR(total)}
                </button>
                <p className="text-xs text-stone-400 text-center mt-3">
                  {paymentMethod === 'cod' ? 'Pay with cash when your food arrives' : 'Secure payment · 100% safe checkout'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
