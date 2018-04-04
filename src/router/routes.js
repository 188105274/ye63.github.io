import blogRoutes from './blog-routes'

/**
 * 路由表配置
 */
export default [{
        name: 'AboutMe',
        path: '/AboutMe',
        component: resolve => require.ensure([], () => resolve(require('@/views/AboutMe.vue')), 'AboutMe')
    },
    {
        name: 'WebNav',
        path: '/WebNav',
        component: resolve => require.ensure([], () => resolve(require('@/views/WebNav.vue')), 'WebNav')
    },
    // {
    //     path: '/docs',
    //     component: resolve => require.ensure([], () => resolve(require('@/views/Blog.vue')), 'Blog'),
    //     children: blogRoutes
    // },
    {
        name: 'docs',
        path: '/docs',
        component: resolve => require.ensure([], () => resolve(require('@/views/Blog.vue')), 'Blog'),
        children: blogRoutes
    },
    {
        path: '*',
        redirect: '/docs'
    }
]