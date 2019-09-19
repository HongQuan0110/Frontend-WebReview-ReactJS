import { call, put, takeLatest } from "redux-saga/effects";

import { getProductByIdSuccess, getProductByIdFailed } from "../actions/phone.action";
import ProductApi from "../api/phone.api";
import { GET_PRODUCT_BY_ID } from "../actions/phone.action";

function* getProductById(action){
    try {
        const product = yield call(ProductApi.getProductById, action.params);
        yield put(getProductByIdSuccess(product));
    } catch (error) {
        yield put(getProductByIdFailed());
    }
}

export function* watchProductSagaAsync(){
    yield takeLatest(GET_PRODUCT_BY_ID, getProductById);
}
