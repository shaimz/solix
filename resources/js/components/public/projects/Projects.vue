<template>
    <v-app id="projectsPage">
        <div class="row col-12 top-header justify-content-center padding-125">
            <div id="header" class="col-xl-7 col-11 row flex-column">
                <breadcrumbs v-if="!xsmall"></breadcrumbs>
                <div class="header-text text-white">
                    <h1>{{$t('projects.head.title')}}</h1>
                    <!--<p v-if="smallCompare || mediumCompare" v-html="$t('projects.head.text')"></p>-->
                </div>
            </div>
        </div>

        <div id="projects">
            <AllProjects :show="show" :lang="language"></AllProjects>
        </div>

        <div id="map" class="col-sm-12 justify-content-center">
            <div class="map-info row col-lg-6 col-xl-5 col-xs-12">
                <div class="col-xl-7 col-lg-11 col-md-11 ml-auto">
                    <div class="map-info-body padding-125">
                        <h2 class="font-weight-7">{{$t('map.title')}}</h2>
                        <ul class="list-group list-unstyled mt-7">
                            <li class="py-2 d-flex align-items-center" v-for="(item,index) in $t('map.list')"><span :class="'border-map-'+index +' mr-8'"></span>{{item}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Map :items="items"></Map>
        </div>

        <div id="discount" class="justify-content-center px-0 padding-125">
            <Discount @modalOpen="modal" :dialog="open"></Discount>
        </div>
    </v-app>
</template>

<script>
    const Breadcrumbs = () => import("../includes/breadcrumbs");
    const AllProjects = () => import("../includes/Projects/Projects")
    const Map = () => import("../includes/Map/Map");
    const Discount = () => import("../includes/discount/Discount");

    import {bus} from '../../../event/eventbus.js'
    import windowInstance from "../../../width";

    export default {
        name: 'Projects',
        components: {Discount, Map, Breadcrumbs,AllProjects},
        data (){
            return{
                language:this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
                open:false,
                items:[],
                show:4
            }
        },
        computed:{
            xsmall(){return windowInstance.data.xsmall},
            small(){return windowInstance.data.small},
            smallCompare(){return windowInstance.data.smallCompare},
            largeCompare(){return windowInstance.data.largeCompare},
            mediumCompare(){return windowInstance.data.mediumCompare}
        },
        mounted() {
            bus.$emit('theme','dark');
            bus.$emit('position','absolute');
        },
        created() {
            this.$store.dispatch('projects',{lang:this.language}).then(()=>{
                this.items = this.$store.getters.getProjects
            })
        },
        methods:{
            modal(val){
                this.open = val;
            }
        },
        watch:{
            language(newVal,oldVal){
                if(newVal !== oldVal){
                    this.$store.dispatch('projects',{lang:this.language}).then(()=>{
                        this.items = this.$store.getters.getProjects
                    })
                }
            }
        }
    }
</script>

<style scoped>
    #projectsPage #projects{
        padding-top:80px;
    }
</style>
