<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            max-width="600px"
            :id="'requests'"
        >
            <i @click="closeModal" class="close-form"></i>
            <v-card class="news"
            v-click-out="closeModal"
            >
                <img class="card-img-top" v-lazy="'/assets/components/modal/newsform.jpg'">
                <v-card-text v-if="!message">
                    <v-card-title>
                        <h2 class="card-title">{{$t('newsModal.card.title')}}</h2>
                    </v-card-title>
                    <v-container>
                        <v-row class="form-actions">
                                <v-text-field
                                    :class="[emailError ? 'error-field' : '']"
                                    :placeholder="$t('modalForm.placeholders.email')"
                                    v-model="form.email"
                                >

                                </v-text-field>
                            <span class="text-danger" v-if="emailError">{{emailError}}</span>
                                <a @click.prevent="send" href="#" class="card-link btn btn-warning" :id="'order'">
                                    {{$t('subscribe')}}
                                </a>
                        </v-row>
                    </v-container>
                    <v-card-actions>
                        <p v-html="$t('newsModal.card.terms')"></p>
                    </v-card-actions>
                </v-card-text>
                <div v-else class="message-form">
                    <h3 class="news-thanks">{{$t('newsThanks')}}</h3>
                    <button @click="closeModal" class="btn-primary">{{$t('next')}}</button>
                </div>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default{
        props:{
          open:Boolean
        },
        data:()=>{
            return{
                dialog:false,
                form:{
                    email:'',
                    errors:''
                },
                message:'',
                emailError:'',
            }
        },
        mounted() {
            this.dialog = this.$props.open
        },
        watch:{
            dialog(val) {
                val ? this.$parent.open = true : this.$parent.open = false;
            }
        },
        methods:{
            validEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            closeModal(){
                this.dialog = false;
                this.emailError = '';
                this.$emit('hideNews')
            },
            send() {
                if (this.validEmail(this.form.email)) {
                    let form = this.form;

                    axios.post('/subscribe', form)
                        .then((res) => {
                            if (!res.data.error) {
                                this.message = this.$t('requestText');
                                this.form = {email: ''}
                            }
                            this.form.errors = res.data.error;
                        });
                }else{
                    this.emailError = !this.validEmail(this.form.email) ? this.$t('emailError') : '';
                }

            },
        }
    }
</script>
