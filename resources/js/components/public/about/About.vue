<template>
    <v-app id="aboutPage">
        <div class="row col-12 top-header justify-content-center padding-top-125">
            <div id="header" class="col-xl-7 col-lg-11 col-11 row flex-column">
                <Crumbs color="light"></Crumbs>
                <div class="header-text text-white">
                    <h1>{{$t('about.title')}}</h1>
                    <p v-html="$t('about.text')"></p>
                </div>
            </div>
        </div>

        <economy page="about"></economy>

        <values></values>

        <div id="partners" class="padding-125 justify-content-center px-0">
            <Partners></Partners>
        </div>

        <div id="map" class="col-md-12 justify-content-center">
            <div class="map-info col-lg-5 col-12">
                <div class="col-xl-12 col-lg-11 col-11 ml-auto">
                    <div class="map-info-body padding-125">
                        <h2 class="font-weight-7">{{$t('map.title')}}</h2>
                        <ul class="list-group list-unstyled mt-7">
                            <li class="py-2 d-flex align-items-center" v-for="(item,index) in $t('map.list')"><span :class="'border-map-'+index +' mr-8'"></span>{{item}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Map :item="items"></Map>
        </div>
    </v-app>
</template>

<script>
    const Crumbs = () => import("../includes/breadcrumbs");
    const Economy = () => import("../includes/economy");
    const Values = () => import("../includes/values");
    const Partners = () => import("../includes/Partners/Partners");
    const Map = () => import("../includes/Map/Map");
    import {bus} from '../../../event/eventbus.js';

    export default{
        name:'about',
        components: {Map, Partners, Values, Economy, Crumbs},
        data(){
            return{
                items:[],
            }
        },
        mounted() {
            bus.$emit('theme','dark')
            bus.$emit('position','absolute')
        }
    }
</script>

<style scoped>
    .top-header{
        background:linear-gradient(0deg,rgba(15,39,66,.6),rgba(15,39,66,.6)),url('/assets/components/b2b/pexels-kelly-lacy-2800832.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .breadcrumb{
        background-color: transparent !important;
    }
    .header-text{
        max-width: 760px;
    }
    .header-text p{
        font-weight: 400;
    }
    .map-body{
        max-width: 460px;
    }
</style>
