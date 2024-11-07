export interface IProducts {
	image: {
		thumbnail: string;
		mobile: string;
		tablet: string;
		desktop: string;
	};
	id: string;
	name: string;
	category: string;
	price: number;
	quantity: number;
}

export type TProductContext = {
	products: IProducts[];
	setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
	increaseQuantity: (id: string) => void;
	decreaseQuantity: (id: string) => void;
};
