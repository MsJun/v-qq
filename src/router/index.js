import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend/recommend'
import singer from '@/components/singer/singer'
import singerDetail from '@/components/singer-detail/singer-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/recommend'
    },
    {
      path:'/recommend',
      name:'recommend',
      component:recommend
    },
    {
      path:'/singer',
      name:'singer',
      component:singer,
      children:[
        {
          path:':id',
          component:singerDetail
         }
      ]
    }
  ]
})
