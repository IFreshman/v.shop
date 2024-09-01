export interface Products {
    id: number, 
    name: string, 
    price: number,
    color: Color[],
}

export interface ProductDetails {
    id: number, 
    productId: number, 
    details: Details,
    fit: Fit,
    mci: MaterialAndCareInstructions
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

type Details = {
    info: [{title: string, description: string,}]
    ean: number,
    article_number: string
}

type Fit = {
    fit: string
}

type MaterialAndCareInstructions = {
    material: {
        fabric: string,
        quality: string
    },
    material_comp: {
        outer_fabric: string
    },
    care: {
        a: string,
        b: string,
        c: string,
        d: string,
        e: string,
    }
}