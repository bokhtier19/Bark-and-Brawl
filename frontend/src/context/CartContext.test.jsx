import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider } from "./CartContext.jsx";
import { useCart } from "../hooks/useCart.js";

function Probe() {
    const { totalQty, addItem } = useCart();
    return (
        <button type="button" onClick={() => addItem({ id: "x", name: "Test", price: 10, image: "/x.jpg" })}>
            count-{totalQty}
        </button>
    );
}

describe("CartProvider", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("provides cart actions", () => {
        render(
            <CartProvider>
                <Probe />
            </CartProvider>,
        );
        expect(screen.getByRole("button")).toHaveTextContent("count-0");
        fireEvent.click(screen.getByRole("button"));
        expect(screen.getByRole("button")).toHaveTextContent("count-1");
    });
});
