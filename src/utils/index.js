/* eslint-disable no-console */
import axios from 'axios';
const base_url = 'https://soultech-store.herokuapp.com/api/v2/'

class AxiosCalls {
    static post (path, data){
        return axios.post(`${base_url}${path}`, data).catch(err=>console.log(err))
    }
}

export default AxiosCalls
