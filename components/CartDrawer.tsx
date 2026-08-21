"use client";

import Image from "next/image";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/components/CartProvider";

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, updateQuantity, removeItem, clearCart } = useCart();
  const delivery = subtotal > 499 || subtotal === 0 ? 0 : 49;
  const total = subtotal + delivery;

  return (
    <>
      {isOpen && <button aria-label="Close cart" onClick={closeCart} className="fixed inset-0 z-[70] bg-black/45 backdrop-blur-[2px]" />}
      <aside
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-[80] flex h-dvh w-full max-w-md flex-col bg-crust-cream shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-5">
          <div>
            <p className="eyebrow">Your order</p>
            <h2 className="mt-1 font-display text-2xl font-bold">Shopping Cart</h2>
          </div>
          <button onClick={closeCart} aria-label="Close cart" className="rounded-full border border-black/10 p-2 hover:bg-black/5">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-crust-ember/10">
                <ShoppingBag className="h-7 w-7 text-crust-ember" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">Your cart is empty</h3>
              <p className="mt-2 max-w-xs text-sm text-crust-black/60">Add something delicious from the menu and it will appear here.</p>
              <button onClick={closeCart} className="btn-primary mt-6">Browse Menu</button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.slug} className="rounded-2xl border border-black/5 bg-white p-3 shadow-card">
                  <div className="flex gap-3">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                      <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display font-bold leading-tight">{item.name}</h3>
                        <button onClick={() => removeItem(item.slug)} aria-label={`Remove ${item.name}`} className="text-black/35 hover:text-crust-ember">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="mt-1 text-sm font-semibold">₹{item.price * item.quantity}</p>
                      <div className="mt-2 inline-flex items-center rounded-full border border-black/10 bg-crust-paper p-1">
                        <button onClick={() => updateQuantity(item.slug, item.quantity - 1)} aria-label={`Decrease ${item.name}`} className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-white">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.slug, item.quantity + 1)} aria-label={`Increase ${item.name}`} className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-white">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={clearCart} className="text-xs font-bold uppercase tracking-wider text-black/45 hover:text-crust-ember">Clear cart</button>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-black/10 bg-white px-5 pb-6 pt-5">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-black/60">Subtotal</span><span>₹{subtotal}</span></div>
              <div className="flex justify-between"><span className="text-black/60">Delivery</span><span>{delivery === 0 ? "FREE" : `₹${delivery}`}</span></div>
              <div className="mt-3 flex justify-between border-t border-black/10 pt-3 font-display text-xl font-bold"><span>Total</span><span>₹{total}</span></div>
            </div>
            <button className="btn-primary mt-5 w-full">Proceed to Checkout</button>
            <p className="mt-3 text-center text-xs text-black/45">Free delivery on orders above ₹499</p>
          </div>
        )}
      </aside>
    </>
  );
}
