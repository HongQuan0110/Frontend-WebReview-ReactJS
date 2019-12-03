import requestHelper from "./request.helper";
import {appConfig} from "../configs/app.config"

export const uploadFile = (file) => {
    let formData = new FormData();
    formData.append("image", file)

    return requestHelper.post(`${appConfig.apiUrl}/product/testUpload`, formData)
            .then(res => res)
            .catch(err => {})
}