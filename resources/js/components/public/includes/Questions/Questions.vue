<template>
    <div
        class="d-lg-flex d-xs-block justify-content-center col-lg-11 col-xl-8 col-md-11 col-sm-11 mx-auto py-0 position-unset container">
        <div class="col-lg-5 col-xl-4 mt-lg-4 ml-xlarge-3">
            <div class="question-sidebar">
                <h2 class="text-dark" v-html="$t('home.questions.title')"></h2>
                <p v-html="$t('home.questions.text')"></p>
                <button @click="openModal(true,'call')" class="btn-primary">{{$t('home.header.button')}}
                </button>
            </div>
        </div>
        <div class="col-lg-7 col-xl-7 col-11 m-xs-auto m-lg-0">
            <div class="question d-flex justify-content-lg-between" @click="openQuestion"
                 v-for="question in $t('home.questions.list')">
                <div class="question-body">
                    <h5 class="question-title">{{question.title}}</h5>
                    <p class="question-text" style="display: none;" v-html="question.text"></p>
                </div>
                <span class="question-handler">

                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import {bus} from "../../../../event/eventbus";

    export default {
        name: 'Questions',
        props: ['dialog'],
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
            openQuestion() {
                let elem = event.currentTarget;
                let elements = $('body').find('.question.active');
                $(elem).find('.question-text').slideToggle();
                $(elem).toggleClass('active');
                elements.each((i, e) => {
                    if ($(e)[0] && $(e)[0] !== $(elem)[0]) {
                        $(e).find('.question-text').slideUp();
                        $(e).removeClass('active');
                    }
                })
            },
            toggleModal(val) {
                if(this.$route.path.includes('services') && this.$route.params.id){
                    bus.$emit('openModal', {value:val,type:'service',id:this.$route.params.id});
                }else{
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
    .question {
        padding: 30px 20px 30px 0;
        border-bottom: 1px solid #DEDEDE;
        transition: transform .3s ease-in-out;
    }

    .question-handler {
        transition: transform .3s ease-in-out;
    }

    .question.active .question-handler {
        transform: rotate(45deg);
        background: linear-gradient(#ffe663, #ffe663), linear-gradient(#ffe663, #ffe663) !important;
        background-position: center !important;
        background-size: 50% 2px, 2px 50% !important;
        background-repeat: no-repeat !important;
    }

    .question-sidebar {
        max-width: 450px;
        margin-left: 20px;
    }

    .question-sidebar h2 {
        margin-bottom: 25px !important;
    }
    .question-sidebar p{
        max-width: 360px;
        margin-bottom: 45px !important;
    }

    .question-text {
        font-weight: normal;
    }

    .question-title {
        font-weight: 600;
    }

</style>
