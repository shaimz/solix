<template>
    <v-app id="services">
        <div class="row col-12 top-header justify-content-center padding-125">
            <div id="header" class="col-lg-11 col-xl-7 col-11 row flex-column">
                <crumbs color="light"></crumbs>
                <div class="header-text text-white">
                    <h1>{{$t('services.title')}}</h1>
                    {{$t('')}}
                </div>
            </div>
        </div>
        <all-services show="12"></all-services>

        <contacts-new></contacts-new>
    </v-app>
</template>

<script>
    const AllServices = () => import("../includes/Services/Services");
    import {bus} from '../../../event/eventbus.js';
    const Crumbs = () => import("../includes/breadcrumbs");
    const ContactsNew = () => import("../includes/Contacts/ContactsNew");
    export default{
        name:'Services',
        components: {ContactsNew, Crumbs, AllServices},
        data(){
            return{

            }
        },
        mounted() {
            bus.$emit('position','absolute')
            bus.$emit('theme','dark')
        },
    }
</script>
<style scoped>
    .top-header{
        background: linear-gradient(to right,rgba(15,39,66,.6),rgba(15,39,66,.6)),url('/assets/components/services/alternative-energy-ecological-concept.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 70% 0%
    }
</style>
