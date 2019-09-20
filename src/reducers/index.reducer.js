import { combineReducers } from "redux";

import phone from "./phone.reducer";
import auth from "./auth.reducer";

export default combineReducers({
    phone,
    auth
})
