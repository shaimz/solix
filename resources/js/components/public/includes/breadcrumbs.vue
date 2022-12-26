<template>
    <v-breadcrumbs v-if="stack.length > 0" :class="color" :items="stack">
        <template v-slot:item="{ item }">
            <v-breadcrumbs-item
                v-if="item.class === 'crumbs__item--current'"
                disabled
                :class="['active',color]"
            >
                <router-link :to="{ name: item.name, params:{locale:$route.params.locale} }"
                             :class="['crumbs__link',color]">
                    {{ item.label }}
                </router-link>
            </v-breadcrumbs-item>

            <v-breadcrumbs-item
                v-else
                :class="[color]"
            >
                <router-link :to="{ name: item.name, params:{locale:$route.params.locale} }"
                             :class="['crumbs__link',color]">
                    {{ item.label }}
                </router-link>
            </v-breadcrumbs-item>
        </template>
    </v-breadcrumbs>
</template>

<script>
    const store = () => import("../../../store/store");
    import windowInstance from "../../../width";

    export default {
        name: 'Crumbs',
        props: ['color', 'items'],
        data() {
            return {
                stack: [],
                home: '',
                language: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
            }
        },
        mounted() {
            this.buildStack()
        },
        methods: {
            buildStack() {
                this.stack = [{
                    class: "crumbs__item--parent",
                    label: this.language === 1 ? 'Home' : (this.language === 2 ? 'Acasă' : 'Главная'),
                    name: "Home"
                }]
                this.addPage(this.$router.currentRoute)
            },
            addPage(route, first) {
                if (!this.items) {
                    let categoryUrl = '';
                    if (this.$route.params.category) {
                        if (route.meta.breadcrumb.parent) {
                            first = true;
                            if (!this.$route.params.id && this.$route.params.category) first = undefined;

                            if (this.stack.findIndex(item => item.name === this.$store.state.categoryByUrl) < 0) {
                                this.$store.dispatch('categoryByUrl', {
                                    lang_id: this.language,
                                    url: this.$route.params.category
                                }).then(() => {
                                    categoryUrl = this.$store.getters.getCategoryByUrl.data.name;
                                    if (this.stack.findIndex(item => item.label === categoryUrl) < 0) {
                                        var _route$meta, _route$meta$breadcrumb;
                                        this.stack.push({
                                            name: 'productsCategory',
                                            label: ((_route$meta = route.meta) === null || _route$meta === void 0 ? void 0 : (_route$meta$breadcrumb = _route$meta.breadcrumb) === null || _route$meta$breadcrumb === void 0 ? void 0 : _route$meta$breadcrumb.label) || categoryUrl.replace('.', ' '),
                                            class: 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
                                        })
                                        if (this.$route.params.id && this.$route.params.category) {
                                            this.stack[this.stack.length - 1].class = 'crumbs__item--current'
                                        }
                                    }
                                })
                            }
                        }
                    }

                    if (route.meta.breadcrumb.parent) {
                        const parent = this.getRoute(route.meta.breadcrumb.parent)
                        if (this.stack.findIndex(item => item.name === parent.name)) {
                            this.addPage(parent, true)
                        }
                    } else {
                        if (!this.$route.params.id && this.$route.params.category) first = true;
                        if (this.stack.findIndex(item => item.name === route.name) < 0) {
                            let routeName = '';
                            switch (this.$route.name) {
                                case 'productsCategory':
                                    routeName = 'products';
                                    break;
                                case 'products':
                                    routeName = 'products';
                                    break;
                                case 'product':
                                    routeName = 'products';
                                    break;
                                case 'services':
                                    routeName = 'services';
                                    break;
                                case 'service':
                                    routeName = 'services';
                                    break;
                                case 'projects':
                                    routeName = 'projects';
                                    break;
                                case 'project':
                                    routeName = 'projects';
                                    break;
                                case 'about':
                                    routeName = 'about';
                                    break;
                                case 'news':
                                    routeName = 'news';
                                    break;
                                case 'contacts':
                                    routeName = 'contacts';
                                    break;
                            }
                            let label = this.$t(routeName + '.title');
                            this.stack.push({
                                name: route.name,
                                label: label,
                                class: 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
                            })
                        }
                    }
                } else {
                    this.items.forEach((item, index) => {
                        if (item.project_id) {
                            this.$store.dispatch('singleProject', {id: item.project_id, lang: this.language})
                                .then(() => {
                                    let project = this.$store.getters.getSingleProject;
                                    this.stack.push({
                                        name: project.projects.name,
                                        label: route.label || project.projects.name.replace('.', ' '),
                                        class: 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
                                    })
                                })
                        } else {
                            if (!item.service_id && !item.news_id && !item.career_id) {
                                if (this.items.length - 1 === index) first = 'undefined'
                                this.stack.push({
                                    name: item.name,
                                    label: item.label || item.name.replace('.', ' '),
                                    class: 'crumbs__item--parent'
                                })
                            } else {
                                this.stack[this.stack.length - 1].class = 'crumbs__item--current'
                            }
                        }
                    })
                }
                if (this.items) {
                    /*    if (this.items.findIndex(index => index.news_id) >= 0) {
                            first = undefined;
                            let data = this.items.find(index => index.news_id)
                            this.$store.dispatch('singleNews', {id: data.news_id, lang: this.language})
                                .then(() => {
                                    let news = this.$store.getters.getSingleNews;
                                    this.stack.pop();
                                    this.stack.push({
                                        name: news.translates.name,
                                        label: route.label || news.translates.name.replace('.', ' '),
                                        class: 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
                                    })
                                })
                        }*/
                    if (this.items.findIndex(index => index.career_id) >= 0) {
                         first = undefined;
                         let data = this.items.find(index => index.career_id)
                         this.$store.dispatch('singleCareer', {id: data.career_id, lang_id: this.language})
                             .then(() => {
                                 let career = this.$store.getters.getSingleCareer;
                                 //this.stack.pop();
                                 this.stack.push({
                                     name: career.translates.name,
                                     label: route.label || career.translates.name.replace('.', ' '),
                                     class: 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
                                 })
                             })
                     }
                    /*  if (this.items.findIndex(index => index.service_id) >= 0) {
                          first = undefined;
                          let data = this.items.find(index => index.service_id)
                          this.$store.dispatch('service', {id: data.service_id, lang_id: this.language})
                              .then(() => {
                                  let service = this.$store.getters.getService;
                                  this.stack.pop();
                                  this.stack.push({
                                      name: service.data.name,
                                      label: route.label || service.data.name.replace('.', ' '),
                                      class: 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
                                  })
                              })
                      }*/
                }
            },
            getRoute(name) {
                if (this.$router.options.routes.find(route => route.name === name.capitalize).children.find(item => item.name === name)) {
                    return this.$router.options.routes.find(route => route.name === name.capitalize).children.find(item => item.name === name);
                }
                return this.$router.options.routes.find(route => route.name === name.capitalize)
            },
        },
        computed: {
            small() {
                return windowInstance.data.small
            }
        },
        created() {

        },
        watch: {
            $route(to) {
                this.buildStack();
            },
            language() {
                this.buildStack();
            }
        }
    }
</script>
