import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: 'http://localhost:9999/api',// Change en fonction de ton backend
    headers: {
        'Content-Type': 'application/json'
    }
})

/*
* Intercepteur pour ajouter le "token" durant les appels
* */
axiosInstance.interceptors.request.use((config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        console.error('Request Interceptor Error:', error)
        return Promise.reject(error)
    }
)

export default axiosInstance

