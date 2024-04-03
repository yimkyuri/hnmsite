// import productReducer from "./reducers/productReducer";
import authenticateReducer from "./reducers/authenticateReducer"
import productSlice from "./slices/productSlice";

import { configureStore } from "@reduxjs/toolkit";

// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productSlice
    }
})

export default store;