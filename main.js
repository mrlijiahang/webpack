import  Vue from './vue.js'
import App from './app.js'
// 引入css
// import maincss from './main.css'
import './main.css'
// require('style-loader!css-loader!./main.css');
// import './main.less'

// console.log(123)
//lijiahang
const num =1
console.log(num)
const a=()=>{}

new Vue({
    el:'#app',
    components:{
        app:App
    },
    template:'<app/>'
})