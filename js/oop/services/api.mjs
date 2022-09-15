// viet class call api
import axios from 'axios';

export default class getDataFromApi {
    url    = null;
    method = null;
    param  = null;
    constructor(url, method, param) {
        this.url    = url;
        this.method = method;
        this.param  = param;
    }

    callApi(){
        let method = this.method.toUpperCase();
        switch(method){
            case 'GET':
                return axios.get(this.url);
            case 'POST':
                return axios.post(this.url,this.param);
        }
    }
}