<template>
    <v-app id="inspire" :key="statusUpdated">
        <v-toolbar fixed>
            <v-toolbar-title class="dark--text"><h3>{{$attrs.heading}}</h3></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-col class="sortable-input" cols="2" v-if="pageType === 'projects'">
                <v-select v-model="sortBy" :items="itemsSort(headings)" @input="changeSort(sortBy)">

                </v-select>
            </v-col>
            <v-col class="sortable-input" cols="2" v-if="pageType === 'products'">
                <v-select :eager="true" ref="select" v-model="category_name" item-text="data.name" name="category" :items="categories"
                          class="category-sort">
                    <template v-slot:item="{ active, item, attrs, on }">
                        <v-list-item v-on="on" v-bind="attrs" #default="{ active }" class="d-block">
                            <v-list-item-content
                                @click.stop="selectCategory(item.id,item.data.name,item.children,item.parent_id)">
                                <v-list-item-title>
                                    <v-row no-gutters align="center">
                                        <span class="category-name" :data-id="item.id">{{ item.data.name }}</span>
                                    </v-row>
                                </v-list-item-title>
                            </v-list-item-content>
                            <ul v-if="item.children">
                                <li v-for="c in item.children"
                                    @click.stop="selectCategory(c.id,c.data.name,[],item.parent_id)">
                                    <span class="category-name" :data-id="c.id">{{c.data.name}}</span>
                                </li>
                            </ul>
                        </v-list-item>
                    </template>
                </v-select>
            </v-col>
            <v-btn
                v-if="pageType === 'products' || pageType === 'projects' || pageType === 'news' || pageType === 'careers'"
                class="btn add-item">
                <router-link :to="{name:'Add'+add}">{{addButton}}</router-link>
            </v-btn>
            <v-text-field class="search-input mx-4" v-model="search" label="Search"
                          single-line
                          hide-details></v-text-field>
            <i class="mdi mdi-magnify px-2 h3" @click="toggleSearch()"></i>
        </v-toolbar>
        <v-layout v-resize="onResize" column style="padding-top:56px">
            <v-data-table :items-per-page="itemsPerPage" :headers="headings" :items="data" :search="search"
                          :options.sync="options"
                          :hide-default-headers="isMobile" :class="{mobile: isMobile}" :sort-by.sync="sortBy"
                          :sort-desc.sync="sortDesc" :page="number"
                          :custom-sort="customSort">
                <template v-if="pageType === 'default'" v-slot:item.controls="props">
                    <button @click.stop="showModal(props.item.id)" data-target="#requests"
                            class="btn btn-warning btn-small">
                        Actions
                    </button>
                </template>
                <template v-else-if="pageType !== 'archive'" v-slot:item.controls="props">
                    <div class="d-flex pr-6 justify-content-end">
                        <a v-if="pageType === 'products'" href="" @click.prevent.stop="duplicateItem(props.item.id)" class="duplicate-item">
                            <img src="/assets/icons/copy.png">
                        </a>
                        <router-link
                            :to="{name:'Edit'+add,params:{lang:lang,id:props.item.id,updatePage:true,pagination:options.page}}"
                            class="edit-item">
                            <img :src="'/assets/icons/pen.jpg'">
                        </router-link>
                        <a href="" @click.prevent.stop="deleteItem(props.item.id)" class="delete-item">
                            <img :src="'/assets/icons/trashcan.jpg'">
                        </a></div>
                    <Confirm ref="confirm"></Confirm>
                </template>
                <template v-slot:item.status="props">
                    <i v-if="props.item.status === '1' || props.item.status === 1"
                       @click="toggleStatus(0,props.item.id)" class="mdi mdi-eye h5"></i>
                    <i @click="toggleStatus(1,props.item.id)" v-else class="mdi mdi-eye opacity-3 h5"></i>
                </template>
                <template v-slot:item.available="props">
                    <i v-if="props.item.available === '1' || props.item.available === 1"
                       class="mdi mdi-check text-success h5" @click="toggleStatus(0,props.item.id)"></i>
                    <i @click="toggleStatus(1,props.item.id)" v-else class="mdi mdi-close text-danger opacity-3 h5"></i>
                </template>
                <v-alert slot="no-results" :value="true" color="gray">
                    Your search for "{{ search }}" found no results.
                </v-alert>
            </v-data-table>
        </v-layout>
    </v-app>
</template>

<script>
    import {bus} from "../../../event/eventbus";

    const Confirm = () => import("./Confirm");

    export default {
        components: {
            Confirm
        },
        props: {
            headings: Array,
            pageType: String,
            items: Array,
            add: String,
            lang: Number,
            numberPage: Number,
            seenPage: String,
            categories: Array
        },
        data() {
            return {
                sortBy: 'name',
                sortDesc: true,
                itemsPerPage: 5,
                selected: [],
                search: '',
                isMobile: false,
                page: 'default',
                statusUpdated: false,
                options: {},
                category_id: 0,
                category_name: 'All products',
                data: []
            }
        },
        mounted() {
            this.options.page = this.number;
            let footer = $('.v-data-footer .v-select__slot .v-input__append-inner svg');
            let svg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            footer.find('path').remove();
            footer.append($(svg).attr('d',"M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z"));
        },
        computed: {
            addButton() {
                switch (this.pageType) {
                    case 'products':
                        return 'Add Product';
                    case 'projects':
                        return 'Add Project';
                    case 'news':
                        return 'Add Article';
                    case 'careers':
                        return 'Add Job';
                }
            },
            number() {
                return this.$store.getters.getPage;
            }
        },
        created() {
            /*            setTimeout(()=>{
                            $('table th').each((i,e)=>{
                                $(e).css('width',100/this.headings.length+'%');
                            })
                        },1000)*/
        },
        methods: {
            selectCategory(id, name, children = [], parent_id = 0) {
                this.category_id = id;
                let categories = [];
                if (!parent_id && children) {
                    children.forEach((e, i) => {
                        categories.push(e.id)
                    })
                }
                this.$store.dispatch('products', {
                    lang_id: 2,
                    category_id: categories.length ? categories : id
                }).then(() => {
                    let products = this.$store.getters.getProducts;
                    let data = [];
                    /*     if(!products && parent_id){
                             this.$store.dispatch('products',{lang_id:2,category_id:parent_id}).then(()=>{
                                 products = this.$store.getters.getProducts;
                             })
                         }*/
                    if (products) {
                        if (Array.isArray(products)) {
                            if (id === 0) {
                                products.forEach((item) => {
                                    if (item.name) {
                                        data.push({
                                            value: true,
                                            type: item.type,
                                            name: item.name,
                                            available: item.available,
                                            sku: item.sku,
                                            price: item.price + ' EUR',
                                            id: item.id
                                        });
                                    }
                                });
                            } else {
                                products.forEach((item) => {
                                    if (item.translates) {
                                        data.push({
                                            value: true,
                                            type: item.category.data.name,
                                            name: item.translates.name,
                                            available: item.available,
                                            sku: item.sku,
                                            price: item.price + ' EUR',
                                            id: item.id
                                        });
                                    }
                                });
                            }

                        } else {
                            data.push({
                                value: false,
                                type: products.type,
                                name: products.name,
                                available: products.available,
                                sku: products.sku,
                                price: products.price,
                                id: products.id
                            })
                        }
                        this.data = data;
                    }
                })
                this.category_name = name;
                this.$refs.select.blur();
            },
            compare(a, b, index, isDesc) {
                let sort = index[0];
                if (!isDesc) {
                    if (sort === 'name') {
                        if (a.name < b.name)
                            return -1;
                        if (a.name > b.name)
                            return 1;
                        return 0;
                    }
                    if (sort === 'date') {
                        if (Date.parse(a.created_at) < Date.parse(b.created_at))
                            return -1;
                        if (Date.parse(a.created_at) > Date.parse(b.created_at))
                            return 1;
                        return 0;
                    } else if (sort === 'price') {
                        if (parseFloat(a.price) < parseFloat(b.price))
                            return -1;
                        if (parseFloat(a.price) > parseFloat(b.price))
                            return 1;
                        return 0;
                    } else {
                        if (a[sort] < b[sort])
                            return -1;
                        if (a[sort] > b[sort])
                            return 1;
                        return 0;
                    }
                }

                if (sort === 'name') {
                    if (a.name > b.name)
                        return -1;
                    if (a.name < b.name)
                        return 1;
                    return 0;
                } else {
                    if (sort === 'date') {
                        if (Date.parse(a.created_at) > Date.parse(b.created_at))
                            return -1;
                        if (Date.parse(a.created_at) < Date.parse(b.created_at))
                            return 1;
                        return 0;
                    } else if (sort === 'price') {
                        if (parseFloat(a.price) > parseFloat(b.price))
                            return -1;
                        if (parseFloat(a.price) < parseFloat(b.price))
                            return 1;
                        return 0;
                    } else {
                        if (a[sort] > b[sort])
                            return -1;
                        if (a[sort] < b[sort])
                            return 1;
                        return 0;
                    }
                }
            },
            customSort(items, index, isDesc) {
                items.sort((a, b) => {
                    return this.compare(a, b, index, isDesc[0]);
                });
                return items;
            },
            showModal(id) {
                this.$parent.$data.open = true;
                this.$parent.$data.id = id;
                this.$emit('value', true);
                axios.post('/admin/change', {type: this.seenPage, id: id}).then((r) => {
                    if (!r.data.info) {
                        this.$store.dispatch('countRequests');
                    }
                })
            },
            onResize() {
                if (window.innerWidth < 769) this.isMobile = true;
                else this.isMobile = false;
            },
            toggleAll() {
                if (this.selected.length) this.selected = []
                else this.selected = this.data.slice()
            },
            changeSort(column) {
                if (this.sortBy === column) {
                    this.sortDesc ? this.sortDesc = false : this.sortDesc = true;
                } else {
                    this.sortBy = column
                    this.sortDesc = false
                }
            },
            itemsSort(items) {
                let elements = [...items];
                elements.pop();
                return elements;
            },
            toggleSearch() {
                $(event.currentTarget).prev().slideToggle('300');
            },
            toggleStatus(val, id) {
                axios.post('/admin/' + this.pageType + '/status', {id: id, status: val}).then((response) => {
                    this.statusUpdated = !this.statusUpdated;
                    this.$emit('page', this.options.page);
                })
            },
            duplicateItem(id) {
                this.$refs.confirm.open('Duplicate', 'Are you sure?', {color: 'red'}).then((confirm) => {
                    if (confirm) {
                        axios.post('/admin/duplicate', {id: id})
                            .then((response) => {
                                if(response.status === 200){
                                    $('.category-name').each((i, e) => {
                                        if (parseFloat($(e).attr('data-id')) === this.category_id) $(e).click()
                                    })
                                }
                            })
                    }
                })
            },
            deleteItem(id) {
                this.$refs.confirm.open('Delete', 'Are you sure?', {color: 'red'}).then((confirm) => {
                    if (confirm) {
                        axios.get('/admin/' + this.pageType + '/' + id + '/delete')
                            .then((response) => {
                                if(response.status === 200){
                                    this.$store.dispatch(this.pageType);
                                    $('.category-name').each((i, e) => {
                                        if (parseFloat($(e).attr('data-id')) === this.category_id) $(e).click();
                                    })
                                }
                            })
                    }

                })
            }
        },
        watch: {
            statusUpdated(oldVal, newVal) {
                if (oldVal !== newVal) this.$emit('statusUpdated', newVal);
            },
            numberPage(n, o) {
                if (n !== o) {
                    this.options.page = n;
                }
            },
            items: {
                immediate: true,
                handler(n, o) {
                    if (n !== o) this.data = this.items
                }

            }
        }
    }
</script>

<style scoped>
    .v-input.v-input--hide-details {
        display: none;
        max-width: 250px;
    }

    i.mdi-magnify {
        cursor: pointer;
        margin: 0;
    }

    .opacity-3 {
        opacity: 0.4;
    }
</style>
