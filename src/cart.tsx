import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Dish } from '@/data';
import { coupons, type Coupon } from '@/data';

export type CartItem = Dish & { quantity: number };

type CartContextValue = {
  items: CartItem[];
  addItem: (dish: Dish) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  discount: number;
  deliveryFee: number;
  taxes: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const DELIVERY_FEE_RATE = 0.05;
const TAX_RATE = 0.05;
const FREE_DELIVERY_THRESHOLD = 500;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  const addItem = useCallback((dish: Dish) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === dish.id);
      if (existing) {
        return prev.map((i) => (i.id === dish.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0),
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setAppliedCoupon(null);
  }, []);

  const applyCoupon = useCallback((code: string) => {
    const found = coupons.find((c) => c.code.toLowerCase() === code.toLowerCase());
    if (found) {
      setAppliedCoupon(found);
      return true;
    }
    return false;
  }, []);

  const removeCoupon = useCallback(() => setAppliedCoupon(null), []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discount = appliedCoupon ? appliedCoupon.discount : 0;
  const afterDiscount = Math.max(0, subtotal - discount);
  const deliveryFee = afterDiscount >= FREE_DELIVERY_THRESHOLD || afterDiscount === 0 ? 0 : Math.round(subtotal * DELIVERY_FEE_RATE);
  const taxes = Math.round(afterDiscount * TAX_RATE);
  const total = afterDiscount + deliveryFee + taxes;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        discount,
        deliveryFee,
        taxes,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function formatINR(amount: number): string {
  return '₹' + amount.toLocaleString('en-IN');
}
