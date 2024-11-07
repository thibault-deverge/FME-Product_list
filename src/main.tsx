import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { ProductProvider } from "./contexts/ProductContext.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ProductProvider>
			<App />
		</ProductProvider>
	</StrictMode>
);
