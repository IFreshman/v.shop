import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Product, ProductDetails } from '../types/product';
import ProductsAPIService from '../services/products.api';

describe('ProductsAPIAService', () => {
  let productsAPI: ProductsAPIService;
  let axiosRequestMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    // Create a new instance of the API service
    productsAPI = new ProductsAPIService();

    // Mock the axiosInstance.request method
    axiosRequestMock = vi.fn();
    productsAPI['axiosInstance'].request = axiosRequestMock;
  });

  afterEach(() => {
    // Clear all mocks after each test
    vi.clearAllMocks();
  });

  it('should fetch all products successfully', async () => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Logo top with rolled edges and a slub yarn texture',
        price: 17.99,
        color: [
          {
            name: 'White',
            value: 'white',
            sizes: [
              { size: 'XS', available: true },
              { size: 'S', available: false },
              { size: 'M', available: false },
              { size: 'L', available: false },
              { size: 'XL', available: true },
              { size: 'XXL', available: false },
              { size: '3XL', available: false }
            ]
          },
          {
            name: 'Liliac',
            value: 'liliac',
            sizes: [
              { size: 'XS', available: true },
              { size: 'S', available: true },
              { size: 'M', available: true },
              { size: 'L', available: true },
              { size: 'XL', available: true },
              { size: 'XXL', available: true },
              { size: '3XL', available: true }
            ]
          }
        ]
      }
    ];

    // Mocking the axios request response
    axiosRequestMock.mockResolvedValue({ data: mockProducts });

    const [error, data] = await productsAPI.getAllProducts();

    expect(error).toBeNull();
    expect(data).toEqual(mockProducts);
    expect(axiosRequestMock).toHaveBeenCalledWith({ method: 'get', url: '/product' });
  });

  it('should handle error when fetching all products', async () => {
    const mockError = new Error('Network Error');

    // Mocking the axios request to throw an error
    axiosRequestMock.mockRejectedValue(mockError);

    const [error, data] = await productsAPI.getAllProducts();

    expect(error).toEqual(mockError);
    expect(data).toBeUndefined();
    expect(axiosRequestMock).toHaveBeenCalledWith({ method: 'get', url: '/product' });
  });

  it('should fetch product details successfully', async () => {
    const mockProductDetails: ProductDetails = {
      id: 1,
      productId: 1,
      ean: 4099976190552,
      article_num: '2150054.4868.S',
      info: [
        { title: 'Texture', description: 'slub texture', tag: 'details' },
        { title: 'Print', description: 'Logo Print', tag: 'details' },
        { title: 'Neckline', description: 'Crew Neck', tag: 'details' },
        { title: 'Seeves', description: 'Short Sleeves', tag: 'details' },
        { title: 'Details', description: 'Logo', tag: 'details' },
        { title: 'Fit', description: 'Regular Fit', tag: 'fit' },
        { title: 'Fabric', description: 'slub yarn, cotton, jersey', tag: 'material' },
        { title: 'Quality', description: 'stretchy, fine', tag: 'material' },
        { title: 'Outer fabric', description: '100% Cotton', tag: 'material_comp' }
      ],
      care: [
        { symbol: 'noBleach', description: 'Do not chlore' },
        { symbol: '30GentleCycle', description: 'Gentle wash cycle 30°' },
        { symbol: 'noDry', description: 'No dry cleaning' },
        { symbol: 'moderateIron', description: 'Handwarm ironing' },
        { symbol: 'gentleTumDrying', description: 'Tumble with reduced thermal pressure' }
      ]
    };

    // Mocking the axios request response
    axiosRequestMock.mockResolvedValue({ data: mockProductDetails });

    const [error, data] = await productsAPI.getProductDetails(1);

    expect(error).toBeNull();
    expect(data).toEqual(mockProductDetails);
    expect(axiosRequestMock).toHaveBeenCalledWith({ method: 'get', url: '/details/1' });
  });

  it('should handle error when fetching product details', async () => {
    const mockError = new Error('Network Error');

    // Mocking the axios request to throw an error
    axiosRequestMock.mockRejectedValue(mockError);

    const [error, data] = await productsAPI.getProductDetails(1);

    expect(error).toEqual(mockError);
    expect(data).toBeUndefined();
    expect(axiosRequestMock).toHaveBeenCalledWith({ method: 'get', url: '/details/1' });
  });
});
