import api from './api';

function getAllProducts() {
    return new Promise((resolve, reject) => {
        return api.get('/produtos')
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

function getProductById(id) {
    return new Promise((resolve, reject) => {
        return api.get(`/produtos/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

function createProduct(produto) {
    return new Promise((resolve, reject) => {
        return api.post(`/produtos`, produto)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

function updateProduct(produto) {
    return new Promise((resolve, reject) => {
        return api.put(`/produtos/${produto.id}`, produto)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

function deleteProduct(id) {
    return new Promise((resolve, reject) => {
        return api.delete(`/produtos/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}