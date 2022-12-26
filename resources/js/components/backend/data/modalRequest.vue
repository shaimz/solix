<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            max-width="600px"
            :id="'requests'"
        >
            <v-card
                v-click-out="onModal"
            >
                <v-card-title>
                    <h3 class="headline">Request details</h3>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <p class="header-item">Time</p>
                                <p class="column-item">{{$attrs.created_at ? getDate($attrs.updated_at) : ''}}</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <p :class="'header-item'">{{type === 'call' ? 'Page' : type}}</p>
                                <p class="column-item">{{type === 'call' ? $attrs.page :
                                    (type === 'service' ? $attrs.service : $attrs.name)}}</p>
                            </v-col>
                            <v-col cols="4">
                                <p :class="'header-item'">Phone number</p>
                                <p class="column-item">{{$attrs.phone}}</p>
                            </v-col>
                            <v-col cols="4">
                                <p :class="'header-item'">Email</p>
                                <p class="column-item">{{$attrs.email}}</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="12">
                                <p :class="'header-item'">Comment</p>
                                <p class="column-item">{{$attrs.comment}}</p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="darken-1"
                        text
                        :id="'cancel'"
                        @click="onModal"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        color="darken-1"
                        class="btn-outline-danger"
                        text
                        :id="'delete'"
                        @click="deleteItem(id)"
                    >
                        Delete
                    </v-btn>
                    <v-btn
                        color="darken-1"
                        text
                        :id="'archive'"
                        @click="moveToArchive(id)"
                    >
                        To archive
                    </v-btn>
                    <!--<v-btn
                        color="darken-1"
                        text
                        :id="'reply'"
                    >
                        <router-link :to="{name:route,params:{type:type,title:headings,id:id}}">Reply</router-link>
                    </v-btn>-->
                </v-card-actions>
                <Confirm ref="confirm"></Confirm>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import Confirm from "./Confirm";

    const Email = () => import("../requests/email/Email");
    export default {
        props: {
            open: Boolean,
            type: String,
            id: Number,
            headings: String,
            route: String
        },
        components: {
            Confirm,
            Email
        },
        data: () => {
            return {
                dialog: false,
                updated: false,
                email: null,
                deleteModal: false
            }
        },
        created() {

        },
        mounted() {
            console.log(this.type)
            this.dialog = this.open;
            switch (this.type) {
                case 'product':
                    this.$store.dispatch('productRequest', this.id);
                    break;
                case 'service':
                    this.$store.dispatch('serviceRequest', this.id);
                    break;
                case 'call':
                    this.$store.dispatch('callRequest', this.id);
                    break;
            }
        },
        methods: {
            onModal() {
                if (!this.deleteModal) {
                    this.$emit('offvalue', false);
                    this.$parent.$data.id = null;
                }
            },
            getDate(str) {
                let date = '' + str.replace(/[-?]/g, '/').replace('T', ' ');
                let result = date.split(':');
                let time = [];
                result.pop();
                result[0].split('/').forEach((e) => {
                    time.push(e.split(' ')[0]);
                })
                let temp = time[0];
                time[0] = time[2];
                time[2] = temp;
                return time.join('/');
            },
            deleteItem(id) {
                this.deleteModal = true;
                this.$refs.confirm.open('Delete', 'Are you sure?', {color: 'red'}).then((confirm) => {
                    if (confirm) {
                        axios.post('/admin/request-delete', {id: id, type: this.type})
                            .then((response) => {
                                this.$store.dispatch(this.type + 'Request');
                                this.dialog = false;
                                this.updated = true;
                                this.deleteModal = false;
                                switch (this.type) {
                                    case 'product':
                                        this.$store.dispatch('productRequests');
                                        break;
                                    case 'service':
                                        this.$store.dispatch('serviceRequests');
                                        break;
                                    case 'call':
                                        this.$store.dispatch('callRequests');
                                        break;
                                }
                            })
                    }
                })
            },
            moveToArchive(id) {
                switch (this.type) {
                    case 'product':
                        axios.post('/admin/request-products', {id: id})
                            .then((response) => {
                                this.$store.dispatch('productRequests');
                                this.dialog = false;
                                this.updated = true;
                            })
                        break;
                    case 'service':
                        axios.post('/admin/request-services', {id: id})
                            .then((response) => {
                                this.$store.dispatch('serviceRequests');
                                this.dialog = false;
                                this.updated = true;
                            })
                        break;
                    case 'call':
                        axios.post('/admin/request-calls', {id: id})
                            .then((response) => {
                                this.$store.dispatch('callRequests');
                                this.dialog = false;
                                this.updated = true;
                            })
                        break;
                }

            },
            emailRender() {
                this.email = this.$attrs.email;
                this.$parent.$data.open = false;
                this.$parent.$data.isEmail = true;
                this.$parent.$data.email = this.email;
            }
        }
        ,
        computed: {}
        ,
        watch: {
            open(val, old) {
                val ? this.dialog = true : this.dialog = false;
            }
        }
    }
</script>
