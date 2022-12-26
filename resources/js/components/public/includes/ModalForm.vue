<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            max-width="600px"
            :id="'requests'"
        >
            <span @click="closeForm" class="close-form"></span>
            <v-card :class="[message ? 'active-dialog' : '']">
                <v-card-title v-if="!message">
                    <h2 class="card-title">{{title}}</h2>
                </v-card-title>
                <v-card-text v-if="!message">
                    <v-container>
                        <v-row class="mb-3">
                            <v-col cols="6" class="pr-2">
                                <v-text-field
                                    :class="[emailError ? 'error-field' : '']"
                                    :placeholder="$t('modalForm.placeholders.email')"
                                    v-model="form.email"
                                >

                                </v-text-field>
                                <span class="text-danger" v-if="emailError">{{emailError}}</span>
                            </v-col>
                            <v-col cols="6" class="pl-2" v-click-out="hide">
                                <span></span>
                                <v-text-field
                                    @focus="onFocus($event)"
                                    @click="show = false"
                                    @keydown="limitNumber($event)"
                                    :class="[phoneError ? 'error-field' : '']"
                                    v-model="form.phone"
                                    type="number"
                                    :rules="rules"
                                >
                                    <template  v-slot:prepend-inner>
                                        <span @click="show = !show"><img width="24" height="24" :src="`/assets/24/${flag}.png`"><span class="arrow down"></span> <span>{{code}}</span></span>
                                    </template>
                                </v-text-field>
                                <ul class="countries list-unstyled" :class="[show ? 'd-block' : 'd-none']">
                                    <li @click="setCountry(c)" v-for="c in countries"><img :src="`/assets/24/${c.name.replaceAll(' ','-')}.png`">{{c.name}} <span>{{c.code}}</span></li>
                                </ul>
                                <span class="text-danger" v-if="phoneError">{{phoneError}}</span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="12">
                                <v-textarea
                                    :placeholder="$t('modalForm.placeholders.comment')"
                                    v-model="form.comment"
                                    @input="liveCount"
                                    maxlength="500"
                                >

                                </v-textarea>
                                <span v-bind:class="{'danger': generateErr }">{{form.comment ? form.comment.length : 0}} / {{totalRemainCount ? totalRemainCount : limit}}</span>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions v-if="!message">
                    <a @click="send" class="card-link btn btn-warning btn-primary" :id="'order'">
                        {{$t('modalForm.buttons.value')}}
                    </a>
                    <p v-html="$t('modalForm.card.terms')"></p>
                </v-card-actions>

                <div v-if="message" class="message-form">
                    <img src="/assets/components/header/logo-vector-yellow.png"/>
                    <h3>{{$t('thanks')}}</h3>
                    <p class="d-flex justify-content-center align-items-center mt-4 mb-9" v-html="message"></p>
                    <button @click="closeForm" class="btn-primary">{{$t('next')}}</button>
                </div>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import {bus} from '../../../event/eventbus.js';
    import codes from '../../../codes/codes.json';

    export default {
        props: {
            open: Boolean,
        },
        data() {
            return {
                form: {
                    type: '',
                    phone:''
                },
                dialog: false,
                rules: [
                    v => v.length <= 15 || 'Max 15 characters'
                ],
                message: '',
                emailError: '',
                phoneError: '',
                type: '',
                title: '',
                language: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
                flag:'Moldova',
                countries:codes,
                code:'+373',
                show:false,
                generateErr:false,
                totalRemainCount:0,
                limit:500
            }
        },
        created(){
            bus.$on('openModal', (value) => {
                if (value.id) {
                    this.dialog = true;
                    this.getType(value.id ? value.id : 0, value.type);
                } else {
                    this.dialog = true;
                    this.getType(0, value.type);
                }
            })
        },
        destroyed() {

        },
        methods: {
            limitNumber(event){
                if(this.form.phone.toString().length > 14){
                    event.preventDefault()
                }
            },
            liveCount(e){
                this.totalRemainCount = this.limit - this.form.comment.length;
                this.generateErr = this.totalRemainCount < 0;
            },
            hide(){
               this.show ? this.show = false : ''
            },
            setCountry(country){
                this.code = country.code;
                this.flag = country.name.replace(' ','-');
                this.show = false;
            },
            onFocus(event){
                $(event.currentTarget).attr('placeholder','')
            },
            input(event){
                Vue.set(this.form,'phone',this.code + ' ' + $(event.currentTarget).val())
            },
            send() {
                if (this.validEmail(this.form.email) && this.validPhone(this.form.phone)) {
                    let form = this.form;

                    axios.post('/request', form)
                        .then((res) => {
                            if (!res.data.error) {
                                this.message = this.$t('requestText');
                                this.message = this.message.replace('[variable]', this.form.product ? this.form.product : this.$t('call'))
                                this.form = {type: ''}
                            }
                            this.form.errors = res.data.error;
                        });
                } else {
                    this.emailError = !this.validEmail(this.form.email) ? this.$t('emailError') : '';
                    this.phoneError = !this.validPhone(this.form.phone) ? this.$t('phoneError') : '';
                }

            },
            closeForm() {
                this.dialog = false;
                this.message = '';
                this.form.comment = '';
                this.form.phone = '';
                this.form.email = '';
                this.emailError = '';
                this.phoneError = '';
            },
            validEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            validPhone(phone) {
                return phone.length >= 5 && phone.length <= 15;
            },
            getType(id = 0, type = '') {
                switch (type) {
                    case 'service':
                        this.$store.dispatch('service', {lang_id: this.language, id: id}).then(() => {
                            let service = this.$store.getters.getService;
                            this.title = this.$t('modalForm.card.title') + ` ${this.$t('modalForm.card.service')}`;
                            this.form.type = 'service';
                            this.form.service = service.data.name;
                            this.form.person = service.category_id;
                        })
                        break;
                    case 'product':
                        this.$store.dispatch('product', {lang: this.language, id: id}).then(() => {
                            let product = this.$store.getters.getProduct;
                            this.title = this.$t('modalForm.card.title') + ` ${product.translates.name}`;
                            this.form.type = 'product';
                            this.form.price = product.price;
                            this.form.product = product.translates.name;
                            this.form.category = product.category.data.name;
                        })
                        break;
                }
                switch (type) {
                    case 'career':
                    case 'call':
                        this.form.type = type;
                        this.form.page = this.$route.name;
                        this.title = this.$t('modalForm.card.title') + ` ${this.$t('modalForm.card.call')}`
                        if (id) {
                            this.$store.dispatch('singleCareer', {lang_id: this.language, id: id}).then(() => {
                                let career = this.$store.getters.getSingleCareer;
                                this.form.type = 'career';
                                this.form.page = career ? career.translates.name : this.$route.name;
                                this.title = this.$t('modalForm.card.title') + ` ${this.$t('modalForm.card.call')}`
                            })
                        }
                        break;
                }
            },

        },
        mounted() {
            this.dialog = false
        },
        watch: {
            open(val, old) {
                if (old !== val) this.dialog = val;
                this.getType();
            },
            dialog(val, old) {

            },
            $route(to) {

            }
        },
    }
</script>
<style scoped>
    .active-dialog {
        padding: 40px;
    }

    .v-input {
        transition: all .2s ease-in-out;
    }

    .v-text-field__slot {
        transition: all .2s ease-in-out;
    }

    .text-danger {
        position: absolute;
        top: -4px;
        z-index: 999;
        padding: 0 5px;
        background: white;
        border-radius: 6px;
        left: 10px;
    }

    .message-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
        max-width: 400px;
        margin: auto;
        text-align: center;
    }

    .message-form img {
        max-width: 80px;
        width: 100%;
    }
</style>
