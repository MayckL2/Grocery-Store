export interface IProduct {
    id: number,
    name: string,
    price: number,
    discount: number,
    image: string,
    inStock: number,
    category: string,
    quantity?: number,
}

export const productDefault: IProduct = {
    id: 0,
    name: "default",
    price: 0,
    discount: 0,
    image: "",
    inStock: 0,
    category: "",
    quantity: 0
}