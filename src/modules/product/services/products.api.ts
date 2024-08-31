import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ProductDetails, Products } from "../types/product";

export default class ProductsAPIAService {
    private axiosInstance: AxiosInstance

    constructor(){
        this.axiosInstance = axios.create({
            baseURL: "http://my-json-server.typicode.com/IFreshman/v.shop/product"
        })    
    }

    private async axiosCall<T>(config: AxiosRequestConfig): Promise<[unknown, T?]>{
        try {
            const { data } = await this.axiosInstance.request<T>(config)
            return [null, data]
        } catch (error) {
            return [error]
        }
    }

    async getAllProducts() {
        return this.axiosCall<Products[]>({method: "get"})
    }

    async getProductDetails(productId: number) {
        return this.axiosCall<ProductDetails>({method: "get" , url: `/details?productId=${productId}`})
    }
}

export const productsAPI = new ProductsAPIAService();