<template>
    <div>
        <div class="d-flex justify-content-center col-lg-11 col-xl-7 col-md-11 mx-auto py-0 position-unset pl-0">
            <div class="col-md-12 p-0 d-xs-block d-xlarge-flex border-left-section position-unset">
                <div class="nav nav-pills me-3 col-xl-2 col-11 px-0 flex-lg-column flex-row flex-xlarge-column"
                     id="v-pills-tab" role="tablist"
                     aria-orientation="vertical">

                    <button v-if="(small && !xsmall) || (medium || large)" v-model="active"
                            v-for="item in $t('home.projects.filter')"
                            @click="setActive(item.tab,item.id)"
                            :class="['nav-link', active === item.tab ? 'active' : '']"
                            :id="'v-pills-home-'+item.tab"
                            data-bs-toggle="pill"
                            :data-bs-target="'#'+item.tab"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true">
                        {{item.text}}
                    </button>

                    <ul v-if="xsmall">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="trigger1" @click.prevent href="#" role="button"
                               aria-haspopup="true" aria-expanded="false">{{text ? text :
                                $t('home.projects.filter')[0].text}}</a>
                        </li>
                    </ul>
                </div>

                <div class="tab-content col-xl-10 col-12 pr-0" id="v-pills-tabContent" :key="active">
                    <div v-if="(xsmall) || (!small && !xsmall) || (small && $route.path.includes('projects'))"
                         v-for="item in $t('home.projects.filter')"
                         :class="['tab-pane', 'fade', item.tab === active ? 'show active' : '']" :id="item.tab"
                         role="tabpanel" aria-labelledby="v-pills-home-tab">

                        <div v-if="index <= itemsToShow && permission"
                             class="d-flex justify-content-lg-between justify-content-center flex-wrap row mb-10"
                             v-for="index in itemsToShow / 2" :key="index">
                            <router-link
                                :key="'card-num-'+i"
                                :to="{name:'project',params:{locale:$route.params.locale,id:card.id}}"
                                :class="['card', isOdd(index) && isOdd(i) ? 'col-lg-5 col-11 ml-lg-9' : (!isOdd(index) && !isOdd(i) ? 'col-lg-5 col-11' : (isOdd(index) && !isOdd(i) ? 'col-lg-6 col-11' : (!isOdd(index) && isOdd(i) ? 'col-lg-6 col-11 ml-lg-9' : 'col-lg-5 col-11')))]"
                                v-for="(card,i) in renderRow(itemSort(projects,active))[index - 1]"
                                v-if="card.projects.name">

                                <img class="card-img-top" v-lazy="'/'+card.image" alt=""/>

                                <div class="card-body">
                                    <h4 class="before-border">{{card.projects.name}}</h4>
                                    <p class="project-description">{{card.projects.description}}</p>
                                    <div class="card-project-features d-flex">
                                        <div class="mr-5"><i class="margin-icon"><img
                                            v-lazy="'/assets/icons/location-grey.png'"></i>{{card.projects.location}}
                                        </div>
                                        <div class="font-number project-power"><i class="margin-icon"><img
                                            v-lazy="'/assets/icons/light-grey.png'"></i>{{card.power}} {{$t('power')}}
                                        </div>
                                    </div>
                                </div>

                                <router-link class="btn-secondary project-more d-flex justify-content-evenly"
                                             :to="'projects/'+card.id"><span>{{$t('more')}}</span><i
                                    class="arrow right ml-2"></i></router-link>
                            </router-link>
                        </div>
                    </div>

                    <div v-else-if="!$route.path.includes('projects') && small && !xsmall"
                         :class="['tab-pane', 'fade', item.tab === active ? 'show active' : '']" :id="item.tab"
                         role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div class="project-slick" v-if="render">
                            <router-link
                                :key="'card-'+index"
                                :to="{name:'project',params:{locale:$route.params.locale,id:card.id}}"
                                v-for="(card,index) in projectSort(projects,active)"
                                :class="['card', 'col-lg-5 col-11']">

                                <img class="card-img-top" :src="'/'+card.image" alt=""/>

                                <div class="card-body">
                                    <h4 class="before-border">{{card.projects.name}}</h4>
                                    <p class="project-description">{{card.projects.description}}</p>

                                    <div class="card-project-features d-flex">
                                        <div class="mr-5"><i class="margin-icon"><img
                                            v-lazy="'/assets/icons/location-grey.png'"></i>{{card.projects.location}}
                                        </div>

                                        <div class="font-number project-power"><i class="margin-icon"><img
                                            v-lazy="'/assets/icons/light-grey.png'"></i>{{card.power}} {{$t('power')}}
                                        </div>
                                    </div>
                                </div>

                                <router-link class="btn-secondary project-more d-flex justify-content-evenly"
                                             :to="'projects/'+card.id">
                                    <span>{{$t('more')}}</span>
                                    <i class="arrow right ml-2"></i>
                                </router-link>
                            </router-link>
                        </div>
                    </div>

                    <div class="col-md-12 ml-xlarge-8 justify-content-center d-flex">
                        <button @click="addItemsToShow"
                                v-if="visible && (large || infinite || xsmall) && itemsToShow <= total && !$route.path.includes('projects') && !small"
                                class="btn-primary text-center d-flex m-auto">
                            {{$t('load')}}
                        </button>

                        <router-link :to="{name:'projects',params:{locale:$route.params.locale}}"
                                     v-if="(small && !xsmall) && visible && !$route.path.includes('projects')"
                                     class="btn-primary text-center">
                            {{$t('load')}}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <infinite-loading
            class="col-7"
            v-if="renderRow(itemSort(projects,active)).length && (xsmall || small || large) && $route.path.includes('projects')"
            :identifier="infiniteId"
            @infinite="infiniteHandler"
            :key="active">

            <div slot="spinner">
                <div class="m-auto loading-more">
                    <img v-lazy="'/assets/icons/more.png'"/>
                </div>
            </div>

            <div slot="no-more"></div>
            <div slot="no-results"></div>
        </infinite-loading>
    </div>
</template>

<script>
    const InfiniteLoading = () => import("vue-infinite-loading");
    import windowInstance from "../../../../width";
    import {bus} from "../../../../event/eventbus";

    export default {
        name: 'allProjects',
        props: ['lang', 'show'],
        components: {
            InfiniteLoading
        },
        data() {
            return {
                language: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
                projects: [],
                active: 'all',
                itemsToShow: 4,
                total: 0,
                toShow: this.show,
                render: false,
                loading: false,
                text: '',
                tabs: [],
                page: 1,
                infiniteId: +new Date(),
                visible: true,
                permission: false,
                type: 0
            }
        },
        computed: {
            data() {
                return this.$store.getters.getProjects
            },
            large() {
                return windowInstance.data.large
            },
            small() {
                return windowInstance.data.small
            },
            xsmall() {
                return windowInstance.data.xsmall
            },
            infinite() {
                return windowInstance.data.largeCompare
            },
            medium() {
                return windowInstance.data.medium
            },
            mediumCompare() {
                return windowInstance.data.mediumCompare
            },
            xlarge() {
                return windowInstance.data.xlarge
            },
            windowWidth() {
                return windowInstance.data.innerWidth
            },
            typeId() {
                return this.$store.getters.getType;
            }
        },
        methods: {
            infiniteHandler($state) {
                if (this.xlarge) {
                    setTimeout(() => {
                        $('.infinite-loading-container').show();
                        this.$store.dispatch('projects', {
                            lang: (this.language ? this.language : 0),
                            limit: (this.show ? this.show : 0),
                            offset: this.itemsToShow,
                            type: this.type
                        })
                            .then(() => {
                                let projects = this.data;
                                if (projects.length) {
                                    this.itemsToShow += this.show;
                                    this.page += 1;
                                    projects.forEach((item) => {
                                        this.projects.push(item)
                                    })
                                    this.permission = true;
                                    $state.loaded();
                                } else {
                                    $state.complete();
                                    $('.infinite-loading-container').hide();
                                }

                            })
                    }, 1500)
                }
            },
            addItem(item) {
                this.text = item.text;
                this.$nextTick(() => {
                    this.active = item.tab
                })
            },
            addItemsToShow() {
                this.itemsToShow += this.show;
                this.$store.dispatch('projects', {
                    lang: (this.language ? this.language : 0),
                    limit: (this.show ? this.show : 0),
                    offset: (this.itemsToShow - this.show ? this.itemsToShow - this.show : 0)
                }).then(() => {
                    let projects = this.data;
                    if (projects.length) {
                        projects.forEach((item) => {
                            this.projects.push(item);
                        });

                        this.visible = projects.length >= this.show;
                    } else {
                        this.visible = false
                    }
                })
            },
            projectSort(items, type) {
                let data = [];
                let person = ['Частные лица', 'Persoane fizice', 'Individuals'];
                let business = ['Для бизнеса', 'For business', 'Pentru afaceri'];
                let juridic = ['Госучереждения', 'Instituții de stat', 'State institutions'];
                switch (type) {
                    case 'all':
                        return items;
                    case 'person':
                        data = items.map(item => person.includes(item.projects.type) ? item : '')
                        break;
                    case 'business':
                        data = items.map(item => business.includes(item.projects.type) ? item : '')
                        break;
                    case 'juridic':
                        data = items.map(item => juridic.includes(item.projects.type) ? item : '')
                        break;
                    default:
                        data = [];
                        break;
                }
                return data.filter(item => item);
            },
            itemSort(items, type) {
                let data = [];
                let result = [];

                switch (type) {
                    case 'all':
                        return items.filter((e) => e.projects);
                    case 'person':
                        data = items.map(item => item.type_id === 2 ? item : '').filter((e) => e.projects)
                        break;
                    case 'business':
                        data = items.map(item => item.type_id === 3 ? item : '').filter((e) => e.projects)
                        break;
                    case 'juridic':
                        data = items.map(item => item.type_id === 1 ? item : '').filter((e) => e.projects)
                        break;
                    default:
                        data = [];
                        break;
                }

                result = data.filter(item => item);
                if (result.length) {
                    return result;
                } else {
                    this.total = 0;
                }

                return result;
            },
            setActive(tab, id = 0) {
                this.page = 1;
                this.type = id;
                this.list = [];
                this.infiniteId += 1;
                this.itemsToShow = this.show;

                this.fetchData(id);

                this.$store.dispatch('type', id);

                if (tab !== this.active) {
                    this.active = tab;
                    this.itemsToShow = this.show;
                    this.visible = true;
                    this.render = false;
                    bus.$emit('render', false);
                    bus.$emit('tabchange', true);
                    this.getTotalByType(id);
                }
            },
            isOdd(index) {
                return index % 2 === 0;
            },
            renderRow(data) {
                let items = [];
                let offset = 0;
                let end = 2;
                if (data.length > 1) {
                    while (data.slice(offset, end).length >= 1) {
                        items.push(data.slice(offset, end));
                        offset += 2;
                        end += 2;
                    }
                } else {
                    while (data.slice(offset, end).length >= 1) {
                        items.push(data.slice(offset, end));
                        offset += 1;
                        end += 2;
                    }
                }
                return items;
            },
            fetchData(type = null) {
                this.$store.dispatch('projects', {
                    lang: this.language,
                    limit: this.show,
                    offset: this.itemsToShow - this.show,
                    type: type
                }).then(() => {
                    this.projects = this.data;
                    this.itemsToShow = this.show
                    this.permission = true;
                    this.visible = this.projects.length;
                })
            },
            getCount() {
                axios.get('/get-total', {params: {lang: this.language, type: 'projects'}}).then((response) => {
                    this.total = response.data;
                })
            },
            getTotalByType(id) {
                axios.get('/get-bytype', {params: {lang: this.language, type: 'projects', typeId:id}}).then((response) => {
                    this.total = response.data;
                })
            },
            fetchList(list) {
                let array = [];
                for (let i in list) {
                    if (list[i].text) array.push({id: list[i].id, value: list[i].text})
                }
                return array;
            },
            getTab(item) {
                let list = this.$t('home.projects.filter');
                for (let i in list) {
                    if (list[i].text === item.value) {
                        return list[i].tab
                    }
                }
            },
            initialisePicker() {
                setTimeout(() => {
                    let trigger = document.querySelector('#trigger1');

                    if (trigger) {
                        let _this = this;
                        let vm = this;
                        let mobileSelect1 = new MobileSelect({
                            trigger: "#trigger1",
                            title: "",
                            wheels: [{data: this.fetchList(this.$t('home.projects.filter'))}],
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
                                vm.active = _this.getTab(s);
                                vm.text = s.value;
                                vm.$store.dispatch('type', s.id);
                            },
                        });
                    }
                }, 800)

            },
        },
        created() {
            this.$store.dispatch('projects', {
                lang: this.language,
                limit: this.show,
                offset: 0
            }).then(() => {
                this.projects = this.data;
                this.total = this.projects.length
                this.itemsToShow = this.show
            })
        },
        mounted() {
            this.type = this.typeId;
            this.$t('home.projects.filter').forEach((i, e) => {
                if (this.type === i.id) {
                    this.active = i.tab;
                    this.text = i.text;
                }
            })
            this.render = true;
            setTimeout(() => {
                bus.$emit('render', true)
            }, 200)
            this.initialisePicker();
            this.getCount();
            this.permission = true;
        },
        watch: {
            language(newVal, oldVal) {
                if (oldVal !== newVal) this.language = newVal;

            },
            itemsToShow(n, o) {
                if (n !== o) {
                    if (n > 4 && this.xsmall) this.visible = false;
                }
            },
            mediumCompare(newVal, oldVal) {
                if (oldVal !== newVal) {
                }
            },
            small(newVal, oldVal) {
                if (oldVal !== newVal) {
                    if (newVal) {
                        this.render = true;
                        setTimeout(() => {
                            bus.$emit('render', true)
                        }, 500)
                    } else {
                        this.render = false;
                        bus.$emit('render', false)
                    }
                }

            },
            projects(newVal, oldVal) {
                if(newVal !== oldVal){
                    this.total = newVal.length;
                }
            },
            active(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.render = true;
                    setTimeout(() => {
                        bus.$emit('render', true)
                    }, 1000)
                }
            },
            toShow(newVal, oldVal) {
                if (newVal !== oldVal) this.itemsToShow = newVal;
            },
            xsmall(newVal, oldVal) {
                if (newVal !== oldVal) {
                    if (newVal) {
                        setTimeout(() => {
                            this.permission = true;
                        }, 300)
                        this.initialisePicker()
                    } else {
                        this.permission = false;
                    }
                }
            },
            medium(n, o) {
                if (n) {

                }
            }
        }
    }
</script>

<style scoped>
    .border-left-section:before {
        content: '';
        position: absolute;
        width: 2px;
        height: 99.5%;
        background-color: #DEDEDE;
        transform: translateY(5px);
        z-index: 1;
    }

    .nav-pills {
        padding: 0 !important;
    }

    .nav-pills button.nav-link {
        font-size: 20px;
    }

    .project-more span {
        transition: transform .2s ease-in-out;
    }

    .project-more:hover span {
        transform: translateX(-7px);
    }

    .card-project-features > div:nth-child(1) {
        font-weight: 700;
    }

    .project-power {
        font-weight: 600;
        display: flex;
        align-items: center;
    }
</style>
