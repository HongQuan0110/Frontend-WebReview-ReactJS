import { all, fork } from "redux-saga/effects";

import {watchProductSagaAsync} from "./phone.saga";
import {watchAuthSagaAsync} from "./auth.saga";

export default function* saga(){
    yield all([
        fork(watchProductSagaAsync),
        fork(watchAuthSagaAsync)
    ])
}
