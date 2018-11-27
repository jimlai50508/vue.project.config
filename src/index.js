import Vue from 'vue'
import App from './app.vue'

let root = document.createElement('div')
document.body.appendChild(root)

let vue = new Vue({
    render: (h)=> h(App)
}).$mount(root)