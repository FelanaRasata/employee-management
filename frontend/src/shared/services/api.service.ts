import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:9999/api',// Change en fonction de ton backend
    headers: {
        'Content-Type': 'application/json'
    }
})

export default instance

