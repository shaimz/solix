<template>
    <div id="contacts">
        <div class="row justify-content-between">
            <div class="contacts-info d-flex justify-content-end p-0 background-green col-xl-5 col-12 m-auto">
                <div class="contacts-sidebar padding-125">
                    <h1 class="text-xlarge-left text-xs-center">{{$t('contacts.title')}}</h1>
                    <ul class="list-group text-lg-left text-center">
                        <li v-for="item in $t('contacts.list')" :key="item.value" class="d-flex">
                            <i class="contact-icon"><img v-lazy="item.icon"/></i>
                            <div class="body">
                                <p>{{item.title}}</p>
                                <p v-if="item.id === 'email'"><a href="mailto:hr@solix.md">{{item.valueHR}}</a></p>
                                <p v-else>{{item.value}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-7 col-12 contacts-form" :class="[message ? 'justify-content-center' : '']">
                <v-row justify="center" class="form-contact">
                    <v-card width="100%">
                        <v-card-title v-if="!message">
                            <h2 class="card-title">{{$t('contacts.card.title')}}</h2>
                        </v-card-title>
                        <v-card-text v-if="!message">
                            <v-container class="py-0">
                                <v-row>
                                    <v-col cols="6" class="email">
                                        <v-text-field
                                            :class="[emailError ? 'error-field' : '']"
                                            :placeholder="$t('modalForm.placeholders.email')"
                                            v-model="form.email"
                                        >

                                        </v-text-field>
                                        <span class="text-danger" v-if="emailError">{{emailError}}</span>
                                    </v-col>
                                    <v-col cols="6" class="pl-2 phone" v-click-out="hide">
                                        <v-text-field
                                            @focus="onFocus($event)"
                                            @click="show = false"
                                            :class="[phoneError ? 'error-field' : '']"
                                            v-model="form.phone"
                                            type="number"
                                            maxlength="15"
                                            :rules="[rules.counter]"
                                        >
                                            <template  v-slot:prepend-inner>
                                                <span @click="show = !show"><img width="24" height="24" :src="`/assets/24/${flag}.png`"><span class="arrow down"></span> <span>{{code}}</span></span>
                                            </template>
                                        </v-text-field>
                                        <ul class="countries list-unstyled" :class="[show ? 'd-block' : 'd-none']">
                                            <li @click="setCountry(c)" v-for="c in countries"><img :src="`/assets/24/${c.name.replaceAll(' ','-')}.png`"><span class="arrow down"></span>{{c.name}} <span>{{c.code}}</span></li>
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
                                        <span v-bind:class="{'danger': generateErr }">{{form.comment ? form.comment.toString().length : 0}} / {{totalRemainCount ? totalRemainCount : limit}}</span>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions v-if="!message">
                            <a @click="send" class="card-link btn btn-warning btn-primary" :id="'order'">
                                {{$t('modalForm.buttons.order')}}
                            </a>
                            <p v-html="$t('modalForm.card.terms')"></p>
                        </v-card-actions>
                        <div v-if="message" class="message-form text-center">
                            <img src="/assets/components/header/logo-vector-yellow.png"/>
                            <h3>{{$t('thanks')}}</h3>
                            <p class="d-flex justify-content-center align-items-center mt-4 mb-9" v-html="message"></p>
                            <button @click="closeForm" class="btn-primary">{{$t('next')}}</button>
                        </div>
                    </v-card>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
    import codes from "../../../../codes/codes.json";

    export default{
        name:'ContactsNew',
        data(){
            return{
                form: {
                    type: 'service',
                    phone:''
                },
                dialog: false,
                rules: {
                    counter: value => value.length <= 20 || 'Max 20 characters'
                },
                message:'',
                emailError:'',
                phoneError:'',
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
        mounted() {

        },
        methods:{
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
                Vue.set(this.form,'phone',$(event.currentTarget).val())
            },
            send() {
                if (this.validEmail(this.form.email) && this.validPhone(this.form.phone)) {

                    this.form.type = 'service';
                    this.form.page = this.$route.name;
                    this.form['phone'] = this.code + ' ' + this.form['phone'];

                    let form = this.form;

                    axios.post('/admin/request', form)
                        .then((res) => {
                            if (!res.data.error) {
                                this.message = this.$t('requestText');
                                this.message = this.message.replace('[variable]',this.$t('call'))
                                this.form = {type: ''}
                            }
                            this.form.errors = res.data.error;
                        });
                }else{
                    this.phoneError = !this.validPhone(this.form.phone) ? this.$t('phoneError') : '';
                    this.emailError = !this.validEmail(this.form.email) ? this.$t('emailError') : '';
                }

            },
            closeForm(){
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
                if (id) {
                    switch (type) {
                        case 'service':
                            this.$store.dispatch('service', {lang_id: 3, id: id}).then(() => {
                                let service = this.$store.getters.getService;
                                this.title = this.$t('modalForm.card.title') + ` ${service.data.name.toLowerCase()}`;
                                this.form.type = 'service';
                                this.form.service = service.data.name;
                                this.form.person = service.data.type;
                            })
                            break;
                        case 'product':
                            this.$store.dispatch('product', {lang: 3, id: id}).then(() => {
                                let product = this.$store.getters.getProduct;
                                this.title = this.$t('modalForm.card.title') + ` ${product.translates.name}`;
                                this.form.type = 'product';
                                this.form.price = product.price;
                                this.form.product = product.translates.name;
                                this.form.category = product.category.data.name;
                            })
                            break;
                    }
                } else {
                    switch (type) {
                        case 'call':
                            this.form.type = 'call';
                            this.form.page = this.$route.name;
                            this.title = this.$t('modalForm.card.title') + ` ${this.$t('modalForm.card.call')}`
                            break;
                    }
                }
            }
        }
    }

</script>

<style scoped>
    #contacts {
        background: white;
    }

    #contacts .v-card{
        padding:35px 0;
        box-shadow: unset !important;
    }
    #contacts .v-card__title{
        padding-bottom:0;
    }
    #contacts .v-card__actions{
        justify-content: flex-start;
        display: flex;
    }
    #contacts .v-card__text .phone{
        padding-left:10px !important;
    }
    #contacts .v-card__text{
        padding:0 !important;
    }
    #contacts .v-card__actions{
        margin-top: 15px;
    }
    #contacts .v-card__actions > a{
        margin-left:7px;
    }
    #contacts .v-card__actions p {
        max-width: 300px;
        margin-left:30px;
    }
    #contacts .contacts-info {
        background: #79C25A;
        margin-left: 0 !important
    }
    .contacts-sidebar{
        max-width: 360px;
        width: 100%;
        margin-right: 40px;
        color:#ffffff !important;
    }
    .contacts-sidebar p,.contacts-sidebar h1{
        color:white !important;
    }
    .contacts-sidebar i img{
        filter:brightness(23) grayscale(1)
    }
    .form-contact{
        max-width: 560px;
        margin-left: 60px !important;
    }
    .contacts-form{
        display: flex;
        align-items: center;
    }
</style>
