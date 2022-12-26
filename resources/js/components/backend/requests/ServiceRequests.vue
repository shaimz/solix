<template>
    <div id="request-page" title="">
        <Navbar v-bind:heading="this.$attrs.head" v-bind:tabs="this.$attrs.nav"></Navbar>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-active-requests" role="tabpanel" aria-labelledby="pills-requests-tab">
                <dataTables :seenPage="'service'" v-bind:page-type="'default'" v-bind:heading="Object.values(this.$attrs.nav[0])[0]" v-bind:headings="headers" v-bind:items="showServiceRequests(1)" @value="showModal"></dataTables>
            </div>
            <div class="tab-pane fade" id="pills-archive" role="tabpanel" aria-labelledby="pills-archive-tab">
                <dataTables v-bind:page-type="'archive'" v-bind:heading="Object.values(this.$attrs.nav[0])[1]" v-bind:headings="headers" v-bind:items="showServiceRequests(0)"></dataTables>
            </div>
        </div>
        <modal-request :route="'emailService'" :headings="this.$attrs.head" v-if="open" v-bind="data" :type="'service'" :id="id" @offvalue="toggleModal" :open="open"></modal-request>
    </div>
</template>

<script>
    const Navbar = () => import("./../includes/Navbar");
    const dataTables = () => import("./../data/dataTables");
    const ModalRequest = () => import("../data/modalRequest");
    const EmailService = () => import("./email/Email");
    export default{
        name:'serviceRequests',
        components:{
            ModalRequest,
            Navbar,
            dataTables,
            EmailService
        },
        props:{
          isMail:Boolean
        },
        mounted(){
            this.$store.dispatch('serviceRequests');
        },
        data:()=>{
            return{
                headers: [
                    {
                        text: 'Type',
                        sortable:false,
                        align: 'left',
                        value: 'name'
                    },
                    {
                        text: 'Service',
                        sortable:false,
                        value: 'services'
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
                email:null,
            }
        },
        computed:{
            data(){
                return this.$store.getters.getServiceRequestById;
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
            showServiceRequests(status = 1){
                let requests = this.$store.getters.getServiceRequests;
                let data = [];
                if(requests){
                    if(Array.isArray(requests)){
                        requests.forEach((item)=>{
                            if(item.status === status){
                                data.push({
                                    value:true,
                                    name:item.type,
                                    services:item.service,
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
        created (){

        },
        ready:()=>{

        }
    }
</script>
