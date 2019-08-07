export default [
    {
        path: '/',
        name: 'index',
        component: () => import('@/pages/index/index'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/article/:id',
        name: 'articleShow',
        component: () => import('@/pages/article/show'),
        meta: {
            title: '文章'
        }
    },
    {
        path: '/article/:id/edit',
        name: 'articleEdit',
        component: () => import('@/pages/article/edit'),
        meta: {
            title: '文章'
        }
    },
    {
        path: '/articles',
        name: 'articleList',
        component: () => import('@/pages/article/index'),
        meta: {
            title: '文章列表'
        }
    }
]