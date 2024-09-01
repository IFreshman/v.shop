export interface Products {
    id: number, 
    name: string, 
    price: number,
    color: Color[],
}

export interface ProductDetails {
    id: number, 
    productId: number, 
    ean: number, 
    article_num: string, 
    info: Info[]
    care: Care[]
}

export type Color = {
    name: string
    value: string
    sizes: Size[]
}

export type Size = {
    size: string
    available: boolean 
}

export type Info = {
    title: string, 
    description: string
    tag: string
}

export type Care = {
    symbol: string, 
    description: string
}