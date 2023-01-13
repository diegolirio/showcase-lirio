import axios from 'axios'

//const URL_RESOURCES_INVESTMENT_PROFILE = process.env.VUE_APP_URL_RESOURCES_INVESTMENT_PROFILE
const URL = 'https://63b5f0c258084a7af3a54d5c.mockapi.io/products'

export default {
    getProductsByCompanyId(companyId, cb, errorCb) {
        let url = `${URL}?companyId=${companyId}`;
        axios.get(url)
            .then(data => {
                cb(data.data)
            })
            .catch(error => {
                console.log(error);
                errorCb(error)
            })
    },
    getProductById(_id, cb, errorCb) {
        let url = `${URL}/${_id}`;
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