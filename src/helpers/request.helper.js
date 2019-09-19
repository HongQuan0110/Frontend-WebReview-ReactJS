import axios from "axios";
import cookie from "react-cookies";

const instance = axios.create({
    timeout: 1000
})

export default class RequestHelper{
    static async getHeader(config = {}){
        return {
            accept: "application/json",
            contentType: "application/json",
            Authorization: `bearer ${cookie.load("token")}`,
            ...config
        }
    }

    static async get(apiUrl, params){
        return instance({
            method: "get",
            url: apiUrl,
            headers: await this.getHeader(),
            params
        })
        .then(result => result.data)
        .catch(err => {
            // console.log(err);
        })
    }

    static async post(apiUrl, data, config){
        return instance({
            method: "post",
            url: apiUrl,
            headers: await this.getHeader(config),
            data
        })
        .then(result => result.data)
        .catch(err => {
            console.log(err);
        })
    }

    static async put(apiUrl, data){
        return instance({
            method: "put",
            url: apiUrl,
            headers: await this.getHeader(),
            data
        })
        .then(result => result.data)
        .catch(err => {
            console.log(err);
        })
    }

    static async delete(apiUrl){
        return instance({
            method: "put",
            url: apiUrl,
            headers: await this.getHeader(),
        })
        .then(result => result.data)
        .catch(err => {
            console.log(err);
        })
    }
}
