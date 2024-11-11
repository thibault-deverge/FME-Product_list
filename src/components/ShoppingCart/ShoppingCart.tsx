import React, { useState } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import ConfirmButton from '../ConfirmButton/ConfirmButton';
import ShoppingCartList from '../ShoppingCartList/ShoppingCartList';
import CarbonNeutral from '../CarbonNeutral/CarbonNeutral';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import styles from './ShoppingCart.module.scss';

function ShoppingCart() {
	const { products } = useProducts();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const cartProducts = products.filter((product) => product.quantity > 0);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<section className={styles.shoppingCart}>
			<h2>Your Cart ({cartProducts.length})</h2>

			{cartProducts.length === 0 ? (
				<div className={styles.emptyCart}>
					<img src="/public/assets/images/illustration-empty-cart.svg" alt="" />
					<p>You added items will appear here</p>
				</div>
			) : (
				<>
					<ShoppingCartList cartProducts={cartProducts} />
					<CarbonNeutral />
					<ConfirmButton handleClick={openModal}>Confirm order</ConfirmButton>

					{isModalOpen && <ConfirmModal cartProducts={cartProducts} handleClick={closeModal} />}
				</>
			)}
		</section>
	);
}

export default ShoppingCart;
