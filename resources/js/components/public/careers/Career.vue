<template>
    <v-app id="singleCareer" v-if="dataFetched">
        <div class="row col-12 top-header py-0 justify-content-center">
            <div id="header" class="col-xl-7 col-lg-11 col-11 row flex-column">
                <Crumbs :color="'dark'" :items="breadcrumb"></Crumbs>
            </div>
        </div>
        <div class="col-xl-7 col-lg-11 col-11 mx-auto d-flex single-description padding-bottom-125">
            <div class="socials d-flex flex-column mr-8">
                <ShareNetwork
                    network="facebook"
                    :url="'https://solixmd.mr-x.su'+$route.fullPath"
                    :title="item.translates.name"
                    :description="item.translates.description"
                >
                    <img :src="images.facebook"
                         @mouseover="images.facebook = images.facebookOver"
                         @mouseleave="images.facebook = images.facebook_default">
                </ShareNetwork>
                <ShareByEmail :item="item.translates" :path="'https://solixmd.mr-x.su'+$route.fullPath"></ShareByEmail>
                <a href="#"
                   ref="path"
                   @click.prevent="copy(item,'https://solixmd.mr-x.su'+$route.fullPath)"
                >
                    <img  :src="images.link"
                          @mouseover="images.link = images.linkOver"
                          @mouseleave="images.link = images.link_default"/>
                </a>
            </div>
            <div class="description col-md-12 py-0">
                <div class="career-introduction">
                    <h1>{{item.translates.name}}</h1>
                    <p v-html="item.translates.description"></p>
                </div>
                <div class="career-body">
                    <p class="footer-text">{{$t('career.footer.text')}}</p>
                    <button class="btn-primary" @click="toggleModal(true,item.id)">
                        {{$t('career.footer.button')}}
                    </button>
                </div>
            </div>
        </div>
        <ContactsNew></ContactsNew>
    </v-app>
</template>

<script>
    const ShareByEmail = () => import("../includes/ShareEmail");
    const Crumbs = () => import("../includes/breadcrumbs");
    import {bus} from '../../../event/eventbus.js';
    import {mapGetters} from "vuex";

    const ContactsNew = () => import("../includes/Contacts/ContactsNew");

    export default {
        name: 'singleCareer',
        data() {
            return {
                language: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
                dataFetched: false,
                images:{
                    facebook_default:"/assets/components/projects/project/fb.jpg",
                    facebook:"/assets/components/projects/project/fb.jpg",
                    facebookOver:"/assets/icons/facebook.svg",
                    link_default:"/assets/components/projects/project/link.jpg",
                    link:"/assets/components/projects/project/link.jpg",
                    linkOver:"/assets/icons/link.svg",
                    email_default:"/assets/components/projects/project/link.jpg",
                    email:"/assets/components/projects/project/link.jpg",
                    emailOver:"/assets/icons/link.svg"
                }
            }
        },
        components: {ShareByEmail, ContactsNew, Crumbs},
        mounted() {
            bus.$emit('theme', 'light');
            bus.$emit('position', 'relative');
            this.$store.dispatch('singleCareer', {id: this.$route.params.id, lang_id: this.language}).then(() => {
                this.dataFetched = true;
            })

        },
        methods: {
            toggleModal(val, id) {
                bus.$emit('openModal', {value: val, type: 'career', id: id});
            },
            copy(data, path) {
                document.addEventListener('copy', function (e) {
                    e.clipboardData.setData('text/plain', path);
                    e.preventDefault();
                }, true);

                document.execCommand('copy');
            }
        },
        computed: {
            ...mapGetters({
                item: 'getSingleCareer'
            }),
            breadcrumb() {
                return [
                    {
                        name: 'career',
                        label: this.$t('career.title')
                    },
                    {
                        name: 'Career',
                        career_id: this.$route.params.id
                    }
                ];
            }
        }
    }
</script>

<style scoped>
    #singleCareer {
        margin-top: 40px;
    }

    .description {
        margin: 0 0 0 50px;
    }

    .career-introduction {
        padding-bottom: 10px;
        max-width: 760px;
    }

    .career-introduction h1 {
        margin: 0 0 30px 0;
    }

    .career-body {
        padding-top: 10px;
    }

    .career-body .offer, .career-body .required {
        margin-bottom: 40px;
    }

    .description ul {
        list-style-position: inside !important;
    }

    .career-body .offer ul li, .career-body .required ul li {
        margin: 10px 0 0 20px;
    }

    .career-body .footer-text {
        margin: 10px 0 40px 0 !important;
        font-weight: 600;
    }
</style>
