import axios from 'axios'

//const URL_RESOURCES_INVESTMENT_PROFILE = process.env.VUE_APP_URL_RESOURCES_INVESTMENT_PROFILE
const URL = 'https://63b5f0c258084a7af3a54d5c.mockapi.io/company'

export default {
    getCompanyByDomain(domain, cb, errorCb) {
        let url = `${URL}?domain=${domain}`;
        axios.get(url)
            .then(data => {
                console.log(data)
                cb(data.data)
            })
            .catch(error => {
                console.log(error);
                errorCb(error)
            })
    }
}