import { all, fork } from "redux-saga/effects";

import {watchProductSagaAsync} from "./phone.saga";

export default function* saga(){
    yield all([
        fork(watchProductSagaAsync)
    ])
}
