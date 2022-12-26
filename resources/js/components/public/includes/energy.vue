<template>
    <div class="energy-container row">
        <div class="energy-sidebar-left col-lg-5">
            <h2 v-html="$t(page + '.energy.title')"></h2>
            <button @click="openModal(true, 'call')" class="btn-primary">{{$t('order')}}</button>
        </div>

        <div class="energy-info energy-sidebar-right col-lg-7">
            <div class="energy-item" :key="item.title" v-for="item in $t(page + '.energy.items')">
                <div class="energy-item-header">
                    <h1 class="energy-item-title border-left-title" v-html="item.title"></h1>
                    <span class="energy-item-icon"><img :src="item.src" /></span>
                </div>
                <p v-html="item.text"></p>
            </div>
        </div>
    </div>
</template>

<script>
    import {bus} from "../../../event/eventbus";

    export default {
        name: "energy",
        props: ['dialog', 'page'],
        data: () => {
            return {
                open: false
            }
        },
        mounted() {

        },
        methods: {
            openModal(val,type = '') {
                bus.$emit('openModal', {value:val,type:type})
            },
            toggleModal(val) {
                if(this.$route.path.includes('services') && this.$route.params.id){
                    bus.$emit('openModal', {value:val,type:'service',id:this.$route.params.id});
                } else {
                    bus.$emit('openModal', {value:val,type:'call'});
                }

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

<style scoped>
</style>
