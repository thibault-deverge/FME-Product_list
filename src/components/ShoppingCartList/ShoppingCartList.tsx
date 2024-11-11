import React from 'react';
import { IProducts } from '../../types/ProductType';

import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';
import styles from './ShoppingCartList.module.scss';

type Prop = {
	cartProducts: IProducts[];
};

function ShoppingCartList({ cartProducts }: Prop) {
	const sortedCartProducts = [...cartProducts].sort((a, b) => a.name.localeCompare(b.name));
	const totalPrice = sortedCartProducts.reduce(
		(total, product) => total + product.price * product.quantity,
		0
	);

	return (
		<>
			{sortedCartProducts.map((product) => (
				<React.Fragment key={product.id}>
					<ShoppingCartItem product={product} />
					<div className={styles.separatorLine}></div>
				</React.Fragment>
			))}
			<div className={styles.orderResume}>
				<p>Order Total</p>
				<p>${totalPrice.toFixed(2)}</p>
			</div>
		</>
	);
}

export default ShoppingCartList;
