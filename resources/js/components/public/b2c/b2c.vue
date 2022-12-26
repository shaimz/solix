<template>
    <v-app id="firstPage">
        <div class="row col-12 top-header p-0">
            <div id="header" class="col-xl-7 col-11 justify-content-center">
                <div class="header-text text-white">
                    <h1 v-html="$t('b2c.header.title')"></h1>
                    <p v-html="$t('b2c.header.text')"></p>
                    <v-btn @click.native="toggleModal(true)" class="btn-primary">{{$t('home.header.button')}}</v-btn>
                </div>
            </div>
            <div id="header-bottom" class="col-12 py-0">
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

        <features page="b2c"></features>

        <complect page="b2c"></complect>

        <div id="variants" class="justify-content-center px-0 row b2c">
            <div class="col-xl-6 col-12 background-variant">

            </div>
            <div class="col-xl-6 col-11 m-lg-0 m-auto padding-125">
                <div class="sidebar-info">
                    <h2>{{$t('b2c.variants.title')}}</h2>

                    <div v-if="xsmall"
                         class="nav flex-column nav-pills me-3 col-lg-2 col-11 px-0 flex-md-row flex-lg-column"
                         id="v-pills-tab" role="tablist"
                         aria-orientation="vertical">

                        <ul v-if="xsmall">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="trigger6" @click.prevent href="#"
                                   role="button"
                                   aria-haspopup="true" aria-expanded="false">{{text ? text :
                                    $t('b2c.variants.list')[0].listItem}}</a>
                            </li>
                        </ul>
                    </div>

                    <v-tabs
                        v-model="tab"
                        v-if="!xsmall">
                        <v-tab :key="'tab-'+index" v-for="(item,index) in $t('b2c.variants.list')">
                            <h5>{{item.listItem}}</h5>
                        </v-tab>
                    </v-tabs>

                    <div v-if="xsmall" class="tab-content col-lg-10 col-12 pr-0" id="v-pills-tabContent">
                        <div v-for="(item,index) in $t('b2c.variants.list')"
                             :class="['tab-pane', 'fade', 'variant-' + index === active ? 'show active' : '']"
                             :id="item.listItem"
                             role="tabpanel" aria-labelledby="v-pills-home-tab">
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
                        </div>
                    </div>
                    <v-tabs-items v-else-if="!xsmall" v-model="tab">
                        <v-tab-item
                            v-for="(item,index) in $t('b2c.variants.list')"
                            :key="'tab-item-'+index">
                            <v-card flat>
                                <v-card-text>
                                    <p v-html="item.text"></p>
                                    <div>
                                        <ul class="justify-content-lg-start justify-content-center variants-values">
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
        </div>

        <connections page="b2c"></connections>

        <modules page="b2c"></modules>

        <div id="energy" class="px-0">
                <Energy page="b2c" @modalOpen="modal" :dialog="open"></Energy>
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
    const Features = () => import("../includes/features");
    import {bus} from "../../../event/eventbus";
    import windowInstance from "../../../width";

    export default {
        name: 'Home',
        props: [],
        components: {
            Energy,
            Features,
            Map,
            Modules,
            Connections,
            complect,
            Discount,
            Partners,
            Questions,
            Projects,
            ModalForm
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
                text: '',
                active: 'variant-0',
                listItem: ''
            }
        },
        mounted() {
            bus.$emit('theme', 'dark')
            bus.$emit('position', 'absolute');
            this.language = this.$store.getters.getPublicLanguage.code === 'en' ? 1 : (this.$store.getters.getPublicLanguage.code === 'ru' ? 3 : 2);
            this.$store.dispatch('projects', this.language).then(() => {
                this.count = this.$store.getters.getProjects.length
            });
            this.initialisePicker()
        },
        methods: {
            addItem(item, index = 0) {
                this.text = item.listItem;
                this.$nextTick(() => {
                    this.active = 'variant-' + index
                })
            },
            fetchList(list) {
                let array = [];
                for (let i in list) {
                    if (list[i].listItem) array.push({id: i, value: list[i].listItem})
                }
                return array;
            },
            getTab(item) {
                let list = this.$t('b2c.variants.list');
                for (let i in list) {
                    if (list[i].listItem === item.value) {
                        return list[i].listItem
                    }
                }
            },
            initialisePicker() {
                setTimeout(() => {
                    let trigger = document.querySelector('#trigger6');
                    if (trigger) {
                        let _this = this;
                        let vm = this;
                        var mobileSelect1 = new MobileSelect({
                            trigger: "#trigger6",
                            title: "",
                            wheels: [{data: this.fetchList(this.$t('b2c.variants.list'))}],
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
                                vm.tab = _this.getTab(s)
                                vm.active = 'variant-'+indexArr
                                vm.text = s.value;
                            },
                        });
                    }
                }, 1500)
        },
        modal(val) {
            this.open = val;
        },
        toggleModal(val) {
            bus.$emit('openModal', {value: val, type: 'call'});
        }
    },
    computed: {
        largeCompare()
        {
            return windowInstance.data.largeCompare
        },
        small()
        {
            return windowInstance.data.compare
        },
        xsmall()
        {
            return windowInstance.data.xsmall
        }
    },
    watch: {
        language()
        {
            this.language = this.$store.getters.getPublicLanguage === 'en' ? 1 : (this.$store.getters.getPublicLanguage === 'ru' ? 3 : 2);
        },
        xsmall(n, o)
        {
            if (n !== o) {
                if (n) {
                    this.initialisePicker()
                }
            }
        }
    }
    }
</script>

<style scoped>
    #firstPage .top-header {
        background: linear-gradient(0deg, rgba(15, 39, 66, 0.6), rgba(15, 39, 66, 0.6)), url('/assets/components/b2c/aerial-view-private-house-with-solar-panels-roof.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }

    .background-variant {
        background: url('/assets/components/b2c/photovoltaics-solar-power-station-energy-from-natural.jpg');
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

    #variants .sidebar-info {
        margin-left: 100px;
        max-width: 460px;
    }

    #variants .sidebar-info ul {
        display: flex;
    }

    #variants .sidebar-info ul li {
        list-style: none;
        margin-right: 30px;
        margin-top: 50px;
    }

    #variants .sidebar-info ul li .roboto {
        font-size: 64px !important;
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

    div[data-id=b2c] #variants.b2c .sidebar-info {
        margin-left: 85px
    }

    div[data-id=b2c] #variants.b2c .v-card .v-card__text > p {
        max-width: 460px;
    }

    @media (max-width: 768px) {
        div[data-id=b2c] #variants.b2c .v-card .v-card__text > p {
            margin: 0 auto
        }
    }

    .v-card__text {
        padding-left: 0;
    }

    .v-tab {
        color: #969696 !important;
        padding-left: 0;
        padding-right: 3rem;
        border-bottom: 1px solid #DEDEDE;
    }

    .v-tab.v-tab--active {
        color: #1f1f1f !important;
    }

    .map-body {
        max-width: 460px;
    }

    #variants .sidebar-info .v-card__text p ul li {
        width: 100%
    }

</style>
