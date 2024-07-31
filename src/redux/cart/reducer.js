import products from "../../data/products";
import CartActionTypes from "./action-type";

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload)
            }                        

        default: 
            return state;
    }
}

export default cartReducer