<template>
    <div id="single-page">
        <Navbar :heading="this.title"></Navbar>
        <dataTables @statusUpdated="dispatchItems" :lang="lang" :add="'Careers'" v-bind:page-type="'careers'"
                    v-bind:heading="this.title" :headings="headers" v-bind:items="items"></dataTables>
    </div>
</template>

<script>
    const Navbar = () => import("../includes/Navbar");
    const dataTables = () => import("../data/dataTables");

    export default {
        name: 'Careers',
        components: {
            Navbar,
            dataTables
        },
        props: {
            title: String,
        },
        data() {
            return {
                headers: [
                    {
                        text: 'Name',
                        sortable: false,
                        value: 'name'
                    },
                    {
                        text: 'Visibility',
                        sortable: false,
                        value: 'status'
                    },
                    {
                        text: 'Location',
                        sortable: false,
                        value: 'location'
                    },
                    {
                        text: 'Description',
                        sortable: false,
                        value: 'description'
                    },
                    {
                        text: 'Created',
                        sortable: false,
                        value: 'date'
                    },
                    {
                        text: '',
                        sortable: false,
                        value: 'controls'
                    }
                ],
                open: false,
                lang: 0,
                render: false,
                items:[]
            }
        },
        mounted() {
            this.lang = Vue.prototype.$lang;
        },
        created() {
            this.showCareers();
        },
        computed: {},
        methods: {
            langChange() {
                this.lang = 3;
            },
            showCareers() {
                let data = [];
                this.$store.dispatch('careers', {lang_id: [1, 2, 3]}).then(() => {
                    let careers = this.$store.getters.getCareers;
                    if (Array.isArray(careers)) {
                        careers.forEach((item) => {
                            if (item.backend_data[0]) {
                                data.push({
                                    value: true,
                                    name: item.backend_data[0].name,
                                    location: item.backend_data[0].location,
                                    status: item.status,
                                    description: item.backend_data[0].description,
                                    date: this.getDate(item.created_at),
                                    id: item.id
                                });
                            }

                        });
                    } else {
                        data.push({
                            value: false,
                            name: careers.backend_data[0].name,
                            location: careers.backend_data[0].location,
                            status: careers.available,
                            date: this.getDate(careers.created_at),
                            description: careers.backend_data[0].description,
                            id: careers.id
                        })
                    }
                })
                this.render = true;
                this.items = data;
            },
            getDate(str) {
                let date = '' + str.replace(/[-?]/g,'/').replace('T',' ');
                let result = date.split(':');
                let time = [];
                result.pop();
                result[0].split('/').forEach((e)=>{
                    time.push(e.split(' ')[0]);
                })
                let temp = time[0];
                time[0] = time[2];
                time[2] = temp;
                return time.join('/');
            },
            dispatchItems() {
                this.showCareers()
            }
        }
    }
</script>
