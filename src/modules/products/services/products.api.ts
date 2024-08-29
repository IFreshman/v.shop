import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Products } from "../types/product";

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
            return [null, data!]
        } catch (error) {
            return [error]
        }
    }

    async getProduct(productId: number) {
        return this.axiosCall<Products>({method: "get" , url: `/${productId}`})
    }
}

export const productsAPI = new ProductsAPIAService();