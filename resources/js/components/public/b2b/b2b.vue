<template>
    <v-app id="firstPage">
        <div class="row col-md-12 top-header p-0">
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
                                    <h5 class="card-title">{{card.title}}</h5>
                                    <p class="card-text">{{card.text}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <features page="b2b"></features>

        <complect page="b2b"></complect>

        <div id="variants" class="justify-content-center px-0 row p-xs-125">
            <div class="col-xl-7 col-11 m-auto">
                <div class="sidebar-info padding-xs-top-125">
                    <h2>{{$t('b2b.variants.title')}}</h2>
                    <div v-if="xsmall"
                         class="nav flex-column nav-pills me-3 col-lg-2 col-11 px-0 flex-md-row flex-lg-column"
                         id="v-pills-tab" role="tablist"
                         aria-orientation="vertical">
                        <ul v-if="!xsmall" class="dropdown-tabs">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                   aria-haspopup="true" aria-expanded="false">{{text ? text :
                                    $t('b2b.variants.list')[0].listItem}}</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" @click.prevent="addItem(item,index)"
                                       :key="'variant-'+index" v-for="(item,index) in $t('b2b.variants.list')">{{item.listItem}}</a>
                                </div>
                            </li>
                        </ul>
                        <ul v-else-if="xsmall">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="trigger5" data-toggle="dropdown" href="#" role="button"
                                   aria-haspopup="true" aria-expanded="false">{{listItem ? listItem :
                                    $t('b2b.variants.list')[0].listItem}}</a>
                            </li>
                        </ul>
                    </div>
                    <v-tabs
                        v-else
                        v-model="tab"
                    >
                        <v-tab :key="'tab-'+index" v-for="(item,index) in $t('b2b.variants.list')">
                            <h5>{{item.listItem}}</h5>
                        </v-tab>
                    </v-tabs>
                    <div v-if="xsmall" class="tab-content col-lg-10 col-12 pr-0" id="v-pills-tabContent">
                        <div v-for="(item,index) in $t('b2b.variants.list')"
                             :class="['tab-pane', 'fade', item.listItem === active ? 'show active' : '']" :id="item.listItem"
                             role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <v-card flat>
                                <v-card-text>
                                    <p v-html="item.text"></p>
                                    <div>
                                        <ul class="justify-content-lg-start justify-content-center">
                                            <li v-for="(feature,i) in item.card" :key="'feature-'+i">
                                                <p class="roboto" v-html="feature.value"></p>
                                                <p>{{feature.name}}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </div>
                    </div>
                    <v-tabs-items v-else-if="!xsmall" v-model="tab">
                        <v-tab-item
                            v-for="(item,index) in $t('b2b.variants.list')"
                            :key="'variant-'+index"
                        >
                            <v-card flat>
                                <v-card-text>
                                    <p v-html="item.text"></p>
                                    <div>
                                        <ul class="justify-content-lg-start justify-content-center">
                                            <li v-for="(feature,i) in item.card" :key="'feature-'+i">
                                                <p class="roboto" v-html="feature.value"></p>
                                                <p v-html="feature.name"></p>
                                            </li>
                                        </ul>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </div>
            </div>
            <div class="col-md-12 background-variant">

            </div>
        </div>

        <connections page="b2b"></connections>

        <steps page="b2b"></steps>

        <modules page="b2b"></modules>

        <div id="energy" class="justify-content-center px-0">
            <Energy page="b2b"></Energy>
        </div>

        <div id="questions" class="justify-content-center px-0 padding-125">
            <Questions @modalOpen="modal" :dialog="open"></Questions>
        </div>

        <div id="discount" class="padding-125 justify-content-center px-0">
            <Discount></Discount>
        </div>
    </v-app>
</template>

<script>
    const Energy = () => import("../includes/energy");
    const ModalForm = () => import("../includes/ModalForm");
    const Projects = () => import("../includes/Projects/Projects");
    const Questions = () => import("../includes/Questions/Questions");
    const Partners = () => import("../includes/Partners/Partners");
    const Discount = () => import("../includes/discount/Discount");
    const complect = () => import("../includes/complect");
    const Connections = () => import("../includes/connections");
    const Modules = () => import("../includes/modules");
    const Map = () => import("../includes/Map/Map");
    const Steps = () => import("../includes/steps");
    const Features = () => import("../includes/features");
    import {bus} from '../../../event/eventbus.js'
    import windowInstance from "../../../width";

    export default {
        name: 'Home',
        props: {},
        components: {
            Features,
            Steps,
            Map,
            Modules,
            Connections,
            complect,
            Discount,
            Partners,
            Questions,
            Projects,
            ModalForm,
            Energy
        },
        data () {
            return {
                open: false,
                language: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
                count: 0,
                show: 4,
                tab: '',
                items: [],
                tabMap: '',
                location: '',
                active: this.$t('b2b.variants.list')[0].listItem,
                text: '',
                listItem:''
            }
        },
        mounted() {
            bus.$emit('theme','dark')
            bus.$emit('position','absolute')
            this.language = this.$store.getters.getPublicLanguage.code === 'en' ? 1 : (this.$store.getters.getPublicLanguage.code === 'ru' ? 3 : 2);
            this.$store.dispatch('projects', this.language).then(() => {
                this.count = this.$store.getters.getProjects.length
            });

            this.initialisePicker()
        },
        methods: {
            fetchList(list) {
                let array = [];
                for (let i in list) {
                    if (list[i].listItem) array.push({id:i,value:list[i].listItem})
                }
                return array;
            },
            getTab(item) {
                let list = this.$t('b2b.variants.list');
                for (let i in list) {
                    if (list[i].listItem === item.value) {
                        return list[i].listItem
                    }
                }
            },
            addItem(item, index = 0) {
                this.text = item.listItem;
                this.$nextTick(() => {
                    this.active = this.text
                })
            },
            initialisePicker(){
                setTimeout(() => {
                let trigger = document.querySelector('#trigger5');
                if(trigger) {
                        let _this = this;
                        let vm = this;
                        var mobileSelect1 = new MobileSelect({
                            trigger: "#trigger5",
                            title: "",
                            wheels: [{data: this.fetchList(this.$t('b2b.variants.list'))}],
                            cancelBtnText: this.$t('cancel'),
                            ensureBtnText: this.$t('select'),
                            jsonType: true,
                            position: [0],
                            transitionEnd: function (indexArr, data) {

                            },
                            onShow:(e) => {
                            },
                            callback: function (indexArr, data) {
                                let s = data[0];
                                vm.active = _this.getTab(s)
                                vm.text = s.value;
                            },
                        });
                    }
                }, 1500)
            },
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
            small(){return windowInstance.data.mediumCompare},
            medium(){return windowInstance.data.medium},
            large(){return windowInstance.data.large},
            compare(){return windowInstance.data.windowCompare},
            xsmall(){return windowInstance.data.xsmall}
        },
        watch: {
            language() {
                this.language = this.$store.getters.getPublicLanguage === 'en' ? 1 : (this.$store.getters.getPublicLanguage === 'ru' ? 3 : 2);
            },
            xsmall(n,o){
                if( n !== o){
                    if (n){
                        this.initialisePicker()
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #firstPage .top-header {
        background: linear-gradient(0deg, rgba(15, 39, 66, 0.6), rgba(15, 39, 66, 0.6)), url('/assets/components/b2b/pexels-kelly-lacy-2800832.jpg');
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

    .home-projects-header {
        margin-bottom: 35px;
    }

    .all-projects {
        margin-right: 63px;
    }

    .button-all {
        cursor: pointer;
    }


    .content-card{
        border-radius: 10px;
    }

    #variants {
        display: grid;
        grid-template-rows: repeat(1, minmax(300px, 1fr)) 300px;
        grid-template-columns: 1fr;
    }
    #variants > .col-xl-7.col-11{
        padding-bottom: 20px;
    }

    #variants .sidebar-info ul {
        display: flex;
    }

    #variants .sidebar-info ul li {
        list-style: none;
        margin-right: 80px;
        margin-top: 50px;
    }

    #variants .sidebar-info ul li p.roboto {
        font-size: 64px;
        color: #1f1f1f;
        line-height: 56px !important;
    }

    #variants .sidebar-info ul li p:not(.roboto) {
        position: relative;
        padding-left: 20px;
        margin-top: 15px;
        max-width: 270px;
        color:#555555
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
    .v-card__text > p{
        font-weight: 500;
    }

    .v-tab {
        color: #969696 !important;
        padding-left: 0;
        padding-right: 3rem;
        border-bottom: 1px solid #DEDEDE;
        font-size: 20px;
    }

    .v-tab.v-tab--active {
        color: #1f1f1f !important;
        font-weight: 600;
        font-size: 20px;
    }

    .map-body {
        max-width: 460px;
    }
</style>
