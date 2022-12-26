<template>
    <v-app id="firstPage">
        <div class="row col-lg-12 col-12 top-header p-0">
            <div id="header" class="col-xl-7 col-11 justify-content-center">
                <div class="header-text text-white">
                    <h1 v-html="$t('b2g.header.title')"></h1>
                    <p v-html="$t('b2g.header.text')"></p>
                    <button @click="toggleModal(true)" class="btn-primary">{{$t('b2g.header.button')}}</button>
                </div>
            </div>
            <div id="header-bottom" class="col-md-12 py-0">
                <div class="header-columns col-xl-7 col-11 p-0">
                    <div class="row justify-content-between">
                        <div class="col-md-4 col-xl-4 header-card py-5" v-for="card in $t('home.header.cards')">
                            <div class="content-card text-white">
                                <img v-lazy="card.img">
                                <div class="body mt-4">
                                    <h5 class="card-title">{{card.title}}</h5>
                                    <p class="card-text">{{card.text}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <features page="b2g"></features>

        <div class="padding-125 text-white" id="rights">
            <div class="col-xl-7 col-11 m-auto">
                <h2>{{$t('b2g.rights.title')}}</h2>
                <p class="right-text">{{$t('b2g.rights.text')}}</p>
                <a href="/assets/pdf/Regulament privind confirmarea statutului de producător eligibil, aprobat prin Hotărârea nr. 251 din 05.07.2019.pdf" target="_blank" class="btn-primary">{{$t('b2g.rights.button')}}</a>
            </div>
        </div>

        <div id="energy" class="justify-content-center px-0">
            <Energy page="b2g" @modalOpen="modal" :dialog="open"></Energy>
        </div>

        <div id="tarif" class="justify-content-center px-0 padding-125">
            <Tarif @modalOpen="modal" :dialog="open"></Tarif>
        </div>

        <steps page="b2g"></steps>

        <economy page="b2g"></economy>

        <div id="questions" class="justify-content-center px-0 padding-125">
            <Questions @modalOpen="modal" :dialog="open"></Questions>
        </div>

        <div id="discount" class="padding-125 justify-content-center px-0">
            <Discount></Discount>
        </div>
    </v-app>
</template>

<script>
    const ModalForm = () => import("../includes/ModalForm");
    const Projects = () => import("../includes/Projects/Projects");
    const Questions = () => import("../includes/Questions/Questions");
    const Partners = () => import("../includes/Partners/Partners");
    const Discount = () => import("../includes/discount/Discount");
    const complect = () => import("../includes/complect");
    const Modules = () => import("../includes/modules");
    const Steps = () => import("../includes/steps");
    const Features = () => import("../includes/features");
    const Economy = () => import("../includes/economy");
    const Tarif = () => import("../includes/tarif");
    const Energy = () => import("../includes/energy");
    import {bus} from "../../../event/eventbus";

    export default {
        name: 'Home',
        props: {},
        components: {
            Economy,
            Features,
            Steps,
            Modules,
            complect,
            Discount,
            Partners,
            Questions,
            Projects,
            ModalForm,
            Tarif,
            Energy
        },
        data: () => {
            return {
                open: false,
                language: 0,
                count: 0,
                show: 4,
                tab: '',
                items: [],
                tabMap: '',
                location: '',
                windowWidth:window.innerWidth < 3000
            }
        },
        mounted() {
            bus.$emit('position','absolute');
            bus.$emit('theme','dark')
            this.language = this.$store.getters.getPublicLanguage.code === 'en' ? 1 : (this.$store.getters.getPublicLanguage.code === 'ru' ? 3 : 2);
            this.$store.dispatch('projects', this.language).then(() => {
                this.count = this.$store.getters.getProjects.length
            });

        },
        methods: {
            modal(val) {
                this.open = val;
            },
            toggleModal(val){
                bus.$emit('openModal', {value:val,type:'call'});
            }
        },
        computed: {},
        watch: {
            language() {
                this.language = this.$store.getters.getPublicLanguage === 'en' ? 1 : (this.$store.getters.getPublicLanguage === 'ru' ? 3 : 2);
            }
        }
    }
</script>

<style scoped>
    #firstPage .top-header {
        /*background: url('/assets/components/b2g/gos-background-large-min.jpg');*/
        background: linear-gradient(0deg, rgba(15, 39, 66, 0.6), rgba(15, 39, 66, 0.6)), url('/assets/components/b2g/gos_uchr-large.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }

    .background-variant {
        background: url('/assets/components/b2b/photovoltaics-solar-power-station-energy-from-natural-1.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    #questions {
        background: url('/assets/components/home/questions/mask-light.png');
        background-repeat: no-repeat;
        background-position: top 30px left 70px, center;
    }

    #rights {
        background: linear-gradient(0deg, rgba(15, 39, 66, .6), rgba(15, 39, 66, .6)), url('/assets/components/b2g/photovoltaics-solar-power-station-energy-from-natural-2.jpg');
        background-repeat: no-repeat;
        background-size: auto,cover;
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

    #variants {
        display: grid;
        grid-template-rows: repeat(2, minmax(300px, 500px));
        grid-template-columns: 1fr;
    }

    #variants .sidebar-info {
        max-width: 860px;
    }

    #tarif{
        background: #F3F5F6;
    }

    #variants .sidebar-info ul {
        display: flex;
    }

    #variants .sidebar-info ul li {
        list-style: none;
        margin-right: 80px;
        margin-top: 50px;
    }

    #variants .sidebar-info ul li .roboto {
        font-size: 64px;
        color: #1f1f1f;
        line-height: 56px !important;
    }

    #variants .sidebar-info ul li p:not(.roboto) {
        position: relative;
        padding-left: 20px;
        margin-top: 15px;
    }

    #variants .sidebar-info ul li p:not(.roboto):before {
        content: '';
        width: 2px;
        height: 100%;
        position: absolute;
        background-color: #FFE454;
        left: 0;
    }

    .v-card__text {
        padding-left: 0;
    }

    .v-tab.v-tab--active {
        color: #969696 !important;
        padding-left: 0;
        padding-right: 3rem;
        border-bottom: 1px solid transparent;
    }

    .v-tab.v-tab--active {
        color: #1f1f1f !important;
    }

    .map-body {
        max-width: 460px;
    }

    #rights .right-text {
        max-width: 460px;
        margin: 30px 0 45px 0 !important;
    }
</style>
