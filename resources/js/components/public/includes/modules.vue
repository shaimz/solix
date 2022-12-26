<template>
    <div id="modules" :class="subTab">
        <div class="modules-inner">
            <div class="col-lg-5 col col-11 ml-auto">
            <div class="sidebar-modules">
                <h2 class="text-white">{{$t(page+'.modules.title')}}</h2>

                <v-tabs v-model="tab" slider-size="1">
                    <template>
                        <div v-if="xsmall"
                             class="nav flex-column nav-pills me-3 col-lg-2 col-11 px-0 flex-md-row flex-lg-column"
                             id="v-pills-tab" role="tablist"
                             aria-orientation="vertical">
                            <ul>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="trigger3" data-toggle="dropdown" href="#"
                                       role="button"
                                       aria-haspopup="true" aria-expanded="false">{{text ? text :
                                        $t(page+'.modules.tabs')[0].title}}</a>
                                </li>
                            </ul>
                        </div>

                        <v-tab v-else :key="'tab-'+index" v-for="(tabItem,index) in $t(page+'.modules.tabs')">
                            <h5 class="no-after">{{tabItem.title}}</h5>
                        </v-tab>
                    </template>

                    <template v-if="!xsmall">
                        <v-tabs-items v-model="tab" v-if="page === 'b2c' || page === 'b2b'">
                            <v-tab-item :key="'tab-item-'+ind" v-for="(tabItem,ind) in $t(page+'.modules.tabs')">
                                <div>
                                    <ul class="d-flex modules-features">
                                        <li v-for="(feature,i) in tabItem.features" :key="'feature-'+i">
                                            <p class="roboto">{{feature.value}}</p>
                                            <p>{{feature.name}}</p>
                                        </li>
                                    </ul>
                                </div>

                                <v-tabs v-model="subTab" class="sides-modules" v-if="!tab">
                                    <v-tab @click="setImage(sf.id)" :key="sf.id"
                                           v-for="(sf,i) in $t(page+'.modules.subtabs')">
                                        <h5>{{sf.title}}</h5>
                                    </v-tab>
                                </v-tabs>

                                <p class="card-text">{{tabItem.text}}</p>
                            </v-tab-item>
                        </v-tabs-items>

                        <v-tabs-items v-model="tab" v-else>
                            <v-tab-item :key="'tab-item-'+ind" v-for="(tab,ind) in $t(page+'.modules.tabs')">
                                <p class="card-text">{{tab.text}}</p>

                                <div>
                                    <ul class="d-flex modules-features">
                                        <li v-for="(feature,i) in tab.features" :key="'feature-'+i">
                                            <p class="roboto">{{feature.value}}</p>
                                            <p>{{feature.name}}</p>
                                        </li>
                                    </ul>
                                </div>
                            </v-tab-item>
                        </v-tabs-items>
                    </template>
                </v-tabs>

                <div v-if="xsmall" class="tab-content col-lg-10 col-12 pr-0" id="v-pills-tabContent">
                    <div v-for="(item,i) in $t(page+'.modules.tabs')"
                         :key="'tab-'+i"
                         :class="['tab-pane', 'fade', item.title === active ? 'show active' : '']"
                         :id="item.title"
                         role="tabpanel" aria-labelledby="v-pills-home-tab">

                        <div v-if="xsmall">
                            <ul class="d-flex flex-column modules-features">
                                <li v-for="(feature,i) in item.features" :key="'feature-'+i">
                                    <p class="roboto">{{feature.value}}</p>
                                    <p>{{feature.name}}</p>
                                </li>
                            </ul>
                        </div>

                        <v-tabs v-model="subTab" class="sides-modules" v-if="!tabIndex && (page === 'b2c' || page === 'b2b')">
                            <v-tab @click="setImage(sf.id)" :key="sf.id"
                                   v-for="(sf,i) in $t(page+'.modules.subtabs')">
                                <h5>{{sf.title}}</h5>
                            </v-tab>
                        </v-tabs>

                        <p class="card-text">{{item.text}}</p>

                        <div v-if="small">
                            <ul class="d-flex modules-features">
                                <li v-for="(feature,i) in item.features" :key="'feature-'+i">
                                    <p class="roboto">{{feature.value}}</p>
                                    <p>{{feature.name}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import windowInstance from "../../../width";

    export default {
        name: 'modules',
        props: ['page'],
        data() {
            return {
                tab: '',
                active: this.$t(this.page + '.modules.tabs')[0].title,
                text: '',
                subTab: 0,
                tabIndex:0
            }
        },
        mounted() {
            this.initialisePicker()
        },
        computed: {
            small() {
                return windowInstance.data.small
            },
            xsmall() {
                return windowInstance.data.xsmall
            },
            medium(){
                return windowInstance.data.medium
            },
            large(){
                return windowInstance.data.large
            }
        },
        methods: {
            screenSizeClass(node){
                if (windowInstance.data.small) {
                    node.removeClass('mh-xs mh-md mh-lg').addClass('mh-sm');
                } else if(windowInstance.data.xsmall) {
                    node.removeClass('mh-sm mh-md mh-lg').addClass('mh-xs');
                } else if(windowInstance.data.medium) {
                    node.removeClass('mh-sm mh-xs mh-lg').addClass('mh-md');
                } else {
                    node.removeClass('mh-sm mh-xs mh-md').addClass('mh-lg');
                }
            },
            setImage(tab){
                let modules_node = $('#modules');

                if (tab === 'one') {
                    modules_node.removeClass('bilateral');
                } else if (tab === 'two'){
                    modules_node.addClass('bilateral');
                }

                this.screenSizeClass(modules_node);
            },
            fetchList(list) {
                let array = [];
                for (let i in list) {
                    if (list[i].title) array.push({id: i, value: list[i].title})
                }
                return array;
            },
            getTab(item) {
                let list = this.$t(this.page + '.modules.tabs');
                for (let i in list) {
                    if (list[i].title === item.value) {
                        return list[i].title
                    }
                }
            },
            initialisePicker() {
                this.changeBackground()
                setTimeout(() => {
                    let trigger = document.querySelector('#trigger3');
                    if (trigger) {
                        let _this = this;
                        let vm = this;
                        var mobileSelect1 = new MobileSelect({
                            trigger: "#trigger3",
                            title: "",
                            wheels: [{data: this.fetchList(this.$t(this.page + '.modules.tabs'))}],
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
                                vm.tabIndex = indexArr[0];
                            },
                        });
                    }
                }, 1500)
            },
            setTab(tab) {
                this.text = tab.title;
            },
            changeBackground(n,o){
                if(this.page === 'b2c' || this.page === 'b2b'){
                    let modules_node = $('#modules');
                    this.screenSizeClass(modules_node);

                    if (n) {
                        modules_node.removeClass('bilateral').addClass('thin');
                    } else {
                        modules_node.removeClass('thin');

                        if (!this.subTab) {
                            modules_node.removeClass('bilateral');
                        } else if(this.subTab){
                            modules_node.addClass('bilateral');
                        }
                    }
                }
            }
        },
        watch: {
            xsmall(n, o) {
                this.changeBackground(this.tab,o);
                if (n !== o) {
                    if (n) {
                        this.initialisePicker()
                    }
                }
            },
            small(n,o){
                this.changeBackground(this.tab,false);
            },
            medium(n,o){
                this.changeBackground(this.tab,false);
            },
            large(){
                this.changeBackground(this.tab,false);
            },
            tab(n, o) {
                this.changeBackground(n,o);
            },
            tabIndex(n,o){
                this.changeBackground(n,o)
            }
        }
    }
</script>

<style scoped lang="scss">
    #modules {
        background: linear-gradient(to right, rgba(121, 194, 90, 1), rgba(121, 194, 90, 1));
        background-size: unset !important;
    }

    #modules .modules-inner {
        padding-top: 100px;
        padding-bottom: 50px;
        background-image: url('/assets/components/b2c/b2c_panel.png');
        background-repeat: no-repeat;
        background-position: 0 100%;
    }

    #modules {
        &.mh-xs .modules-inner {
            background-image: url("/assets/components/b2c/b2c_panel-mobile.png");
            background-position: bottom center;
            background-repeat: no-repeat;
            min-height: 986px;
        }

        &.mh-sm .modules-inner {
            background-image: url("/assets/components/b2c/b2c_panel-tablet.png");
            background-position: bottom;
            background-size: 100%;
            min-height: 1084px
        }

        &.mh-md .modules-inner {
            background-image: url("/assets/components/b2c/b2c_panel-laptop.png");
            background-position: bottom right;
            background-repeat: no-repeat;
            min-height: 782px
        }

        &.mh-lg .modules-inner {
            background-image: url("/assets/components/b2c/b2c_panel.png");
            min-height: 782px
        }
    }

    #modules.bilateral {
        &.mh-xs .modules-inner {
            background-image: url("/assets/components/b2c/b2c_panels_3_2sided-mobile.png")
        }

        &.mh-sm .modules-inner {
            background-image: url("/assets/components/b2c/b2c_panels_3_2sided-tablet.png");
        }

        &.mh-md .modules-inner {
            background-image: url("/assets/components/b2c/b2c_panels_3_2sided-laptop.png")
        }

        &.mh-lg .modules-inner {
            background-image: url("/assets/components/b2c/b2c_panels_3_2sided.png")
        }
    }

    #modules.thin {
        &.mh-xs .modules-inner {
            background-image: url("/assets/components/b2c/b2c_panels_2-second-mobile.png");
            min-height: 863px;
        }

        &.mh-sm .modules-inner {
            background-image: url("/assets/components/b2c/b2c_panels_2-second-tablet.png");
            min-height: 982px
        }

        &.mh-md .modules-inner {
            background-image: url("/assets/components/b2c/b2c_panels_2-second-laptop.png");
            min-height: 702px;
        }

        &.mh-lg .modules-inner {
            background-image: url("/assets/components/b2c/b2c_panels_2-second.png")
        }
    }

    @media (min-width: 1025px) and (max-width: 1213px){
        #modules.mh-lg:not(.thin):not(.bilateral) .modules-inner {
            background-size: 730px;
            background-position-x: -10%;
        }
    }

    @media (min-width: 1600px) {
        #modules.mh-lg .modules-inner {
            background-position: 20% 100%;
        }

        #modules.mh-lg.thin .modules-inner {
            background-position-x: 10%
        }
    }

    @media (min-width: 1025px) and (max-width: 1060px){
        #modules.mh-lg.bilateral .modules-inner {
            background-size: 700px;
            background-position-x: -18%;
        }
    }

    @media (min-width: 1061px) and (max-width: 1199px){
        #modules.mh-lg.bilateral .modules-inner {
            background-size: 700px;
            background-position-x: -10%;
        }
    }

    @media (min-width: 1200px) and (max-width: 1301px){
        #modules.mh-lg.bilateral .modules-inner {
            background-size: 750px;
            background-position-x: -10%;
        }
    }

    @media (min-width: 1025px) and (max-width: 1353px){
        #modules.mh-lg.thin .modules-inner {
            background-size: 725px
        }
    }

    @media (min-width: 850px) and (max-width: 898px){
        #modules.mh-md:not(.thin):not(.bilateral) .modules-inner {
            background-size: 520px
        }
    }

    @media (min-width: 769px) and (max-width: 849px){
        #modules.mh-md:not(.thin):not(.bilateral) .modules-inner {
            background-size: 425px
        }
    }

    @media (min-width: 896px) and (max-width: 945px){
        #modules.bilateral.mh-md .modules-inner {
            background-size: 550px
        }
    }

    @media (min-width: 815px) and (max-width: 895px){
        #modules.bilateral.mh-md .modules-inner {
            background-size: 450px
        }
    }

    @media (min-width: 769px) and (max-width: 814px){
        #modules.bilateral.mh-md .modules-inner {
            background-size: 400px
        }
    }

    @media (max-width: 362px){
        #modules:not(.thin).mh-xs {
            .modules-inner {
                min-height: 1055px;
            }
        }
    }

    @media (min-width: 823px) and (max-width: 910px){
        #modules.mh-md .modules-inner {
            background-size: 500px
        }
    }

    @media (min-width: 769px) and (max-width: 822px){
        #modules.mh-md .modules-inner {
            background-size: 438px
        }
    }

    .sidebar-modules {
        max-width: 460px;
    }

    .sides-modules {
        .v-tab {
            width: 188px;
            height: 50px;
            padding: 0;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center !important;
            border: 1px solid rgba(255, 255, 255, .25) !important;
            border-radius: 10px !important;
            color: #fff !important;

            &.v-tab--active {
                border: 1px solid #fff !important;
            }

            h5 {
                font-size: 14px !important;
                font-weight: 500 !important;
                font-style: normal;
            }

            &:nth-last-child(1) {
                margin-left: 20px !important;
            }
        }

        .v-tab--active:after {
            background-color: transparent !important;
        }
    }

    .v-tab {
        color: rgba(255, 255, 255, .6) !important;
        border-bottom: 1px solid rgba(255, 255, 255, .6);
        padding: 0 30px 0 0;
        border-bottom: 1px solid #DEDEDE;
        font-weight: 600;
        width: 100%;
    }

    .v-tab.v-tab--active {
        color: white !important;
        border-color: #fff
    }

    .v-item-group {
        background-color: transparent;
    }

    .v-tabs-items {
        color: white;
    }

    .roboto {
        color: white
    }

    .modules-features {
        list-style: none
    }

    .modules-features li p {
        margin-right: 56px;
        position: relative;
        margin-bottom: 15px !important
    }

    .modules-features li p:nth-child(2) {
        padding-left: 20px;
        color: rgba(255, 255, 255, .6)
    }

    .modules-features li p:nth-child(2):before {
        content: '';
        width: 2px;
        height: 100%;
        position: absolute;
        left: 0;
        background-color: white
    }

    .card-text {
        margin-bottom: 50px !important
    }
</style>
