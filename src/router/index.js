import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/Content.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            // 路由跳转的地址
            path: "/content",
            // 路由跳转的名字 一般情况和组件名字一样；
            name: "Content",
            // 路由跳转的容器
            Component: Content
        }
    ]
})




