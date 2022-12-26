<template>
    <v-app :data-id="$route.name" :key="language">
        <!--<loading-screen v-if="isLoading"></loading-screen>-->
        <modal-form :v-model="open" :open="open"></modal-form>
        <NewsModal v-if="counter === 0" :open="counter === 0" @hideNews="closeNews"></NewsModal>
        <Cookies @cookie="cookie = false" v-if="cookie"></Cookies>
        <Header :key="$router.currentRoute.path.includes('products') ? sticky : $route.path" :sticky='sticky' :position="position" :color="color"
                :lang="language"
                @languageUpdated="setLang"></Header>

        <router-view
                     @theme="changeTheme"
                     v-bind:small="small"
                     v-bind:medium="medium"
                     :windowCompare="windowCompare"
                     :lang="language">
        </router-view>

        <Footer :id="'mobile'" :lang="language"></Footer>
    </v-app>
</template>

<script>
    const Cookies = () => import("./includes/Cookies/Cookies");
    const ModalForm = () => import("./includes/ModalForm");
    const NewsModal = () => import("./includes/newsModal");
    const Header = () => import("./includes/header");
    const Footer = () => import("./includes/footer");
    const loader = () => import("../includes/loader");
    import {SUPPORTED_LOCALES} from '../../constants/locales';
    import {bus} from '../../event/eventbus.js';

    const store = () => import("../../store/store");
    const LoadingScreen = () => import("../includes/loadingScreen");
    import windowInstance from "../../width";

    export default {
        components: {Cookies, LoadingScreen, NewsModal, ModalForm, Header, Footer, loader},
        data() {
            return {
                open: false,
                color: 'dark',
                loading: true,
                isLoading: false,
                isDone: false,
                language: 0,
                path: '/',
                sticky: false,
                position: 'absolute',
                locales: SUPPORTED_LOCALES,
                counter: 30,
                cookie:true

            }
        },

        methods: {
            closeNews(){
               this.counter = -1;
            },
            meta(to) {
                setTimeout(() => {
                    let pages = this.$t('header');
                    let tag = $('meta[name="title"]')[0];
                    pages.find((e) => {
                        if (to.path.includes(e.link)) {
                            document.title = e.text + ' | Solix';
                            tag.setAttribute('title', e.text)
                            return true;
                        } else {
                            if(this.$t('nav.pages')){
                                this.$t('nav.pages').find((elem) => {
                                    if (to.path.includes(elem.link)) {
                                        document.title = elem.text + ' | Solix';
                                        document.title = elem.text + ' | Solix';
                                        tag.setAttribute('title', elem.text)
                                        return true;
                                    } else {
                                        document.title = this.$t('meta')
                                    }
                                })
                            }
                        }
                    })

                    if (document.title === 'Laravel') {
                        document.title = this.$t('meta')
                    }
                }, 200)
            },
            toggleModal(val) {
                this.open = val;
            },
            openModal() {
                this.open = true;
            },
            setLang(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.language = newVal;
                }
            },
            changeTheme(val) {
                this.color = val;
            },
            getMobileOperatingSystem() {
                var userAgent = navigator.userAgent || navigator.vendor || window.opera;

                // Windows Phone must come first because its UA also contains "Android"
                if (/windows phone/i.test(userAgent)) {
                    $('link[rel="icon"]')[0].setAttribute('href', '{{asset(\'assets/favicons/favicon-16x16.png\')}}')
                    return "Windows Phone";
                }

                if (/android/i.test(userAgent)) {
                    $('link[rel="icon"]')[0].setAttribute('href', '{{asset(\'assets/favicons/android-icon-36x36.png\')}}')
                    return "Android";
                }

                // iOS detection from: http://stackoverflow.com/a/9039885/177710
                if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                    $('link[rel="icon"]')[0].setAttribute('href', '{{asset(\'assets/favicons/apple-icon.png\')}}')
                    return "iOS";
                }
                $('link[rel="icon"]')[0].setAttribute('href', '{{asset(\'assets/favicons/favicon-16x16.png\')}}')
                return "Windows";
            },
            slickSlider() {
                let more = '';
                let header =
                        {
                            infinite: true,
                            speed: 300,
                            auto: true,
                            dots: true,
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
                                    breakpoint: 769,
                                    settings: {
                                        infinite: true,
                                        speed: 300,
                                        auto: true,
                                        dots: true,
                                        prevArrow: false,
                                        nextArrow: false,
                                        slidesToShow: 1,
                                        adaptiveHeight: true,
                                    }
                                }
                            ]
                        },
                    feature = {
                        infinite: true,
                        speed: 300,
                        auto: false,
                        autoplay: false,
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
                                breakpoint: 769,
                                settings: {
                                    infinite: true,
                                    speed: 300,
                                    auto: true,
                                    prevArrow: false,
                                    nextArrow: false,
                                    slidesToShow: 1,
                                    adaptiveHeight: true,
                                }
                            }
                        ]
                    },
                    moreProjects = {
                        infinite: true,
                        slidesToShow: 1,
                        prevArrow: false,
                        nextArrow: false,
                        centerMode: true,
                        centerPadding: '60px',
                        responsive: [
                            {
                                breakpoint: 9999,
                                settings: "unslick"
                            },
                            {
                                breakpoint: 769,
                                settings: {
                                    infinite: true,
                                    speed: 300,
                                    prevArrow: false,
                                    nextArrow: false,
                                    slidesToShow: 1,
                                    adaptiveHeight: true,
                                    centerMode: true,
                                    centerPadding: '60px',
                                }
                            },
                            {
                                breakpoint: 520,
                                settings: "unslick"
                            },
                        ]
                    },
                    project =
                        {
                            infinite: true,
                            slidesToShow: 1,
                            prevArrow: false,
                            nextArrow: false,
                            responsive: [
                                {
                                    breakpoint: 9999,
                                    settings: "unslick"
                                },
                                {
                                    breakpoint: 769,
                                    settings: {
                                        infinite: true,
                                        speed: 300,
                                        auto: true,
                                        prevArrow: false,
                                        nextArrow: false,
                                        slidesToShow: 1,
                                        adaptiveHeight: true,
                                        centerPadding: '60px',
                                    }
                                },
                                {
                                    breakpoint: 428,
                                    settings: "unslick"
                                },
                            ]
                        },
                    singleProject = {
                        infinite: true,
                        slidesToShow: 1,
                        prevArrow: false,
                        nextArrow: false,
                        dots: true,
                        responsive: [
                            {
                                breakpoint: 9999,
                                settings: "unslick"
                            },
                            {
                                breakpoint: 429,
                                settings: {
                                    infinite: true,
                                    speed: 300,
                                    auto: true,
                                    prevArrow: false,
                                    nextArrow: false,
                                    slidesToShow: 1,
                                    adaptiveHeight: true,
                                }
                            },
                        ]
                    },
                    mobile =
                        {
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
                                        prevArrow: false,
                                        nextArrow: false,
                                        slidesToShow: 1,
                                        adaptiveHeight: true,
                                    }
                                }
                            ]
                        }
                setTimeout(() => {
                    if (!$('body').find('.slick-initialized').length) {
                        if (this.mediumCompare) {
                            $('body').find('#firstPage .header-columns .row').slick(
                                header
                            ).on('init', function () {
                                let width = 100 / $('li[role="presentation"]').length;
                                $('li[role="presentation"]').css({width: 0, transition: 'width .2s ease-in-out'});
                                $($('li[role="presentation"]')[0]).css({
                                    width: width + '%',
                                    backgroundColor: '#FFE454',
                                    transition: 'width .2s ease-in-out'
                                })
                            })
                                .on('afterChange', function (event, slick, currentSlide) {
                                    let width = 100 / $('li[role="presentation"]').length;
                                    if (currentSlide === 0) {
                                        $('li[role="presentation"]').css({
                                            width: 0,
                                            transition: 'width .2s ease-in-out'
                                        });
                                        $($('li[role="presentation"]')[currentSlide]).css({
                                            width: width + '%',
                                            backgroundColor: '#FFE454'
                                        })
                                    } else {
                                        switch (currentSlide) {
                                            case 1:
                                                $($('li[role="presentation"]')[2]).css({
                                                    width: 0,
                                                    backgroundColor: 'none'
                                                })
                                                $($('li[role="presentation"]')[currentSlide]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                $($('li[role="presentation"]')[0]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                break;
                                            case 2:
                                                $($('li[role="presentation"]')[currentSlide]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                $($('li[role="presentation"]')[1]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                break;
                                            case 3:
                                                $($('li[role="presentation"]')[currentSlide]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                $($('li[role="presentation"]')[1]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                $($('li[role="presentation"]')[2]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                break;
                                        }

                                    }
                                });

                            $('.features-grid').slick(feature)
                            if ($('body').find('#firstPage .more-container')) {
                                $('body').find('#firstPage .more-container').slick(moreProjects)
                            }
                        }
                        /* if (this.windowWidth > 428 && this.mediumCompare) {
                             $('#firstPage').find('#v-pills-tabContent .tab-pane.active .project-slick').slick(project)
                         }*/


                        if (this.small) {
                            $('#partners').find('.carousel-control-prev').click((e) => {
                                e.preventDefault()
                                $(".mobile-carousel").slick('slickPrev');
                            })
                            $('#partners').find('.carousel-control-next').click((e) => {
                                e.preventDefault()
                                $(".mobile-carousel").slick('slickNext');
                            })
                        }
                        if (this.xsmall) {
                            $('body').find(".mobile-carousel").slick(mobile)
                            $('#partners').find('.carousel-control-prev').click((e) => {
                                e.preventDefault()
                                $(".mobile-carousel").slick('slickPrev');
                            })
                            $('#partners').find('.carousel-control-next').click((e) => {
                                e.preventDefault()
                                $(".mobile-carousel").slick('slickNext');
                            })
                            $('body').find('#singleProject .header-columns .row').slick(
                                singleProject
                            ).on('init', function () {
                                let width = 100 / $('li[role="presentation"]').length;
                                $('li[role="presentation"]').css({width: 0, transition: 'width .2s ease-in-out'});
                                $($('li[role="presentation"]')[0]).css({
                                    width: width + '%',
                                    backgroundColor: '#FFE454',
                                    transition: 'width .2s ease-in-out'
                                })
                            })
                                .on('afterChange', function (event, slick, currentSlide) {
                                    let width = 100 / $('li[role="presentation"]').length;
                                    if (currentSlide === 0) {
                                        $('li[role="presentation"]').css({
                                            width: 0,
                                            transition: 'width .2s ease-in-out'
                                        });
                                        $($('li[role="presentation"]')[currentSlide]).css({
                                            width: width + '%',
                                            backgroundColor: '#FFE454'
                                        })
                                    } else {
                                        switch (currentSlide) {
                                            case 1:
                                                $($('li[role="presentation"]')[2]).css({
                                                    width: 0,
                                                    backgroundColor: 'none'
                                                })
                                                $($('li[role="presentation"]')[currentSlide]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                $($('li[role="presentation"]')[0]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                break;
                                            case 2:
                                                $($('li[role="presentation"]')[3]).css({
                                                    width: 0,
                                                    backgroundColor: 'none'
                                                })
                                                $($('li[role="presentation"]')[currentSlide]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                $($('li[role="presentation"]')[1]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                break;
                                            case 3:
                                                $($('li[role="presentation"]')[currentSlide]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                $($('li[role="presentation"]')[1]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                $($('li[role="presentation"]')[2]).css({
                                                    width: width + '%',
                                                    backgroundColor: '#FFE454'
                                                })
                                                break;
                                        }

                                    }
                                });
                        }
                    } else {
                        if (this.mediumCompare) {
                            $('body').find('#firstPage .header-columns .row:not(.slick-initialized)').slick(header);
                            $('body').find('#singleProject .header-columns .row:not(.slick-initialized)').slick(singleProject);
                            $('.features-grid:not(.slick-initialized)').slick(feature)
                            if ($('body').find('#firstPage .more-container:not(.slick-initialized)')) {
                                $('body').find('#firstPage .more-container:not(.slick-initialized)').slick(moreProjects)
                            }
                        }

                        if (this.xsmall) {
                            $('body').find(".mobile-carousel:not(.slick-initialized)").slick(mobile)
                        }
                    }
                }, 800)
            },
            projectSlider() {
                let project =
                    {
                        infinite: true,
                        slidesToShow: 1,
                        prevArrow: false,
                        nextArrow: false,
                        variableWidth: true,
                        responsive: [
                            {
                                breakpoint: 9999,
                                settings: "unslick"
                            },
                            {
                                breakpoint: 769,
                                settings: {
                                    infinite: true,
                                    speed: 300,
                                    auto: true,
                                    prevArrow: false,
                                    nextArrow: false,
                                    slidesToShow: 1,
                                    adaptiveHeight: true,
                                    centerPadding: '60px',
                                }
                            },
                            {
                                breakpoint: 428,
                                settings: "unslick"
                            },
                        ]
                    }
                setTimeout(() => {
                    if (this.windowWidth > 428 && this.mediumCompare) {
                        $('#firstPage').find('#v-pills-tabContent .tab-pane.active .project-slick:not(.slick-initialized)').slick(project)
                    }
                }, 800)
            },
        },
        created() {
            this.isLoading = true;
            $('html').css("overflow",'hidden')
            bus.$on('sticky', value => {
                this.sticky = value;
            })
            bus.$on('openModal', value => {
                this.open = value.value;
            });
            bus.$on('theme', value => {
                if (value){
                    this.color = value;
                    console.log({color:this.color})
                }
            });
            bus.$on('position', value => {
                this.position = value;
                console.log({'position':this.position})
            })
            bus.$on('tabchange', value => {
                this.projectSlider();
            })
        },
        computed: {
            small() {
                return windowInstance.data.small
            },
            medium() {
                return windowInstance.data.medium
            },
            locale() {
                return this.$store.getters.getPublicLanguage;
            },
            windowWidth() {
                return windowInstance.data.innerWidth
            },
            windowCompare() {
                return windowInstance.data.compare
            },
            xsmall() {
                return windowInstance.data.xsmall
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
        destroyed() {

        },
        mounted() {
            this.language = this.locale.code === 'en' ? 1 : (this.locale.code === 'ru' ? 3 : 2)
            let system = this.getMobileOperatingSystem();

            if (Vue.ls.get('loading', 'unset') === 'unset') {
                setTimeout(() => {
                    $('body').css('overflow', 'initial');
                    Vue.ls.set('loading', false, 60 * 60 * 60 * 60 * 1000);
                }, 400)
            }
            setTimeout(() => {
                this.isLoading = false;
            }, 2000)

            if (Vue.ls.get('counter', 'unset') === 'unset') {
                let counter = setInterval(()=>{
                    this.counter--;
                    if (this.counter <= 0) {
                        Vue.ls.set('counter', false, 60 * 24 * 60 * 60 * 1000);
                        clearInterval(counter);
                        //counter ended, do something here
                        return;
                    }
                },1000)
            } else {
                this.counter = -1;
            }

            if (Vue.ls.get('cookie', 'unset') !== 'unset') {
                this.cookie = false;
            }

            $('body').css('overflow', 'initial');
            /*   this.language = this.locale.code === 'ru' ? 3 : (this.locale.code === 'en' ? 1 : 3);*/
        },
        beforeRouteEnter(to, from, next) {
            this.open = false;
            this.isLoading = true;
            bus.$emit('openModal', {value: false}).then(() => {
                this.meta(to)
                to.params.locale = this.locale.code
                next()
            })
        },
        watch: {
            open(val) {
                this.open = val;
            },
            isLoading(n, o) {
                if (!n && n !== o) {
                    if (!this.$route.path.includes('admin')) {
                        this.slickSlider()
                        this.projectSlider()
                    }
                }
            },
            small(newVal, oldVal) {
                if (oldVal !== newVal) {
                    if (newVal) {
                        this.projectSlider()
                    }
                }
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
                        setTimeout(() => {
                            $('body').find(".mobile-carousel:not(.slick-initialized)").slick(mobile)
                        }, 1200)
                    }
                }
            },
            largeCompare(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.slickSlider()
                }
            },
            medium(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.slickSlider()
                }
            },
            language: function (newVal, oldVal) {
                /*console.log('new master lang val:'+newVal)*/
            },
            locale: function (newVal, oldVal) {
                if (oldVal !== newVal) this.language = this.locale.code === 'ru' ? 3 : (this.locale.code === 'en' ? 1 : 2);
                /*console.log('code'+this.locale.code)*/
                this.meta(this.$router.currentRoute)
            },
            color: function (val, oldVal) {

            },
            $route(to) {
                this.path = this.locale.base ? to.path.substring(this.locale.base.length) : to.path;
                this.meta(to)
                this.slickSlider()
                this.projectSlider()
            }
        }
    }
</script>

<style scoped>

</style>
