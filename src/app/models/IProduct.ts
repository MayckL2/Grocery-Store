export interface IProduct {
    id: number,
    name: string,
    price: number,
    discount?: number,
    image: string,
    inStock: number,
    category: string,
}
