export interface RawImage {
	order: string;
	src: string;
};

export interface RawImageDto {
	images: Record<string, RawImage[]>;
}