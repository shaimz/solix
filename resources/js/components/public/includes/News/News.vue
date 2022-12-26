<template>
    <div>
        <div v-for="(row,index) in renderRow(news)"
             class="d-flex py-0 my-0 col-lg-11 col-xl-7 col-12 ml-lg-auto ml-md-auto py-0 position-unset">
            <router-link :to="{name:'singleNews',params:{locale:$route.params.locale,id:card.id}}"
                         :class="['card', row[1][i] === 1 ? 'w-460' : 'w-360']"
                         v-for="(card,i) in row[0]" v-if="index < itemsToShow" :key="i">
                <img class="card-img-top" v-lazy="'/'+card.image" alt=""/>
                <div class="card-body">
                    <p class="my-2"><img class="mr-3" v-lazy="'/assets/icons/calendar.png'"/>{{getDate(card.created_at)}}
                    </p>
                    <h4 class="before-border">{{card.translates.name}}</h4>
                </div>
                <router-link
                    class="btn btn-secondary news-more d-flex justify-content-evenly align-items-center"
                    :to="'news/'+card.id"><span>{{$t('more')}}</span><i
                    class="arrow right ml-2"></i></router-link>
            </router-link>
        </div>
        <infinite-loading
            class="col-7"
            v-if="renderRow(news).length && (xsmall || small || large) && $route.path.includes('news')"
            :identifier="infiniteId"
            @infinite="infiniteHandler">
            <div slot="spinner">
                <div class="m-auto loading-more">
                    <img v-lazy="'/assets/icons/more.png'"/>
                </div>
            </div>
            <div slot="no-more"></div>
            <div slot="no-results"></div>
        </infinite-loading>
    </div>
</template>

<script>
    const InfiniteLoading = () => import("vue-infinite-loading");
    import windowInstance from "../../../../width";
    import {bus} from "../../../../event/eventbus";
    import * as moment from 'moment';


    export default {
        name: 'allNews',
        props: ['lang', 'show'],
        components:{InfiniteLoading},
        data() {
            return {
                language: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
                news: [],
                active: 'all',
                itemsToShow: this.show,
                total: 0,
                render: false,
                loading: false,
                infiniteId: +new Date()
            }
        },
        created() {
        },
        destroyed() {
        },
        computed: {
            small() {
                return windowInstance.data.small
            },
            xsmall() {
                return windowInstance.data.xsmall
            },
            medium() {
                return windowInstance.data.medium
            },
            large() {
                return windowInstance.data.large
            },
            xlarge(){
                return windowInstance.data.xlarge
            },
            data() {
                return this.$store.getters.getFetchedNews
            }
        },
        methods: {
            infiniteHandler($state) {
                if (this.xlarge) {
                    setTimeout(() => {
                        this.$store.dispatch('fetchNews', {
                            lang_id: (this.language ? this.language : 0),
                            limit: (this.show ? this.show : 0),
                            offset: (this.itemsToShow ? this.itemsToShow : 0)
                        })
                            .then(() => {
                                let data = this.data;
                                if (data.length) {
                                    this.itemsToShow += this.show;
                                    this.page += 1;
                                    data.forEach((item) => {
                                        this.news.push(item)
                                    })
                                    $state.loaded();
                                } else {
                                    $state.complete();
                                }

                            })
                    }, 1500)
                }
            },
            getDate(date) {
                let data = new Date(Date.parse(date));
                const options = {year: 'numeric', month: 'long', day: 'numeric'};
                let locale = this.$route.params.locale === 'en' ? 'en-EN' : (this.$route.params.locale === 'ru' ? 'ru-RU' : 'ro-RO');
                return moment(date,'HH:mm:ss').format("LL");
            },
            isOdd(index) {
                return index % 2 === 0;
            },
            isEven(indexes, item) {
                indexes.forEach((e, i) => {
                    return item === e;
                })
            },
            renderRow(data) {
                let items = [];
                let offset = 0;
                let end = 3;
                if (data.length >= 1) {
                    while (data.slice(offset, end).length >= 1) {
                        if (items.length % 2 === 0) {
                            items.push([data.slice(offset, end), [1, 2, 1]])
                            offset += 3;
                            end += 3;
                        } else if (items.length / 3 > 0 && (items.length / 3) % 2 === 1) {
                            items.push([data.slice(offset, end), [2, 1, 1]])
                            offset += 3;
                            end += 3;
                        } else {
                            items.push([data.slice(offset, end), [1, 1, 2]])
                            offset += 3;
                            end += 3;
                        }
                    }
                }
                return items;
            },
            shuffle(array) {
                var i = 0,
                    j = 0,
                    temp = null

                for (i = array.length - 1; i > 0; i -= 1) {
                    j = Math.floor(Math.random() * (i + 1))
                    temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                }
                return array;
            },
        },
        mounted() {
            this.$store.dispatch('newsTotal').then(() => {
                this.total = this.$store.getters.getNewsTotal;
            })
            this.$store.dispatch('fetchNews', {lang_id: this.language, limit: this.itemsToShow}).then(() => {
                this.news = this.$store.getters.getFetchedNews
                this.render = true;
            })
        },
        watch: {
            lang(newVal, oldVal) {
                if (oldVal !== newVal) this.language = newVal;
                this.$store.dispatch('news', newVal).then(() => {
                    this.news = this.$store.getters.getNews
                    this.$store.dispatch('newsTotal').then(() => {
                        this.total = this.$store.getters.getNewsTotal;
                    })
                })
            },
            news(newVal, oldVal) {

            },
            rowsToShow(newVal, oldVal) {
                if (newVal !== oldVal) this.itemsToShow = newVal;
            }
        }
    }
</script>

<style scoped>

    @media screen and (min-width: 1245px) {
        .col-lg-9 {
            max-width: 81%;
        }
    }

    .news-more {
        margin: 0 auto 37px 37px;
    }

    .news-grid {
        grid-template-columns: repeat(3, minmax(360px, 460px));
        grid-template-rows: auto;
        grid-template-areas: "zero zero zero one one . two two two" "three three . four four four five five five";
    }

    .card {
        margin-right: 20px;
        margin-bottom: 20px;
    }

    .w-460 {
        width: 460px;
    }

    .w-360 {
        width: 360px;
    }

    .nav-pills {
        padding: 0 !important;
    }

    .nav-pills button.nav-link {
        font-size: 20px;
    }

    .news-more span {
        transition: transform .2s ease-in-out;
    }

    .news-more:hover span {
        transform: translateX(-7px);
    }

    .card-project-features > div:nth-child(1) {
        font-weight: 700;
    }

    .project-power {
        font-weight: 600;
        display: flex;
        align-items: center;
    }

    .card-img-top {
        max-height: 165px;
        object-fit: cover;
        height: 165px;
        width: 100%;
    }

    .card-body {
        padding: 0 !important;
    }
    .card-body p{
        padding:17px 30px 10px 37px;
    }
    .card-body h4{
        position: relative;
        padding:0px 30px 25px 37px;
    }
    .card-body h4:before{
        top:0 !important;
    }

    .arrow.right {
    }

    .news-more {
        margin: auto 37px 30px 37px !important;
        display: flex;
        align-items: center;
        width: fit-content;
        max-width: 159px;
        position: relative;
    }

    .news-more .arrow {
        opacity: 0;
        position: absolute;
        right: 28px;
        transition: all .2s ease-in-out;
    }

    .news-more:hover .arrow {
        opacity: 1;
        transform: translateX(50%) rotate(-45deg);
    }
</style>
