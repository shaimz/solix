<template>
    <div id="add-item-page">
        <Navbar :tabs="[{'Projects':'Projects','Add Project':'Add Project'}]" heading="Projects"
                :email-page="true"></Navbar>
        <v-form ref="form" v-model="form.valid" class="add-project" method="POST" enctype="multipart/form-data" :class="[loading ? 'loading-form' : '']">
            <input type="hidden" name="_token" v-bind:value="csrf">
            <div class="lds-dual-ring" v-if="loading"></div>
            <div>
                <h4 class="form-title">{{updatePage ? 'Edit Project' : 'Add Project'}}</h4>
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

            <div class="tab-content py-3" id="addProjectTabs">
                <div class="tab-pane fade" :class="{ 'active show': isActive(1) }" id="eng">
                    <v-container>
                        <v-row>
                            <h5 class="row-title">Visibility</h5>
                            <v-col cols="12">
                                <v-radio-group v-model="form[1].status" row mandatory>
                                    <v-radio color="success" :value="1" :label="'Show'"></v-radio>
                                    <v-radio color="success" :value="0" :label="'Hide'"></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>

                        <v-row>
                            <h5 class="row-title">Description</h5>
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

                        <v-row class="mt-5">
                            <h4 class="row-title">Additional Information</h4>
                        </v-row>

                        <v-row>
                            <v-col cols="6 pr-2">
                                <v-text-field v-model="form[1].location" placeholder="Location"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="form[1].power" placeholder="Power">
                                    <p
                                        slot="append"
                                        class="m-auto">
                                        Wt
                                    </p>
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" class="m-auto">
                                <div class="dropdown-types">
                                    <button @click.prevent="activateDropdown" type="submit" class="v-select-dropdown">
                                        {{isActiveCategory()}}
                                        <i v-if="dropdown" class="arrow up"></i>
                                        <i v-else class="arrow down"></i>
                                    </button>
                                    <ul class="position-absolute bg-white type-dropdown list-unstyled"
                                        v-if="dropdown">
                                        <li v-for="t in types">
                                            <p @click="selectType($event)" :data-id="t.type_id" class="parent">
                                                {{t.name}}</p>
                                        </li>
                                    </ul>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row class="mt-5">
                            <h4 class="row-title">Numerical value</h4>
                        </v-row>

                        <v-row v-for="(feature,index) in form[1].features" :key="index">
                            <v-col cols="6 pr-2">
                                <v-text-field
                                    v-model="feature.name"
                                    :placeholder="'Value'">
                                </v-text-field>
                            </v-col>

                            <v-col cols="6">
                                <v-text-field
                                    v-model="feature.value"
                                    :placeholder="'Number'">
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-btn class="add-to-item" @click="pushFeature">
                                Add specification
                                <img class="ml-2 fil-input-icon" v-lazy="'/assets/icons/add.jpg'"/>
                            </v-btn>
                        </v-row>

                        <v-row class="mt-5">
                            <h4 class="row-title">Article</h4>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form[1].description"
                                    placeholder="Project description"
                                    required
                                    name="text">
                                </v-textarea>
                            </v-col>
                        </v-row>

                        <div class="youtube">
                            <v-col cols="12">
                                <v-text-field
                                    v-model="link"
                                    placeholder="Youtube link"
                                    required
                                    name="text">
                                </v-text-field>
                            </v-col>
                        </div>

                        <div class="gallery-heading">
                            <h4 class="row-title">Gallery</h4>
                        </div>

                        <div class="gallery">
                            <v-col cols="12">
                                <label for="gallery-upload" class="add-to-item">
                                    <img class="file-input-icon ml-2" v-lazy="'/assets/icons/img.jpg'">
                                </label>
                                <input type="file" id="gallery-upload" v-on:change="galleryChosen" multiple>

                                <div class="gallery-items mb-4">
                                    <div v-for="item in form[1].gallery" class="d-flex">{{item.name}}<span @click="deleteGalleryItem(item)" class="gallery-delete ml-auto" style="cursor:pointer;"><img src="/assets/icons/delete.png" /></span></div>
                                </div>
                            </v-col>
                        </div>

                        <v-row class="d-flex justify-content-end">
                            <v-btn width="auto" class="discard-form" @click="discard">
                                Discard
                            </v-btn>
                            <v-btn v-if="updatePage" width="auto" right class="submit-form"
                                   v-on:click.stop.prevent="update">
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
                                <v-radio-group v-model="form[2].status" row mandatory>
                                    <v-radio color="success" :value="1" :label="'Show'"></v-radio>
                                    <v-radio color="success" :value="0" :label="'Hide'"></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>

                        <v-row>
                            <h5 class="row-title">Description</h5>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form[2].name"
                                    :placeholder="'Name'"
                                    required
                                    :rules="form[2].nameRules"
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

                        <v-row class="mt-5">
                            <h4 class="row-title">Additional Information</h4>
                        </v-row>

                        <v-row>
                            <v-col cols="6 pr-2">
                                <v-text-field v-model="form[2].location" placeholder="Location"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="form[2].power" placeholder="Power">
                                    <p
                                        slot="append"
                                        class="m-auto">
                                        Wt
                                    </p>
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" class="m-auto">
                                <div class="dropdown-types">
                                    <button @click.prevent="activateDropdown" type="submit" class="v-select-dropdown">
                                        {{isActiveCategory()}}
                                        <i v-if="dropdown" class="arrow up"></i>
                                        <i v-else class="arrow down"></i>
                                    </button>

                                    <ul class="position-absolute bg-white type-dropdown list-unstyled"
                                        v-if="dropdown">
                                        <li v-for="t in types">
                                            <p @click="selectType($event)" :data-id="t.type_id" class="parent">
                                                {{t.name}}</p>
                                        </li>
                                    </ul>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row class="mt-5">
                            <h4 class="row-title">Numerical value</h4>
                        </v-row>

                        <v-row v-for="(feature,index) in form[2].features" :key="index">
                            <v-col cols="6 pr-2">
                                <v-text-field
                                    v-model="feature.name"
                                    :placeholder="'Name'">
                                </v-text-field>
                            </v-col>

                            <v-col cols="6">
                                <v-text-field
                                    v-model="feature.value"
                                    :placeholder="'Specification'">
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-btn class="add-to-item" @click="pushFeature">
                                Add specification
                                <img class="ml-2 fil-input-icon" v-lazy="'/assets/icons/add.jpg'"/>
                            </v-btn>
                        </v-row>

                        <v-row class="mt-5">
                            <h4 class="row-title">Article</h4>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form[2].description"
                                    placeholder="Project description"
                                    required
                                    name="text"
                                ></v-textarea>
                            </v-col>
                        </v-row>

                        <div class="youtube">
                            <v-col cols="12">
                                <v-text-field
                                    v-model="link"
                                    placeholder="Youtube link"
                                    required
                                    name="text"
                                ></v-text-field>
                            </v-col>
                        </div>

                        <div class="gallery-heading">
                            <h4 class="row-title">Gallery</h4>
                        </div>

                        <div class="gallery">
                            <v-col cols="12">
                                <label for="gallery-upload" class="add-to-item">
                                    <img class="file-input-icon ml-2" v-lazy="'/assets/icons/img.jpg'">
                                </label>
                                <input type="file" id="gallery-upload" v-on:change="galleryChosen">

                                <div class="gallery-items mb-4">
                                    <div v-for="item in form[2].gallery" class="d-flex">{{item.name}}<span @click="deleteGalleryItem(item)" class="gallery-delete ml-auto" style="cursor:pointer;"><img src="/assets/icons/delete.png" /></span></div>
                                </div>
                            </v-col>
                        </div>

                        <v-row class="d-flex justify-content-end">
                            <v-btn width="auto" class="discard-form" @click="discard">
                                Discard
                            </v-btn>
                            <v-btn v-if="updatePage" width="auto" right class="submit-form"
                                   v-on:click.stop.prevent="update">
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
                                <v-radio-group v-model="form[3].status" row mandatory>
                                    <v-radio color="success" :value="1" :label="'Show'"></v-radio>
                                    <v-radio color="success" :value="0" :label="'Hide'"></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>

                        <v-row>
                            <h5 class="row-title">Description</h5>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form[3].name"
                                    :placeholder="'Name'"
                                    required
                                    :rules="form[3].nameRules">
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

                        <v-row class="mt-5">
                            <h4 class="row-title">Additional Information</h4>
                        </v-row>

                        <v-row>
                            <v-col cols="6 pr-2">
                                <v-text-field v-model="form[3].location" placeholder="Location"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="form[3].power" placeholder="Power">
                                    <p
                                        slot="append"
                                        class="m-auto">
                                        Wt
                                    </p>
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" class="m-auto">
                                <div class="dropdown-types">
                                    <button @click.prevent="activateDropdown" type="submit" class="v-select-dropdown">
                                        {{isActiveCategory()}}
                                        <i v-if="dropdown" class="arrow up"></i>
                                        <i v-else class="arrow down"></i>
                                    </button>
                                    <ul class="position-absolute bg-white type-dropdown list-unstyled"
                                        v-if="dropdown">
                                        <li v-for="t in types">
                                            <p @click="selectType($event)" :data-id="t.type_id" class="parent">
                                                {{t.name}}</p>
                                        </li>
                                    </ul>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row class="mt-5">
                            <h4 class="row-title">Numerical value</h4>
                        </v-row>

                        <v-row v-for="(feature,index) in form[3].features" :key="index">
                            <v-col cols="6 pr-2">
                                <v-text-field
                                    v-model="feature.name"
                                    :placeholder="'Name'">
                                </v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                    v-model="feature.value"
                                    :placeholder="'Specification'">
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-btn class="add-to-item" @click="pushFeature">
                                Add specification
                                <img class="ml-2 fil-input-icon" v-lazy="'/assets/icons/add.jpg'"/>
                            </v-btn>
                        </v-row>

                        <v-row class="mt-5">
                            <h4 class="row-title">Article</h4>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form[3].description"
                                    placeholder="Project description"
                                    required
                                    name="text">
                                </v-textarea>
                            </v-col>
                        </v-row>

                        <div class="youtube">
                            <v-col cols="12">
                                <v-text-field
                                    v-model="link"
                                    placeholder="Youtube link"
                                    required
                                    name="text">
                                </v-text-field>
                            </v-col>
                        </div>

                        <div class="gallery-heading">
                            <h4 class="row-title">Gallery</h4>
                        </div>

                        <div class="gallery">
                            <v-col cols="12">
                                <label for="gallery-upload" class="add-to-item">
                                    <img class="file-input-icon ml-2" v-lazy="'/assets/icons/img.jpg'">
                                </label>

                                <input type="file" id="gallery-upload" v-on:change="galleryChosen">

                                <div class="gallery-items mb-4">
                                    <div v-for="item in form[3].gallery" class="d-flex">
                                        {{item.name}}
                                        <span @click="deleteGalleryItem(item)" class="gallery-delete ml-auto" style="cursor:pointer;">
                                            <img src="/assets/icons/delete.png" />
                                        </span>
                                    </div>
                                </div>
                            </v-col>
                        </div>

                        <v-row class="d-flex justify-content-end">
                            <v-btn width="auto" class="discard-form" @click="discard">
                                Discard
                            </v-btn>

                            <v-btn v-if="updatePage" width="auto" right class="submit-form"
                                   v-on:click.stop.prevent="update">
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
        name: 'AddProject',
        components: {
            Navbar
        },
        props: ['lang', 'id'],
        data(){
            return {
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                updatePage: false,
                form: [],
                link:'',
                image:'',
                dropdown:false,
                lang_id: 2,
                updated:false,
                loading:false
            }
        },
        created(){
            this.lang_id = Vue.ls.get('language', 1);
            let _this = this;

            Vue.ls.on('language', function (val) {
                _this.lang_id = val;
            })

            this.$store.dispatch('types',{lang_id:2})

            for (let i = 1; i < 4; i++) {
                Vue.set(this.form, i, {
                    valid: false,
                    status: 1,
                    header: '',
                    description: '',
                    features: [
                        {
                            name: '',
                            value: '',
                            id: null
                        },
                        {
                            name: '',
                            value: '',
                            id: null
                        }
                    ],
                    location: '',
                    power: '',
                    name: '',
                    nameRules: [
                        v => !!v || 'Name is required'
                    ],
                    type: '',
                    type_id: 1,
                    image: '',
                    imageFile: null,
                    link:'',
                    activeItem: i,
                    gallery:[],
                    errors: '',
                    success:''
                })
            }

            this.lang_id = 2;
            this.$store.commit('getDataForm',[]);

            if (this.$router.currentRoute.path.includes('/edit')) {
                this.$store.dispatch('singleProject', {id: this.$route.params.id}).then((res) => {
                    let projects = this.$store.getters.getSingleProject;

                    for(let i = 1;i<=3;i++) {
                        let data     = [];
                        let language = i;

                        if (projects[language]['id']) {
                            data = projects[language];
                        } else {
                            data = Object.keys(projects).map((item, i) => {
                                if (projects[item]['lang_id']) return projects[item]
                            })

                            data = data.filter(item => {return item != null})
                            data = data.find(item => item['id'] !== null)

                            this.form[i]['description'] = '';
                            this.form[i]['name']        = '';
                            this.form[i]['location']    = '';

                            this.form[i].features.forEach((e) => {
                                e.name  = '';
                                e.value = '';
                            })

                            this.form[i]['power']   = data['power'];
                            this.form[i]['status']  = data['status'];
                            this.form[i]['type_id'] = data['type_id'];
                            this.form[i]['link']    = data['link'];
                            this.link               = data['link'];
                            this.form[i]['gallery'] = data['gallery'] ? data['gallery'] : [];
                        }

                        this.image = data['image'];

                        if(!projects[i]['name']) continue;

                        for (let elem in this.form[language]) {
                            if (data[elem]) {
                                if (Array.isArray(this.form[language][elem])) {
                                    if (elem === 'gallery') {
                                        this.form[language][elem] = data[elem];
                                    } else {
                                        for (let e in data[elem]){
                                            this.form[language][elem][e] = data[elem][e];
                                        }
                                    }
                                } else {
                                    this.form[language][elem] = data[elem];
                                    this.link = data['link'];
                                    if (data['image']) this.form[language]['image'] = data['image'].split('/').pop();
                                    this.form[language]['status'] = parseInt(data['status']);
                                }
                            }
                        }
                    }
                });
            }
        },
        methods: {
            activateDropdown() {
                this.dropdown = !this.dropdown;
            },
            pushFeature() {
                this.form[this.lang_id].features.push({name: '', value: ''})
            },
            deleteGalleryItem(item){
                this.form.forEach((e,i) => {
                    this.form[i].gallery = this.form[i].gallery.filter(el => el.name !== item.name)
                })
            },
            isActiveCategory() {
                let id = parseInt(this.form[this.lang_id].type_id);
                let types = this.types;
                if (this.form[this.lang_id].type) {
                    for (let i = 0; i < types.length; i++) {
                        if (types[i].type_id === id) {
                            return types[i].name;
                        }
                    }
                }
                return 'Select a type';
            },
            selectType(event) {
                if (this.form[this.lang_id].type_id !== $(event.target).attr('data-id')) {
                    this.form[this.lang_id].type_id = $(event.target).attr('data-id');
                    this.form[this.lang_id].type = $(event.target).text().trim()
                }
                this.dropdown = false;
            },
            galleryChosen(event){
                for (let i in event.target.files){
                    if (typeof event.target.files[i] === 'object'){
                        this.form[2].gallery.push({
                             'name' : event.target.files[i].name,
                             'file' : event.target.files[i]
                         });
                    }
                }
                /*for (let i in event.target.files){
                    if (typeof event.target.files[i] === 'object'){
                        for (let j=1; j<4; j++){
                            this.form[j].gallery.push({
                                 'name': event.target.files[i].name,
                                 'file': event.target.files[i]
                            });
                        }
                    }
                }*/
            },
            imageChosen(event) {
                this.form[this.lang_id].image = event.target.files[0].name;
                this.form[this.lang_id].imageFile = event.target.files[0];
            },
            setActive(event, menuItem) {
                let thisForm = {...this.form};
                let language = this.lang_id;
                this.lang_id = menuItem;
                this.$store.dispatch('types',{lang_id:this.lang_id})
                Vue.ls.set('language', parseInt(menuItem));

                if (Array.from(this.$store.state.dataForm).find(item => item.activeItem === menuItem)) {
                /*    if(!this.updatePage){
                        if(language !== menuItem) {
                            this.$store.dispatch('dataForm', thisForm);
                        }
                    }*/
                    this.form = this.$store.state.dataForm;
                } else {
                    if (!this.updatePage) {
                        this.form.type = '';
                        this.form.image = '';
                        this.form.imageFile = null;
                    }
                    this.form.type = '';
                    this.form.location = '';
                    this.form.name = '';
                    this.form.description = '';
                    this.form.features = [
                        {
                            name: '',
                            value: ''
                        },
                        {
                            name: '',
                            value: ''
                        }
                    ]
                }

                if (this.updatePage) {
                    if(language !== menuItem) {
                        this.$store.dispatch('singleProject', {id: this.$route.params.id}).then(() => {
                            if (this.updatePage) {
                                if (this.projects[menuItem]) {
                                    let data = this.projects[menuItem];
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
                                                this.form[menuItem]['status'] = parseInt(data['status']);
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    }
                }

                for(let i = 1;i <= 3;i++){
                    thisForm[i].power = this.form[2].power ? this.form[2].power : (this.form[1].power ? this.form[1].power : this.form[3].power);
                    thisForm[i].image = this.form[2].image ? this.form[2].image : (this.form[1].image ? this.form[1].image : this.form[3].image);
                    thisForm[i].gallery = this.form[2].gallery ? this.form[2].gallery : (this.form[1].gallery ? this.form[1].gallery : this.form[3].gallery);
                    thisForm[i].type = this.form[2].type ? this.form[2].type : (this.form[1].type ? this.form[1].type : this.form[3].type);
                    thisForm[i].type_id = this.form[2].type_id ? this.form[2].type_id : (this.form[1].type_id ? this.form[1].type_id : this.form[3].type_id);
                    thisForm[i].status = this.form[i].status;
                    thisForm[i].link = this.form[2].link ? this.form[2].link : (this.form[1].link ? this.form[1].link : this.form[3].link);
                    this.link = this.form[2].link ? this.form[2].link : (this.form[1].link ? this.form[1].link : this.form[3].link);
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
                this.form[this.lang_id].gallery = {name: '',file: ''};
                if(this.updatePage){
                    this.$store.dispatch('page',this.$route.params.pagination)
                }
                this.$router.go(-1)
            },
            send() {
                let form     = new FormData();
                this.loading = true;

                this.form.forEach((f, i) => {
                    if (f.name) {
                        form.append('image', f.imageFile);
                        this.form[2].gallery.forEach((e,i) => {
                            form.append('gallery_images[]',e.file);
                        })

                        form.append('data[]', JSON.stringify(f));
                    } else if(!f.name && i === this.lang_id){
                        this.loading = false;
                        this.form[i].errors = 'Some fields needs to be completed'
                    }
                })

                if(this.loading){
                    axios.post('/admin/projects/add', form)
                        .then((res) => {
                            if (res.status === 200 && !res.data.error)
                                this.loading = false;
                                this.$router.go(-1)
                        });
                }
            },
            update() {
                this.loading = true;
                this.form.forEach((f, i) => {
                    if (f.name) {
                        let form = new FormData();

                        form.append('image', f.imageFile);
                        form.append('data', JSON.stringify(f));

                        if (i === 2){
                            this.form[2].gallery.forEach((e,i) => {
                                form.append('gallery_images[]',e.file);
                            })
                        }

                        axios.post(`/admin/projects/${this.$route.params.id}`, form)
                            .then((res) => {
                                if (this.form[i + 1] === undefined || !this.form[i + 1].name) {
                                    this.loading = false;
                                    this.form[i].success = 'Updated successfully';
                                    form.delete('gallery_images[]');
                                    this.form[i].gallery.forEach((e,index) => {
                                        this.form[i].gallery[index].file = '';
                                    })

                                    setTimeout(()=>{
                                        this.form[i].success = '';
                                    },3000)
                                }
                            })
                    } else {
                        this.loading = false;
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

        },
        watch: {
            lang_id: function (val) {
                Vue.ls.set('language', val);
            },
            link(n,o){
                if(n !== o){
                    for(let i = 1;i<=3;i++){
                        this.form[i].link = n;
                    }
                }
            }
        },

        computed: {
            projects() {
                return this.$store.getters.getSingleProject;
            },
            types(){
                return this.$store.getters.getTypes;
            }
        }
    }
</script>
<style scoped>
    .dropdown-types {
        margin-top: -6px;
    }

    .type-dropdown {
        z-index: 1;
        max-height: 300px;
        overflow: scroll;
        width: 100%;
        padding-left: 0 !important;
    }

    .type-dropdown ul {
        list-style: none;
        padding-left: 0 !important;
    }

    .type-dropdown li {
        cursor: pointer;
        padding: 15px 0px 15px 50px;
    }

    .type-dropdown li p {
        margin-bottom: 0 !important;
    }

    .type-dropdown li:hover {
        background: rgba(121, 194, 90, .07);
    }

    .v-select-dropdown {
        background: #F3F5F6;
        border-radius: 6px;
        width: 100%;
        padding: 13px 20px 13px 20px;
        text-align: left;
        color: #555555;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
