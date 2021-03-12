import { RawProduct } from "./raw-product";
import { RawImage } from "./raw-image";

export interface Product extends RawProduct {
	images: RawImage[];
}

export interface ProductDto {
	products: Product[];
}