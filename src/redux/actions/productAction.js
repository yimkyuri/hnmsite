function getProducts(searchQuery) {
    return async(dispatch) => {
        let url =`https://my-json-server.typicode.com/yimkyuri/hnmsite/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // setProductList(data);
        dispatch({type: "GET_PRODUCT_SUCCESS", payload:{data}})
    }
}

function getProductDetail(id) {
    return async(dispatch) => {
        let url = `https://my-json-server.typicode.com/yimkyuri/hnmsite/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        // setProduct(data);
        dispatch({type: "GET_PRODUCT_DETAIL_SUCCESS", payload:{data}})
    }
}


export const productAction = { getProducts, getProductDetail }