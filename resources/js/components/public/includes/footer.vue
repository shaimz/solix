<template>
    <div>
        <section id="footer" class="footer pl-0 pt-5 pb-3 position-relative w-100">
            <div class="container container-fluid-sm col-xl-7 col-lg-11 col-11 pt-5 px-0">
                <div class="row d-xs-block d-xlarge-flex justify-content-between">
                    <div
                        class="col-xl-3 col-12 text-xs-center text-xlarge-left footer-one footer-col">
                        <div class="footer-logo">
                            <router-link :to="{name:'Home',params:{locale:$route.params.locale}}">
                                <img v-lazy="'/assets/components/header/solix_logo_small2.svg'" alt="Solix Solar Panels">
                            </router-link>
                        </div>
                    </div>
                    <div class="col-xl-2 col-12 text-center text-xlarge-left footer-two footer-col">
                        <!-- <h5 v-if="dropdown" @click="openList($event)" :data-id="'Solix'">Solix<i class="arrow ml-4" :class="footerItem === 'Solix' ? 'up mt-1' : 'down mb-1'"></i></h5>
                         <h5 v-else>Solix</h5>-->
                        <ul :class="['list-unstyled p-0', 'd-block']">
                            <li v-for="page in $t('footer.pages')">
                                <router-link :to="{name:page.link,params:{locale:$route.params.locale}}">{{page.text}}</router-link>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="col-xl-2 col-12 text-center text-xlarge-left footer-four footer-col">
                        <!-- <h5 v-if="dropdown" @click="openList($event)" :data-id="$t('footer.title')">
                             {{$t('footer.title')}}<i class="arrow ml-4" :class="footerItem === $t('footer.title') ? 'up mt-1' : 'down mb-1'"></i></h5>
                         <h5 v-else>{{$t('footer.title')}}</h5>-->
                        <ul :class="['list-unstyled p-0', 'd-block']">
                            <!--   <li>
                                   <router-link :to="{name:'services',params:{locale:$route.params.locale}}">{{$t('services.all')}}</router-link>
                               </li>-->
                            <li v-for="page in $t('footer.solix')">
                                <router-link :to="{name:page.link,params:{locale:$route.params.locale}}">{{page.text}}</router-link>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="col-xl-2 col-12 text-center text-xlarge-left footer-three footer-col"
                    >
                        <!--                        <h5 v-if="dropdown" @click="openList($event)" :data-id="$t('footer.list_services.title')">
                                                    {{$t('footer.list_services.title')}}<i class="arrow ml-4" :class="footerItem === $t('footer.list_services.title') ? 'up mt-1' : 'down mb-1'"></i></h5>
                                                <h5 v-else>{{$t('footer.list_services.title')}}</h5>
                                                <ul :class="['list-unstyled p-0', dropdown && isActive($t('footer.list_services.title')) ? 'collapse' : 'collapsed']">
                                                    <li v-for="(item,index) in services" v-if="index < 3">
                                                        <router-link :to="{name:'service',params:{locale:$route.params.locale,id:item.id}}">{{item.data.name}}</router-link>
                                                    </li>
                                                </ul>-->
                    </div>
                    <div class="col-xl-3 col-12 text-center text-xlarge-left footer-five footer-col" :class="compare ? 'border-top' : ''">
                        <h5 v-if="!largeCompare">{{$t('footer.contact.title')}}</h5>
                        <h5 v-else><router-link :to="{name:'contacts',params:{locale:$router.currentRoute.params.locale}}">{{$t('footer.contact.title')}}</router-link></h5>

                        <ul class="list-unstyled p-0">
                            <li><a href="" @click.prevent><img v-lazy="'/assets/icons/phone.svg'">+373 79 876 545</a></li>
                            <li><a href="mailto:info@solix.md"><img v-lazy="'/assets/icons/mailbox.png'">info@solix.md</a></li>
                            <li><a href="" @click.prevent><img v-lazy="'/assets/icons/location.png'">{{$t('footer.contact.address')}}</a></li>
                        </ul>

                        <div class="social-icons">
                            <a class="social-icon" target="_blank" href="https://www.facebook.com/Solix.md">
                                <img v-lazy="'/assets/icons/facebook.png'">
                            </a>

                            <a class="social-icon" target="_blank" href="https://www.instagram.com/solix.md/">
                                <img v-lazy="'/assets/icons/instagram.png'">
                            </a>

                            <a class="social-icon" target="_blank" href="https://www.youtube.com/channel/UC3RN2vRU9Uob1bMprQchTgg">
                                <img v-lazy="'/assets/icons/youtube.png'">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container col-11 col-xl-7 col-lg-11 border-top footer-info">
                <div class="row d-xs-block d-xlarge-flex justify-content-center ">
                    <div class="col-12 col-xl-4 mx-auto mt-2 mt-lg-0 text-xlarge-left text-center">
                        <p>© 2021 Solix | All Rights Reserved</p>
                    </div>
                    <div class="col-12 col-xl-4 mx-auto mt-2 mt-lg-0 text-center text-xlarge-center">
                        <a target="_blank" href="http://gbmf.tech"><span>Created by</span> <img v-lazy="'/assets/components/footer/gbmf.svg'" class="create-by-logo"></a>
                    </div>
                    <div class="col-12 col-xl-4 mx-auto mt-2 mt-lg-0 text-center text-xlarge-right">
                        <router-link :to="{name:'privacy',params:{locale:$route.params.locale}}" target="_blank" class="footer-link">{{$t('footer.policy')}}</router-link>
                    </div>
                </div>
            </div>
            <div v-if="largeCompare" class="d-flex header-langs">
                <router-link @click.native="setActive(2)" class="list-group-item border-0"
                             :class="{'active':isActiveLanguage(2)}" :to="{name:this.$route.name}">RO
                </router-link>
                <router-link @click.native="setActive(3)" class="list-group-item border-0"
                             :class="{'active':isActiveLanguage(3)}" :to="{name:this.$route.name,params:{locale:'ru'}}">RUS
                </router-link>
                <router-link @click.native="setActive(1)" class="list-group-item border-0"
                             :class="{'active':isActiveLanguage(1)}" :to="{name:this.$route.name,params:{locale:'en'}}">ENG
                </router-link>
            </div>
        </section>
    </div>
</template>

<script>
    import windowInstance from "../../../width";
    import {SUPPORTED_LOCALES} from "../../../constants/locales";
    export default {
        props:['id','lang'],
        data (){
            return {
                services:[],
                dropdown: false,
                footerItem: 'mobile',
                locales: SUPPORTED_LOCALES,
                language:this.currentLang
            }
        },
        computed:{
            currentLang(){
                return this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2)
            },
            windowWidth() { return windowInstance.data.innerWidth},
            windowCompare(){return windowInstance.data.compare},
            small(){return windowInstance.data.small},
            xsmall(){return windowInstance.data.xsmall},
            medium(){return windowInstance.data.medium},
            large(){return windowInstance.data.large},
            compare(){return windowInstance.data.windowCompare},
            largeCompare(){return windowInstance.data.largeCompare}
        },
        watch: {
            windowWidth(newWidth, oldWidth) {
                this.dropdown = newWidth < 1025;
            }
        },

        mounted() {
            this.dropdown = this.windowWidth < 1025;
        },
        created() {

        },
        methods: {
            isActiveLanguage(id) {
                let language = this.currentLang
                if (language === id) {
                    if (id === 1) {
                        return true;
                    } else if (id === 2) {
                        return true;
                    } else {
                        return true;
                    }
                }
                return this.language === id;
            },
            setLocale(id) {
                this.$root.$i18n.locale = id;
                this.$store.dispatch('setPublicLanguage', this.locales.find(item => item.code === id))
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
            },
            setServices(){
                let items = [];
                this.$store.dispatch('services',{lang_id:this.language,limit:3,offset:0}).then(()=>{
                    if (items = this.$store.getters.getServices) {
                        items.map((item)=>{
                            if(item.items.length > 3) {
                                items = item.items;
                                return true;
                            }
                            else{
                                item.items.map((service)=>items.push(service))
                                if(items.length > 3) return true;
                            }
                        })
                        this.services = items;
                    }
                })

            },
            onResize() {

            },
            openList(event) {
                let item = $(event.target).attr('data-id');
                if (this.footerItem === item) {
                    this.footerItem = '';
                    return false;
                }
                this.footerItem = item;
            },
            isActive(item) {
                return this.footerItem !== item
            }
        }
    }
</script>

<style scoped>

</style>
