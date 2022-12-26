<template>
    <v-app id="newsPage" class="padding-125">
        <div class="row col-12 top-header justify-content-center">
            <div id="header" class="col-xl-7 col-lg-11 col-11 row flex-column">
                <breadcrumbs color="dark"></breadcrumbs>
                <div class="header-text text-dark">
                    <h1>{{$t('news.title')}}</h1>
                </div>
            </div>
        </div>
        <div id="news">
            <AllNews :show="show" :key="show" :lang="language"></AllNews>
        </div>
    </v-app>
</template>

<script>
    import windowInstance from "../../../width";

    const Breadcrumbs = () => import("../includes/breadcrumbs");
    const AllNews = () => import("../includes/News/News")
    const Map = () => import("../includes/Map/Map");
    const Discount = () => import("../includes/discount/Discount");
    import {bus} from '../../../event/eventbus.js'

    export default {
        name: 'News',
        components: {Discount, Map, Breadcrumbs,AllNews},
        data () {
            return{
                language:this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
                open:false,
                show:3
            }
        },
        computed:{
            items(){
                return this.$store.getters.getNews
            },
            medium(){return windowInstance.data.medium}
        },
        mounted() {
            bus.$emit('theme','light');
            bus.$emit('position','relative')
        },
        methods:{
            modal(val){
                this.open = val;
            }
        },
        watch:{
            medium: {
                handler(n, o) {
                    if (n) {
                        this.show = 2;
                    }
                },
                immediate:true
            },
            large:{
                handler(n,o){
                    if(n){
                        this.show = 3;
                    }
                },
                immediate:true
            }
        }
    }
</script>

<style scoped>
    #newsPage{
        background: #F3F5F6;
    }
    #newsPage #news{
        padding-top:80px;
    }
</style>

