<template>
    <div id="complect" class="padding-125">
        <div class="m-auto col-xl-7 col-md-11 col-11">
            <div class="d-flex mx-auto py-0 px-0 position-relative container">
                <h2 class="col-md-7 px-0 mb-4">{{$t(page+'.partners.title')}}</h2>
            </div>

            <div id="carousel-partners">
                <div
                    :class="['d-grid grid-column-gap-4 grid-row-gap-4']">
                    <div v-for="(card,index) in $t(page+'.partners.cards')" class="card d-flex justify-content-center">
                        <div class="card-body">
                            <h5 class="my-auto">{{card.title}}</h5>
<!--                            <p>{{card.text}}</p>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import windowInstance from "../../../width";
    export default {
        name: 'complect',
        props:['page'],
        mounted() {

        },
        computed:{
          small(){return windowInstance.data.small}
        },
        methods: {
            renderRow(data) {
                let items = [];
                let offset = 0;
                let end = 6;
                if (data.length >= 1) {
                    while (data.slice(offset, end).length >= 1) {
                        items.push(data.slice(offset, end));
                        offset += 6;
                        end++;
                    }
                }
                return items.concat(items);
            }
        }
    }
</script>

<style scoped lang="scss">
    #complect {
        background-color: #F3F5F6;
        .card{
            padding: 23px 0px 23px 0 !important;
        }
    }


    #carousel-partners .d-grid {
        grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    }

    .card {
        background-color: rgba(255, 255, 255, 1);
        border: unset !important;
        border-radius: 10px;
        transition: all .1s ease-in-out;
        color: #1f1f1f;
        text-align: left;
    }

    .card:active, .card:focus {
        outline: unset;
    }

    .card:hover {
        color: #ffffff;
        background-color: #79C25A;
    }

    .card-body{
        padding:0;
    }

    .card-body h5 {
        max-width: 330px;
        font-weight: 600;
        position: relative;
        margin-top:40px;
        padding: 0 0 0 30px;
    }

    .card-body p {
        font-weight: 400;
        max-width: 230px;
        padding:10px 0 40px 30px;
        font-size: 14px;
    }

    .card-body h5:after {
        content: '';
        bottom: 0;
        width: 2px;
        height: 100%;
        left: 0;
        margin: auto;
        background-color: #FFE454;
        position: absolute;
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
