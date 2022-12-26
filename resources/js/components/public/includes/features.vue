<template>
    <div id="features">
        <div class="col-lg-12 col-xl-8 col-11 m-auto py-0">
            <div class="row d-large-block d-xlarge-flex">
                <div class="col-lg-8 col-xl-5 col-md-11 col-12 py-0 left-feature">
                    <div class="m-auto">
                        <div class="features-text ml-xlarge-auto">
                            <h2>{{$t(page+'.features.title')}}</h2>
                            <p>{{$t(page+'.features.text')}}</p>
                            <button @click="toggleModal(true)" class="btn-primary">
                                {{$t(page+'.features.button')}}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-xl-7 col-12 py-0 right-feature">
                    <div class="features-grid">
                        <div class="content-card" v-for="card in $t(page+'.features.cards')">
                            <img :src="card.img">
                            <div class="body mt-5">
                                <h4 class="card-title">{{card.title}}</h4>
                                <p class="card-text">{{card.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {bus} from '../../../event/eventbus.js'
    import windowInstance from "../../../width";
    export default{
        name:'features',
        props:['page'],
        data(){
            return{

            }
        },
        computed:{
            width(){return windowInstance.data.width},
            windowWidth() { return windowInstance.data.compare},
            windowCompare(){return windowInstance.data.compare},
            small(){return windowInstance.data.small},
            medium(){return windowInstance.data.medium},
            large(){return windowInstance.data.large},
            compare(){return windowInstance.data.windowCompare}
        },
        methods:{
            toggleModal(val) {
                bus.$emit('openModal', {value:val,type:'call'});
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .right-feature{
        padding-left: 20px !important;
    }
    .features-grid{
        grid-column-gap: 36px !important;
    }
    .card-text{
        font-size: 14px;
    }
    p{
        font-weight: 400;
    }
</style>
