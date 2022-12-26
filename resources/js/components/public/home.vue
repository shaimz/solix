<template>
    <v-app id="firstPage">
        <div class="row col-md-12 top-header p-0">
            <video playsinline autoplay muted loop poster="" id="bgvid">
                <source src="/assets/components/home/home.m4v" type="video/mp4">
            </video>

            <div class="vide-overlay"></div>

            <div id="header" class="col-md-11 col-lg-11 col-xl-7 justify-content-center">
                <div class="header-text text-white">
                    <h1 v-html="$t('home.header.heading')"></h1>
                    <p v-html="$t('home.header.subheading')"></p>
                    <v-btn @click.native="toggleModal(true)" class="btn-primary">{{$t('home.header.button')}}</v-btn>
                </div>
            </div>
            <div id="header-bottom" class="col-md-12 py-0">
                <div class="header-columns col-lg-11 col-xl-7 col-md-11 p-0">
                    <div class="row justify-content-between">
                        <div class="col-md-3 col-lg-4 col-xl-4 header-card py-5" v-for="card in $t('home.header.cards')">
                            <div class="content-card text-white">
                                <img :src="card.img">
                                <div class="body mt-4">
                                    <h4 class="card-title">{{card.title}}</h4>
                                    <p class="card-text">{{card.text}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="solutions">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 background-col">
                    <div class="col-lg-11 col-xl-7 col-md-12 ml-auto content-side">
                        <div class="max-437 m-auto">
                            <img v-lazy="'/assets/icons/solutions/solar-panel-1.png'">
                            <div class="mt-7">
                                <h2 class="mb-4">{{$t('home.solutions')[0].title}}</h2>
                                <p>{{$t('home.solutions')[0].text}}</p>
                            </div>
                            <button><router-link :to="{name:'b2b',params:{locale:$route.params.locale}}" class="btn-primary">{{$t('home.solutions')[0].button}}</router-link></button>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-12">

                </div>
            </div>

            <div class="row">
                <div class="col-md-6 col-sm-12"></div>

                <div class="col-lg-6 col-md-12 col-12 background-col">
                    <div class="col-lg-11 col-xl-7 col-md-12 mr-auto content-side">
                        <div class="max-437 m-md-unset">
                            <img v-lazy="'/assets/icons/solutions/house1-1-min.png'">
                            <div class="mt-7">
                                <h2 class="mb-4">{{$t('home.solutions')[1].title}}</h2>
                                <p>{{$t('home.solutions')[1].text}}</p>
                            </div>
                            <button><router-link :to="{name:'b2c',params:{locale:$route.params.locale}}" class="btn-primary">{{$t('home.solutions')[1].button}}</router-link></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-12 col-12 background-col">
                    <div class="col-lg-11 col-xl-7 col-md-12 ml-auto content-side">
                        <div class="max-437 m-auto">
                            <img v-lazy="'/assets/icons/solutions/house-min.png'">

                            <div class="mt-7">
                                <h2 class="mb-4">{{$t('home.solutions')[2].title}}</h2>
                                <p>{{$t('home.solutions')[2].text}}</p>
                            </div>

                            <button><router-link :to="{name:'b2g',params:{locale:$route.params.locale}}" class="btn-primary">{{$t('home.solutions')[2].button}}</router-link></button>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-12"></div>
            </div>
        </div>

        <features page="home"></features>

        <economy page="home"></economy>

        <div class="justify-content-center px-0 padding-125" id="projects">
            <div class="d-flex justify-content-between align-items-center col-lg-11 col-xl-7 col-11 mx-auto py-0 position-unset pl-xl-4">
                <h2 v-html="$t('home.projects.title',{count:count})" class="home-projects-header col-xl-6 col-md-8 col-lg-8 px-0"></h2>

                <div class="col-md-2 col-xl-4 col-lg-3 px-0 all-projects text-xlarge-right mr-xlarge-0">
                    <h4>{{$t('home.projects.all')}}</h4>
                    <router-link :to="'/projects'" class="button-all">
                        <i>
                            <img v-lazy="'/assets/icons/arrow-right-yellow.png'">
                        </i>
                    </router-link>
                </div>
            </div>

            <Projects :show="show"></Projects>

            <div v-if="xsmall" class="col-lg-2 col-xl-4 px-0 all-projects text-xlarge-right mr-xlarge-0 d-none text-center mt-12">
                <h4>{{$t('home.projects.all')}}</h4>
                <router-link :to="{name:'projects',params:{locale:$router.currentRoute.params.locale}}" class="button-all"><i><img
                    :src="'/assets/icons/arrow-right-yellow.png'"></i></router-link>
            </div>
        </div>

        <div id="questions" class="justify-content-center px-0 padding-125">
            <Questions @modalOpen="modal" :dialog="open"></Questions>
        </div>

        <div id="partners" class="padding-125 justify-content-center px-0">
            <Partners></Partners>
        </div>

        <div id="discount" class="padding-125 justify-content-center px-0">
            <Discount></Discount>
        </div>
    </v-app>
</template>
<script>
    import {bus} from "../../event/eventbus";
    import windowInstance from "../../width";

    export default {
        name: 'Home',
        components: {
            'Economy': () => import( "./includes/economy"),
            'Features': () => import( "./includes/features"),
            'Discount': () => import( "./includes/discount/Discount"),
            'Partners': () => import( "./includes/Partners/Partners"),
            'Questions':() => import( "./includes/Questions/Questions"),
            'Projects':() => import( "./includes/Projects/Projects"),
            'ModalForm': () => import( "./includes/ModalForm"),

        },
        data: () => {
            return {
                open: false,
                language: 0,
                count: 0,
                show: 4,
            }
        },
        mounted() {
            bus.$emit('theme', 'dark')
            bus.$emit('position','absolute')

            this.language = this.$store.getters.getPublicLanguage.code === 'en' ? 1 : (this.$store.getters.getPublicLanguage.code === 'ru' ? 3 : 2);
            axios.get('/get-total', {params:{lang:this.language,type:'projects'}}).then((res) => {
                this.count = res.data;
            });
        },
        created() {

        },
        methods: {
            modal(val) {
                this.open = val;
            },
            toggleModal(val){
                bus.$emit('openModal', {value:val,type:'call'});
            }
        },
        computed: {
            width(){return windowInstance.data.width},
            windowWidth() { return windowInstance.data.compare},
            windowCompare(){return windowInstance.data.compare},
            small(){return windowInstance.data.small},
            medium(){return windowInstance.data.medium},
            large(){return windowInstance.data.large},
            compare(){return windowInstance.data.windowCompare},
            xsmall(){return windowInstance.data.xsmall}
        },
        watch: {
            language() {
                this.language = this.$store.getters.getPublicLanguage === 'en' ? 1 : (this.$store.getters.getPublicLanguage === 'ru' ? 3 : 2);
            }
        }
    }
</script>

<style scoped>
    #bgvid{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        object-fit: cover
    }
    #firstPage .top-header {
        background-size: cover;
        background-repeat: no-repeat;
    }

    #questions {
        background: url('/assets/components/home/questions/mask-light.png'), linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
        background-repeat: no-repeat, no-repeat;
        background-position: top 30px left 70px, center;
    }

    .home-projects-header {
        margin-bottom: 35px;
    }

    .all-projects {
        margin-right: 63px;
    }

    .button-all {
        cursor: pointer;
    }

    #firstPage .top-header {

    }

    #firstPage .vide-overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(0deg, rgb(0 0 0 / 40%), rgba(15, 39, 66, 0.4));
    }
</style>
