<template>
    <div class="cookies-policy">
        <div v-html="$t('cookies.text')">

        </div>
        <button @click="setCookie" type="button" class="white removebefore blue1 px-md-8 py-md-2 px-3 btn-border-radius mt-3 mt-md-0 d-block d-md-inline-block ml-md-3 v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"><span class="v-btn__content">{{$t('cookies.accept')}}</span></button>
    </div>
</template>
<script>
    export default{
        name:'cookie',
        methods:{
            setCookie(){
                Vue.ls.set('cookie', true, 60 * 24 * 60 * 60 * 1000);
                this.$emit('cookie',false)
            }
        }
    }
</script>
<style scoped>
    .cookies-policy {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 12px 0 12px 20px;
        background: #79c25a;
        color: #fff;
        z-index: 999999;
        border-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cookies-policy button{
        color:#1f1f1f !important;
        box-shadow: none !important;
    }
    .cookies-policy button:hover{
        background-color: white !important;
    }
</style>
