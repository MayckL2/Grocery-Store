export interface IBuy {
    id: number,
    name: string,
    price: number,
    discount: number
    image: string,
    inStock: number,
    quantity: number,
}

export const BuyDefault: IBuy = {
    id: 0,
    name: "",
    price: 0,
    discount: 0,
    image: "",
    inStock: 0,
    quantity: 0
}