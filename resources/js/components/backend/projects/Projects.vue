<template>
    <div id="single-page" class="all-project-page">
        <Navbar :heading="this.title"></Navbar>
        <dataTables @page="setPage" @statusUpdated="dispatchItems" :lang="lang" :numberPage="page" :add="'Project'" v-bind:page-type="'projects'" v-bind:heading="this.title" :headings="headers" v-bind:items="showProjects()"></dataTables>
    </div>
</template>

<script>
    import {bus} from "../../../event/eventbus";

    const Navbar = () => import("../includes/Navbar");
    const dataTables = () => import("../data/dataTables");
    export default{
        name:'projectsPage',
        components:{
            Navbar,
            dataTables
        },
        props:{
            title:String,
        },
        data:()=>{
            return{
                headers: [
                    {
                        text: 'Type',
                        sortable:false,
                        align: 'left',
                        value: 'type'
                    },
                    {
                        text: 'Name',
                        sortable:false,
                        align: 'left',
                        value: 'name'
                    },
                    {
                        text: 'Visibility',
                        sortable:false,
                        value: 'status'
                    },
                    {
                        text: 'Location',
                        sortable:false,
                        value: 'location'
                    },
                    {
                        text: 'Power MW',
                        sortable:false,
                        value: 'power'
                    },
                    {
                        text:'',
                        sortable:false,
                        value:'controls'
                    }
                ],
                open:false,
                lang:0,
                page:1
            }
        },
        mounted(){
            this.lang = Vue.prototype.$lang;
            this.$store.dispatch('projects')
        },
        created() {

        },
        computed:{

        },
        methods:{
            setPage(val){
                this.page = val;
            },
            langChange(){
                this.lang = 3;
            },
            showProjects(){
                let projects = this.$store.getters.getProjects;
                let data = [];
                if(projects){
                    if(Array.isArray(projects)){
                        projects.forEach((item)=>{
                            if(item.projects){
                                data.push({
                                    value: true,
                                    type: item.projects.type,
                                    name: item.projects.name,
                                    status: item.status,
                                    location: item.projects.location,
                                    power: item.power + 'Wt',
                                    id: item.id
                                });
                            }
                        });
                    } else {
                        data.push({
                            value:false,
                            type:projects.projects.type,
                            name:projects.projects.name,
                            status:projects.status,
                            location:projects.projects.location,
                            power:projects.power + 'Wt',
                            id:projects.id
                        })
                    }

                    return data;
                }
            },
            dispatchItems(){
                this.$store.dispatch('projects')
            }
        }
    }
</script>
