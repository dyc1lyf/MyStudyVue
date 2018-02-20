import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:3000'
})

// 全局
export default instance