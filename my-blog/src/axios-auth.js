import axios from 'axios'

const instance = axios.create({
    baseURL:'https://vuedemo-2c3a0.firebaseio.com'
})

// 全局
export default instance