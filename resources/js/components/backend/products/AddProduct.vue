<template>
    <div id="add-item-page">
        <Navbar :tabs="[{'Products':'Products','Add Product':'Add Product'}]" heading="Products"
                :email-page="true"></Navbar>

        <v-form ref="form" v-model="form.valid" class="add-product" method="POST" enctype="multipart/form-data" :class="[loading ? 'loading-form' : '']">
            <input type="hidden" name="_token" v-bind:value="csrf">
            <div class="lds-dual-ring" v-if="loading"></div>

            <div>
                <h4 class="form-title">{{updatePage ? 'Edit Product' : 'Add Product'}}</h4>
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

            <div class="tab-content py-3" id="addProductTabs">
                <div :class="['tab-pane fade',{ 'active show': isActive(1) }]" id="eng">
                    <v-container>
                        <v-row>
                            <h5 class="row-title">Stock</h5>
                            <v-col cols="12">
                                <v-radio-group v-model="form[1].available" row mandatory>
                                    <v-radio color="success" :value="1" :label="'In stock'" @change="updateValues('available', 1)"></v-radio>
                                    <v-radio color="success" :value="0" :label="'Out of stock'" @change="updateValues('available', 0)"></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>

                        <v-row>
                            <h5 class="row-title">Description</h5>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form[1].name"
                                    :placeholder="'Product name'"
                                    required
                                    :rules="form[1].nameRules"
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" class="pr-2">
                                <v-text-field
                                    v-model="form[1].sku"
                                    :placeholder="'Set number'"
                                    @keyup="updateValues('sku', $event.target.value)"
                                >

                                </v-text-field>
                            </v-col>

                            <v-col cols="6" class="m-auto">
                                <div class="dropdown-categories">
                                    <button @click.prevent="activateDropdown" type="submit" class="v-select-dropdown">
                                        {{isActiveCategory()}}
                                        <i v-if="dropdown" class="arrow up"></i>
                                        <i v-else class="arrow down"></i>
                                    </button>
                                    <ul class="position-absolute bg-white category-dropdown list-unstyled"
                                        v-if="dropdown">
                                        <li v-for="category in groupCategories(categories)">
                                            <p @click="selectCategory($event)" :data-id="category.id" class="parent">
                                                {{category.name}}</p>
                                            <ul v-if="category.child">
                                                <li @click="selectCategory($event)" :data-id="subcategory.id"
                                                    v-for="subcategory in category.child">
                                                    - {{subcategory.name}}
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form[1].price"
                                    :placeholder="'Price'"
                                    @keyup="updateValues('price', $event.target.value)"
                                >
                                    <p
                                        slot="append"
                                        class="m-auto">
                                        EUR
                                    </p>
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" class="pr-2">
                                <v-text-field
                                    v-model="form[1].brand"
                                    :placeholder="'Brand'"
                                    @keyup="updateValues('brand', $event.target.value)"
                                >
                                </v-text-field>
                            </v-col>

                            <v-col cols="6" class="m-auto">
                                <label for="logo-upload" class="add-to-item">
                                    {{logo ? logo : 'Image'}}
                                    <img class="file-input-icon ml-2" v-lazy="'/assets/icons/img.jpg'">
                                </label>
                                <input type="file" id="logo-upload" v-on:change="logoChosen"/>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form[1].description"
                                    placeholder="Body"
                                    required
                                    name="text"
                                ></v-textarea>
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

                        <div class="document">
                            <v-row>
                                <label for="document-upload" class="add-to-item">
                                    {{document ? document : 'Add document'}}
                                    <img class="file-input-icon ml-2" v-lazy="'/assets/icons/img.jpg'">
                                </label>
                                <input id="document-upload" type="file" style="display:none;" v-on:change="documentChosen($event)">
                            </v-row>
                        </div>

                        <v-row class="mt-5">
                            <h4 class="row-title">Features</h4>
                        </v-row>

                        <v-row v-for="(f,index) in form[1].features" :key="`feature-${index}`" class="features-block">
                            <v-col cols="6 pr-2">
                                <v-text-field v-model="f.feature_name" placeholder="Name"></v-text-field>
                            </v-col>

                            <v-col cols="6">
                                <v-text-field v-model="f.feature_value" placeholder="Feature"></v-text-field>
                            </v-col>

                            <span class="feature-delete" @click="deleteFeature(index)"><img src="/assets/icons/delete.png" title="Delete feature"></span>
                        </v-row>

                        <v-row>
                            <v-btn class="add-to-item" @click="pushFeature">
                                Add specification
                                <img class="ml-2 fil-input-icon" v-lazy="'/assets/icons/add.jpg'"/>
                            </v-btn>
                        </v-row>

                        <v-row class="mt-5">
                            <h4 class="row-title">Benefits</h4>
                        </v-row>

                        <v-col cols="12" v-for="(f,index) in form[1].advantages" :key="`advantages-${index}`">
                            <v-row>
                                <v-col cols="6 pr-2">
                                    <v-text-field v-model="f.name" placeholder="Name"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="f.value" placeholder="Benefits"></v-text-field>
                                </v-col>
                            </v-row>

                            <label :for="`file-upload-${index}`" class="add-to-item w-100">
                                {{f.icon ? f.icon : 'Add icon'}}
                                <img class="ml-2 file-input-icon" v-lazy="'/assets/icons/img.jpg'"/>
                            </label>
                            <input :id="`file-upload-${index}`" type="file" style="display:none"
                                   v-on:change="iconChosen($event,index)"/>
                        </v-col>

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

                <div class="tab-pane fade" :class="{ 'active show': isActive(3) }" id="rus">
                    <v-container>
                        <v-row>
                            <h5 class="row-title">Stock</h5>
                            <v-col cols="12">
                                <v-radio-group v-model="form[3].available" row>
                                    <v-radio color="success" :value="1" :label="'In stock'" @change="updateValues('available', 1)"></v-radio>
                                    <v-radio color="success" :value="0" :label="'Out of stock'" @change="updateValues('available', 0)"></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>

                        <v-row>
                            <h5 class="row-title">Description</h5>
                            <v-col cols="12">
                                <v-text-field
                                    :placeholder="'Product name'"
                                    v-model="form[3].name"
                                    required
                                    :rules="form[3].nameRules">
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" class="pr-2">
                                <v-text-field
                                    :placeholder="'Set number'"
                                    v-model="form[3].sku"
                                    @keyup="updateValues('sku', $event.target.value)">

                                </v-text-field>
                            </v-col>
                            <v-col cols="6" class="m-auto">
                                <div class="dropdown-categories">
                                    <button @click.prevent="activateDropdown" type="submit" class="v-select-dropdown">
                                        {{isActiveCategory()}}
                                        <i v-if="dropdown" class="arrow up"></i>
                                        <i v-else class="arrow down"></i>
                                    </button>
                                    <ul class="position-absolute bg-white category-dropdown list-unstyled"
                                        v-if="dropdown">
                                        <li v-for="category in groupCategories(categories)">
                                            <p @click="selectCategory($event)" :data-id="category.id" class="parent">
                                                {{category.name}}</p>
                                            <ul v-if="category.child">
                                                <li @click="selectCategory($event)" :data-id="subcategory.id"
                                                    v-for="subcategory in category.child">
                                                    - {{subcategory.name}}
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    :placeholder="'Price'"
                                    v-model="form[3].price"
                                    @keyup="updateValues('price', $event.target.value)">
                                    <p
                                        slot="append"
                                        class="m-auto">
                                        EUR
                                    </p>
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" class="pr-2">
                                <v-text-field
                                    :placeholder="'Brand'"
                                    v-model="form[3].brand"
                                    @keyup="updateValues('brand', $event.target.value)"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="6" class="m-auto">
                                <label for="logo-upload" class="add-to-item">
                                    {{logo ? logo : 'Image'}}
                                    <img class="file-input-icon ml-2" v-lazy="'/assets/icons/img.jpg'">
                                </label>
                                <input type="file" id="logo-upload" v-on:change="logoChosen"/>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form[3].description"
                                    placeholder="Body"
                                    required
                                    name="text"
                                ></v-textarea>
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

                        <div class="document">
                            <v-row>
                                <label for="document-upload" class="add-to-item">
                                    {{document ? document : 'Add document'}}
                                    <img class="file-input-icon ml-2" v-lazy="'/assets/icons/img.jpg'">
                                </label>
                                <input id="document-upload" type="file" style="display:none;" v-on:change="documentChosen($event)">
                            </v-row>
                        </div>

                        <v-row class="mt-5">
                            <h4 class="row-title">Features</h4>
                        </v-row>

                        <v-row v-for="(f,index) in form[3].features" :key="`feature-${index}`" class="features-block">
                            <v-col cols="6 pr-2">
                                <v-text-field v-model="f.feature_name" placeholder="Name"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="f.feature_value" placeholder="Specification"></v-text-field>
                            </v-col>

                            <span class="feature-delete" @click="deleteFeature(index)"><img src="/assets/icons/delete.png" title="Delete feature"></span>
                        </v-row>

                        <v-row>
                            <v-btn class="add-to-item" @click="pushFeature">
                                Add specification
                                <img class="ml-2 fil-input-icon" v-lazy="'/assets/icons/add.jpg'"/>
                            </v-btn>
                        </v-row>

                        <v-row class="mt-5">
                            <h4 class="row-title">Benefits</h4>
                        </v-row>

                        <v-col cols="12" v-for="(f,index) in form[3].advantages" :key="`advantages-${index}`">
                            <v-row>
                                <v-col cols="6 pr-2">
                                    <v-text-field v-model="f.name" placeholder="Name"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="f.value" placeholder="Benefits"></v-text-field>
                                </v-col>
                            </v-row>
                            <label :for="`file-upload-${index}`" class="add-to-item w-100">
                                {{f.icon ? f.icon : 'Add icon'}}
                                <img class="ml-2 file-input-icon" v-lazy="'/assets/icons/img.jpg'"/>
                            </label>
                            <input :id="`file-upload-${index}`" type="file" style="display:none"
                                   v-on:change="iconChosen($event,index)"/>
                        </v-col>

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
                <div class="tab-pane fade" :class="{ 'active show': isActive(2) }" id="ro">
                    <v-container>
                        <v-row>
                            <h5 class="row-title">Stock</h5>
                            <v-col cols="12">
                                <v-radio-group v-model="form[2].available" row>
                                    <v-radio color="success" :value="1" :label="'In stock'" @change="updateValues('available', 1)"></v-radio>
                                    <v-radio color="success" :value="0" :label="'Out of stock'" @change="updateValues('available', 0)"></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>

                        <v-row>
                            <h5 class="row-title">Description</h5>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form[2].name"
                                    :placeholder="'Product name'"
                                    required
                                    :rules="form[2].nameRules"
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" class="pr-2">
                                <v-text-field
                                    v-model="form[2].sku"
                                    :placeholder="'Set number'"
                                    @keyup="updateValues('sku', $event.target.value)"
                                >

                                </v-text-field>
                            </v-col>
                            <v-col cols="6" class="m-auto">
                                <div class="dropdown-categories">
                                    <button @click.prevent="activateDropdown" type="submit" class="v-select-dropdown">
                                        {{isActiveCategory()}}
                                        <i v-if="dropdown" class="arrow up"></i>
                                        <i v-else class="arrow down"></i>
                                    </button>
                                    <ul class="position-absolute bg-white category-dropdown list-unstyled"
                                        v-if="dropdown">
                                        <li v-for="category in groupCategories(categories)">
                                            <p @click="selectCategory($event)" :data-id="category.id" class="parent">
                                                {{category.name}}</p>
                                            <ul v-if="category.child">
                                                <li @click="selectCategory($event)" :data-id="subcategory.id"
                                                    v-for="subcategory in category.child">
                                                    - {{subcategory.name}}
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form[2].price"
                                    :placeholder="'Price'"
                                    @keyup="updateValues('price', $event.target.value)"
                                >
                                    <p
                                        slot="append"
                                        class="m-auto">
                                        EUR
                                    </p>
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6" class="pr-2">
                                <v-text-field
                                    v-model="form[2].brand"
                                    :placeholder="'Brand'"
                                    @keyup="updateValues('brand', $event.target.value)"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="6" class="m-auto">
                                <label for="logo-upload" class="add-to-item">
                                    {{logo ? logo : 'Image'}}
                                    <img class="file-input-icon ml-2" v-lazy="'/assets/icons/img.jpg'">
                                </label>
                                <input type="file" id="logo-upload" v-on:change="logoChosen"/>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                    v-model="form[2].description"
                                    placeholder="Body"
                                    required
                                    name="text"
                                ></v-textarea>
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

                        <div class="document">
                            <v-row>
                                <label for="document-upload" class="add-to-item">
                                    {{document ? document : 'Add document'}}
                                    <img class="file-input-icon ml-2" v-lazy="'/assets/icons/img.jpg'">
                                </label>
                                <input id="document-upload" type="file" style="display:none;" v-on:change="documentChosen($event)">
                            </v-row>
                        </div>

                        <v-row class="mt-5">
                            <h4 class="row-title">Features</h4>
                        </v-row>

                        <v-row v-for="(f,index) in form[2].features" :key="`feature-${index}`" class="features-block">
                            <v-col cols="6 pr-2">
                                <v-text-field v-model="f.feature_name" placeholder="Name"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="f.feature_value" placeholder="Feature"></v-text-field>
                            </v-col>

                            <span class="feature-delete" @click="deleteFeature(index)"><img src="/assets/icons/delete.png" title="Delete feature"></span>
                        </v-row>

                        <v-row>
                            <v-btn class="add-to-item" @click="pushFeature">
                                Add specification
                                <img class="ml-2 fil-input-icon" v-lazy="'/assets/icons/add.jpg'"/>
                            </v-btn>
                        </v-row>

                        <v-row class="mt-5">
                            <h4 class="row-title">Advantages</h4>
                        </v-row>

                        <v-col cols="12" v-for="(f,index) in form[2].advantages" :key="`advantages-${index}`">
                            <v-row>
                                <v-col cols="6 pr-2">
                                    <v-text-field v-model="f.name" placeholder="Name"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="f.value" placeholder="Advantage"></v-text-field>
                                </v-col>
                            </v-row>
                            <label :for="`file-upload-${index}`" class="add-to-item w-100">
                                {{f.icon ? f.icon : 'Add icon'}}
                                <img class="ml-2 file-input-icon" v-lazy="'/assets/icons/img.jpg'"/>
                            </label>
                            <input :id="`file-upload-${index}`" type="file" style="display:none"
                                   v-on:change="iconChosen($event,index)"/>
                        </v-col>

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
                                   v-on:click.stop.prevent="send"
                            >
                                SEND
                            </v-btn>
                        </v-row>
                        <input type="hidden" :value="2"/>
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
        components: {
            Navbar
        },
        props: ['lang', 'id'],
        data() {
            return {
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                updatePage: false,
                form: [],
                image:'',
                logo:'',
                document:'',
                lang_id: 1,
                active: 2,
                dropdown: false,
                updated:false,
                loading:false,
            }
        },
        created(){
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
                    category: '',
                    name: '',
                    nameRules: [
                        v => !!v || 'Name is required'
                    ],
                    sku: '',
                    price: '',
                    brand: '',
                    features: [
                        {
                            id: null,
                            feature_name: '',
                            feature_value: ''
                        },
                        {
                            id: null,
                            feature_name: '',
                            feature_value: ''
                        }
                    ],
                    advantages: [
                        {
                            id: null,
                            name: '',
                            value: '',
                            iconFile: null,
                            icon: ''
                        },
                        {
                            id: null,
                            name: '',
                            value: '',
                            iconFile: null,
                            icon: ''
                        },
                        {
                            id: null,
                            name: '',
                            value: '',
                            iconFile: null,
                            icon: ''
                        },
                        {
                            id: null,
                            name: '',
                            value: '',
                            iconFile: null,
                            icon: ''
                        },
                    ],
                    image: '',
                    imageFile: null,
                    document: '',
                    documentFile: null,
                    logo: '',
                    logoFile: null,
                    activeItem: i,
                    errors: '',
                    success:''
                })
            }

            this.lang_id = 2;
            this.$store.commit('getDataForm',[]);
            this.$store.dispatch('categories', {lang_id: this.lang_id});

            if (this.$router.currentRoute.path.includes('/edit')) {
                this.$store.dispatch('singleProduct', {id: this.$route.params.id, lang: this.lang_id}).then(() => {
                    for(let i = 1; i<=3; i++) {
                        let data = [];
                        let language = i;

                        if (this.product[language]['id']) {
                            data = this.product[language];
                        } else {
                            data = Object.keys(this.product).map((item, i) => {
                                if (this.product[item]['lang_id']) return this.product[item]
                            })
                            data = data.filter(item => {return item != null})

                            data = data.find(item => item['id'] !== null)

                            this.form[i]['name'] = '';
                            this.form[i]['description'] = '';
                            this.form[i].advantages.forEach((e) => {
                                e.name = '';
                                e.value = '';
                                e.iconFile = null;
                                e.icon = '';
                            })

                            this.form[i].features.forEach((e) => {
                                e.feature_name = '';
                                e.feature_value = '';
                            })

                            this.form[i]['price'] = data['price'];
                            this.form[i]['sku'] = data['sku'];
                            this.form[i]['image'] = data['image'];
                            this.form[i]['document'] = data['document'];
                            this.form[i]['brand'] = data['brand'];
                            this.form[i]['category'] = data['category'];
                            this.form[i]['category_id'] = data['category_id'];
                        }

                        this.image = data['image'].split('/').pop();
                        this.document = data['document'].split('/').pop();
                        this.logo = data['brand_logo'].split('/').pop();

                        /*      if (data.advantages.length < 4) {
                                  while (this.form[i].advantages.length < 4) {
                                      this.form[i].advantages.push({
                                          name: '',
                                          value: '',
                                          iconFile: null,
                                          icon: ''
                                      })
                                  }
                              }*/

                        if(!this.product[i]['name']) continue;

                        for (let elem in this.form[language]) {
                            if (data[elem]) {
                                if (Array.isArray(this.form[language][elem])) {
                                    for (let e in data[elem]) {
                                        if (data['features'].length > this.form[language]['features'].length) {
                                            if (data['features'] === data[elem]) {
                                                this.form[language]['features'].push({
                                                    feature_name: '',
                                                    feature_value: '',
                                                    id: ''
                                                });
                                            }
                                        }
                                        if (data[elem][e]) {
                                            for (let i in this.form[language][elem][e]) {
                                                this.form[language][elem][e][i] = data[elem][e][i]
                                                if (this.form[language][elem][e]['icon']) {
                                                    this.form[language][elem][e][i] = data[elem][e][i].split('/').pop()
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    this.form[language][elem] = data[elem];
                                    this.form[language]['available'] = parseInt(data['available']);
                                    if (data['brand_logo']) this.form[language]['logo'] = data['brand_logo'].split('/').pop();
                                    if (data['image']) this.form[language]['image'] = data['image'].split('/').pop();
                                    if (data['document']) this.form[language]['document'] = data['document'].split('/').pop();
                                }
                            }
                        }
                    }
                })
            }
        },
        methods: {
            pushFeature() {
                this.form[this.lang_id].features.push({feature_name: '', feature_value: ''})
            },
            deleteFeature(id){
                this.form[this.lang_id].features.splice(id,1);
            },
            iconChosen(event, index) {
                this.form[this.lang_id].advantages[index].icon = event.target.files[0].name;
                this.form[this.lang_id].advantages[index].iconFile = event.target.files[0];
            },
            documentChosen(event){
                this.form[this.lang_id].document = event.target.files[0].name;
                this.form[this.lang_id].documentFile = event.target.files[0];
                this.document = event.target.files[0].name;
            },
            imageChosen(event) {
                this.form[this.lang_id].image = event.target.files[0].name;
                this.form[this.lang_id].imageFile = event.target.files[0];
            },
            logoChosen(event) {
                this.form[this.lang_id].logo = event.target.files[0].name;
                this.form[this.lang_id].logoFile = event.target.files[0];
            },
            changeLang(event) {

            },
            setActive(event, menuItem) {
                /*let thisForm = {...this.form};
                let language = this.lang_id;*/

                this.active  = menuItem;
                this.lang_id = menuItem;

                Vue.ls.set('language', parseInt(menuItem));

                /*if (Array.from(this.$store.state.dataForm).find(item => item.activeItem === menuItem)) {

                    console.log('Getting dataForm');
                    console.log(this.form);
                    this.form = this.$store.state.dataForm;
                    console.log(this.form);
                }

                if (this.updatePage) {
                    if (language !== menuItem) {
                        this.$store.dispatch('singleProduct', {id: this.$route.params.id, lang: menuItem}).then(() => {
                            let data;
                            if (this.product[menuItem]['id']) {
                                data = this.product[menuItem];
                            } else {
                                data = [];
                            }

                            if(data.length){
                                if (data.advantages.length < 4) {
                                    while (data.advantages.length < 4) {
                                        data.advantages.push({
                                            name: '',
                                            value: '',
                                            iconFile: null,
                                            icon: ''
                                        })
                                    }
                                }
                            }

                            for (let elem in this.form[menuItem]) {
                                if (data[elem]) {
                                    if (Array.isArray(this.form[menuItem][elem])) {
                                        for (let e in data[elem]) {
                                            if (data[elem][e]) {
                                                if (data['features'].length > this.form[menuItem]['features'].length) {
                                                    if (data['features'] === data[elem]) {
                                                        this.form[menuItem]['features'].push({
                                                            feature_name: '',
                                                            feature_value: '',
                                                            id: ''
                                                        });
                                                    }
                                                }

                                                for (let i in data[elem][e]) {
                                                    this.form[menuItem][elem][e][i] = data[elem][e][i]
                                                    if (this.form[menuItem][elem][e]['icon'] && data[elem][e]['icon']) {
                                                        this.form[menuItem][elem][e]['icon'] = data[elem][e]['icon'].split('/').pop()
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        this.form[menuItem][elem] = data[elem];
                                        this.form[menuItem]['available'] = parseInt(data['available']);
                                        if (data['brand_logo']) this.form[menuItem]['logo'] = data['brand_logo'].split('/').pop();
                                        if (data['image']) this.form[menuItem]['image'] = data['image'].split('/').pop();
                                        if (data['document']) this.form[menuItem]['document'] = data['document'].split('/').pop();
                                    }
                                }
                            }
                        })
                    }
                }

                for(let i = 1;i <= 3;i++){
                    thisForm[i].sku = this.form[2].sku ? this.form[2].sku : (this.form[1].sku ? this.form[1].sku : this.form[3].sku);
                    thisForm[i].category = this.form[2].category ? this.form[2].category : (this.form[1].category ? this.form[1].category : this.form[3].category);
                    thisForm[i].price = this.form[2].price ? this.form[2].price : (this.form[1].price ? this.form[1].price : this.form[3].price);
                    thisForm[i].brand = this.form[2].brand ? this.form[2].brand : (this.form[1].brand ? this.form[1].brand : this.form[3].brand);
                    thisForm[i].logo = this.form[2].logo ? this.form[2].logo : (this.form[1].logo ? this.form[1].logo : this.form[3].logo);
                    thisForm[i].image = this.form[2].image ? this.form[2].image : (this.form[1].image ? this.form[1].image : this.form[3].image);
                    thisForm[i].document = this.form[2].document ? this.form[2].document : (this.form[1].document ? this.form[1].document : this.form[3].document);
                    thisForm[i].available = this.form[i].available;
                }

                this.$store.dispatch('dataForm', thisForm)*/
            },
            isActive(menuItem) {
                if (this.getRoute(this.$route.path)) {
                    this.updatePage = true;
                }
                return parseInt(menuItem) === parseInt(this.lang_id);
            },
            discard() {
                this.$refs.form.reset()
                this.form[this.lang_id].logo = '';
                this.form[this.lang_id].logoFile = null;
                this.form[this.lang_id].image = '';
                this.form[this.lang_id].imageFile = null;
                this.form[this.lang_id].document = '';
                this.form[this.lang_id].documentFile = null;
                this.form[this.lang_id].advantages.forEach((e) => {
                    e.name = '';
                    e.value = '';
                })
                if(this.updatePage){
                    this.$store.dispatch('page',this.$route.params.pagination)
                }
                this.$router.go(-1)
            },
            send() {
                this.loading = true;

                /*let trans_fields = [
                        'advantages',
                        'description',
                        'features',
                        'name'
                    ],

                    non_trans_fields = [
                        'available',
                        'brand',
                        'category',
                        'document',
                        'documentFile',
                        'image',
                        'imageFile',
                        'logo',
                        'logoFile'
                    ];*/

                this.form.forEach((f, i) => {
                    if (f.name) {
                        let form = new FormData();

                        form.append('logo', f.logoFile);
                        form.append('file', f.imageFile);
                        form.append('document', f.documentFile);
                        f.advantages.forEach((e, i) => {
                            e.iconFile ? form.append('icon-' + i, e.iconFile) : '';
                        })

                        form.append('data', JSON.stringify(f));

                        axios.post('/admin/products/add', form)
                            .then((res) => {
                                if (res.status === 200 && !res.data.error) {
                                    if (this.form[i+1] === undefined || !this.form[i + 1].name) {
                                        this.loading = false;
                                        this.$router.go(-1)
                                    }
                                }
                                f.errors = res.data.error;
                            });
                    } else if(!f.name && i === this.lang_id){
                        this.loading = false;
                        this.form[i].errors = 'Some fields need to be completed'
                    }
                })
            },
            update() {
                this.loading = true;
                this.form.forEach((f, i) => {
                    if (f.name) {
                        let form = new FormData();

                        form.append('logo', f.logoFile);
                        form.append('file', f.imageFile);
                        form.append('document', f.documentFile);
                        f.advantages.forEach((e, i) => {
                            e.iconFile ? form.append('iconfile-' + i, e.iconFile) : '';
                        })

                        form.append('data', JSON.stringify(f));

                        axios.post(`/admin/products/${this.$route.params.id}`, form)
                            .then((res) => {
                                if (this.form[i + 1] === undefined || !this.form[i + 1].name) {
                                    this.loading = false;
                                    this.form[i].success = 'Updated successfully';
                                    setTimeout(()=>{
                                        this.form[i].success = '';
                                    },1500)
                                }
                            })
                    } else {
                        this.loading = false;
                    }
                })
            },
            groupCategories(data) {
                let categories = data;
                let items = [];
                categories.forEach((item, index) => {
                    if (!item.parent_id) {
                        items.push({name: item.data.name, id: item.id, parent_id: item.parent_id, child: []})
                    } else {
                        items.map(elem => elem.id === item.parent_id ? elem.child.push({
                            name: item.data.name,
                            id: item.id,
                            parent_id: item.parent_id
                        }) : '')
                    }
                })
                return items;
            },
            activateDropdown() {
                this.dropdown = !this.dropdown;
            },
            isActiveCategory() {
                let id = this.form[this.active].category ? parseInt(this.form[this.active].category) : 0;
                let categories = this.groupCategories(this.categories)
                if (this.form[this.active].category) {
                    for (let i = 0; i < categories.length; i++) {
                        if (categories[i].id === id) {
                            return categories[i].name;
                        } else {
                            for (let j = 0; j < categories[i].child.length; j++) {
                                if (categories[i].child[j].id === id) {
                                    return categories[i].child[j].name;
                                }
                            }
                        }
                    }
                }
                return 'Select a category';
            },
            selectCategory(event) {
                /*let category_id = event.target.getAttribute('data-id');
                if (this.form[this.active].category !== category_id) {
                    this.form[this.active].category = $(event.target).attr('data-id');
                }*/

                this.updateValues('category', event.target.getAttribute('data-id'));
                this.dropdown = false;
            },
            getRoute(route) {
                let length = route.split("/").length;
                let array = route.split('/');
                return array[length - 1] === 'edit';
            },
            dropdownFalse() {
                this.dropdown = false;
            },
            updateValues(key, value){
                for (let lang_id = 1; lang_id <=3; lang_id++){
                    this.form[lang_id][key] = value;
                }
            }
        },
        mounted(){

        },
        watch: {
            lang_id: function (val) {
                Vue.ls.set('language', val);
            },
            dropdown(n, o) {
                if (n) {
                    setTimeout(() => {
                        document.addEventListener('click', this.dropdownFalse)
                    }, 300)
                } else {
                    document.removeEventListener('click', this.dropdownFalse)
                }
            }
        },
        computed: {
            categories() {
                return this.$store.getters.getCategories;
            },
            product() {
                return this.$store.getters.getSingleProduct;
            }
        }
    }
</script>

<style scoped>
    .dropdown-categories {
        margin-top: -6px;
    }

    .category-dropdown {
        z-index: 1;
        max-height: 300px;
        overflow: scroll;
        width: 100%;
        padding-left: 0 !important;
    }

    .category-dropdown ul {
        list-style: none;
        padding-left: 0 !important;
    }

    .category-dropdown ul li {
        cursor: pointer;
        padding: 15px 0px 15px 50px;
    }

    .category-dropdown ul li:hover {
        background: rgba(121, 194, 90, .07);
    }

    .category-dropdown .parent {
        padding: 15px 0 15px 30px;
        cursor: pointer;
        margin: 0 !important;
    }

    .category-dropdown .parent:hover {
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

    .document {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .features-block {
        position: relative
    }

    .features-block .feature-delete {
        position: absolute;
        display: block;
        cursor: pointer;
        top: 15px;
        right: -24px;
        width: 15px;
        height: 15px
    }

</style>
