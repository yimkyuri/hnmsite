import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
  isLoading: false,
  error: null
};

const getProducts = createAsyncThunk('product/fetchAll', async(searchQuery, thunkApi)=>{
  try {
    let url =`https://my-json-server.typicode.com/yimkyuri/hnmsite/products?q=${searchQuery}`;
    let response = await fetch(url);
    return await response.json();
  } catch(error) {
    thunkApi.rejectWithValue(error.message)
  }
})
// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//         return { ...state, productList: payload.data };
//     case "GET_PRODUCT_DETAIL_SUCCESS":
//         return { ...state, selectedItem: payload.data };
//     default :
//         return {...state};
//   }
// }

// export default productReducer;

const productSlice = createSlice({
  name:"product",
  initialState,
  reducers:{
    getSingleProduct(state, action) {
      state.selectedItem = action.payload.data;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending,(state)=>{
      state.isLoading=true
    })
    .addCase(getProducts.fulfilled,(state,action)=>{
      state.isLoading=false
      state.productList= action.payload;
    })
    .addCase(getProducts.rejected,(state,action)=>{
      state.isLoading=false
      state.error= action.payload;
    })
  }

});

console.log(productSlice);

export const productActions = productSlice.actions
export default productSlice.reducer