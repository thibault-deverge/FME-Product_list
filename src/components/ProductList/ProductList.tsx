import React from "react";
import { useProduct } from "../../contexts/ProductContext";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.scss";

function ProductList() {
	const { products } = useProduct();

	return (
		<section className={styles.productsList}>
			{products.map((product) => {
				return <ProductItem key={product.id} product={product} />;
			})}
		</section>
	);
}

export default ProductList;
