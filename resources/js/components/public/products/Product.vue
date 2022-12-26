<template>
    <v-app>
        <div class="col-xl-7 col-11 m-auto" id="product" v-if="render">
            <breadcrumbs color="dark"></breadcrumbs>
            <div class="allProducts pl-lg-3 pl-0">
                <router-link class="d-flex justify-content-lg-start justify-content-center align-items-center text-dark font-weight-bold" :to="{name:'productsCategory',params:{locale:$route.params.locale,category:item.category.url}}">
                    <i class="arrow left mr-2"></i><span>{{item.category.data.name ? item.category.data.name : $t('products.all')}}</span>
                </router-link>
            </div>
            <h2 v-if="medium" class="text-dark">{{item.translates.name}}</h2>
            <div class="d-lg-flex d-xs-block mx-auto py-0 position-unset text-lg-start">
                <div class="col-lg-4 col-12 text-lg-start text-xs-center">
                    <h2 v-if="windowWidth && !medium" class="text-dark">{{item.translates.name}}</h2>
                    <div v-if="windowWidth" class="available">
                        <p><img class="mr-2" v-lazy="item.available ? '/assets/icons/avail.png' : '/assets/icons/not-avail.png'">{{item.available ? $t('products.available') : $t('products.notAvailable')}}</p>
                    </div>
                    <img v-lazy="item.image ? item.image : '/private/images/products/no-image.png'">
                </div>

                <div class="col-lg-8 col-12">
                    <h2 v-if="!windowWidth" class="text-dark">{{item.translates.name}}</h2>
                    <div v-if="!windowWidth" class="available">
                        <p><img class="mr-2" v-lazy="item.available ? '/assets/icons/avail.png' : '/assets/icons/not-avail.png'">{{item.available ? $t('products.available') : $t('products.notAvailable')}}</p>
                    </div>

                    <div class="orderProduct d-flex col-lg-8 col-12 p-0">
                        <img class="image" v-lazy="item.brand_logo" alt=""/>
                        <div class="price ml-lg-0 ml-5">
                            <p>{{$t('products.price')}}</p>
                            <h3 class="roboto text-dark">
                                {{item.price}} EUR
                            </h3>
                        </div>
                        <button @click="toggleModal(true)" class="btn-primary ml-lg-0 ml-auto">{{$t('products.order')}}</button>
                    </div>

                    <Advantages :items="item.advantage"></Advantages>

                    <div class="features">
                        <p class="text-dark mb-3 font-weight-bold">{{$t('products.features')}}</p>
                        <div v-if="xsmall" class="productFeatures d-grid">
                            <div v-if="(key < features )" class="feature d-flex" :key="feature.id" v-for="(feature,key) in item.features">
                                <div class="feature-info">
                                    <p class="color-5">{{feature.feature_name}}</p>
                                    <p class="text-dark">{{feature.feature_value}}</p>
                                </div>
                            </div>
                        </div>

                        <div  v-else-if="!xsmall" class="productFeatures d-grid">
                            <div class="feature d-flex" :key="'feature-m-'+f.id" v-for="(f,key) in item.features">
                                <div class="feature-info">
                                    <p class="color-5" v-html="f.feature_name"></p>
                                    <p class="text-dark" v-html="f.feature_value"></p>
                                </div>
                            </div>
                        </div>

                        <div @click="showFeatures" v-if="item.features.length > 6 && xsmall && featureShow">
                            <p class="text-left mt-4 more-features-product">{{$t('allFeatures')}}<i class="arrow down ml-3" style="margin-bottom: 3px;"></i></p>
                        </div>
                    </div>

                    <div class="productDescription">
                        <p class="description-title mb-3 text-dark font-weight-bold">{{$t('products.description')}}</p>
                        <p class="description-text">{{item.translates.description}}</p>

                        <div @click="showDescription($event)" v-if="xsmall">
                            <p class="text-left mt-4 more-features-product">{{$t('allFeatures')}}<i class="arrow down ml-3" style="margin-bottom: 3px;"></i></p>
                        </div>

                        <div class="product-doc" v-if="item.document">
                            <a class="btn-primary" :href="`${item.document}`">{{$t('downloadDoc')}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <more-items :type="'products'" :show="3"></more-items>
    </v-app>

</template>

<script>
    const breadcrumbs = () => import("../includes/breadcrumbs");
    const moreItems = () => import("../includes/moreItems");
    const Advantages = () => import("./Advantages");


    import {bus} from '../../../event/eventbus.js';
    import windowInstance from "../../../width";

    export default{
        name:'Product',
        components:{moreItems, breadcrumbs, Advantages},
        data() {
            return{
                language: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
                id:this.$route.params.id,
                item:[],
                render: false,
                featureShow:true,
                features:6
            }
        },
        mounted() {
            bus.$emit('position','relative');
            bus.$emit('theme','light');
            this.$store.dispatch('product',{
                lang: this.language,
                id: this.id
            }).then(()=>{
                this.item = this.$store.getters.getProduct
                this.render = true;
            })

            if(!this.xsmall){
                this.featureShow = false;
                // this.features = 0;
            }
        },
        computed:{
            medium(){return windowInstance.data.medium},
            windowWidth(){return windowInstance.data.largeCompare},
            mediumCompare(){return windowInstance.data.mediumCompare},
            xsmall(){return windowInstance.data.xsmall}
        },
        methods:{
            showFeatures(){
                this.features = this.item.features.length;
                this.featureShow = false;
            },
            toggleModal(val) {
                bus.$emit('openModal', {value:val,type:'product',id:this.$route.params.id});
            },
            showDescription(e){
                $(e.currentTarget).prev().css('max-height','100%');
                $(e.currentTarget).hide()
            }
        },
        watch:{
            $route(to){
                this.id = to.params.id;
                this.$store.dispatch('product',{
                    lang: this.language,
                    id: this.id
                }).then(()=>{
                    this.item = this.$store.getters.getProduct
                    this.render = true;
                })
                if(to.params.id){
                    bus.$emit('position','relative');
                    bus.$emit('theme','light');
                }
            }
        }
    }
</script>

<style scoped>
    .description-title{
        font-size: 16px;
    }

    .product-doc {
        margin-top: 20px
    }
</style>

