export function sum(number) {
    return {
        type: 'ADD',
        payload:number,
    }
}

export function Substract() {
    return {
        type: 'Substract',
        payload:1,
    }
}

export function addProduct(product) {
    return {
        type: 'INSERT_MODEL',
        payload:product,
    } 
}

export function getProduct() {
    return {
        type: 'GET_MODEL',
    } 
}