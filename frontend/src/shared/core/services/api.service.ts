import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',// Change en fonction de ton backend
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

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 403) {
            console.warn('Session expirée. Suppression du token...')
            localStorage.removeItem('token') // Supprimer le token
        }
        return Promise.reject(error)
    }
)

export default axiosInstance

