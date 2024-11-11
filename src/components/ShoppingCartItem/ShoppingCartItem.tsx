import React from 'react';
import { IProducts } from '../../types/ProductType';
import { DeleteItemIcon } from '../../assets/icons';
import styles from './ShoppingCartItem.module.scss';
import { useProducts } from '../../contexts/ProductContext';

type Prop = {
	product: IProducts;
};

function ShoppingCartItem({ product }: Prop) {
	const { decreaseQuantity } = useProducts();
	const { name, price, id, quantity } = product;
	const totalPrice = price * quantity;

	return (
		<article className={styles.cartItem}>
			<div>
				<h3>{name}</h3>
				<p>
					<span>{quantity}X</span>
					<span>@${price}</span>
					<span>${totalPrice}</span>
				</p>
			</div>
			<button onClick={() => decreaseQuantity(id)}>
				<DeleteItemIcon />
			</button>
		</article>
	);
}

export default ShoppingCartItem;
