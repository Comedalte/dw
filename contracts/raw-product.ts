export enum ProductType {
	Watch = "watch",
	Strap = "strap",
	Bracelet = "bracelet"
}

export interface RawProduct {
	sku: string;
	name: string;
	description: string;
	type: ProductType;
	size: string;
	price: {
		symbol: string;
		amount: string;
		fractionDigits: number;
	},
	currency: string;
	color: {
		displayName: string;
		id: string;
	},
	_links: {
		productImages: {
			title: string;
			href: string;
		}
	} 
}

export interface RawProductDto {
	products: RawProduct[];
}