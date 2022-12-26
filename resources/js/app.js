/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import {bus} from "./event/eventbus";

require('./bootstrap');

window.Vue = require('vue').default

import Vuetify from './src/plugins/vuetify'
import VueI18n from 'vue-i18n';
import {messagesro} from './locale/ro/messages.js';
import {messagesru} from './locale/ru/messages.js';
import {messagesen} from './locale/en/messages.js';

import LottiePlayer from 'lottie-player-vue';
import Embed from 'v-video-embed';

Vue.use(LottiePlayer);
Vue.use(Embed);

Vue.config.performance = true;
Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: 'ro',
    silentTranslationWarn: true,
    fallbackLocale: 'dev',
});

i18n.setLocaleMessage('ro', messagesro)
i18n.setLocaleMessage('en', messagesen)
i18n.setLocaleMessage('ru', messagesru)

const loadedLanguages = ['ro','ru','en']

function setI18nLanguage(lang) {
    i18n.locale = lang
    axios.defaults.headers.common['Accept-Language'] = lang
    document.querySelector('html').setAttribute('lang', lang ? lang : 'ro')
    return lang
}

export async function loadLanguageAsync(lang) {
    if (i18n.locale === lang) {
        return Promise.resolve(setI18nLanguage(lang))
    }

    if (loadedLanguages.includes(lang)) {
        return Promise.resolve(setI18nLanguage(lang))
    }

    const folder = lang === 'en' ? '/en/' : (lang === 'ru' ? '/ru/' : '/ro/')

    return import(`./locale${folder}messages.js`).then(
        messages => {
            i18n.setLocaleMessage(lang, messages.messages)
            loadedLanguages.push(lang)
            return setI18nLanguage(lang)
        }
    )
}

import {clickOut} from './directives/directives';
Vue.directive('click-out',clickOut);

import VueLocalStorage from 'vue-ls';

let options = {
    namespace: 'vuejs__',
    name: 'ls',
    storage: 'local',
};

Vue.use(VueLocalStorage, options);

import windowInstance from './width.js';

Vue.use(windowInstance);

import store from "./store/store";

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('public', require('./components/public/master.vue').default);
Vue.component('master', require('./components/backend/master.vue').default);
Vue.component('Login', require('./components/backend/Login.vue').default);
Vue.prototype.$lang = 1;

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import router from './routes';

import VueLazyload from 'vue-lazyload'

import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);

Vue.use(VueLazyload)

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'errorimage',
    loading: 'loadimage',
    attempt: 1,
    observer: true,
})

import {SUPPORTED_LOCALES} from './constants/locales';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
    el: '#app',
    router,
    store,
    i18n,
    vuetify:Vuetify,
    data: () => {
        return {
            lang: 2,
            render: false
        }
    },
    methods: {
        langChanged(val) {
            this.lang = val;
        },
        getUserLocale() {
            const locale = window.navigator.language || window.navigator.userLanguage || Trans.defaultLocale
            return {
                    locale: locale,
                    localeNoISO: locale.split('-')[0]
            }
        },
        async slideSidebar() {
            await function () {

            }
        },
    },
    mounted() {

    },
    created() {
        bus.$on('render', (val) => {
            this.render = val;
        })
    },
    computed: {
        windowWidth() {
            return windowInstance.data.innerWidth
        },
        windowCompare() {
            return windowInstance.data.compare
        },
        small() {
            return windowInstance.data.small
        },
        xsmall() {
            return windowInstance.data.xsmall
        },
        medium() {
            return windowInstance.data.medium
        },
        large() {
            return windowInstance.data.large
        },
        compare() {
            return windowInstance.data.windowCompare
        },
        largeCompare() {
            return windowInstance.data.largeCompare
        },
        smallCompare() {
            return windowInstance.data.smallCompare
        },
        mediumCompare() {
            return windowInstance.data.mediumCompare
        },
    },
    watch: {
        $route(to, from, next) {
            let loc = this.getUserLocale();

            loadLanguageAsync(to.params.locale ? to.params.locale : 'ro').then(() => '');

            this.slideSidebar().then((r) => {
                let dropdown = $('.sidebar-submenu').find('.router-link-exact-active').closest('.sidebar-dropdown');
                $('.sidebar-submenu').find('.router-link-exact-active').closest('.sidebar-submenu').slideDown(200);
                dropdown.addClass('active');
            });

            if (!this.$route.path.includes('admin') && !$cookies.get('localeInited')){
                let userLocale;
                if (!loadedLanguages.includes(loc.localeNoISO)){
                    userLocale = 'en';
                } else {
                    userLocale = loc.localeNoISO;
                }

                this.$root.$i18n.locale = userLocale;
                this.$store.dispatch('setPublicLanguage', SUPPORTED_LOCALES.find(item => item.code === userLocale));
                router.push({name: this.$route.name, params: {locale: userLocale}});
                $cookies.set('localeInited', 1, 60 * 60 * 24 * 100, '/');
            }
        },
        render(newVal, oldVal) {

        },
        small(newVal, oldVal) {

        },
        windowWidth(newVal, oldVal) {

        },
        xsmall(newVal, oldVal) {
            let mobile =
                {
                    infinite: true,
                    autoPlay: true,
                    prevArrow: false,
                    nextArrow: false,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    responsive: [
                        {
                            breakpoint: 9999,
                            settings: "unslick"
                        },
                        {
                            breakpoint: 428,
                            settings: {
                                infinite: true,
                                autoPlay: true,
                                prevArrow: false,
                                nextArrow: false,
                                slidesToShow: 1,
                                adaptiveHeight: true,
                            }
                        }
                    ]
                }
            if (newVal !== oldVal) {
                if (newVal) {
                    setTimeout(()=>{
                        $('body').find(".mobile-carousel:not(.slick-initialized)").slick(mobile)
                    },1200)
                }
            }
        },
        largeCompare(newVal, oldVal) {
            if (newVal !== oldVal) {

            }
        },
        medium(newVal, oldVal) {
            if (newVal !== oldVal) {

            }
        },

    }
});


