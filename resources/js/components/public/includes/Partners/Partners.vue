<template>
    <div class="m-auto col-lg-11 col-xl-7 col-md-11 col-11 text-white">
        <div class="d-lg-flex d-xs-block mx-auto py-0 px-0 position-relative">
            <h2 class="col-xl-8 col-md-10 text-xs-center text-lg-left px-0 mb-6">{{$t('home.partners.title')}}</h2>
            <div class="col-xl-4 col-md-2 next-prev-icons">
                <a class="carousel-control-prev" href="#carousel-partners" role="button" @click="" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-partners" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>

        <div v-if="!xsmall && render" id="carousel-partners" class="carousel carousel-fade" data-interval="false">
            <div class="carousel-inner">
                <div
                    :class="['d-grid grid-columns-3 grid-column-gap-4 grid-row-gap-4 carousel-item', !index ? 'active' : '']"
                    v-for="(row,index) in renderRow($t('home.partners.cards'))">
                    <div class="card" v-for="(card,i) in row">
                        <img class="card-img-top w-50" :src="card.image">

                        <div class="card-body text-center">
                            <h5>{{card.title}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else data-ride="carousel"
             class="mobile-carousel">
            <div class="card" v-for="(card,index) in $t('home.partners.cards')">
                <img class="card-img-top w-50" :src="card.image">
                <div class="card-body text-center">
                    <h5>{{card.title}}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import windowInstance from "../../../../width";

    export default {
        name: 'Partners',
        data() {
            return {
                render: true
            }
        },
        created(){
          this.$store.dispatch('projects',{lang:this.lang_id,limit:20,offset:0})
        },
        computed: {
            lang_id(){
              return this.$router.currentRoute.path.includes('en') ? 1 : (this.$router.currentRoute.path.includes('ru') ? 3 : 2);
            },
            projects(){
              return this.$store.state.projects;
            },
            xsmall() {
                return windowInstance.data.xsmall
            },
            small() {
                return windowInstance.data.small
            }
        },
        mounted() {
            if(!this.xsmall){
                this.render = true;
            }
        },
        methods: {
            renderRow(data) {
                let items      = [];
                let chunk_size = this.small && !this.xsmall ? 4 : 6;

                let pre_items = [];
                for (var i in data){
                    let j = parseInt(i) + 1;

                    pre_items.push(data[i]);

                    if ((j % chunk_size) === 0){
                        items.push(pre_items);
                        pre_items = [];
                    }
                }

                if (!items.length && pre_items.length){
                    items.push(pre_items);
                }

                return items;
            }
        },
        watch: {
            xsmall(newVal, oldVal) {
                if (!newVal) {
                    setTimeout(()=>{
                        this.render = true;
                    },500)
                }else{
                    this.render = false
                }
            }
        }
    }
</script>
<style scoped>

    .d-md-flex.position-relative {
        justify-content: space-between;
    }

    #partners .card {
        justify-content: center
    }

    .card {
        background-color: rgba(255, 255, 255, .08);
        border: unset !important;
        border-radius: 10px;
        padding: 30px 50px 20px 50px;
        transition: all .1s ease-in-out;
    }

    .card:active, .card:focus {
        outline: unset;
    }

    .card:hover {
        color: #1f1f1f;
        background-color: white;
    }

    .card:hover h5:after {
        background-color: #79C25A;
    }

    .card:hover .card-img-top {
        filter: brightness(1) invert(1);
    }

    .card-body h5 {
        font-weight: 600;
        position: relative;
        padding: 0 0 15px 0;
    }

    .card-body p {
        font-weight: 400;
        padding: 4px 0 0 0;
        max-width: 195px;
        margin: auto;
    }

    .card-body h5:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 50px;
        height: 2px;
        left: 0;
        right: 0;
        margin: auto;
        background-color: rgba(255, 255, 255, .2);
    }

    .card-img-top {
        max-width: 84px;
        margin-left: auto;
        margin-right: auto;
    }

    .carousel-control-next {
        right: 0;
        position: absolute;
        border: 1px solid rgba(255, 255, 255, .4);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin: auto 0 auto auto;
        top: 0;
        bottom: 0;
        opacity: 1;
        transition: all .2s ease-in-out;
    }

    .carousel-control-prev {
        right: 0;
        position: absolute;
        border: 1px solid rgba(255, 255, 255, .4) !important;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        top: 0;
        bottom: 0;
        margin: auto 80px auto auto;
        opacity: 1;
        transition: all .1s ease-in-out;
    }

    .carousel-control-prev:hover, .carousel-control-next:hover {
        background-color: white;
    }

    .carousel-control-prev:hover .carousel-control-prev-icon, .carousel-control-next:hover .carousel-control-next-icon {
        filter: invert(81%) sepia(13%) saturate(1715%) hue-rotate(52deg) brightness(87%) contrast(81%);
    }

    .carousel-control-prev-icon, .carousel-control-next-icon {
        width: 10px !important;
        height: 10px !important;
    }
</style>
