<template>
    <v-app :id="$router.currentRoute.path.includes('admin/products') ? 'products-page' : ''">
        <Loader v-if="loading"></Loader>
        <div class="d-flex">
            <Sidebar></Sidebar>
            <div id="page">
                <router-view></router-view>
                <div class="col-4 ml-10 created-by">
                    <a target="_blank" href="http://gbmf.tech"><span>Created by</span> <img v-lazy="'/assets/components/footer/gnf.png'"></a>
                </div>
            </div>
        </div>

    </v-app>
</template>

<script>
    const Loader = () => import("./includes/loader");
    const Sidebar = () => import("./includes/Sidebar.vue");
    const Navbar = () => import("./includes/Navbar.vue");
    import { mapGetters } from 'vuex';

    export default {
        name: 'master',
        data: () => {
            return {
                isEmail:false,
                loading:true
            }
        },
        components: {
            Navbar: Navbar,
            Sidebar: Sidebar,
            Loader: Loader
        },
        created() {

        },
        methods: {

        },
        mounted(){
            if(Vue.ls.get('loading','unset') === 'unset'){
                setTimeout(()=>{
                    $('body').css('overflow','initial');
                    this.loading = false;
                    Vue.ls.set('loading', false, 60 * 60 * 60 * 60 * 1000);
                },1200)
            }else{
                this.loading = false;
            }

            $('body').css('overflow','initial');
        },
        computed:{
        },
        watch:{

        }
    }
</script>
<style scoped>

</style>
