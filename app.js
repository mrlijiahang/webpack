import img from './1.jpg'

// var img = require('url-loader!./1.jpg')
// var img = require('./1.jpg')
console.log(1111)
export default {
    //    template:'<div>我我我我我</div>'
    template: '<div><img :src="imgSrc"/></div> ',
    data(){
        return {
            imgSrc:img
        }
    }

}