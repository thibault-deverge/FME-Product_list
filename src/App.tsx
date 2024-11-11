import React from 'react';

import ProductList from './components/ProductList/ProductList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './styles/global.scss';

function App() {
	return (
		<main>
			<ProductList />
			<ShoppingCart />
		</main>
	);
}

export default App;
