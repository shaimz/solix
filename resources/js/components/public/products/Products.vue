<template>
    <v-app class="col-xl-7 col-lg-11 col-11 m-auto" id="products">
        <Breadcrumbs color="dark"/>

        <div v-if="largeCompare && categoryUrl" class="allProducts pl-lg-3 pl-0">
            <router-link class="d-flex justify-content-lg-start justify-content-center align-items-center text-dark font-weight-bold" :to="{name:!category.parent_id ? 'products' : 'productsCategory',params:{locale:$route.params.locale,category:url}}">
                <i class="arrow left mr-2"></i><span>{{parentCat ? parent.data.name : $t('products.all')}}</span>
            </router-link>
        </div>

        <h2 class="title">{{name ? name : $t('products.title')}}</h2>

        <div class="d-flex mx-auto py-0 position-unset sidebar">
            <product-sidebar :page="categoryUrl" :lang="language"></product-sidebar>
        </div>
    </v-app>
</template>

<script>
    import { bus } from '../../../event/eventbus.js';
    const Breadcrumbs = () => import("../includes/breadcrumbs");
    const ProductSidebar = () => import("./Sidebar");
    import windowInstance from "../../../width";

    export default{
        name:'Products',
        components: {ProductSidebar, Breadcrumbs},
        props:['categoryUrl'],
        data(){
            return{
                language: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
                breadcrumb:[
                    {
                        label:'Products',
                        name:'Products'
                    },
                ],
                name:this.$t('products.title'),
                url:'',
                parentCat:''
            }
        },
        created() {
            this.$store.dispatch('categoryByUrl',{lang_id:this.language,url:this.categoryUrl}).then(()=>{
                if(this.category.data) {
                    if(this.category.parent_id){
                        this.$store.dispatch('category',{lang_id:this.language,parent_id:this.category.parent_id}).then(()=>{
                            if(this.parent.data) {
                                this.url = this.parent.url;
                                this.parentCat = '';
                                if(this.category.parent_id){
                                    this.parentCat = this.parent.data.name;
                                }
                            }
                        })
                        this.name = this.category.data.name;
                    }else{
                        this.parentCat = '';
                        this.name = '';
                    }
                }else{
                    this.name = this.$t('products.title')
                }
            })
        },
        mounted() {
            bus.$emit('theme','light');
            bus.$emit('position','relative')
        },
        methods:{
            getParent(id){
                this.$store.dispatch('category',{lang_id:this.language,parent_id:id}).then(()=>{
                    if(this.parent.data) {
                        return this.parent.url;
                    }
                    return ''
                })
                return ''
            }
        },
        computed:{
            parent(){return this.$store.getters.getCategory},
            category(){return this.$store.getters.getCategoryByUrl},
            largeCompare(){return windowInstance.data.largeCompare}
        },
        watch:{
            categoryUrl(){
                this.$store.dispatch('categoryByUrl',{lang_id:this.language,url:this.categoryUrl}).then(()=>{
                    if(this.category.data){
                        if(this.category.parent_id){
                            this.$store.dispatch('category',{lang_id:this.language,parent_id:this.category.parent_id}).then(()=>{
                                if(this.parent.data) {
                                    this.parentCat = '';
                                    if(this.category.parent_id){
                                        this.parentCat = this.parent.data.name;
                                    }
                                    this.url = this.parent.url;
                                }
                            })
                            this.name = this.category.data.name;
                        }else{
                            this.parentCat = '';
                        }
                    } else{
                        this.name = this.$t('products.title')
                    }
                })
            }
        }

    }
</script>

<style scoped>
    #products .title{
        color:#1f1f1f !important;
    }
    #products .v-slide-group{
        max-width: 360px;
        width: inherit;
    }

    .pfade-enter-active, .pfade-leave-active {
        transition: opacity 1s ease;
    }
    .pfade-enter, .pfade-leave-to {
        opacity: 0;
    }
</style>
