<template>
    <v-app>
        <div class="sidebar-width d-flex">
            <!--            <v-tabs vertical :transition="'fade'">
                            <h4 class="catalog">{{$t('products.sidebar.title')}}</h4>
                            <v-tab :class="[page === category.url ? 'v-tab&#45;&#45;active' : '']" v-if="category.url" :href="category.url" :key="category.id"
                                   v-for="(category,index) in categories">
                                <router-link v-if="category.url" class="text-dark"
                                             :to="{name:'productsCategory',params:{category:category.url,locale:$route.params.locale}}">
                                    <img class="sidebar-category-img" v-lazy="category.image" alt=""/>
                                    {{category.data.name}}
                                </router-link>
                                <div v-if="active === category" class="sidebar-submenu">

                                </div>
                            </v-tab>
                            <v-tab v-else :href="'all'" :key="'all'">
                                <router-link class="text-dark"
                                             :to="{name:'products',params:{locale:$route.params.locale}}">
                                    {{'All'}}
                                </router-link>
                            </v-tab>

                            <v-tab-item v-if="page === undefined" :value="'all'" :transition="'fade-transition'">
                                <div class="d-grid product-categories">
                                    <router-link
                                        v-if="category.url"
                                        :to="{name:'productsCategory',params:{category:category.url,locale:$route.params.locale}}"
                                        class="card d-flex flex-column align-items-start" :key="category.data.id"
                                        v-for="category in categories">
                                        <img class="card-img-top" v-lazy="category.image" alt=""/>
                                        <div class="card-title">
                                            <h4>{{category.data.name}}</h4>
                                        </div>
                                        <span><img v-lazy="'/assets/components/products/arrow-long.png'"/></span>
                                    </router-link>
                                </div>
                            </v-tab-item>

                            <v-tab-item :transition="'fade-transition'"
                                        v-if="page === item.url"
                                        :key="item.url"
                                        :value="item.url"
                                        v-for="item in categories">
                                <div class="d-grid product-categories brands">
                                    <router-link
                                        :to="{name:'productsCategory',params:{category:item.url,locale:$route.params.locale}}"
                                        class="card d-flex flex-column align-items-start" :key="item.id"
                                        v-for="brand in brands">
                                        <img class="card-img-top" v-lazy="brand.brand_logo" alt=""/>
                                        <span><img v-lazy="'/assets/components/products/arrow-long.png'"/></span>
                                    </router-link>
                                </div>
                            </v-tab-item>
                        </v-tabs>-->

            <ul class="nav nav-pills" v-if="windowWidth">
                <h4 class="catalog">{{$t('catalog')}}</h4>

                <li :class="[category.url && category.url === page ? 'active' : '', childrenActive(category.children) ? 'semi-active' : '']"
                    v-if="category.url && !category.parent_id && category.data.name !== 'All'"
                    v-for="(category,i) in categories"
                    :key="'category-'+i">

                    <router-link
                        :key="i"
                        :to="{name:'productsCategory',params:{category:category.url,locale:$route.params.locale,savedPosition:true}}"
                        data-toggle="pill"
                        @click.native="slideUp(category.url)">
                        <span class="catalog-icon">
                            <img class="sidebar-category-img" v-lazy="category.image" alt=""/>
                        </span>

                        {{category.data.name}}
                        <i :class="['arrow',(category.url === page && arrow) || (childrenActive(category.children) && arrow) ? 'up' : 'right']"></i>
                    </router-link>

                    <div v-if="category.url === page || childrenActive(category.children)" class="sidebar-submenu">
                        <ul>
                            <li :class="children.url && children.url === page ? 'active' : ''" v-if="children.url"
                                v-for="children in category.children">
                                <router-link
                                    :to="{name:'productsCategory',params:{category:children.url,locale:$route.params.locale,savedPosition:true}}"
                                    data-toggle="pill"
                                    @click="this.page === children.url">
                                    {{children.data.name}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li :class="page === undefined ? 'active' : ''" v-else>
                    <router-link
                        :to="{name:'products',params:{locale:$route.params.locale,savedPosition:true}}"
                        data-toggle="pill">
                           <span class="catalog-icon">
                                <img class="sidebar-category-img" v-lazy="'/assets/components/products/all.png'" alt=""/>
                           </span>
                        {{$t('products.categories.all')}}
                    </router-link>
                </li>
            </ul>

            <div class="tab-content">
                <div class="dropdown-categories" v-if="page" :class="[!xsmall && products.length <=0 ? 'position-absolute mb-0' : '']">
                    <button v-if="!xsmall && products.length <= 0" @click.prevent="activateDropdown"
                            :class="[dropdown ? 'collapse' : 'collapsed',products.length <= 0 ? 'opacity-0' : '']"
                            type="submit" class="v-select-dropdown" disabled>
                        {{isActiveCategory()}}
                        <i v-if="dropdown" class="arrow up"></i>
                        <i v-else class="arrow down"></i>
                    </button>

                    <button v-else-if="!xsmall && products.length > 0" @click.prevent="activateDropdown"
                            :class="[dropdown ? 'collapse' : 'collapsed']"
                            type="submit" class="v-select-dropdown">
                        {{isActiveCategory()}}
                        <i v-if="dropdown" class="arrow up"></i>
                        <i v-else class="arrow down"></i>
                    </button>

                    <ul v-if="xsmall && products.length > 0">
                        <li class="nav-item dropdown picker-mobile">
                            <a class="nav-link dropdown-toggle" id="trigger10" data-toggle="dropdown" href="#"
                               role="button"
                               aria-haspopup="true" aria-expanded="false">{{text ? text :
                                items[0].label}}</a>
                        </li>
                    </ul>

                    <ul class="position-absolute bg-white category-dropdown list-unstyled"
                        v-if="dropdown">
                        <li v-for="item in items">
                            <p @click="selectSort($event)" :data-id="item.name" class="parent">
                                {{item.label}}
                            </p>
                        </li>
                    </ul>
                </div>

                <transition name="fade">
                <div id="home" v-if="page === undefined" :class="['tab-pane fade out',page === undefined ? 'active show' : '']">
                    <div class="d-grid product-categories">
                        <router-link
                            v-if="category.url && !category.parent_id"
                            :to="{name:'productsCategory',params:{category:category.url,locale:$route.params.locale,savedPosition:!mediumCompare}}"
                            class="card d-flex flex-column align-items-start" :key="category.data.id"
                            v-for="category in categories">

                            <span class="card-img-container"><img class="card-img-top" :src="category.image" alt=""/></span>
                            <div class="card-title"
                                 :class="[category.data.name.length > 17 ? 'card-product-mobile' : '']">
                                <h4>{{category.data.name}}</h4>
                            </div>

                            <span><img src="/assets/components/products/arrow-long.png"/></span>
                        </router-link>
                    </div>
                </div>
                </transition>

                <div v-if="(category.url && (category.url === page))" v-for="category in categories" :id="category.url"
                     :class="['tab-pane fade out',page === category.url ? 'active show' : '']">
                    <transition name="fade">
                        <div v-if="xlarge && category.children.length > 0" class="d-grid product-categories" key="subcats">
                            <router-link
                                v-if="child.url"
                                :to="{name:'productsCategory',params:{category:child.url,locale:$route.params.locale,savedPosition:!mediumCompare}}"
                                class="card d-flex flex-column align-items-start" :key="child.data.id"
                                v-for="child in category.children">
                                <span class="card-img-container"><img class="card-img-top" :src="child.image"
                                                                      alt=""/></span>
                                <div class="card-title">
                                    <h4>{{child.data.name}}</h4>
                                </div>
                                <span><img src="/assets/components/products/arrow-long.png"/></span>
                            </router-link>
                        </div>

                        <div v-else class="d-grid product-categories brands" key="catprods">
                            <router-link
                                :to="{name:'product',params:{id:product.id,locale:$route.params.locale}}"
                                class="card d-flex flex-column" :key="index"
                                v-for="(product,index) in products"
                                v-if="product.translates"
                                :class="['card p-0']">

                                <img class="card-img-top" :src="(product.image ? product.image : '')" alt=""/>

                                <div class="card-body border-bottom">
                                    <div class="d-flex justify-content-between">
                                        <div class="card-body-title">
                                            <p class="text-dark product-title">{{product.translates.name}}</p>
                                            <p class="product-brand align-items-center"><img
                                                src="/assets/icons/star-grey.png"/>{{product.brand}}
                                            </p>
                                        </div>

                                        <div v-if="!largeCompare" class="card-product-brand-logo d-flex">
                                            <img :src="product.brand_logo" :alt="product.brand"/>
                                        </div>
                                    </div>

                                    <div class="card-price" :class="[largeCompare ? 'card-price-mobile' : '']">
                                        <h4 class="roboto text-dark">{{product.price}} EUR</h4>
                                        <div v-if="largeCompare" class="card-product-brand-logo d-flex">
                                            <img :src="product.brand_logo" :alt="product.brand"/>
                                        </div>
                                    </div>
                                </div>

                                <router-link class="btn-product more align-items-center d-flex"
                                             :to="{name:'product',params:{id:product.id,locale:$route.params.locale}}">
                                    <span>{{$t('goto')}}</span><i class="arrow right ml-4"></i>
                                </router-link>
                            </router-link>
                        </div>
                    </transition>
                </div>

                <div v-for="child in childActive(category)" v-else-if="childActive(category)">
                    <transition name="fade">
                        <div class="test-products">
                            <div class="d-grid product-categories brands">
                                <router-link
                                    :to="{name:'product',params:{id:product.id,locale:$route.params.locale}}"
                                    class="card d-flex flex-column" :key="index"
                                    v-for="(product,index) in products"
                                    v-if="product.translates"
                                    :class="['card p-0']">
                                    <img class="card-img-top" v-lazy="''+(product.image ? product.image : '')" alt=""/>
                                    <div class="card-body border-bottom">
                                        <div class="d-flex justify-content-between">
                                            <div class="card-body-title">
                                                <p class="text-dark product-title">{{product.translates.name}}</p>
                                                <p class="product-brand align-items-center"><img
                                                    v-lazy="'/assets/icons/star-grey.png'"/>{{product.brand}}
                                                </p>
                                            </div>
                                            <div v-if="!largeCompare" class="card-product-brand-logo d-flex">
                                                <img v-lazy="product.brand_logo" :alt="product.brand"/>
                                            </div>
                                        </div>

                                        <div class="card-price" :class="[largeCompare ? 'card-price-mobile' : '']">
                                            <h4 class="roboto text-dark">{{product.price}} EUR</h4>
                                            <div v-if="largeCompare" class="card-product-brand-logo d-flex">
                                                <img v-lazy="product.brand_logo" :alt="product.brand"/>
                                            </div>
                                        </div>
                                    </div>

                                    <router-link class="btn-product more align-items-center d-flex"
                                                 :to="{name:'product',params:{id:product.id,locale:$route.params.locale}}">
                                        <span>{{$t('goto')}}</span><i
                                        class="arrow right ml-4"></i></router-link>
                                 </router-link>
                            </div>
                        </div>
                    </transition>
                </div>

                <infinite-loading
                    class="col-7"
                    v-if="products.length < total && (xsmall || small || large) && $route.path.includes('products')"
                    :identifier="infiniteId"
                    @infinite="infiniteHandler">
                    <div slot="spinner">
                        <div class="m-auto loading-more">
                            <img src="/assets/icons/more.png"/>
                        </div>
                    </div>
                    <div slot="no-more"></div>
                    <div slot="no-results"></div>
                </infinite-loading>
            </div>
        </div>
    </v-app>
</template>

<script>
    import windowInstance from "../../../width";
    import {bus} from "../../../event/eventbus";

    const InfiniteLoading = () => import("vue-infinite-loading");

    export default {
        name: 'productSidebar',
        props: ['lang', 'page'],
        components: {InfiniteLoading},
        data() {
            return {
                active: '',
                sortBy: '',
                sortMode: 'descending',
                products: [],
                dropdown: false,
                text: '',
                itemsToShow: 2,
                show: 2,
                pageOffset: 0,
                infiniteId: +new Date(),
                total: 0,
                arrow: true,
                categories: [
                    {
                        data: {
                                name: 'All'
                            }
                    }
                ],
            }
        },
        mounted() {
            $('body').find('a').removeClass('v-tab--active');
            this.sortBy = this.$t('sort.items')[0].name
            this.initialisePicker()
            this.arrow ? $(".sidebar-submenu").slideDown() : $(".sidebar-submenu").slideUp();
        },
        methods: {
            infiniteHandler($state) {
                if (this.xsmall || this.xlarge) {
                    setTimeout(() => {
                        this.$store.dispatch('products', {
                            lang_id: (this.lang ? this.lang : 0),
                            category_id: this.categoryId,
                            length: (this.show ? this.show : 0),
                            offset: (this.itemsToShow ? this.itemsToShow : 0)
                        })
                            .then(() => {
                                let products = this.data;
                                if (products.length) {
                                    this.itemsToShow += this.show;
                                    this.pageOffset += 1;
                                    products.forEach((item) => {
                                        this.products.push(item)
                                    })
                                    $state.loaded();
                                } else {
                                    $state.complete();
                                }

                            })
                    }, 800)
                }
            },
            getProducts() {
                this.$store.dispatch('categoryByUrl', {lang_id: this.lang, url: this.page}).then(() => {
                    let categoryId = this.categoryId;
                    if (categoryId) {
                        this.$store.dispatch('products', {lang_id: this.lang, category_id: categoryId})
                            .then(() => {
                                this.products = this.$store.getters.getProducts
                            })
                        axios.get('/get-total', {
                            params: {
                                lang: this.lang,
                                type: 'products',
                                categoryId: this.categoryId
                            }
                        }).then((response) => {
                            this.total = response.data;
                        })
                    }
                })
            },
            slideUp(url) {
                if (this.$route.path.includes(url)) {
                    this.arrow = this.arrow ? this.arrow = false : this.arrow = true;
                    this.arrow ? $(".sidebar-submenu").slideDown() : $(".sidebar-submenu").slideUp();
                }
            },
            childrenActive(data) {
                return data.findIndex(item => item.url === this.page) >= 0;
            },
            childActive(category) {
                if (category.children) {
                    return category.children.filter((item) => item.parent_id === category.id && this.page === item.url);
                }
            },
            sortList(data) {
                let items = [];
                data.forEach((e, i) => {
                    items.push(e.label);
                })
                return items;
            },
            sort() {
                this.products = this.products.sort(this.compare);
            },
            compare(a, b) {
                let sort = this.sortBy;
                if (this.sortMode === 'ascending') {
                    if (sort === 'name') {
                        if (a.translates.name < b.translates.name)
                            return -1;
                        if (a.translates.name > b.translates.name)
                            return 1;
                        return 0;
                    }
                    if (sort === 'date') {
                        if (Date.parse(a.created_at) < Date.parse(b.created_at))
                            return -1;
                        if (Date.parse(a.created_at) > Date.parse(b.created_at))
                            return 1;
                        return 0;
                    }else if(sort === 'price'){
                        if (parseFloat(a[sort]) < parseFloat(b[sort]))
                            return -1;
                        if (parseFloat(a[sort]) > parseFloat(b[sort]))
                            return 1;
                        return 0;
                    }else{
                        if (a[sort] < b[sort])
                            return -1;
                        if (a[sort] > b[sort])
                            return 1;
                        return 0;
                    }

                }

                if (sort === 'name') {
                    if (a.translates.name > b.translates.name)
                        return -1;
                    if (a.translates.name < b.translates.name)
                        return 1;
                    return 0;
                } else {
                    if (sort === 'date') {
                        if (Date.parse(a.created_at) > Date.parse(b.created_at))
                            return -1;
                        if (Date.parse(a.created_at) < Date.parse(b.created_at))
                            return 1;
                        return 0;
                    }else if(sort === 'price'){
                        if (parseFloat(a[sort]) > parseFloat(b[sort]))
                            return -1;
                        if (parseFloat(a[sort]) < parseFloat(b[sort]))
                            return 1;
                        return 0;
                    }else{
                        if (a[sort] > b[sort])
                            return -1;
                        if (a[sort] < b[sort])
                            return 1;
                        return 0;
                    }
                }
            },
            activateDropdown() {
                if (this.xsmall) {
                    this.initialisePicker()
                } else {
                    this.dropdown = !this.dropdown;
                }
            },
            fetchList(list) {
                let array = [];
                for (let i in list) {
                    if (list[i].name) array.push({id: i, value: list[i].label})
                }
                return array;
            },
            getTab(item) {
                let list = this.items;
                for (let i in list) {
                    if (list[i].label === item.value) {
                        return list[i].name
                    }
                }
            },
            getLabel(item) {
                let list = this.items;
                for (let i in list) {
                    if (list[i].label === item) {
                        return list[i].label
                    }
                }
            },
            initialisePicker() {
                setTimeout(() => {
                    let trigger = document.querySelector('#trigger10');
                    if (trigger) {

                        let _this = this;
                        let vm = this;
                        var mobileSelect1 = new MobileSelect({
                            trigger: "#trigger10",
                            title: "",
                            wheels: [{data: this.fetchList(this.items)}],
                            cancelBtnText: this.$t('cancel'),
                            ensureBtnText: this.$t('select'),
                            jsonType: true,
                            position: [0],
                            transitionEnd: function (indexArr, data) {
                            },
                            onShow:(e) => {
                            },
                            callback: function (indexArr, data) {
                                let s = data[0];
                                vm.sortBy = _this.getTab(s);
                                vm.sortBy === _this.getTab(s) ? (vm.sortMode === 'ascending' ? vm.sortMode = 'descending' : vm.sortMode = 'ascending') : vm.sortMode = 'descending';
                                vm.active = _this.getTab(s);
                                vm.text = s.value;
                            },
                        });
                    }
                }, 800)
            },
            isActiveCategory() {
                let active = this.sortBy;
                let items = this.items;
                for (let i = 0; i < items.length; i++) {
                    if (items[i].name === active) {
                        return items[i].label;
                    }
                }
                return items[0].label;
            },
            selectSort(event) {
                if (this.sortBy !== $(event.target).attr('data-id')) {
                    this.sortBy = $(event.target).attr('data-id');
                    this.sortMode = this.sortMode === 'descending' ? 'ascending' : 'descending';
                } else {
                    this.sortMode = this.sortMode === 'ascending' ? 'descending' : 'ascending';
                }
                this.dropdown = false;
            },
        },
        computed: {
            items() {
                return this.$t('sort.items')
            },
            categoryId() {
                return this.$store.getters.getCategoryByUrl.id
            },
            windowWidth() {
                return windowInstance.data.windowCompare
            },
            largeCompare() {
                return windowInstance.data.largeCompare
            },
            medium() {
                return windowInstance.data.medium
            },
            mediumCompare() {
                return windowInstance.data.mediumCompare
            },
            xsmall() {
                return windowInstance.data.xsmall
            },
            xlarge() {
                return windowInstance.data.xlarge
            },
            large() {
                return windowInstance.data.large
            },
            small() {
                return windowInstance.data.small
            },
            data() {
                return this.$store.getters.getProducts
            }
        },
        created() {
            let language = this.$router.currentRoute.params.locale === 'en' ? 1 : (this.$router.currentRoute.params.locale === 'ru' ? 3 : 2)
            this.$store.dispatch('categories', {lang_id: language}).then(() => {
                this.$store.getters.getCategories.forEach((item, i) => {
                    if (!item.parent_id) this.categories.push(item)
                })
            })
            this.getProducts();
        },
        watch: {
            $route(to, from) {
                this.products = [];
                this.getProducts();
                this.initialisePicker();
                if (to.path !== from.path) {
                    this.arrow = false;
                    if (to.path.includes('products') && !this.mediumCompare) {
                        setTimeout(() => {
                            if (window.pageYOffset !== 0) {
                                bus.$emit('position', 'fixed');
                                bus.$emit('color', 'light');
                                bus.$emit('sticky', true);
                            } else {
                                bus.$emit('position', 'relative');
                                bus.$emit('color', 'light');
                                bus.$emit('sticky', false);
                            }
                        }, 100)
                    } else {
                        bus.$emit('position', 'relative');
                        bus.$emit('color', 'light');
                        bus.$emit('sticky', false);
                    }
                }
            },
            sortBy(newVal, oldVal) {
                if (oldVal !== newVal) this.sort()
            },
            sortMode(newVal, oldVal) {
                if (oldVal !== newVal) this.sort()
            },
            xsmall(n, o) {
                if (n !== o) {
                    if (n) {
                        this.initialisePicker()
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .v-tabs--vertical > .v-tabs-bar .v-tabs-slider {
        height: 100% !important;
    }

    .theme--light.v-card, .theme--light.v-sheet {
        background: transparent !important;
    }

    .sidebar-width {
        width: 100%;
    }

    .card-product-brand-logo img {
        max-width: 65px;
        max-height: 65px;
        height: 65px;
        width: 100%;
        object-fit: contain;
    }

    .btn-product {
        margin: 20px 20px 20px 30px !important;
    }

    .product-brand {
        display: flex;
        align-items: center;
        color: rgba(31, 31, 31, .4);
        font-size: 14px;
        font-weight: 500;
    }

    .product-brand p {
        color: rgba(31, 31, 31, .4);
        font-size: 14px;
    }

    .product-brand img {
        max-width: 16px;
        margin-right: 8px;
        height: max-content;
    }

    .product-title {
        font-size: 16px;
        min-height: 52px;
    }

    .dropdown-categories {
        margin-top: -6px;
        margin-bottom: 30px;
    }

    .category-dropdown {
        z-index: 1;
        max-height: 300px;
        overflow: auto;
        width: 100%;
        padding-left: 0 !important;
        max-width: 270px;
        animation-name: opacity
    }

    .category-dropdown ul {
        list-style: none;
        padding-left: 0 !important;
    }

    .category-dropdown ul li {
        cursor: pointer;
        padding: 15px 0 15px 50px;
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
        max-width: 270px;
        padding: 13px 20px 13px 20px;
        text-align: left;
        color: #555555;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .v-select-dropdown .arrow {
        margin-left: 15px;
    }

    .v-select-dropdown.collapse {
        background: white;
        border: 1px solid white;
        transition: all .2s ease-in-out;
    }

    .v-select-dropdown.collapsed {
        transition: all .2s ease-in-out;
        border: 1px solid #79C25A;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .3s ease-out;
    }

    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }

    /** {
        transition: all 1s ease-out
    }*/
</style>
