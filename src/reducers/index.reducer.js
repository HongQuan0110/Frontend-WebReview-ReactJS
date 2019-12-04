import { combineReducers } from "redux";

import phone from "./phone.reducer";
import auth from "./auth.reducer";
import phoneList from "./phone.list.reducer"

export default combineReducers({
    phone,
    auth,
    phoneList
})
