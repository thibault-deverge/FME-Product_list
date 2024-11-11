import React, { useEffect } from 'react';
import { IProducts } from '../../types/ProductType';

import { OrderConfirmedIcon } from '../../assets/icons';
import ConfirmButton from '../ConfirmButton/ConfirmButton';
import ShoppingCartList from '../ShoppingCartList/ShoppingCartList';
import styles from './ConfirmModal.module.scss';
import { useProducts } from '../../contexts/ProductContext';

type Props = {
	cartProducts: IProducts[];
	handleClick: () => void;
};

function ConfirmModal({ cartProducts, handleClick }: Props) {
	const { resetQuantities } = useProducts();

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	const resetOrder = () => {
		resetQuantities();
		handleClick();
	};

	return (
		<section className={styles.modalOverlay}>
			<div className={styles.modal}>
				<div className={styles.confirmInfo}>
					<OrderConfirmedIcon />
					<div>
						<h2>Order Confirmed</h2>
						<p>We hope you enjoy your food!</p>
					</div>
				</div>
				<div className={styles.confirmList}>
					<ShoppingCartList cartProducts={cartProducts} />
				</div>
				<ConfirmButton handleClick={resetOrder}>Start New Order</ConfirmButton>
			</div>
		</section>
	);
}

export default ConfirmModal;
