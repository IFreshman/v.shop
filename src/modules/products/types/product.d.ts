export interface Products {
    id: number, 
    name: string, 
    price: number,
    color: Color[],
    details: Details,
    fit: {
        fit: string,
    }
    mci: MaterialAndCareInstructions

}

export type Size = {
    size: string
    available: boolean 
}

export type Color = {
    name: string
    value: string
    sizes: Size[]
}

type Details = {
    texture: string,
    print: string,
    neckline: string,
    sleeves: string,
    details?: string,
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