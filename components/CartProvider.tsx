"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { MenuItem } from "@/lib/types";

type CartItem = MenuItem & { quantity: number };

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  addItem: (item: MenuItem, quantity?: number) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  removeItem: (slug: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "crustrush-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return {
      items,
      itemCount,
      subtotal,
      isOpen,
      addItem: (item, quantity = 1) => {
        setItems((current) => {
          const existing = current.find((entry) => entry.slug === item.slug);
          if (existing) {
            return current.map((entry) =>
              entry.slug === item.slug ? { ...entry, quantity: entry.quantity + quantity } : entry,
            );
          }
          return [...current, { ...item, quantity }];
        });
        setIsOpen(true);
      },
      updateQuantity: (slug, quantity) => {
        setItems((current) =>
          quantity <= 0
            ? current.filter((item) => item.slug !== slug)
            : current.map((item) => (item.slug === slug ? { ...item, quantity } : item)),
        );
      },
      removeItem: (slug) => setItems((current) => current.filter((item) => item.slug !== slug)),
      clearCart: () => setItems([]),
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
