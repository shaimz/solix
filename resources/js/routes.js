import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const PageNotFound = () => import("./components/includes/PageNotFound");
import store from "./store/store";
import {SUPPORTED_LOCALES} from './constants/locales';
import {loadLanguageAsync} from "./app";
import {i18n} from './app.js';
import {bus} from "./event/eventbus";

function getLocaleRegex() {
    let reg = ''
    SUPPORTED_LOCALES.forEach((locale, index) => {
        reg = `${reg}${locale.code}${index !== SUPPORTED_LOCALES.length - 1 ? '|' : ''}`
    })
    return `(${reg})`
}

function getLocale(locale = 'ro') {
    return SUPPORTED_LOCALES.find(loc => loc.code === locale);
}

function backend(component){
    return () => import(/* webpackChunkName: "chunk-" */`./components/backend/${component}.vue`)
}

function load(component) {
    return () => import(/* webpackChunkName: "frontend-chunk-" */ /* webpackPreload: true */`./components/public/${component}.vue`)
}

function getUserLocale() {
    const locale = window.navigator.language || window.navigator.userLanguage || Trans.defaultLocale
    return {
        locale: locale,
        localeNoISO: locale.split('-')[0]
    }
}

const routes = [
    //Public
    {
        path: `/:locale${getLocaleRegex()}?`,
        component: {
            template: '<router-view></router-view>'
        },
        beforeEnter(to, from, next) {
            const locale = getLocale(to.params.locale);
            store.dispatch('setPublicLanguage', locale);
            loadLanguageAsync(to.params.locale ? to.params.locale : 'ro').then(() => {
                next()
            })
        },
        children: [
            {
                path: '',
                name: 'Home',
                component: load('home'),
                meta: {
                    breadcrumb: [
                        { name: 'Home' }
                    ]
                }
            },
            {
                path: 'contacts',
                name: 'contacts',
                component: load('contacts/Contacts'),
                meta: {
                    breadcrumb: [
                        { name: 'Contacts' }
                    ]
                },
            },
            {
                path: 'projects',
                name: 'projects',
                component: load('projects/Projects'),
                meta: {
                    breadcrumb: [
                        { name: 'Projects' }
                    ]
                },
            },
            {
                path: 'projects/:id',
                name: 'project',
                component: load('projects/Project'),
                meta: {
                    breadcrumb: [
                        { name: 'Projects' },
                        { name: 'Project' }
                    ]
                },
            },
            {
                path: 'products',
                name: 'products',
                component: load('products/Products'),
                meta: {
                    breadcrumb: {name:'Products',label:'Products'}
                },
            },
            {
                path: 'products/:category',
                name: 'productsCategory',
                component: load('products/Products'),
                params:{
                  page:'category'
                },
                props: (route) => ({categoryUrl:route.params.category}),
                meta: {
                    breadcrumb: {
                        parent: 'products'
                    }
                },
            },
            {
                path: 'products/:category/:id',
                name: 'product',
                component: load('products/Product'),
                meta: {
                    breadcrumb: {parent:'productsCategory'}
                },
            },
            {
                path: 'services',
                name: 'services',
                component: load('services/Services'),
                meta: {
                    breadcrumb: {name:'Services',label:'Services'}
                },
            },
            {
                path: 'services/:id',
                name: 'service',
                component: load('services/Service'),
                meta: {
                    breadcrumb: {parent:'services'}
                },
            },
            {
                path: 'b2c',
                name: 'b2c',
                component: load('b2c/b2c'),
                meta: {
                    breadcrumb: {name:'b2c',label:'B2C'}
                },
            },
            {
                path: 'b2b',
                name: 'b2b',
                component: load('b2b/b2b'),
                meta: {
                    breadcrumb: {name:'b2b',label:'B2B'}
                },
            },
            {
                path: 'b2g',
                name: 'b2g',
                component: load('b2g/b2g'),
                meta: {
                    breadcrumb: {name:'b2g',label:'B2G'}
                },
            },
            {
                path: 'about',
                name: 'about',
                component: load('about/About'),
                meta: {
                    breadcrumb: {name:'about',label:'About'}
                },
            },
            {
                path: 'news',
                name: 'news',
                component: load('blog/News'),
                meta: {
                    breadcrumb: {name:'news',label:'Blog'}
                },
            },
            {
                path: 'news/:id',
                name: 'singleNews',
                component: load('blog/Article'),
                props:{article:true},
                meta: {
                    breadcrumb:{parent:'news'}
                },
            },
            {
                path: 'career',
                name: 'career',
                component: load('careers/Careers'),
                meta: {
                    breadcrumb: {name:'careers',label:'Careers'}
                },
            },
            {
                path: 'career/:id',
                name: 'singleCareer',
                component: load('careers/Career'),
                meta: {
                    breadcrumb: {parent:'career'}
                },
            },
            {
                path: 'cookies',
                name: 'cookies',
                component: load('information/Cookies'),
                meta: {
                    breadcrumb: {parent:'career'}
                },
            },
            {
                path: 'privacy',
                name: 'privacy',
                component: load('information/Privacy'),
                meta: {
                    breadcrumb: {parent:'career'}
                },
            },
            {
                path: 'terms-and-conditions',
                name: 'terms',
                component: load('information/Terms'),
                meta: {
                    breadcrumb: {parent:'career'}
                },
            },
            {
                path: 'organizational-and-legal',
                name: 'organization',
                component: load('organization/Organization'),
                meta: {
                    breadcrumb: {parent:'career'}
                },
            },
        ]
    },
    //Admin panel
    {
        path: '/admin',
        name: 'master',
        component: backend('Home'),
        props: true,
    },
    {
        path: '/admin/dashboard',
        name: 'dashboard',
        props: true,
        component: backend('Home')
    },
    {
        path: '/admin/requests/product',
        name: 'productRequests',
        component: backend('requests/ProductRequests'),
        props: {
            head: 'product Requests',
            type: 'main',
            nav: [{'active-requests': 'Active requests', 'archive': 'Archive'}]
        },
    },
    {
        path: '/admin/requests/product/:id',
        name: 'emailProduct',
        component: backend('requests/email/Email'),
        props: {title: 'product Requests'}
    },
    {
        path: '/admin/requests/service',
        name: 'serviceRequests',
        component: backend('requests/ServiceRequests'),
        props: {
            head: 'service Requests',
            type: 'main',
            nav: [{'active-requests': 'Active requests', 'archive': 'Archive'}]
        },
    },
    {
        path: '/admin/requests/service/:id',
        name: 'emailService',
        component: backend('requests/email/Email'),
        props: {title: 'service Requests'}
    },
    {
        path: '/admin/requests/call',
        name: 'callRequests',
        component: backend('requests/CallRequests'),
        props: {
            head: 'call Requests',
            type: 'main',
            nav: [{'active-requests': 'Active requests', 'archive': 'Archive'}]
        },
    },
    {
        path: '/admin/requests/call/:id',
        name: 'emailCall',
        component: backend('requests/email/Email'),
        props: {title: 'call Requests'}
    },
    {
        path: '/admin/products',
        name: 'Products',
        component: backend('products/Products'),
        props: {title: 'Products'}
    },
    {
        path: '/admin/products/add',
        name: 'AddProduct',
        component: backend('products/AddProduct'),
        props: true
    },
    {
        path: '/admin/products/:id/edit',
        name: 'EditProduct',
        component: backend('products/AddProduct'),
        props: true
    },
    {
        path: '/admin/projects',
        name: 'Projects',
        component: backend('projects/Projects'),
        props: {title: 'Projects'}
    },
    {
        path: '/admin/projects/add',
        name: 'AddProject',
        component: backend('projects/AddProject'),
        props: true
    },
    {
        path: '/admin/projects/:id/edit',
        name: 'EditProject',
        component: backend('projects/AddProject'),
        props: true
    },
    {
        path: '/admin/news',
        name: 'News',
        component: backend('news/News'),
        props: {title: 'Blog'}
    },
    {
        path: '/admin/news/add',
        name: 'AddNews',
        component: backend('news/AddNews'),
        props: true
    },
    {
        path: '/admin/news/:id/edit',
        name: 'EditNews',
        component: backend('news/AddNews'),
        props: true
    },
    {
        path: '/admin/careers',
        name: 'Careers',
        component: backend('careers/Careers'),
        props: {title: 'Careers'}
    },
    {
        path: '/admin/careers/add',
        name: 'AddCareers',
        component: backend('careers/AddCareers'),
        props: true
    },
    {
        path: '/admin/careers/:id/edit',
        name: 'EditCareers',
        component: backend('careers/AddCareers'),
        props: true
    },
    {
        path:'/admin/reset',
        name:'ResetPassword',
        component:backend('password'),
        props:true
    },
    {path: '*', component: PageNotFound}
]

const router = new VueRouter({
    routes,
    base: process.env.BASE_URL,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        // savedPosition is only available for popstate navigations.
        if (savedPosition) return savedPosition

        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        if (to.params.savedPosition){
            return {}
        }

        // scroll to anchor by returning the selector
        if (to.hash) {
            let position = {selector: to.hash}

            // specify offset of the element
            // if (to.hash === '#anchor2') {
            //   position.offset = { y: 100 }
            // }
            return position
        }

        // scroll to top by default
        return {x: 0, y: 0}
    },

})

export default router;
