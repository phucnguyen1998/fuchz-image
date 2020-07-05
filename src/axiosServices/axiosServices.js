import axios from 'axios';

class AxiosServices {
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.instance = instance;
    }

    handleSuccess(response) {
        return response
    }

    handleError(error) {
        return error;
    }

    //GET
    get(url) {
        return this.instance.get(url)
    }
}

export default new AxiosServices();