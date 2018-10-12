import  Vue from './vue.js'
import App from './app.js'
// 引入css
// import maincss from './main.css'
import './main.css'
// require('style-loader!css-loader!./main.css');
// import './main.less'

// console.log(123)

new Vue({
    el:'#app',
    components:{
        app:App
    },
    template:'<app/>'
})