import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { ProductProvider } from './contexts/ProductContext.tsx';
import './styles/global.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ProductProvider>
			<App />
		</ProductProvider>
	</StrictMode>
);
