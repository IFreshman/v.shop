import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Product } from "../types/Product";

export default class ProductAPIAServices {
    private axiosInstance: AxiosInstance

    constructor(){
        this.axiosInstance = axios.create({
            baseURL: "http://my-json-server.typicode.com/IFreshman/v.shop/product"
        })    
    }

    private async axiosCall<T>(config: AxiosRequestConfig){
        try {
            const { data } = await this.axiosInstance.request<T>(config)
            return [null, data]
        } catch (error) {
            return [error]
        }
    }

    async getProduct(productId: number){
        return this.axiosCall<Product>({method: "get", url: `/${productId}`})
    }
}

export const productAPI = new ProductAPIAServices();