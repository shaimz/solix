<template>
    <v-app id="singleProject" v-if="dataFetched">
        <div class="row col-12 top-header py-0 justify-content-center">
            <div id="header" class="col-xl-7 col-xs-12 row flex-column padding-125">
                <breadcrumbs :color="'light'" :items="breadcrumb"></breadcrumbs>
                <div class="header-text text-white">
                    <h1 v-if="item.translates">{{item.translates.name}}</h1>
                </div>
            </div>
        </div>
        <div class="col-xl-7 col-xs-12 m-auto d-flex single-description padding-125">
            <div class="socials d-flex flex-column mr-8">
                <ShareNetwork
                    network="facebook"
                    :url="currentUrl($route.fullPath)"
                    :title="item.translates.name"
                    :description="item.translates.description">
                    <img :src="images.facebook"
                         @mouseover="images.facebook = images.facebookOver"
                         @mouseleave="images.facebook = images.facebook_default">
                </ShareNetwork>
                <ShareByEmail :item="item.translates" :path="currentUrl($route.fullPath)"></ShareByEmail>
                <a href="#"
                   ref="path"
                   @click.prevent="copy(item,currentUrl($route.fullPath))"
                >
                    <img :src="images.link"
                         @mouseover="images.link = images.linkOver"
                         @mouseleave="images.link = images.link_default"/>
                </a>
            </div>
            <div class="description col-md-10">
                <p v-html="item.translates.description"></p>
            </div>
        </div>
        <div id="more-items">
            <more-items show="2" type="news" :lang="language"></more-items>
        </div>
        <div id="discount" class="justify-content-center px-0 padding-125">
            <Discount v-on="$listeners"></Discount>
        </div>
    </v-app>
</template>

<script>
    const ShareByEmail = () => import("../includes/ShareEmail");
    const Breadcrumbs = () => import("../includes/breadcrumbs");
    import {mapGetters} from 'vuex';
    import {mapState} from 'vuex';

    const MoreItems = () => import("../includes/moreItems");
    import {bus} from '../../../event/eventbus.js';

    const Discount = () => import("../includes/discount/Discount");

    export default {
        name: 'Article',
        components: {ShareByEmail, Discount, MoreItems, Breadcrumbs},
        data() {
            return {
                language: this.$store.getters.getPublicLanguage.code === 'en' ? 1 : (this.$store.getters.getPublicLanguage.code === 'ru' ? 3 : 2),
                dataFetched: false,
                open: false,
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
        mounted() {
            bus.$emit('theme', 'dark');
            bus.$emit('position', 'absolute');
            this.$store.dispatch('singleNews', {id: this.$route.params.id, lang: this.language}).then(() => {
                this.dataFetched = true;
            })
        },
        computed: {
            ...mapGetters({
                item: 'getSingleNews'
            }),
            breadcrumb() {
                return [
                    {
                        name: 'news',
                        label: this.$t('news.title')
                    },
                    {
                        name: 'Article',
                        news_id: this.$route.params.id
                    }
                ];
            }
        },
        methods: {
            currentUrl(route){
                return location.scheme + '//' + location.hostname + route;
            },
            copy(data, path) {
                document.addEventListener('copy', function (e) {
                    e.clipboardData.setData('text/plain', path);
                    e.preventDefault();
                }, true);

                document.execCommand('copy');
            }
        },
        watch: {
            language() {
                this.language = this.$store.getters.getPublicLanguage.code === 'en' ? 1 : (this.$store.getters.getPublicLanguage.code === 'ru' ? 3 : 2);
            },
            open(newVal, oldVal) {
                if (oldVal !== newVal) this.$emit('openModal', {value: newVal})
            },
            dataFetched(n, o) {
                if (n) {
                    $('head').append('<meta property="og:url"                content="' + location.protocol +'//' + location.hostname + this.$route.fullPath + '" />\n' +
                        '<meta property="og:type"               content="article" />\n' +
                        '<meta property="og:title"              content="' + this.item.translates.name + '" />\n' +
                        '<meta property="og:description"        content="' + this.item.translates.description + '" />\n' +
                        '<meta property="og:image"              content="' + this.item.image + '" />')
                }
            },
            $route(to) {
                this.dataFetched = true;
                if (to.path.includes('news')) {
                    bus.$emit('theme', 'dark');
                }
            }
        }
    }
</script>

<style scoped>
</style>
