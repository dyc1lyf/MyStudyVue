import axios from 'axios'

const instance = axios.create({
    baseURL:'https://wd0993696679bwrcnd.wilddogio.com/'
})

// 全局
export default instance