import React from 'react';
import { useProducts } from '../../contexts/ProductContext';

import ShoppingCartList from '../ShoppingCartList/ShoppingCartList';
import styles from './ShoppingCart.module.scss';

function ShoppingCart() {
	const { products } = useProducts();
	const cartProducts = products.filter((product) => product.quantity > 0);
	const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

	return (
		<section className={styles.shoppingCart}>
			<h2>Your Cart ({cartProducts.length})</h2>

			{cartProducts.length === 0 ? (
				<div className={styles.emptyCart}>
					<img src="/public/assets/images/illustration-empty-cart.svg" alt="" />
					<p>You added items will appear here</p>
				</div>
			) : (
				<ShoppingCartList cartProducts={cartProducts} />
				// <ConfirmBtn />
			)}
		</section>
	);
}

export default ShoppingCart;
