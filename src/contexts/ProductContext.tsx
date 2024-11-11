import React, { createContext, useContext, useState, ReactNode } from 'react';
import { nanoid } from 'nanoid';

import { TProductContext } from '../types/ProductTypes';
import initialProducts from '../data/data';

const ProductContext = createContext<TProductContext | null>(null);

interface ProductProviderProps {
	children: ReactNode;
}

export function ProductProvider({ children }: ProductProviderProps) {
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

	const resetQuantities = () => {
		setProducts((prevProducts) => prevProducts.map((product) => ({ ...product, quantity: 0 })));
	};

	return (
		<ProductContext.Provider
			value={{ products, setProducts, increaseQuantity, decreaseQuantity, resetQuantities }}
		>
			{children}
		</ProductContext.Provider>
	);
}

export function useProducts() {
	const context = useContext(ProductContext);
	if (!context) {
		throw new Error('useProducts must be used within a ProductProvider');
	}
	return context;
}
