import axios from 'axios';

class HttpService {
    constructor() {
        this.prdServ = "http://localhost:9088/api/products";
        this.catServ = "http://localhost:9089/api/categories";
    }

    getProducts() {
        let resp = axios.get(this.prdServ);
        return resp;
    }
    postProduct(prd) {
        let resp = axios.post(this.prdServ, JSON.stringify(prd), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp;
    }

    getCategories() {
        let resp = axios.get(this.catServ);
        return resp;
    }
    postCategory(cat) {
        let resp = axios.post(this.catServ, cat, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp;
    }
}

export default HttpService;