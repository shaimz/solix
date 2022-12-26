<template>
    <div>
        <Navbar v-bind:heading="'Email'" v-bind:tabs="[tabs]" v-bind:email-page="true"></Navbar>
        <v-form v-model="valid" class="notification-form" method="POST">
            <input type="hidden" name="_token" v-bind:value="csrf">
            <h4 class="form-title">Send email</h4>
            <v-container class="email-notification">
                <h5 class="email-title">Article</h5>
                <v-row>
                    <v-col
                        cols="12"
                    >
                        <v-text-field
                            v-model="header"
                            :rules="headerRules"
                            :counter="10"
                            placeholder="Heading"
                            class="border-0"
                            required
                            name="header"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col
                        cols="12"
                    >
                        <v-textarea
                            v-model="text"
                            placeholder="Body"
                            required
                            name="text"
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-row class="d-flex justify-content-end">
                    <v-btn width="auto" class="discard-form" @click="discard">
                        Discard
                    </v-btn>
                    <v-btn width="auto" right class="submit-form"
                           @click.native="send">
                        SEND
                    </v-btn>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    const Navbar = () => import("../../includes/Navbar");

    export default {
        name: 'email',
        props: {
            title: String,
            id: Number,
            type: String
        },
        components: {
            Navbar
        },
        data() {
            return {
                valid: false,
                header: '',
                email: '',
                typeItem: '',
                headerRules: [
                    v => v.length >= 3,
                ],
                text: '',
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            }
        },
        methods: {
            discard() {
                this.header = '';
                this.text = '';
            },
            send() {
                let email = '';
                if (this.typeItem === 'call') {
                    email = this.call.email;
                } else if (this.typeItem === 'product') {
                    email = this.product.email;
                } else {
                    email = this.service.email;
                }

                axios.post('/admin/requests/mail', {header: this.header, text: this.text, email: email})
                    .then((response) => {
                        $(`<p class="success-sending text-success mt-2">${response.data}</p>`).insertBefore('.row.justify-content-end')
                        setTimeout(()=>{
                            $('.success-sending').remove();
                        },2500)
                        this.header = '';
                        this.text = '';
                    })
            }
        },
        created() {
            Vue.set(this, 'typeItem', this.$router.currentRoute.path.split('/')[this.$router.currentRoute.path.split('/').length - 2]);
            switch (this.typeItem) {
                case 'product':
                    this.$store.dispatch('productRequest', this.$router.currentRoute.params.id);
                    break;
                case 'service':
                    this.$store.dispatch('serviceRequest', this.$router.currentRoute.params.id);
                    break;
                case 'call':
                    this.$store.dispatch('callRequest', this.$router.currentRoute.params.id);
                    break;
            }
        },
        computed: {
            service() {
                return this.$store.getters.getServiceRequestById;
            },
            product() {
                return this.$store.getters.getProductRequestById;
            },
            call() {
                return this.$store.getters.getCallRequestById;
            },
            tabs() {
                let obj = {};
                obj[this.title] = this.title;
                obj['Send Email'] = 'Send Email';
                return obj;
            }
        },
        mounted() {
        },
        watch: {
            typeItem(n, o) {

            }
        }
    }
</script>
