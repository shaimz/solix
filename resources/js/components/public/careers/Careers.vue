<template>
    <div id="career">
        <div class="padding-125">
            <div id="header" class="col-xl-7 col-11 row flex-column m-auto">
                <Crumbs :items="breadcrumb" color="dark"></Crumbs>
                <div class="header-text text-dark mb-5">
                    <h1>{{$t('career.title')}}</h1>
                </div>
            </div>
            <div class="careers col-xl-7 col-11 m-auto">
                <div class="careers-grid">
                    <router-link :to="{name:'singleCareer',params:{locale:$route.params.locale,id:career.id}}" class="career card" v-for="career in careers" :key="career.id" v-if="career.translates">
                        <div class="card-title">
                            <p><span class="mr-2"><img v-lazy="'/assets/icons/location.png'"/></span>{{career.translates.location}}
                            </p>
                            <h4 class="border-left-title text-dark">{{career.translates.name}}</h4>
                        </div>
                        <div class="card-body d-flex align-items-center justify-content-between">
                            <p><span class="mr-2"><img v-lazy="'/assets/icons/calendar.png'"/></span>{{getDate(career.created_at)}}
                            </p>
                            <router-link :to="{name:'singleCareer',params:{locale:$route.params.locale,id:career.id}}" class="btn-product">{{$t('career.button')}}<span class="arrow right"></span>
                            </router-link>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <ContactsNew></ContactsNew>
    </div>
</template>

<script>
    import {bus} from '../../../event/eventbus.js';
    const Crumbs = () => import("../includes/breadcrumbs");
    const Contact = () => import("../includes/Contacts/Contacts");
    const ContactsNew = () => import("../includes/Contacts/ContactsNew");

    export default {
        name: 'Careers',
        components: {ContactsNew, Contact, Crumbs},
        data() {
            return {
                language: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
                careers: [],
                items: [],
                form:[]
            }
        },
        mounted() {
            bus.$emit('position', 'relative')
            bus.$emit('theme', 'light')
            this.$store.dispatch('careers', {lang_id: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),})
                .then(() => {
                    this.careers = this.$store.getters.getCareers;
                })
        },
        computed: {
            breadcrumb() {
                return [
                    {
                        name: 'career',
                        label: this.$t('career.title')
                    },
                ];
            }
        },
        methods: {
            getDate(date) {
                let data = new Date(date.replace(' ','T'));
                const options = {year: 'numeric', month: 'long', day: 'numeric'};
                let locale = this.$route.params.locale === 'en' ? 'en-EN' : (this.$route.params.locale === 'ru' ? 'ru-RU' : 'ro-RO');
                return data.toLocaleDateString(locale, options)
            }
        }

    }
</script>

<style scoped>
    .careers-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(260px, 560px));
        grid-auto-rows: minmax(120px, 230px);
        grid-column-gap: 40px;
        grid-row-gap: 40px;
    }
    .career.card{
        border: 0;
        border-radius: 10px;
    }
    .career.card .card-title{
        min-height: 133px;
    }

    .careers-grid .career.card .card-title h4 {
        padding-left: 40px;
        margin-top: 15px;
        max-width: 320px;
        box-sizing: content-box;
    }

    .careers-grid .career.card .card-title p {
        padding: 30px 0 0 40px;
        filter: invert(69%) sepia(50%) saturate(416%) hue-rotate(58deg) brightness(89%) contrast(94%);
        font-weight: 500;
        color: rgb(24 24 24);
    }

    .btn-product {
        margin: 0 !important;
        color: #1f1f1f !important;
    }

    .btn-product .arrow {
        border-color: #1f1f1f !important;
        margin-left: 20px;
    }

    .card-body {
        padding: 0 50px 10px 40px;
    }
    .card-body .btn-product{
        display: flex;
        align-items: center;
    }

    .border-left-title:before {
        background: #79C25A;
        height: 100%;
    }

    #contacts {
        background: white;
    }

    #contacts .v-card{
        padding:35px 0;
        box-shadow: unset !important;
    }
    #contacts .v-card__title{
        padding-bottom:0;
    }
    #contacts .v-card__actions{
        justify-content: flex-start;
        display: flex;
    }
    #contacts .v-card__text .phone{
        padding-left:10px !important;
    }
    #contacts .v-card__actions > a{
        margin-left:20px;
    }
    #contacts .v-card__actions p {
        max-width: 300px;
        margin-left:30px;
    }
    .contacts-sidebar{
        max-width: 360px;
        width: 100%;
        margin-right: 40px;
        color:#ffffff !important;
    }
    .contacts-sidebar p,.contacts-sidebar h1{
        color:white !important;
    }
    .contacts-sidebar i img{
        filter:brightness(23) grayscale(1)
    }
    .form-contact{
        max-width: 560px;
        margin-left: 100px !important;
    }
    .contacts-form{
        display: flex;
        align-items: center;
    }
</style>
