export default class ImageGetImage {
    private baseUrl: string

    constructor(){
        this.baseUrl = '/src/assets/clothes'
    }

    getColorImage(id: number, pic: string) {
        if (!id || !pic) {
            throw new Error('Invalid parameters. Ensure id and pic are provided.')
        }
        return new URL(`${this.baseUrl}/${id}/Color/${pic}.webp`, import.meta.url).href
    }
    
    getProductImage(id: number, color: string, pic: string) {
        if (!id || !color || !pic) {
            throw new Error('Invalid parameters. Ensure id, color, and pic are provided.')
        }
        return new URL(`${this.baseUrl}/${id}/product/${color}/${pic}.webp`, import.meta.url).href
    }
}

export const imageService = new ImageGetImage()