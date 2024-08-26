export type Size = "XS" |"S" | "M" | "L" | "X" | "XL" | "XXL" | "3XL" | ""

type Color = {
    name: string
    value: string
}

export interface Product {
    color: Color[]
    sizes: Size[]
}