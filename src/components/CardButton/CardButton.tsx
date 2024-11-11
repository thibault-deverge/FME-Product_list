import React, { useEffect } from 'react';
import styles from './CardButton.module.scss';
import { IProducts } from '../../types/ProductType';
import { useProducts } from '../../contexts/ProductContext';
import { DecreaseIcon, IncreaseIcon } from '../../assets/icons';

function CardButton({ product }: { product: IProducts }) {
	const { increaseQuantity, decreaseQuantity } = useProducts();
	const { id, quantity } = product;

	if (!quantity) {
		return (
			<button className={styles.addButton} onClick={() => increaseQuantity(id)}>
				<img src="/public/assets/images/icon-add-to-cart.svg" alt="" />
				Add to Cart
			</button>
		);
	}

	return (
		<div className={styles.quantityControl}>
			<div
				role="button"
				tabIndex={0}
				onClick={() => decreaseQuantity(id)}
				onKeyDown={(e) => e.key === 'Enter' && decreaseQuantity(id)}
			>
				<DecreaseIcon />
			</div>
			<span className={styles.quantityDisplay}>{quantity}</span>
			<div
				role="button"
				tabIndex={0}
				onClick={() => increaseQuantity(id)}
				onKeyDown={(e) => {
					e.key === 'Enter' && increaseQuantity(id);
				}}
			>
				<IncreaseIcon />
			</div>
		</div>
	);
}

export default CardButton;
