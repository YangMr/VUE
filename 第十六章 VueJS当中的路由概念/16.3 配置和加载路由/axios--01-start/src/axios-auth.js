import axios from 'axios'
//返回一个新的axios实例
const instance = axios.create({
    baseURL : ""
});

export default instance
