<template>
    <div v-if="render" id="contacts">
        <div class="col-lg-11 col-xl-7 col-12 mx-auto my-3" >
            <crumbs color="dark"></crumbs>
            <Contact></Contact>
        </div>
    </div>
</template>

<script>
    const Crumbs = () => import("../includes/breadcrumbs");
    import {bus} from '../../../event/eventbus.js';
    const Contact = () => import("../includes/Contacts/Contacts");

    export default {
        name: 'Contacts',
        components: {Contact, Crumbs},
        data() {
            return {
                render: true,
                form:[]
            }
        },
        created() {
            bus.$emit('theme', 'light')
            bus.$emit('position','relative')
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped>
    #contacts{
        padding-bottom:125px !important;
        background-color: #F3F5F6;
    }

    #footer{
        background-color: white;
    }
</style>
