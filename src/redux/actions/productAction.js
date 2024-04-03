import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
    return async(dispatch) => {
        let url =`https://my-json-server.typicode.com/yimkyuri/hnmsite/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // dispatch({type: "GET_PRODUCT_SUCCESS", payload:{data}})
        dispatch(productActions.getAllProduct({ data }))
    }
}

function getProductDetail(id) {
    return async(dispatch) => {
        let url = `https://my-json-server.typicode.com/yimkyuri/hnmsite/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        // dispatch({type: "GET_PRODUCT_DETAIL_SUCCESS", payload:{data}})
        dispatch(productActions.getSingleProduct({ data }))
    }
}


export const productAction = { getProducts, getProductDetail }