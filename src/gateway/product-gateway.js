import axios from 'axios'

//const URL_RESOURCES_INVESTMENT_PROFILE = process.env.VUE_APP_URL_RESOURCES_INVESTMENT_PROFILE
const URL = 'https://63b5f0c258084a7af3a54d5c.mockapi.io'

export default {
    getProductList(cb, errorCb) {
        let url = `${URL}/products`;
        axios.get(url)
            .then(data => {
                cb(data.data)
            })
            .catch(error => {
                console.log(error);
                errorCb(error)
            })
    }
}