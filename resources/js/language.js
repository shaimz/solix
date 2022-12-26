import Vue from 'vue';

export const language = new Vue({
    data(){
        return{
            langapp:0
        }
    },
    computed:{
        lang(){
            return this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2)
        }
    },
    watch:{
        lang(n,o){
            if(n!==o){
                this.langapp = n;
            }
        }
    }
})
