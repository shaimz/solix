<template>
    <div id="request-page" title="">
        <Navbar v-bind:heading="this.$attrs.head" v-bind:tabs="this.$attrs.nav"></Navbar>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-active-requests" role="tabpanel" aria-labelledby="pills-requests-tab">
                <dataTables :seenPage="'call'" v-bind:page-type="'default'" v-bind:heading="Object.values(this.$attrs.nav[0])[0]" v-bind:headings="headers" v-bind:items="showCallRequests(1)" @value="showModal"></dataTables>
            </div>
            <div class="tab-pane fade" id="pills-archive" role="tabpanel" aria-labelledby="pills-archive-tab">
                <dataTables v-bind:page-type="'archive'" v-bind:heading="Object.values(this.$attrs.nav[0])[0]" v-bind:headings="headers" v-bind:items="showCallRequests(0)"></dataTables>
            </div>
        </div>
        <modal-request :route="'emailCall'" :headings="this.$attrs.head" v-if="open" v-bind="data" :type="'call'" :id="id" @offvalue="toggleModal" :open="open"></modal-request>
    </div>
</template>

<script>
    const Navbar = () => import("./../includes/Navbar");
    const dataTables = () => import("./../data/dataTables");
    const ModalRequest = () => import("../data/modalRequest");
    const EmailCall = () => import("./email/Email");
    export default{
        name:'callRequests',
        components:{
            ModalRequest,
            Navbar,
            dataTables,
            EmailCall
        },
        mounted(){
            this.$store.dispatch('callRequests');
        },
        data:()=>{
            return{
                headers: [
                    {
                        text: 'Page',
                        sortable:false,
                        align: 'left',
                        value: 'name'
                    },
                    {
                        text: 'Phone Number',
                        sortable:false,
                        value: 'phone'
                    },
                    {
                        text: 'Email',
                        sortable:false,
                        value: 'email'
                    },
                    {
                        text: 'Comment',
                        sortable:false,
                        value: 'comment'
                    },
                    {
                        text: 'Time',
                        sortable:false,
                        value: 'time'
                    },
                    {
                        text:'',
                        sortable:false,
                        value:'controls'
                    }
                ],
                open:false,
                id:null,
                email:null
            }
        },
        computed:{
            data(){
                return this.$store.getters.getCallRequestById;
            }
        },
        methods:{
            showModal() {
                this.open = true;
            },
            toggleModal(val){
                this.open = val;
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
            showCallRequests(status = 1){
                let requests = this.$store.getters.getCallRequests;
                let data = [];
                if(requests){
                    if(Array.isArray(requests)){
                        requests.forEach((item)=>{
                            let routeName = this.$t('header').find(i => i.link === item.page);
                            if(!routeName){
                                routeName = this.$t('nav.pages').find(i => i.link === item.page);
                            }
                            if(item.status === status){
                                data.push({
                                    value:true,
                                    name:routeName ? routeName.text : item.page,
                                    phone:item.phone,
                                    email:item.email,
                                    comment:item.comment,
                                    time:this.getDate(item.created_at),
                                    id:item.id
                                });
                            }
                        });
                    }else{
                        data.push({
                            value:false,
                            name:requests.type,
                            services:requests.service,
                            phone:requests.phone,
                            email:requests.email,
                            comment:requests.comment,
                            time:this.getDate(requests.created_at),
                        })
                    }
                    return data;
                }
            }
        },
        created() {

        },
        ready:()=>{

        }
    }
</script>
