import { createContext, useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "bark-brawl-cart";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [items, setItems] = useState(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch {
            /* ignore quota */
        }
    }, [items]);

    const addItem = useCallback((product) => {
        if (!product?.id) return;
        setItems((prev) => {
            const idx = prev.findIndex((x) => x.id === product.id);
            if (idx === -1) {
                return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 }];
            }
            const next = [...prev];
            next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
            return next;
        });
    }, []);

    const removeItem = useCallback((id) => {
        setItems((prev) => prev.filter((x) => x.id !== id));
    }, []);

    const setQty = useCallback(
        (id, qty) => {
            if (qty < 1) {
                removeItem(id);
                return;
            }
            setItems((prev) => prev.map((x) => (x.id === id ? { ...x, qty } : x)));
        },
        [removeItem],
    );

    const clearCart = useCallback(() => setItems([]), []);

    const totalQty = useMemo(() => items.reduce((sum, x) => sum + x.qty, 0), [items]);

    const subtotal = useMemo(() => items.reduce((sum, x) => sum + x.price * x.qty, 0), [items]);

    const value = useMemo(
        () => ({
            items,
            addItem,
            removeItem,
            setQty,
            clearCart,
            totalQty,
            subtotal,
        }),
        [items, addItem, removeItem, setQty, clearCart, totalQty, subtotal],
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
