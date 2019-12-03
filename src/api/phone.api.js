import requestHelper from "../helpers/request.helper";
import { uploadFile } from "../helpers/upload.file.helper";
import { appConfig } from "../configs/app.config";

export default class ProductApi{
    static getProductById(id){
        return requestHelper.get(`${appConfig.apiUrl}/product/${id}`);
    }

    static uploadFile(file){
        return uploadFile(file);
    }
}
