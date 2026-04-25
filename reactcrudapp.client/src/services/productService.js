import axios from "axios";

const API_URL = "https://localhost:7228/api/Product";

// Get all products
export const getProducts = async () => {
    return await axios.get(API_URL);
}

// Get a product by ID
export const getProductById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
}

// Create a new product
export const createProduct = async (product) => {
    return await axios.post(API_URL, product);
}

//update a product
export const updateProduct = async (id, product) => {
    return await axios.put(`${API_URL}/${id}`, product);
} 

//delete a product
export const deleteProduct = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
}