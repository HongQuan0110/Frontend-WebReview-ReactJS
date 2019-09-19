import requestHelper from "../helpers/request.helper";
import { appConfig } from "../configs/app.config";

export default class ProductApi{
    static getProductById(id){
        return requestHelper.get(`${appConfig.apiUrl}/product/${id}`);
    }
}
