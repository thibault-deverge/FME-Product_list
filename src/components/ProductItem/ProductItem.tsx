import React from "react";
import { IProducts } from "../../types/ProductType";
import styles from "./ProductItem.module.scss";
import CardButton from "../CardButton/CardButton";

type Prop = {
	product: IProducts;
};

function ProductItem({ product }: Prop) {
	const { image, name, price, category, quantity } = product;

	return (
		<article className={styles.product}>
			<div className={`${styles.imageContainer} ${quantity ? "active" : ""}`}>
				<picture>
					<source srcSet={image.desktop} media="(min-width: 1000px)" />
					<source srcSet={image.tablet} media="(min-width: 600px)" />
					<img src={image.mobile} alt={name} />
				</picture>
				<CardButton product={product} />
			</div>
			<p className={styles.category}>{category}</p>
			<h2>{name}</h2>
			<p>${price.toFixed(2)}</p>
		</article>
	);
}

export default ProductItem;
