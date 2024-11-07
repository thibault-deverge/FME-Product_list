import React, { createContext, useContext, useState, ReactNode } from "react";
import { nanoid } from "nanoid";

import { TProductContext } from "../types/ProductType";
import initialProducts from "../data/data";

const ProductContext = createContext<TProductContext | null>(null);

export function ProductProvider({ children }: { children: ReactNode }) {
	const [products, setProducts] = useState(
		initialProducts.map((product) => {
			return {
				...product,
				id: nanoid(),
				quantity: 0,
			};
		})
	);

	const increaseQuantity = (id: string) => {
		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === id ? { ...product, quantity: product.quantity + 1 } : product
			)
		);
	};

	const decreaseQuantity = (id: string) => {
		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === id && product.quantity > 0
					? { ...product, quantity: product.quantity - 1 }
					: product
			)
		);
	};

	return (
		<ProductContext.Provider
			value={{ products, setProducts, increaseQuantity, decreaseQuantity }}
		>
			{children}
		</ProductContext.Provider>
	);
}

export function useProduct() {
	const context = useContext(ProductContext);
	if (!context) {
		throw new Error("useProduct must be used within a ProductProvider");
	}
	return context;
}
