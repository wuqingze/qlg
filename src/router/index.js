import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/login/Login.vue'
import Login from '@/page/login'
// import Student from '@/components/Student'
import Student from '@/page/student'
import Administrator from '@/components/Administrator'
import Test from '@/page/test'
import ajax from '@/ajax'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      meta: {requiresAuth: false}
    },
    {
      path: '/student',
      component: Student,
      meta: {requiresAuth: true}
    },
    {
      path: '/administrator',
      component: Administrator,
      meta: {requiresAuth: true}
    },
    {
      path: '/xxxxx',
    },
    {
      path: '/test',
      component: Test,
      meta: {requiresAuth: false}
    }
  ],
  
})

router.beforeEach(function(to,from,next){
  if(to.path === '/test' || to.path === '/userlogin'){
    next()
  }else{
    ajax({
      url: '/authorise',
      success: function(msg){
        msg = JSON.parse(msg)
      if(msg.authorise){
          next()
        }else{
          if(to.path === '/login'){
            next()
          }else{
            next('/login')
          }
        }
      }
    })
  }
})


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     // alert("test")
//     ajax({
//           url: '/authorise',
//           success: function(msg){
//             msg = JSON.parse(msg)
//           if(msg.access){
//               next()
//             }else{
//               // alert("no")
//               next({
//                 path: '/login',
//                 query: { redirect: to.fullPath }
//               })
//             }
//           }
//         })
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })


export default router