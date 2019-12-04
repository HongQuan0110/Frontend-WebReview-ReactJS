import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED,
    GET_PRODUCT_BY_ID_FAILED
} from "../actions/phone.action"

const initProduct = {}

const ProductsReducer = (state = initProduct, action) => {
    switch(action.type){
        case GET_PRODUCTS: {
            return Object.assign({}, state, {
                loading: true,
                failed: false
            });
        }
        
        case GET_PRODUCTS_SUCCESS: {
            return Object.assign({}, state, {
                loading: false,
                failed: false,
                phoneList: action.data
            });
        }

        case GET_PRODUCT_BY_ID_FAILED: {
            return Object.assign({}, state, {
                loading: true,
                failed: true
            })
        }

        default: 
            return state
    }
}

export default ProductsReducer;
