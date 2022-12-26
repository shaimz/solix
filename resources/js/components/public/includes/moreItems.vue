<template>
    <div id="moreItems" class="padding-125 my-5" v-if="render">
        <div class="col-xl-7 col-12 m-auto">
            <h2 v-if="type === 'projects'" class="mb-4 text-dark">{{$t('moreTitle')}}</h2>
            <h2 v-else-if="type === 'products'" class="mb-4 text-dark">{{$t('products.moreTitle')}}</h2>
            <h2 v-else-if="type === 'news'" class="mb-4 text-dark">{{$t('news.moreTitle')}}</h2>
            <div class="justify-content-start flex-wrap row mb-6 more-container"
                 :class="type === 'products' ? 'd-grid container-'+type : 'd-flex'">
                <router-link :to="{name:'project',params:{locale:$route.params.locale,id:card.id}}"
                             :key="i"
                             id="more-projects"
                             v-if="type === 'projects' && card.projects"
                             :class="['card p-0', i ? 'col-xs-12 col-lg-6 ml-8' : 'col-xs-12 col-lg-5']"
                             v-for="(card,i) in items">
                    <img class="card-img-top" v-lazy="'/'+card.image" alt=""/>
                    <div class="card-body">
                        <h4 class="before-border">{{card.projects.name}}</h4>
                        <p class="project-description">{{card.projects.description}}</p>
                        <div class="card-project-features d-md-flex">
                            <div class="mr-5"><i class="margin-icon"><img
                                v-lazy="'/assets/icons/location-grey.png'"></i>{{card.projects.location}}
                            </div>
                            <div class="font-number project-power"><i class="margin-icon"><img
                                v-lazy="'/assets/icons/light-grey.png'"></i>{{card.power}} {{$t('power')}}
                            </div>
                        </div>
                    </div>
                    <router-link class="btn-secondary more align-self-start d-flex justify-content-evenly"
                                 :to="{name:'project',params:{id:card.id}}"><span>{{$t('more')}}</span><i
                        class="arrow right ml-2"></i></router-link>
                </router-link>

                <router-link
                    :to="{name:'product',params:{locale:$route.params.locale,id:card.id,category:card.category.url}}"
                    :key="i"
                    :id="'more-products'"
                    v-if="type === 'products' && card.translates && card.category_id && i < 3"
                    :class="['card p-0']"
                    v-for="(card,i) in items">
                    <img class="card-img-top"
                         v-lazy="(card.image ? card.image : '/private/images/products/no-image.png')" alt=""/>
                    <div class="card-body border-bottom">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="card-body-title">
                                <p class="text-dark">{{card.translates.name}}</p>
                                <p class="product-brand d-flex align-items-center"><img class="mr-2" alt="star"
                                                                                        src="/assets/icons/star-grey.png"/>{{card.brand}}
                                </p>
                            </div>

                            <div v-if="!largeCompare" class="card-product-brand-logo d-flex">
                                <img v-lazy="card.brand_logo" :alt="card.brand"/>
                            </div>
                        </div>

                        <div class="card-price" :class="[largeCompare ? 'card-price-mobile' : '']">
                            <h4 class="roboto">{{card.price}} EUR</h4>
                            <div v-if="largeCompare" class="card-product-brand-logo d-flex">
                                <img v-lazy="card.brand_logo" :alt="card.brand"/>
                            </div>
                        </div>
                    </div>
                    <router-link class="btn-product more align-self-start d-flex"
                                 :to="{name:'product',params:{id:card.id,category:card.category.url}}"><span>{{$t('goto')}}</span><i
                        class="arrow right ml-2"></i></router-link>
                </router-link>

                <router-link :to="{name:'singleNews',params:{locale:$route.params.locale,id:card.id}}"
                             :key="i"
                             id="more-news"
                             v-if="type === 'news' && card.translates && i < 2"
                             :class="['card p-0 mb-4 news', i ? 'col-xs-12 col-lg-6 ml-8' : 'col-xs-12 col-lg-5']"
                             v-for="(card,i) in items">
                    <img class="card-img-top" v-lazy="'/'+(card.image ? card.image : '')" alt=""/>
                    <div class="card-body">
                        <div class="card-body-title">
                            <p><span class="mr-2"><img v-lazy="'/assets/icons/calendar.png'"></span>{{getDate(card.created_at)}}
                            </p>
                            <h5 class="border-left-title">{{card.translates.name}}</h5>
                        </div>
                    </div>
                    <router-link class="btn-secondary more align-self-start d-flex"
                                 :to="{name:'singleNews',params:{id:card.id,locale:$route.params.locale}}"><span>{{$t('more')}}</span><i
                        class="arrow right ml-2"></i></router-link>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import windowInstance from "../../../width";

    export default {
        name: 'moreItems',
        props: ['type', 'show'],
        data() {
            return {
                items: [],
                render: false,
                language: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
            }
        },
        mounted() {
            switch (this.type) {
                case 'projects':
                    this.$store.dispatch('projectsByLanguage', {
                        lang: this.language,
                        limit: this.show,
                        id: this.$route.params.id
                    }).then(() => {
                        this.items = this.$store.getters.getProjectsByLanguage;
                        this.render = true;
                    })
                    break;
                case 'products':
                    this.$store.dispatch('productsByLanguage', {
                        lang: this.language,
                        limit: this.show,
                        id: this.$route.params.id
                    }).then(() => {
                        this.items = this.$store.getters.getProductsByLanguage;
                        this.render = true;
                    })
                    break;
                case 'news':
                    this.$store.dispatch('newsByLanguage', {
                        lang: this.language,
                        length: this.show,
                        id: this.$route.params.id
                    }).then(() => {
                        this.items = this.$store.getters.getNewsByLanguage;
                        this.render = true;
                    })
                    break;
            }
        },
        computed: {
            largeCompare() {
                return windowInstance.data.largeCompare
            },
            small() {
                return windowInstance.data.small
            },
        },
        methods: {
            getDate(date) {
                let data = new Date(Date.parse(date));
                const options = {year: 'numeric', month: 'long', day: 'numeric'};
                let locale = this.$route.params.locale === 'en' ? 'en-EN' : (this.$route.params.locale === 'ru' ? 'ru-RU' : 'ro-RO');
                return data.toLocaleDateString(locale, options)
            }
        },
        watch: {
            lang(newVal, oldVal) {
                if (newVal !== oldVal) this.$emit('languageChanged', newVal);
            },
            $route(to) {
                switch (this.type) {
                    case 'projects':
                        this.$store.dispatch('projectsByLanguage', {
                            lang: this.language,
                            limit: this.show,
                            id: to.params.id
                        }).then(() => {
                            this.items = this.$store.getters.getProjectsByLanguage;
                            this.render = true;
                        })
                        break;
                    case 'products':
                        this.$store.dispatch('productsByLanguage', {
                            lang: this.language,
                            limit: this.show,
                            id: to.params.id
                        }).then(() => {
                            this.items = this.$store.getters.getProductsByLanguage;
                            this.render = true;
                        })
                        break;
                    case 'news':
                        this.$store.dispatch('newsByLanguage', {
                            lang:this.language,
                            length:this.show,
                            id:to.params.id
                        }).then(() => {
                            this.items = this.$store.getters.getNewsByLanguage;
                            this.render = true;
                        })
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    .card-body {
        padding: 0 !important;
    }

    .card-body-title p {
        padding-bottom: 10px !important;
    }

    .border-left-title {
        padding: 0 0 0 37px;
    }

    .news .more .arrow {
        right: 20px !important;
    }

    .card-body-title p {
        padding: 30px 0 0px 37px;
        color: #555555;
    }

    #moreItems .before-border {
        padding: 20px 30px;
    }

    #moreItems .project-description {
        padding: 0 30px;
    }

    #moreItems .card-project-features {
        padding: 0 30px
    }

    #more-products .product-brand {
        padding: 0;
    }

    #moreItems .more-container .card:nth-child(1) {
        margin-left: 0 !important;
    }

    #more-products .card-body {
        padding: 10px 30px 10px 30px !important;
    }

    #more-products .card-body-title p {
        padding: 0 !important;
    }

    #more-products .btn-product {
        margin: 20px 37px 20px 15px !important;
        max-width: 119px !important;
    }

    .container-products {
        grid-template-columns: repeat(auto-fill, minmax(200px, 360px));
        grid-column-gap: 40px;
    }
</style>
