import requestHelper from "../helpers/request.helper";
import { appConfig } from "../configs/app.config";

export default class Auth{
    static Login(email, password){
        return requestHelper.post(`${appConfig.apiUrl}/login`, {email, password});
    }

    static CheckLogin(){
        return requestHelper.get(`${appConfig.apiUrl}/profile`);
    }
}
