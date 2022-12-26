<template>
    <div class="w-100 position-relative" id="nav-top">
        <header class="">
            <div class="container-fluid px-4 d-xlarge-flex justify-content-between">
                <div class="d-flex header-pages">
                    <router-link :to="{name:item.link,params:{locale:$route.params.locale}}"
                                 class="list-group-item border-0" v-for="(item,index) in $t('header')" :key="index">
                        {{item.text}}
                    </router-link>
                </div>
                <div class="d-flex header-langs">
                    <router-link @click.native="setActive(2)" class="list-group-item border-0"
                                 :class="{'active':isActive(2)}" :to="{name:this.$route.name}">RO
                    </router-link>
                    <router-link @click.native="setActive(3)" class="list-group-item border-0"
                                 :class="{'active':isActive(3)}" :to="{name:this.$route.name,params:{locale:'ru'}}">RUS
                    </router-link>
                    <router-link @click.native="setActive(1)" class="list-group-item border-0"
                                 :class="{'active':isActive(1)}" :to="{name:this.$route.name,params:{locale:'en'}}">ENG
                    </router-link>
                </div>
            </div>
        </header>
        <nav v-if="theme === 'dark'" class="navbar navbar-dark navbar-expand-xl"
             :class="['position-' + pos,navbar ? 'position-fixed' : '',isSticky ? 'sticky-navbar' : '']">
            <div class="container-fluid px-5 py-0">
                <router-link v-if="small || medium || large" class="navbar-brand mr-5"
                             :to="{name:'Home',params:{locale:$route.params.locale}}"><img
                    :src="'/assets/components/header/logo.png'"/></router-link>
                <div v-if="!xsmall && large" class="collapse navbar-collapse slide d-xlarge-flex"
                     v-bind:class="{'show': navbar}" id="navbar-open">
                    <ul class="navbar-nav m-auto mb-2 mb-xlarge-0">
                        <li class="nav-item" v-for="page in $t('nav.pages')">
                            <router-link class="nav-link" aria-current="page"
                                         :to="{name:page.link,params:{locale:$route.params.locale}}">{{page.text}}
                            </router-link>
                        </li>
                    </ul>
                    <div v-if="isSticky && !small" class="d-flex header-langs">
                        <router-link @click.native="setActive(2)" class="list-group-item border-0"
                                     :class="{'active':isActive(2)}" :to="{name:this.$route.name}">
                            RO
                        </router-link>
                        <router-link @click.native="setActive(3)" class="list-group-item border-0"
                                     :class="{'active':isActive(3)}"
                                     :to="{name:this.$route.name,params:{locale:'ru'}}">
                            RUS
                        </router-link>
                        <router-link @click.native="setActive(1)" class="list-group-item border-0"
                                     :class="{'active':isActive(1)}"
                                     :to="{name:this.$route.name,params:{locale:'en'}}">
                            ENG
                        </router-link>
                    </div>
                    <form v-if="!xsmall"
                          class="d-flex col-lg-3 col-xl-3 col-md-3 justify-content-around align-items-center form-navbar">
                        <div class="text-right">
                            <p class="nav-call text-white">+373 78 972 603</p>
                            <p class="nav-order-call"><a @click.prevent="toggleModal(true,'call')" href="#"
                                                         class="text-white text-underline">{{$t('nav.call')}}</a></p>
                        </div>
                        <button @click.prevent="toggleModal(true,'call')"
                                class="btn btn-outline-light rounded-circle border-opacity-3 button-50" type="submit">
                            <i><img :src="'/assets/icons/phone.svg'"></i></button>
                    </form>
                    <span @click="closeNavbar" class="close-navbar"></span>
                </div>
                <form v-if="medium || small"
                      class="d-flex ml-auto mobile-contact mr-4 pr-4 col-xl-4 col-lg-4 col-6 justify-content-around align-items-center form-navbar"
                      :class="[navbar ? 'navbar-open-form' : '']">
                    <div class="text-right">
                        <p class="nav-call text-white">+373 78 972 603</p>
                        <p class="nav-order-call"><a @click.prevent="toggleModal(true,'call')" href="#"
                                                     class="text-white text-underline">{{$t('nav.call')}}</a>
                        </p>
                    </div>
                    <button @click.prevent="toggleModal(true,'call')"
                            class="btn btn-outline-dark rounded-circle border-opacity-3 button-50 d-flex justify-content-center align-items-center"
                            type="submit"><i><img :src="'/assets/icons/phone.svg'"></i></button>
                </form>
                <form v-else-if="xsmall"
                      class="d-flex mobile-contact m-0 p-0 col-md-2 col-1 align-items-center form-navbar">
                    <button @click.prevent="toggleModal(true,'call')"
                            :class="[navbar ? 'btn-outline-dark border-dark mobile-contacts' : 'btn-outline-light border-light']"
                            class="btn rounded-circle border-opacity-3 m-0 button-50 d-flex justify-content-center align-items-center"
                            type="submit"><i>
                        <img v-if="navbar" src="/assets/icons/phone-white.png">
                        <img v-else :src="'/assets/icons/phone.svg'"/>
                    </i></button>
                </form>
                <router-link v-if="xsmall" class="navbar-brand m-auto"
                             :to="{name:'Home',params:{locale:$route.params.locale}}">
                    <img v-if="!xsmall" :src="'/assets/components/header/logo-vector.png'">
                    <img v-else :src="'/assets/components/header/logo-white.svg'">
                </router-link>

                <button @click.stop="openNavbar" :class="[navbar ? 'toggler-mobile' : '']"
                        class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbar-open" aria-controls="navbar-open" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-mobile-toggler-icon"></span>
                    <span class="navbar-mobile-toggler-icon"></span>
                </button>
                <div v-if="xsmall || small || medium" class="navbar-collapse collapse"
                     v-bind:class="{'show': navbar}" id="navbar-open">
                    <Footer></Footer>
                </div>
            </div>
        </nav>

        <nav v-else class="navbar navbar-expand-xl navbar-light" :key="navbar"
             :class="['position-' + pos,navbar ? 'position-fixed' : '',isSticky ? 'sticky-navbar' : '',$router.currentRoute.path.includes('products') && isSticky ? 'loading' : '']">
            <div class="container-fluid px-5 py-0">
                <router-link v-if="small || medium || large" class="navbar-brand mr-5"
                             :to="{name:'Home',params:{locale:$route.params.locale}}"><img
                    src="/assets/components/header/solix_logo_small2.svg" class="header-logo"></router-link>
                <div v-if="!xsmall && large" class="collapse navbar-collapse slide d-xlarge-flex"
                     v-bind:class="{'show': navbar}" id="navbar-open">
                    <ul class="navbar-nav m-auto mb-2 mb-xlarge-0" :id="[isSticky ? 'main' : '']" :key="isSticky">
                        <li class="nav-item" v-for="page in $t('nav.pages')">
                            <router-link class="nav-link" :class="$route.name === page.link ? 'active' : ''"
                                         aria-current="page"
                                         :to="{name:page.link,params:{locale:$route.params.locale}}">{{page.text}}
                            </router-link>
                        </li>
                        <li v-if="isSticky" class="more hidden" data-width="80">
                            <a @click.prevent href="">
                                <span class="meat-circle"></span>
                                <span class="meat-circle"></span>
                                <span class="meat-circle"></span>
                            </a>
                            <ul></ul>
                        </li>
                    </ul>
                    <div v-if="isSticky && !small" class="d-flex header-langs dropdown show">
                        <a class="dropdown-toggle" id="dropdownLanguage" data-toggle="dropdown" aria-haspopup="true"
                           aria-expanded="false">{{dropLanguage}}</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownLanguage">
                            <router-link @click.native="setActive(2)" class="list-group-item border-0 dropdown-item"
                                         :class="{'active':isActive(2)}" :to="{name:this.$route.name}">RO
                            </router-link>
                            <router-link @click.native="setActive(3)" class="list-group-item border-0 dropdown-item"
                                         :class="{'active':isActive(3)}"
                                         :to="{name:this.$route.name,params:{locale:'ru'}}">
                                RUS
                            </router-link>
                            <router-link @click.native="setActive(1)" class="list-group-item border-0 dropdown-item"
                                         :class="{'active':isActive(1)}"
                                         :to="{name:this.$route.name,params:{locale:'en'}}">
                                ENG
                            </router-link>
                        </div>
                    </div>
                    <form v-if="!xsmall"
                          class="d-flex col-lg-3 col-xl-3 col-md-3 justify-content-around align-items-center form-navbar">
                        <div class="text-right">
                            <p class="nav-call text-dark">+373 78 972 603</p>
                            <p class="nav-order-call"><a @click.prevent="toggleModal(true,'call')" href="#"
                                                         class="text-dark text-underline">{{$t('nav.call')}}</a></p>
                        </div>
                        <button @click.prevent="toggleModal(true,'call')"
                                class="btn btn-outline-dark rounded-circle border-dark border-opacity-3 button-50"
                                type="submit"><i><img :src="'/assets/icons/phone.svg'"></i></button>
                    </form>
                    <span @click="closeNavbar" class="close-navbar"></span>
                </div>
                <form v-if="medium || small"
                      class="d-flex ml-auto mobile-contact mr-4 pr-4 col-xl-4 col-lg-4 col-6 justify-content-around align-items-center form-navbar"
                      :class="[navbar ? 'navbar-open-form' : '']">
                    <div class="text-right">
                        <p class="nav-call text-dark">+373 78 972 603</p>
                        <p class="nav-order-call"><a href="#" class="text-dark text-underline">{{$t('nav.call')}}</a>
                        </p>
                    </div>
                    <button @click.prevent="toggleModal(true,'call')"
                            class="btn btn-outline-dark rounded-circle border-dark border-opacity-3 button-50 d-flex justify-content-center align-items-center"
                            type="submit"><i><img :src="'/assets/icons/phone.svg'"></i></button>
                </form>
                <form v-else-if="xsmall"
                      class="d-flex mobile-contact m-0 p-0 col-md-2 col-1 align-items-center form-navbar">
                    <button @click.prevent="toggleModal(true,'call')"
                            :class="[navbar ? 'btn-outline-dark border-dark mobile-contacts' : 'btn-outline-dark border-dark']"
                            class="btn btn-outline-dark rounded-circle border-dark border-opacity-3 m-0 button-50 d-flex justify-content-center align-items-center"
                            type="submit">
                        <img v-if="navbar" src="/assets/icons/phone.svg">
                        <i v-else><img :src="'/assets/icons/phone.svg'"></i>
                    </button>
                </form>
                <router-link v-if="xsmall" class="navbar-brand m-auto"
                             :to="{name:'Home',params:{locale:$route.params.locale}}">
                    <img :src="'/assets/components/header/logo-vector-yellow.png'">
                </router-link>
                <button @click.stop="openNavbar" :class="[navbar ? 'toggler-mobile' : '']"
                        class="navbar-toggler bg-dark collapsed" type="button" data-toggle="collapse"
                        data-target="#navbar-open" aria-controls="navbar-open" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-mobile-toggler-icon bg-white"></span>
                    <span class="navbar-mobile-toggler-icon bg-white"></span>
                </button>
                <div v-if="xsmall || small || medium" class="navbar-collapse collapse"
                     v-bind:class="{'show': navbar}" id="navbar-open">
                    <Footer></Footer>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    const store = () => import("../../../store/store");
    import {SUPPORTED_LOCALES} from "../../../constants/locales";

    const Footer = () => import("./footer");
    import {bus} from '../../../event/eventbus.js'
    import windowInstance from "../../../width";

    export default {
        components: {Footer},
        props: {
            lang: Number,
            color: String,
            position: String,
            sticky: Boolean
        },
        data() {
            return {
                language: this.currentLang,
                dropLanguage: '',
                path: '/',
                locales: SUPPORTED_LOCALES,
                page: '',
                navbar: false,
                isSticky: false,
                stickyClass: 'is_sticky',
                scrollPosition: 0,
                exactColor:'',
                exactPosition:'',
            }
        },
        computed: {
            theme(){
                return this.color;
            },
            pos(){
              return this.position;
            },
            currentLang() {
                return this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2)
            },
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
            large() {
                return windowInstance.data.large
            },
            largeCompare() {
                return windowInstance.data.largeCompare
            },
            mediumCompare() {
                return windowInstance.data.mediumCompare
            },
            smallCompare(){
              return windowInstance.data.smallCompare
            },
            medium() {
                return windowInstance.data.medium
            },
            locale() {
                return this.$store.getters.getPublicLanguage;
            },
            compare() {
                return windowInstance.data.windowCompare;
            }
        },
        created() {
            $('html').css("overflow",'hidden');
            window.addEventListener('scroll', this.handleScroll);

        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            hideBrand() {
                let elem = $("#navbar-open #footer");
                if (elem.scrollTop()) {
                    $('.navbar-brand').hide()
                } else {
                    $('.navbar-brand').show()
                }
            },
            hideForm() {
                let elem = $("#navbar-open #footer");
                if (elem.scrollTop()) {
                    $('.form-navbar').hide()
                } else {
                    $('.form-navbar').show()
                }
            },
            openModal() {
                this.open = true;
            },
            linkCreator: async function (locale) {
                const route = this.$router.currentRoute;
                let result = '/' + locale + '/'
                if (route === 'Home') {
                    return result
                } else {
                    let str = route.toLowerCase()
                    result += str
                    return result
                }
            },
            toggleModal(val) {
                bus.$emit('openModal', {value: val, type: 'call'});
            },
            isActive(id) {
                let language = this.currentLang
                if (language === id) {
                    if (id === 1) {
                        this.dropLanguage = 'EN';
                    } else if (id === 2) {
                        this.dropLanguage = 'RO';
                    } else {
                        this.dropLanguage = 'RU';
                    }
                }

                return this.language === id;
            },
            setActive(id) {
                if (id === 1) {
                    this.setLocale('en');
                } else if (id === 2) {
                    this.setLocale('ro');
                } else {
                    this.setLocale('ru')
                }
                this.language = id;
                this.dropLanguage = id === 3 ? 'RU' : (id === 2 ? 'RO' : 'EN');
                setTimeout(() => {
                    $(document).find('html').css('overflow', 'initial')
                }, 200)
            },
            setLocale(id) {
                this.$root.$i18n.locale = id;
                this.$store.dispatch('setPublicLanguage', this.locales.find(item => item.code === id))
            },
            closeNavbar() {
                this.navbar = false
                $('body').find('.navbar-collapse').removeClass('show');
            },
            openNavbar() {
                this.navbar = !this.navbar;
                if (this.navbar === true) {
                    bus.$emit('theme', 'light')
                    $('body').find('.navbar-collapse').removeClass('show');
                    $(document).find('html').css('overflow', 'hidden')
                } else {
                    setTimeout(() => {
                        $(document).find('html').css('overflow', 'initial')
                    }, 200)
                }
            },
            handleScroll(event) {
                this.scrollPosition = window.scrollY
                this.isSticky = this.scrollPosition >= 100;
            },
            calcWidth() {
                var navwidth = 0;
                var morewidth = $('#main .more').outerWidth(true);
                $('#main > li:not(.more)').each(function () {
                    navwidth += $(this).outerWidth(true);
                });
                var availablespace = ($('nav').outerWidth(true) - 600) - morewidth;

                if (navwidth > availablespace) {
                    var lastItem = $('#main > li:not(.more)').last();
                    lastItem.attr('data-width', lastItem.outerWidth(true));
                    lastItem.prependTo($('#main .more ul'));
                    this.calcWidth();
                } else {
                    var firstMoreElement = $('#main li.more li').first();
                    if (navwidth + firstMoreElement.data('width') < availablespace) {
                        firstMoreElement.insertBefore($('#main .more'));
                    }
                }

                $('.more').ontouchstart = () => {
                    $('.more ul').toggle('slide')
                }
                if ($('.more li').length > 0) {
                    $('.more').css('display', 'inline-block');
                } else {
                    $('.more').css('display', 'none');
                }
            },
        },
        beforeRouteEnter(to, from, next) {
            this.open = false;
            this.isLoading = true;
            bus.$emit('openModal', {value: false}).then(() => {
                to.params.locale = this.locale.code
                next()
            })
        },
        mounted() {
            setTimeout(()=>{
                this.exactPosition = this.pos;
                this.exactColor = this.theme;
                if(this.navbar){
                    this.exactColor = this.theme === 'dark' ? 'light' : 'dark';
                }
            },100)

            setTimeout(() => {
                if (this.isSticky && this.compare) {
                    this.calcWidth();
                }
            }, 50)

            if(this.$router.currentRoute.path.includes('products') && this.compare && !this.$router.currentRoute.params.id) {
                this.isSticky = this.sticky
            }else{
                this.isSticky = false
            }
            if(this.isSticky){
                if(this.exactPosition === 'relative'){
                    $('body').css('padding-top','70px');
                }
            }else{
                $('body').css('padding-top','0');
            }

            setTimeout(() => {
                $(document).find('html').css('overflow', 'initial')
            }, 300)
        },
        watch: {
            open(val) {
                this.open = val;
            },
            lang: function (newVal, oldVal) {
                if (oldVal !== newVal) this.$emit('langUpdate', newVal)
            },
            language: function (newVal, oldVal) {
                if (oldVal !== newVal) this.$emit('languageUpdated', newVal)
            },
            color: function (newVal, oldVal) {

            },
            smallCompare(n,o){
                if(n !== o){
                    if (this.mediumCompare && !n) {
                        if (document.querySelector('#navbar-open #footer')) {
                            setTimeout(()=>{
                                document.querySelector('#navbar-open #footer').addEventListener('scroll', this.hideForm);
                            },200)
                        }
                    }else if(n){
                        if (document.querySelector('#navbar-open #footer')) {
                            setTimeout(()=>{
                                document.querySelector('#navbar-open #footer').addEventListener('scroll', this.hideBrand);
                            },200)

                        }
                    }
                }
            },
            position(newVal, oldVal) {

            },
            compare(n, o) {

            },
            windowWidth(n, o) {
                if (n > 1024) {
                    if (this.isSticky) {
                        this.calcWidth();
                    }
                }
            },
            sticky(newVal, oldVal) {
                this.isSticky = newVal;
            },
            isSticky(newVal, oldVal) {
                if (newVal) {
                    bus.$emit('position', 'fixed');
                    bus.$emit('theme', 'light');

                    if (this.compare) {
                        setTimeout(() => {
                            this.calcWidth();
                        }, 50)
                    }
                    if(this.exactPosition === 'relative'){
                        $('body').css('padding-top','70px');
                    }else{
                        $('body').css('padding-top','0');
                    }
                } else {
                    if (!this.$route.path.includes('products')) {
                        bus.$emit('theme', this.exactColor)
                        if (this.$route.path.includes('contacts')) {
                            bus.$emit('theme', 'light')
                        }
                        bus.$emit('position', this.exactPosition);
                    } else {
                        bus.$emit('position', 'relative');
                        bus.$emit('theme', 'light')
                    }
                    $('body').css('padding-top','0');
                }
            },
            navbar(newVal, oldVal) {
                if (newVal) {
                    if (this.isSticky) {
                        bus.$emit('theme', 'light')
                    }
                    if (this.mediumCompare && !this.smallCompare) {
                        if (document.querySelector('#navbar-open #footer')) {
                            setTimeout(()=>{
                                document.querySelector('#navbar-open #footer').addEventListener('scroll', this.hideForm);
                            },200)
                        }
                    }else if(this.smallCompare){
                        if (document.querySelector('#navbar-open #footer')) {
                            setTimeout(()=>{
                                document.querySelector('#navbar-open #footer').addEventListener('scroll', this.hideBrand);
                            },200)

                        }
                    }
                } else {
                    setTimeout(()=>{
                        document.querySelector('#navbar-open #footer').removeEventListener('scroll', this.hideBrand);
                        document.querySelector('#navbar-open #footer').removeEventListener('scroll', this.hideForm);
                    },200)
                    if (this.isSticky) {
                        bus.$emit('theme', 'light')
                    } else {
                        bus.$emit('theme', this.exactColor)
                    }
                }
            },
            largeCompare(newVal, oldVal) {
                if (!newVal) {
                    this.navbar = false;
                    setTimeout(() => {
                        $(document).find('html').css('overflow', 'initial')
                    }, 200)
                }
            },
            $route(to) {
                if(!to.path.includes('products')){
                    this.isSticky = false;
                }else{

                }
                this.page = to.name;
                this.path = this.page ? to.path.substring(this.locale.base.length) : to.path;
                this.navbar = false
                if (this.isSticky) {
                    bus.$emit('position', this.exactPosition);
                    bus.$emit('theme', this.exactColor)
                } else {
                    bus.$emit('theme', this.exactColor)
                    if (to.path.includes('contacts')) {
                        bus.$emit('theme', 'light')
                    }
                    bus.$emit('position', this.exactPosition);
                }

                $('body').find('.navbar-collapse').removeClass('show');
                $(document).find('html').css('overflow', 'initial')
            },
        }
    }
</script>
