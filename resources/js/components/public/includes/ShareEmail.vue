<template>
    <span>
        <a href="#"
           @click.prevent="show = true"
        >
            <img :src="images.email" @mouseover="images.email = images.emailOver"
                 @mouseleave="images.email = images.email_default"/>
        </a>
        <div id="emailDialog" :class="[show ? 'show' : 'hide']">
            <transition-group type="fade">
                <div :key="'overlay'" class="overlay" @click="hide"></div>
                <div :key="'card'" class="card d-flex justify-content-center align-items-center flex-row">
                    <v-col class="position-relative">
                        <v-text-field
                            :class="[error ? 'error-field' : '']"
                            :placeholder="$t('modalForm.placeholders.email')"
                            v-model="email"
                        >
                    </v-text-field>
                    <span class="text-danger" v-if="error">{{error}}</span>
                    </v-col>
                    <button class="btn-primary" @click.prevent="submit">{{$t('modalForm.buttons.order')}}</button>
                </div>
            </transition-group>
        </div>
    </span>
</template>

<script>
    export default {
        name: "ShareByEmail",
        props: ['item','path'],
        data() {
            return {
                show: false,
                email: '',
                error: '',
                images:{
                    email_default:'/assets/components/projects/project/message.jpg',
                    email:'/assets/components/projects/project/message.jpg',
                    emailOver:'/assets/icons/email.svg'
                }
            }
        },
        mounted() {
            $('#emailDialog').appendTo('body');
        },
        methods: {
            hide() {
                this.show = false
            },
            submit() {
                let data = this.item;
                const regex = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])');
                if (regex.test(this.email)) {
                    axios.post('/admin/requests/mail', {
                        email: this.email,
                        header: data.name,
                        text: this.path
                    }).then((r) => {
                        if (r) {
                            this.email = '';
                            this.error = '';
                            this.show = false;
                        }
                    })
                } else {
                    this.error = 'Email incorrect'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    #emailDialog {
        position: fixed;
        z-index: 101;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        max-width: 600px;
        width: auto;
        height: 150px;
        background-color: white;

        &.show {
            display: block;
        }

        &.hide {
            display: none;
        }

        .overlay {
            position: fixed;
            z-index: 100;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 100%;
            height: 100%;
            background-color: rgba(40, 40, 40, 0.68);
        }

        .card {
            position: fixed;
            z-index: 101;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            max-width: 600px;
            width: max-content;
            height: fit-content;
            background-color: white;
            padding: 20px 100px;

            .col {
                max-width: 250px !important;
            }

            .v-input {
                max-width: 250px !important;
                margin-top: 0 !important;
                padding-top: 0 !important;
                margin-right: 20px;
            }
        }

        p {
            z-index: 102;
            color: #ff7676;
            position: absolute;
            bottom: 20px;
        }
    }
    @media screen and (max-width: 600px){
        #emailDialog{
            .card{
                display: block !important;
                padding: 20px 40px;
            }
            .v-input{
                margin:auto !important;
            }
            button{
                margin:auto !important;
                display: flex !important;
            }
        }
    }
</style>
