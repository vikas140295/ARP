import { getData, deleteData, postData, putData } from './../../apis/request';

export async function GetCategories() {
    const products = await getData('categories');
    return products;
}



export async function GetSeller() {
    const products = await getData('users/sellers');
    return products;
}


export async function GetProducts() {
    const products = await getData('products');
    return products;
}

export async function GetProductById(productId) {
    const products = await getData(`products/${productId}`);
    return products;
}

export async function GetProductsByCategories(categories) {
    debugger;
    const products = await postData('products/filter', {categories:categories});
    return products;
}

