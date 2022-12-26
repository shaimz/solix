<template>
    <div id="single-page">
        <Navbar :heading="this.title"></Navbar>
        <dataTables @statusUpdated="dispatchItems" :lang="lang" :add="'News'" v-bind:page-type="'news'"
                    v-bind:heading="this.title" :headings="headers" v-bind:items="showNews()"></dataTables>
    </div>
</template>

<script>
    const Navbar = () => import("../includes/Navbar");
    const dataTables = () => import("../data/dataTables");

    export default{
        name:'News',
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
                        text: 'Name',
                        sortable:false,
                        value: 'name'
                    },
                    {
                        text: 'Visibility',
                        sortable:false,
                        value: 'status'
                    },
                    {
                        text: 'Created',
                        sortable:false,
                        value: 'date'
                    },
                    {
                        text:'',
                        sortable:false,
                        value:'controls'
                    }
                ],
                open:false,
                lang:0,
            }
        },
        mounted(){
            this.lang = Vue.prototype.$lang;
            this.$store.dispatch('news')
        },
        created() {

        },
        computed:{

        },
        methods:{
            langChange(){
                this.lang = 3;
            },
            showNews(){
                let news = this.$store.getters.getNews;
                let data = [];
                if(news){
                    if(Array.isArray(news)){
                        news.forEach((item)=>{
                             if(item.news){
                                data.push({
                                    value: true,
                                    name: item.news.name,
                                    status: item.available,
                                    date: this.getDate(item.created_at),
                                    id: item.id
                                });
                            }
                        });
                    }else{
                        data.push({
                            value:false,
                            name:news.news.name,
                            status:news.available,
                            date:this.getDate(news.created_at),
                            id:news.id
                        })
                    }
                    return data;
                }
            },
            getDate(str){
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
            dispatchItems(){
                this.$store.dispatch('news')
            }
        }
    }
</script>
