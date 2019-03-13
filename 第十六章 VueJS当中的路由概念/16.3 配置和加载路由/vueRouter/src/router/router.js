import Reg from '../components/Reg.vue'
import Login from '../components/Login.vue'

export default {
    routes : [
        {path : "", redirect:'/reg'},
        {path : "/reg", component : Reg},
        {path : "/login",component : Login}
    ]
}
