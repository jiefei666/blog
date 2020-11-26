module.exports = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login')
  },
  {
    path: '/',
    name: 'home',
    meta: {
      title: '主页'
    },
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home')
  },
  {
    path: '/index',
    name: 'main-layout',
    meta: {
      title: 'entrance'
    },
    redirect: 'index/post',
    component: () => import(/* webpackChunkName: "main-layout" */ '@/layouts/MainLayout'),
    children: [
      {
        path: 'post',
        name: 'post',
        meta: {
          title: '文章',
          slider: true
        },
        component: () => import(/* webpackChunkName: "post" */ '@/pages/post')
      },
      {
        path: 'guestbook',
        name: 'guestbook',
        meta: {
          title: '留言',
          slider: true
        },
        component: () => import(/* webpackChunkName: "guestbook" */ '@/pages/guestbook')
      },
      {
        path: 'about',
        name: 'about',
        meta: {
          title: '关于',
          slider: true
        },
        component: () => import(/* webpackChunkName: "about" */ '@/pages/about')
      },
      {
        path: 'footprint',
        name: 'footprint',
        meta: {
          title: '足迹'
        },
        component: () => import(/* webpackChunkName: "footprint" */ '@/pages/footprint')
      },
      {
        path: 'friendship',
        name: 'friendship',
        meta: {
          title: '友情链接'
        },
        component: () => import(/* webpackChunkName: "friendship" */ '@/pages/friendship')
      }
    ]
  }
]
