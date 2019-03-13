// import Welcome from '../components/welcome/welcome.vue'
import Header from '../components/header/Header.vue'
import Dashboard from '../components/dashboard/Dashboard.vue'
import SignIn from '../components/auth/SignIn.vue'
import SignUp from '../components/auth/SignUp.vue'
import Test from '../components/test/test.vue'
import Page1 from '../components/page/page1.vue'
// import Page2 from '../components/page/page2.vue'


// const Page2 = resolve =>{ require.ensure(['../components/page/page2.vue']}, () => resolve(require('../components/page/page2.vue')), 'page2');
 const Page2 = resolve => {
    require.ensure(['../components/page/page2.vue'],()=>{
        resolve(require('../components/page/page2.vue'))
    },'Page2')};
export default {
    routes : [
        {path:"*",redirect : '/welcome'},
        {path:"/welcome", component: resolve => require(['../components/welcome/welcome.vue'],resolve)},
        {path:"/Header",component : Header},
        {
            path:"/dashboard",
            component :Dashboard,
            children : [
                {path : "page1",component : Page1},
                {path : "page2",component : Page2}
            ]
        },
        {path:"/signin",component:SignIn, name:"sign"},
        {path:"/signup/:id",component : SignUp},
        {path:"/test",component :Test}
    ]
}
