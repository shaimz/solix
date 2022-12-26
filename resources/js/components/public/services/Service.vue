<template>
    <v-app id="service">
        <div class="row col-12 top-header justify-content-center padding-125">
            <div id="header" class="col-xl-7 col-11 row flex-column">
                <Crumbs :items="breadcrumb" color="light"></Crumbs>
                <div class="header-text text-white">
                    <h1 v-if="items.data" :key="items.data.name" v-html="items.data.name"></h1>
                    <p v-if="items.data" :key="items.data.description" v-html="items.data.description"></p>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-12 py-0">
            <div class="row padding-125">
                <div class="col-xl-5 col-12 m-auto py-0 left-connection">
                    <div class="services-text ml-xlarge-auto m-auto">
                        <h2 class="text-dark">{{$t('services.service.title')}}</h2>
                        <p class="mt-3 mb-5 w-75">{{$t('services.service.text')}}</p>
                        <button type="button" @click="toggleModal(true,$router.currentRoute.params.id)"
                                class="btn-primary m-lg-0 mb-5">{{$t('order')}}
                        </button>
                    </div>
                </div>
                <div class="col-xl-7 col-11 m-lg-0 m-auto py-0">
               <!--     <div class="services-grid" v-if="items.advantages.length > 0">
                        <div class="content-card" v-for="card in items.advantages" :key="items.id">
                            <div class="body">
                                <h4 class="card-title before-border text-dark">{{card.name}}</h4>
                                <p class="card-text text-dark">{{card.value}}</p>
                            </div>
                        </div>
                    </div>-->
                    <div class="services-grid">
                        <div class="content-card" v-for="card in $t('services.advantages')">
                            <div class="body">
                                <h4 class="card-title before-border text-dark">{{card.name}}</h4>
                                <p class="card-text text-dark">{{card.value}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="questions" :class="[!windowWidth ? 'padding-125' : '']">
            <Questions></Questions>
        </div>

        <ContactsNew></ContactsNew>
    </v-app>
</template>

<script>
    const Crumbs = () => import("../includes/breadcrumbs");
    const Questions = () => import("../includes/Questions/Questions");
    const ContactsNew = () => import("../includes/Contacts/ContactsNew");
    import {bus} from '../../../event/eventbus.js';
    import windowInstance from "../../../width";
    import VueSocialSharing from 'vue-social-sharing'

    export default {
        name: "Service",
        components: {ContactsNew, Questions, Crumbs, VueSocialSharing},
        data() {
            return {
                tab: '',
                language: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
                items: [],
                render: false,
                form: {
                    email: ''
                }
            }
        },
        mounted() {
            bus.$emit('position', 'absolute');
            bus.$emit('theme', 'dark');
        },
        created() {
            this.$store.dispatch('service', {lang_id: this.language, id: this.$route.params.id}).then(() => {
                this.items = this.$store.getters.getService;
            })
        },
        methods: {
            toggleModal(val, id = 0) {
                if (id) {
                    bus.$emit('openModal', {value: val, type: 'service', id: id})
                } else {
                    bus.$emit('openModal', {value: val, type: 'service'})
                }
            }
        },
        computed: {
            breadcrumb() {
                return [
                    {
                        name: 'services',
                        label: this.$t('services.title')
                    },
                    {
                        name: 'Service',
                        service_id: this.$route.params.id
                    }
                ];
            },
            largeCompare() {
                return windowInstance.data.largeCompare
            },
            windowWidth() {
                return windowInstance.data.windowWidth
            }

        },
        watch: {}
    }
</script>

<style scoped>
    #service {
        background-color: #F3F5F6;
    }

    .top-header {
        background: linear-gradient(to right, rgba(15, 39, 66, .6), rgba(15, 39, 66, .6)), url('/assets/components/services/alternative-energy-ecological-concept.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .services-text {
        max-width: 360px;
        margin-right: 40px;
    }

    .services-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(150px, 360px));
        grid-row-gap: 40px;
        grid-column-gap: 40px;
    }

    .content-card {
        background-color: white;
    }

    .card-title {
        position: relative;
        display: flex;
        align-items: self-end;
        padding: 50px 40px 20px 40px;
    }

    .card-text {
        padding: 0 40px 40px 40px;
    }

</style>
