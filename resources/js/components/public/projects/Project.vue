<template>
    <v-app id="singleProject">
        <div class="large-image" v-if="showModal" @click="hideModal"><img :src="largeImage"/></div>

        <div class="row col-12 top-header py-0 justify-content-center" v-if="dataFetched" :style="{ background: `url('/${item.image}')` }">
            <div class="bg-projects-blur"></div>
            <div id="header" class="col-xs-11 col-xl-7 row flex-column padding-top-125">
                <breadcrumbs :items="breadcrumb"></breadcrumbs>
                <div class="header-text text-white">
                    <h1 v-if="item.projects">{{item.projects.name}}</h1>
                </div>
            </div>
        </div>

        <div class="col-xl-7 col-11 m-auto d-flex single-description padding-125">
            <div class="socials d-lg-flex d-none flex-column mr-8" v-if="item.projects">
                <ShareNetwork
                    network="facebook"
                    :url="currentUrl()"
                    :title="item.projects.name"
                    :description="item.projects.description">
                    <img :src="images.facebook"
                         @mouseover="images.facebook = images.facebookOver"
                         @mouseleave="images.facebook = images.facebook_default">
                </ShareNetwork>

                <ShareByEmail :item="item.projects" :path="currentUrl()"></ShareByEmail>

                <a href="#"
                   ref="path"
                   @click.prevent="copy(item,currentUrl())">
                    <img :src="images.link"
                         @mouseover="images.link = images.linkOver"
                         @mouseleave="images.link = images.link_default"/>
                </a>
            </div>

            <div class="description" v-if="item.projects">
                <div class="features mb-4">
                    <p v-for="feature in item.features" :key="feature.id"><strong>{{feature.name}}</strong> -
                        {{feature.value}}
                    </p>
                </div>

                <p v-html="item.projects.description"></p>

                <CoolLightBox
                    :items="getImages(item.gallery)"
                    :index="index"
                    @close="index = null">
                </CoolLightBox>

                <div class="project-gallery" v-if="xsmall">
                    <template>
                        <div class="gallery-v2">
                            <img
                                v-for="(image, imageIndex) in item.gallery"
                                :key="imageIndex"
                                @click="index = imageIndex"
                                :src="processImageUrl(imageIndex, image.thumbnail)">
                        </div>
                    </template>
                    <!--
                    <v-carousel height="247" cycle progress hide-delimiters progress-color="#FFE454" :show-arrows="false">
                        <v-carousel-item
                            v-for="(image, imageIndex) in item.gallery"
                            :key="imageIndex"
                            :src="image.thumbnail"
                            @click="index = imageIndex">
                        </v-carousel-item>
                    </v-carousel>-->
                </div>

                <div class="gallery" v-else>
                    <img
                        v-for="(image, imageIndex) in item.gallery"
                        :key="imageIndex"
                        @click="index = imageIndex"
                        :src="processImageUrl(imageIndex, image.thumbnail)">
                </div>

                <div class="video-gallery" v-if="item.link">
                    <video-embed :params="{modestbranding: 1, showinfo: 0}" :src="item.link"></video-embed>
                </div>
            </div>
        </div>

        <div id="more-items">
            <more-items show="2" type="projects" :lang="language"></more-items>
        </div>

        <div id="discount" class="justify-content-center px-0 padding-125">
            <Discount v-on="$listeners"></Discount>
        </div>
    </v-app>
</template>

<script>
    import ShareByEmail from "../includes/ShareEmail";

    const Breadcrumbs = () => import("../includes/breadcrumbs");
    import {mapGetters} from 'vuex';
    import {mapState} from 'vuex';

    const MoreItems = () => import("../includes/moreItems");
    const Discount = () => import("../includes/discount/Discount");
    import {bus} from '../../../event/eventbus.js';
    import windowInstance from "../../../width";

    import CoolLightBox from 'vue-cool-lightbox';
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

    export default {
        name: 'Project',
        components: {ShareByEmail, Discount, MoreItems, Breadcrumbs, CoolLightBox},
        data() {
            return {
                language: this.$store.getters.getPublicLanguage.code === 'en' ? 1 : (this.$store.getters.getPublicLanguage.code === 'ru' ? 3 : 2),
                dataFetched: false,
                open: false,
                showModal: false,
                largeImage: '',
                index: null,
                model: 0,
                copiedMessage: '',
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
        created() {
            this.$store.dispatch('singleProject', {id: this.$route.params.id, lang: this.language}).then(() => {
                this.dataFetched = true;
            })
        },
        mounted() {
            bus.$emit('position', 'absolute');
            bus.$emit('theme', 'dark');
            this.copiedMessage = this.$i18n.messages[this.$i18n.locale].linkCopied;
        },
        computed: {
            ...mapGetters({
                item: 'getSingleProject'
            }),
            xsmall() {
                return windowInstance.data.xsmall
            },
            small(){
                return windowInstance.data.small
            },
            breadcrumb() {
                return [
                    {
                        name: 'projects',
                        label: this.$t('projects.project')
                    },
                    {
                        name: 'Project',
                        project_id: this.$route.params.id
                    }
                ];
            }
        },
        methods: {
            currentUrl(){
                return location.protocol + '//' + location.hostname + this.$route.fullPath
            },
            processImageUrl(imgIndex, url){
                let lastPos = this.item.gallery.length - 1;
                return imgIndex === 0 || imgIndex === lastPos ? url : url.replace('thumbnail/', 'thumbnail/280/');
            },
            getImages(gallery){
                let res = [];

                if (gallery){
                    for (let i in gallery){
                        res.push('/private/images/projects/' + this.item.id + '/gallery/' + gallery[i].file);
                    }
                }

                return res;
            },
            youtube_parser(url) {
                var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
                var match = url.match(regExp);
                return (match && match[1].length == 11) ? match[1] : false;
            },
            thumbnailOpen(image, id) {
                this.showModal = true;
                this.largeImage = '/private/images/projects/' + id + '/gallery/' + image.file
            },
            hideModal() {
                this.largeImage = '';
                this.showModal = false;
            },

            copy(data, path) {
                var aux = document.createElement("input");
                aux.setAttribute("value", path);
                document.body.appendChild(aux);
                aux.select();
                document.execCommand("copy");
                document.body.removeChild(aux);
                alert(this.copiedMessage);
            }
        },
        watch: {
            language() {
                this.language = this.$store.getters.getPublicLanguage.code === 'en' ? 1 : (this.$store.getters.getPublicLanguage.code === 'ru' ? 3 : 2);
            },
            xsmall(n, o) {

            },
            dataFetched(n,o){

            },
            open(newVal, oldVal) {
                if (oldVal !== newVal) this.$emit('openModal', {value: newVal})
            },
            $route(to) {
                this.dataFetched = true;
                if (to.path.includes('projects')) {
                    bus.$emit('position', 'absolute')
                    bus.$emit('theme', 'dark')
                }
            }
        }
    }
</script>
<style scoped>
    .large-image {
        position: fixed;
        width: 100%;
        height: 104vh;
        top: -20px;
        background-color: rgba(45, 49, 52, 0.51);
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .project-gallery {
        margin: 30px 2px 40px
    }

    /** Gallery V2 **/
    .gallery-v2 {
        overflow: hidden;
        margin: 40px 0
    }

    .gallery-v2 img {
        cursor: pointer;
        float: left;
        display: block;
        width: 49%;
        margin: 0 2% 20px 0;
    }

    .gallery-v2 img:first-child, .gallery-v2 img:last-child {
        width: 100%;
        margin: 0 0 20px
    }

    .gallery-v2 img:not(:first-child):not(:last-child):nth-child(odd) {
        margin-right: 0
    }

    /** ./Gallery v2 **/

    .gallery {
        overflow: hidden;
        margin: 40px 0
    }

    .gallery img {
        cursor: pointer;
        float: left;
        display: block;
        width: 280px;
        height: 235px;
        margin: 0 15px 20px 0;
    }

    .gallery img:first-child,
    .gallery img:last-child {
        width: 370px;
        height: 235px
    }

    .gallery img:nth-child(3n) {
        margin-right: 0;
    }

    .gallery img:nth-child(4) {
        margin-left: 0;
    }

    .gallery img:first-child {
        margin-left: 0;
    }

    #ytplayer {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 967px) and (max-width: 999px){
        .gallery img {
            width: 270px;
        }

        .gallery img:first-child,
        .gallery img:last-child {
            width: 357px;
            height: 235px
        }
    }

    @media (min-width: 768px) and (max-width: 966px){
        #singleProject .description {
            max-width: 678px
        }

        .gallery img {
            width: 190px;
            height: 172px;
            margin: 0 1% 20px 0
        }

        .gallery img:first-child,
        .gallery img:last-child {
            width: 260px;
            height: 172px
        }
    }

    @media (min-width: 480px) and (max-width: 767px){
        .gallery img {
            width: 48%;
            margin: 0 15px 20px 0
        }

        .gallery img:first-child,
        .gallery img:last-child {
            width: 48%;
        }

        .gallery img:nth-child(3n) {
            margin-right: 15px;
        }

        .gallery img[data-v-04167fcf]:nth-child(2n) {
            margin-right: 0;
        }
    }

    @media (min-width: 429px) and (max-width: 479px){
        .gallery img {
            width: 49%;
            margin: 0 2% 15px 0;
            height: auto;
        }

        .gallery img:first-child,
        .gallery img:last-child {
            width: 100%
        }

        .gallery img:not(:first-child):not(:last-child):nth-child(odd) {
            margin-right: 0
        }
    }
</style>
