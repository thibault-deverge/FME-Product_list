import React from 'react';
import { useProducts } from '../../contexts/ProductContext';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.module.scss';

function ProductList() {
	const { products } = useProducts();

	return (
		<div className={styles.dessertContainer}>
			<h1>Dessert</h1>
			<section className={styles.productsList}>
				{products.map((product) => {
					return <ProductItem key={product.id} product={product} />;
				})}
			</section>
		</div>
	);
}

export default ProductList;
