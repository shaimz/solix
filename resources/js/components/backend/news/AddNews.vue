<template>
    <div id="add-item-page">
        <Navbar :tabs="[{'News':'Blog','Add News':'Add Article'}]" heading="Blog" :email-page="true"></Navbar>
        <v-form ref="form" v-model="form.valid" class="add-news" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="_token" v-bind:value="csrf">
            <div>
                <h4 class="form-title">{{updatePage ? 'Edit Article' : 'Add Article'}}</h4>
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
                            <h5 class="row-title">Article</h5>
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
                                <label for="img-upload" class="add-to-item">
                                    {{image ? image : 'Add image'}}
                                    <img class="file-input-icon ml-2" v-lazy="'/assets/icons/img.jpg'">
                                </label>
                                <input type="file" id="img-upload" v-on:change="imageChosen">
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form[1].description"
                                    placeholder="News description"
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
                            <h5 class="row-title">Article</h5>
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
                                <label for="img-upload" class="add-to-item">
                                    {{image ? image : 'Add image'}}
                                    <img class="file-input-icon ml-2" v-lazy="'/assets/icons/img.jpg'">
                                </label>
                                <input type="file" id="img-upload" v-on:change="imageChosen">
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form[2].description"
                                    placeholder="News description"
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
                            <h5 class="row-title">Article</h5>
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
                                <label for="img-upload" class="add-to-item">
                                    {{image ? image : 'Add image'}}
                                    <img class="file-input-icon ml-2" v-lazy="'/assets/icons/img.jpg'">
                                </label>
                                <input type="file" id="img-upload" v-on:change="imageChosen">
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form[3].description"
                                    placeholder="News description"
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
        name: 'News',
        components: {
            Navbar,
        },
        props: ['lang', 'id'],
        data() {
            return {
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                updatePage: false,
                form: [],
                image:'',
                lang_id: 2,
                updated: false,
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
                    available: 1,
                    header: '',
                    description: '',
                    name: '',
                    nameRules: [
                        v => !!v || 'Name is required',
                    ],
                    image: '',
                    file: null,
                    activeItem: i,
                    errors: '',
                    success:''
                })
            }
        },
        methods: {
            imageChosen(event) {
                this.form[this.lang_id].image = event.target.files[0].name;
                this.form[this.lang_id].file = event.target.files[0];
            },
            setActive(event, menuItem) {
                let thisForm = {...this.form};
                let language = this.lang_id;
                this.lang_id = menuItem;
                Vue.ls.set('language', parseInt(menuItem));

                if (Array.from(this.$store.state.dataForm).find(item => item.activeItem === menuItem)) {
                    /* if(!this.updatePage){
                         if(language !== menuItem){
                             this.$store.dispatch('dataForm',thisForm);
                         }
                     }*/
                    this.form = this.$store.state.dataForm;
                } else {
                    if (!this.updatePage) {
                        this.form.image = '';
                        this.form.file = null;
                    }
                    this.form.name = '';
                    this.form.description = '';

                }

                if (this.updatePage) {
                    if (language !== menuItem) {
                        this.$store.dispatch('singleNews', {id: this.$route.params.id}).then(() => {
                            let data = [];
                            if (this.news[menuItem]['id']) {
                                data = this.news[menuItem];
                            } else {
                                data = Object.keys(this.news).map((item, i) => {
                                    if (this.news[item]['lang_id']) return this.news[item]
                                })
                                data = data.find(item => item['id'] !== null)

                                data['name'] = '';
                                data['description'] = '';
                            }
                            for (let elem in this.form[menuItem]) {
                                if (data[elem]) {
                                    if (Array.isArray(this.form[menuItem][elem])) {
                                        for (let e in this.form[menuItem][elem]) {
                                            if (data[elem][e]) {
                                                for (let i in this.form[menuItem][elem][e]) {
                                                    this.form[menuItem][elem][e][i] = data[elem][e][i]
                                                }
                                            }
                                        }
                                    } else {
                                        this.form[menuItem][elem] = data[elem];
                                        this.form[menuItem]['available'] = parseInt(data['available']);
                                        if (data['image']) this.form[menuItem]['image'] = data['image'].split('/').pop();
                                    }
                                }
                            }
                        })
                    }
                }

                for (let i = 1; i <= 3; i++) {
                    thisForm[i].image = this.form[2].image ? this.form[2].image : (this.form[1].image ? this.form[1].image : this.form[3].image);
                    thisForm[i].available = this.form[i].available;
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
                this.form[this.lang_id].image = '';
                this.form[this.lang_id].imageFile = null;
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

                    if ( !f.name && i === this.lang_id) {
                        this.form[i].errors = 'Some fields needs to be completed'
                        process = false;
                    }
                })
                if (process) {
                    axios.post('/admin/news/add', form)
                        .then((res) => {
                            res.status === 200 && !res.data.error
                            {
                                this.$router.go(-1)
                            }
                        });
                }
            },
            update() {
                this.form.forEach((f, i) => {
                    if (f.name) {
                        let form = new FormData();

                        form.append('file', f.file);
                        form.append('data', JSON.stringify(f));

                        axios.post(`/admin/news/${this.$route.params.id}`, form)
                            .then((res) => {
                                if (this.form[i + 1] === undefined || !this.form[i + 1].name) {
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
        }
        ,
        mounted() {
            this.lang_id = 2
            this.$store.state.dataForm = [];

            if (this.updatePage) {
                this.$store.dispatch('singleNews', {id: this.$route.params.id}).then(() => {
                    for(let i = 1;i<=3;i++) {
                        let data = [];
                        let language = i;

                        if (this.news[language]['id']) {
                            data = this.news[language];
                        } else {
                            data = Object.keys(this.news).map((item, i) => {
                                if (this.news[item]['lang_id']) return this.news[item]
                            })
                            data = data.filter(item => {return item != null})
                            data = data.find(item => item['id'] !== null)

                            this.form[i]['description'] = '';
                            this.form[i]['name'] = '';
                        }
                        this.image = data['image'];

                        if(!this.news[i]['name']) continue;

                        for (let elem in this.form[language]) {
                            if (data[elem]) {
                                if (Array.isArray(this.form[language][elem])) {
                                    for (let e in this.form[language][elem]) {
                                        if (data[elem][e]) {
                                            for (let i in this.form[language][elem][e]) {
                                                this.form[language][elem][e][i] = data[elem][e][i]
                                            }
                                        }
                                    }
                                } else {
                                    this.form[language][elem] = data[elem];
                                    this.form[language]['available'] = parseInt(data['available']);
                                    if (data['image']) this.form[language]['image'] = data['image'].split('/').pop();
                                }
                            }
                        }
                    }
                })
            }
        }
        ,
        watch: {
            lang_id: function (val) {
                Vue.ls.set('language', val);
            }
        }
        ,

        computed: {
            news() {
                return this.$store.getters.getSingleNews;
            }
        }
    }
</script>
