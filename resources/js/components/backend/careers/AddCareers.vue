<template>
    <div id="add-item-page">
        <Navbar :tabs="[{'Careers':'Careers','Add Job':'Add Job'}]" heading="Job" :email-page="true"></Navbar>
        <v-form ref="form" v-model="form.valid" class="add-news add-career" :class="[loading ? 'loading-form' : '']" method="POST"
                enctype="multipart/form-data">
            <input type="hidden" name="_token" v-bind:value="csrf">
            <div class="lds-dual-ring" v-if="loading"></div>
            <div>
                <h4 class="form-title">{{updatePage ? 'Edit Job' : 'Add Job'}}</h4>
                <ul class="list-group-inline">
                    <li class="nav-item" data-id="3">
                        <a class="nav-link" href="#rus" @click.prevent="setActive($event,3)"
                           :class="{ active: isActive(3) }">RUS</a>
                    </li>
                    <li class="nav-item" data-id="1">
                        <a class="nav-link" @click.prevent="setActive($event,1)" href="#eng"
                           :class="{ active: isActive(1) }">ENG</a>
                    </li>
                    <li class="nav-item" data-id="2">
                        <a class="nav-link" href="#ro" @click.prevent="setActive($event,2)"
                           :class="{ active: isActive(2) }">RO</a>
                    </li>

                </ul>
            </div>

            <div class="tab-content py-3" id="addNewsTabs">
                <div class="tab-pane fade" :class="{ 'active show': isActive(1) }" id="eng">
                    <v-container>
                        <v-row>
                            <h5 class="row-title">Visibility</h5>
                            <v-col cols="12">
                                <v-radio-group v-model="form[1].available" row mandatory>
                                    <v-radio color="success" :value="1" :label="'Show'"></v-radio>
                                    <v-radio color="success" :value="0" :label="'Hide'"></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>

                        <v-row>
                            <h5 class="row-title">Name</h5>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form[1].name"
                                    :placeholder="'Name'"
                                    required
                                    :rules="form[1].nameRules"
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form[1].location"
                                    :placeholder="'Location'"
                                    required
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form[1].description"
                                    placeholder="Job description"
                                    required
                                    name="text"
                                    :rules="form[1].descriptionRules"
                                ></v-textarea>
                            </v-col>
                        </v-row>

                        <v-row class="d-flex justify-content-end">
                            <v-btn width="auto" class="discard-form" @click="discard">
                                Discard
                            </v-btn>
                            <v-btn v-if="updatePage" width="auto" right class="submit-form"
                                   v-on:click.stop.prevent="update"
                            >
                                UPDATE
                            </v-btn>
                            <v-btn v-else width="auto" right class="submit-form"
                                   v-on:click.stop.prevent="send">
                                SEND
                            </v-btn>
                        </v-row>
                        <input type="hidden" :value="1"/>
                    </v-container>
                </div>
                <div class="tab-pane fade" :class="{ 'active show': isActive(2) }" id="ro">
                    <v-container>
                        <v-row>
                            <h5 class="row-title">Visibility</h5>
                            <v-col cols="12">
                                <v-radio-group v-model="form[2].available" row mandatory>
                                    <v-radio color="success" :value="1" :label="'Show'"></v-radio>
                                    <v-radio color="success" :value="0" :label="'Hide'"></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>

                        <v-row>
                            <h5 class="row-title">Career</h5>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form[2].name"
                                    :placeholder="'Name'"
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form[2].location"
                                    :placeholder="'Location'"
                                    required
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form[2].description"
                                    placeholder="Job description"
                                    required
                                    name="text"
                                ></v-textarea>
                            </v-col>
                        </v-row>

                        <v-row class="d-flex justify-content-end">
                            <v-btn width="auto" class="discard-form" @click="discard">
                                Discard
                            </v-btn>
                            <v-btn v-if="updatePage" width="auto" right class="submit-form"
                                   v-on:click.stop.prevent="update"
                            >
                                UPDATE
                            </v-btn>
                            <v-btn v-else width="auto" right class="submit-form"
                                   v-on:click.stop.prevent="send">
                                SEND
                            </v-btn>
                        </v-row>
                        <input type="hidden" :value="2"/>
                    </v-container>
                </div>
                <div class="tab-pane fade" :class="{ 'active show': isActive(3) }" id="rus">
                    <v-container>
                        <v-row>
                            <h5 class="row-title">Visibility</h5>
                            <v-col cols="12">
                                <v-radio-group v-model="form[3].available" row mandatory>
                                    <v-radio color="success" :value="1" :label="'Show'"></v-radio>
                                    <v-radio color="success" :value="0" :label="'Hide'"></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>

                        <v-row>
                            <h5 class="row-title">Career</h5>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form[3].name"
                                    :placeholder="'Name'"
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form[3].location"
                                    :placeholder="'Location'"
                                    required
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form[3].description"
                                    placeholder="Job description"
                                    required
                                    name="text"
                                ></v-textarea>
                            </v-col>
                        </v-row>

                        <v-row class="d-flex justify-content-end">
                            <v-btn width="auto" class="discard-form" @click="discard">
                                Discard
                            </v-btn>
                            <v-btn v-if="updatePage" width="auto" right class="submit-form"
                                   v-on:click.stop.prevent="update"
                            >
                                UPDATE
                            </v-btn>
                            <v-btn v-else width="auto" right class="submit-form"
                                   v-on:click.stop.prevent="send">
                                SEND
                            </v-btn>
                        </v-row>
                        <input type="hidden" :value="3"/>
                    </v-container>
                </div>
                <p class="text-center text-danger mt-3">{{form[lang_id].errors ? form[lang_id].errors : ''}}</p>
                <p class="text-center text-success mt-3">{{form[lang_id].success ? form[lang_id].success : ''}}</p>
            </div>
        </v-form>
    </div>
</template>

<script>
    import {bus} from "../../../event/eventbus";

    const Navbar = () => import("../includes/Navbar");

    export default {
        name: 'Career',
        components: {
            Navbar,
        },
        props: ['lang', 'id'],
        data() {
            return {
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                updatePage: false,
                form: [],
                lang_id: 2,
                loading: false,
            }
        },
        created: function () {
            this.lang_id = Vue.ls.get('language', 1);
            let _this = this;
            Vue.ls.on('language', function (val) {
                _this.lang_id = val;
            })

            for (let i = 1; i < 4; i++) {
                Vue.set(this.form, i, {
                    valid: false,
                    status: 1,
                    header: '',
                    description: '',
                    descriptionRules: [
                        v => !!v || 'Description is required',
                    ],
                    name: '',
                    nameRules: [
                        v => !!v || 'Name is required',
                    ],
                    activeItem: i,
                    errors: '',
                    success:''
                })
            }
        },
        methods: {
            setActive(event, menuItem) {
                let thisForm = {...this.form};
                let language = this.lang_id;
                this.lang_id = menuItem;
                Vue.ls.set('language', parseInt(menuItem));

                if (Array.from(this.$store.state.dataForm).find(item => item.activeItem === menuItem)) {
                    /*       if(!this.updatePage){
                               if(language !== menuItem){
                                   this.$store.dispatch('dataForm',thisForm);
                               }
                           }*/
                    this.form = this.$store.state.dataForm;
                } else {
                    this.form.name = '';
                    this.form.description = '';
                    this.form.location = '';
                }

                if (this.updatePage) {
                    if (language !== menuItem) {
                        this.$store.dispatch('singleCareer', {
                            id: this.$route.params.id,
                            lang_id: menuItem
                        }).then(() => {
                            let data = [];
                            let career = this.careers;
                            if (career['translates']) {
                                data = career;
                            } else {
                                this.form[menuItem]['name'] = '';
                                this.form[menuItem]['description'] = '';
                                this.form[menuItem]['location'] = '';
                            }
                            for (let elem in data) {
                                if (data[elem]) {
                                    if (typeof data[elem] === 'object') {
                                        for (let e in data[elem]) {
                                            if (data[elem][e]) {
                                                this.form[menuItem][e] = data[elem][e]
                                            }
                                        }
                                    } else {
                                        this.form[menuItem][elem] = data[elem];
                                        this.form[menuItem]['status'] = parseInt(data['status']);
                                    }
                                }
                            }
                        })
                    }
                }

                this.$store.dispatch('dataForm', thisForm)
            },
            isActive(menuItem) {
                if (this.getRoute(this.$route.path)) {
                    this.updatePage = true;
                }
                return parseInt(menuItem) === parseInt(this.lang_id);
            },
            discard() {
                this.$refs.form.reset()
                if(this.updatePage){
                    this.$store.dispatch('page',this.$route.params.pagination)
                }
                this.$router.go(-1)
            },
            send() {
                let form = new FormData();
                let process = false;
                this.form.forEach((f, i) => {
                    if (f.name) {
                        form.append('file', f.file);
                        form.append('data[]', JSON.stringify(f));
                    }
                    process = true;

                    if (!f.name && i === this.lang_id) {
                        this.form[i].errors = 'Some fields needs to be completed'
                        process = false;
                    }
                })
                if (process) {
                    axios.post('/admin/careers/add', form)
                        .then((res) => {
                            if(res.status === 200 && !res.data.error){
                                process = false;
                                this.$router.go(-1)
                            }else{
                                this.form[this.lang_id].errors = res.data.error;
                            }
                        });
                }

            },
            update() {
                this.loading = true;
                this.form.forEach((f, i) => {
                    if (f.name) {
                        let form = new FormData();

                        form.append('data', JSON.stringify(f));

                        axios.post(`/admin/careers/${this.$route.params.id}`, form)
                            .then((res) => {
                                if (this.form[i + 1] === undefined || !this.form[i + 1].name) {
                                    this.loading = false;
                                    this.form[i].success = 'Updated successfully';
                                    setTimeout(()=>{
                                        this.form[i].success = '';
                                    },3000)
                                }
                            })
                    } else if(!f.name && i === this.lang_id) {
                        this.form[i].errors = 'Some fields needs to be completed'
                    }
                })
            },
            getRoute(route) {
                let length = route.split("/").length;
                let array = route.split('/');
                return array[length - 1] === 'edit';
            }
        },
        mounted() {
            this.lang_id = 2
            this.$store.state.dataForm = [];

            if (this.updatePage) {
                this.$store.dispatch('singleCareer', {id: this.$route.params.id, lang_id: this.lang_id}).then(() => {
                    let data = [];
                    if (this.careers['id']) {
                        data = this.careers
                    }
                    for (let elem in data) {
                        if (data[elem]) {
                            if (typeof data[elem] === 'object') {
                                for (let e in data[elem]) {
                                    if (data[elem][e]) {
                                        this.form[this.lang_id][e] = data[elem][e]
                                    }
                                }
                            } else {
                                this.form[this.lang_id][elem] = data[elem];
                            }
                        }
                    }
                })
            }
        },
        watch: {
            lang_id: function (val) {
                Vue.ls.set('language', val);
            }
        },

        computed: {
            careers() {
                return this.$store.getters.getSingleCareer;
            }
        }
    }
</script>
