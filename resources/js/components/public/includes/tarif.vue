<template>
    <div class="tarif-container">
        <div class="tarif-left">
            <h2 v-html="$t('tarif.title')"></h2>
            <button @click="openModal(true, 'call')" class="btn-primary">{{$t('order')}}</button>
        </div>
        <div class="tarif-right">
            <div class="tarif-header">
                <span v-if="xsmall" class="tarif-icon"><img :src="$t('tarif.src')" /></span>

                <h2 class="d-inline" v-html="$t('tarif.text')"></h2>

                <span v-if="!xsmall" class="tarif-icon"><img :src="$t('tarif.src')" /></span>
            </div>
            <p v-html="$t('tarif.subtext')"></p>
        </div>
    </div>
</template>

<script>
    import {bus} from "../../../event/eventbus";
    import windowInstance from "../../../width";

    export default {
        name: 'tarif',
        props: ['dialog'],
        data() {
            return {
                open: false
            }
        },
        methods: {
            openModal(val,type = '') {
                bus.$emit('openModal', {value:val,type:type})
            },

            toggleModal(val) {
                if(this.$route.path.includes('services') && this.$route.params.id){
                    bus.$emit('openModal', {
                        value: val,
                        type: 'service',
                        id: this.$route.params.id
                    });
                } else {
                    bus.$emit('openModal', {
                        value: val,
                        type: 'call'
                    });
                }

            }
        },
        computed: {
            xsmall()
            {
                return windowInstance.data.xsmall
            }
        },
        watch: {
            open(newVal, oldVal) {
                if (oldVal !== newVal) this.$emit('modalOpen', newVal)
            },

            dialog(val) {
                this.open = val;
            }
        }
    }
</script>

<style scoped lang="scss">
    .tarif-left button{
        margin-top: 45px;
    }

    .tarif-icon{
        margin-bottom: 20px;
        vertical-align: bottom;
    }

    .tarif-header{
        margin-bottom: 20px;
    }

    @media (min-width: 1025px) and (max-width: 1200px){
        #tarif .tarif-container div.tarif-left {
            margin-left: 25px
        }
    }
</style>
