<template>
    <div class="m-auto discount-body col-xl-5 col-lg-6 col-11 text-white">
        <h2>{{$t('discount.title')}}</h2>
        <p>{{$t('discount.text')}}</p>
        <button @click="openModal" type="button" class="btn-primary">{{$t('discount.button')}}</button>
    </div>
</template>

<script>
    import { bus } from '../../../../event/eventbus.js';
    export default{
        name:'Discount',
        data: () => {
            return{

            }
        },
        methods:{
            openModal(){
                bus.$emit('openModal', {value:true,type:'call'});
            }
        },
        created() {
            bus.$on('openModal', value => {
                this.open = value;
            });
        },
        watch:{

        }
    }
</script>

<style scoped>
    .discount-body{

    }
    .discount-body > h2{
        margin-bottom:25px !important;
        max-width: 457px;
    }
    .discount-body > p{
        max-width: 457px;
        margin-bottom: 45px !important;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        line-height: 26px !important;
    }
</style>
