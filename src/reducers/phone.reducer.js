import { GET_PRODUCT_BY_ID } from "../actions/product.action";
import Product from "../api/product.api";

const initProduct = {}

const ProductReducer = async (state = initProduct, action) => {
    switch (action.type) {
        case GET_PRODUCT_BY_ID:
            return Object.assign({}, state, await Product.getProductById(action.productId));
        default:
            return state;
    }
}

export default ProductReducer
