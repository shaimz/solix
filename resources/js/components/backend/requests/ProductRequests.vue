<template>
    <div id="request-page" title="">
        <Navbar v-bind:heading="this.$attrs.head" v-bind:tabs="this.$attrs.nav"></Navbar>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-active-requests" role="tabpanel" aria-labelledby="pills-requests-tab">
                <dataTables :seenPage="'product'" v-bind:page-type="'default'" v-bind:heading="Object.values(this.$attrs.nav[0])[0]" v-bind:headings="headers" v-bind:items="showProductRequests(1)" @value="showModal"></dataTables>
            </div>
            <div class="tab-pane fade" id="pills-archive" role="tabpanel" aria-labelledby="pills-archive-tab">
                <dataTables v-bind:page-type="'archive'" v-bind:heading="Object.values(this.$attrs.nav[0])[1]" v-bind:headings="headers" v-bind:items="showProductRequests(0)"></dataTables>
            </div>
        </div>
        <modal-request :route="'emailProduct'" :headings="this.$attrs.head" v-if="open" v-bind="data" :type="'product'" :id="id" @offvalue="toggleModal" :open="open"></modal-request>
    </div>
</template>

<script>
    const Navbar        = () => import("./../includes/Navbar");
    const dataTables    = () => import("./../data/dataTables");
    const ModalRequest  = () => import("../data/modalRequest");
    const EmailProduct  = () => import("./email/Email");

    export default{
        name:'productRequests',
        components:{
            EmailProduct,
            ModalRequest,
            Navbar,
            dataTables
        },
        mounted(){
            this.$store.dispatch('productRequests');
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
                        text: 'Product',
                        sortable:false,
                        value: 'products'
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
                        text: 'Price',
                        sortable:false,
                        value: 'price',
                    },
                    {
                        text:'',
                        sortable:false,
                        value:'controls'
                    }
                ],
                open:false,
                id:null,
                isEmail:false,
                email:null,
                update:0
            }
        },
        computed:{
            data(){
                return this.$store.getters.getProductRequestById;
            }
        },
        methods:{
            showModal() {
                this.open = true;
            },
            toggleModal(val) {
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
            showProductRequests(status = 1){
                let requests = this.$store.getters.getProductRequests;
                let data = [];
                if(requests){
                    if(Array.isArray(requests)){
                        requests.forEach((item)=>{
                            if(item.status === status){
                                data.push({
                                    value:true,
                                    name:item.type,
                                    products:item.name,
                                    phone:item.phone,
                                    email:item.email,
                                    comment:item.comment,
                                    time:this.getDate(item.created_at),
                                    price:item.price+' EUR',
                                    id:item.id
                                });
                            }
                        });
                    }else{
                        data.push({
                            value:false,
                            name:requests.type,
                            products:requests.name,
                            phone:requests.phone,
                            email:requests.email,
                            comment:requests.comment,
                            time:this.getDate(requests.created_at),
                            price:requests.price+' EUR',
                            id:requests.id
                        })
                    }
                    return data;
                }
            }
        },
        created() {

        },
        ready:()=>{

        },
         watch:{
            open(n,o){
               console.log("newval: " + n);
             }
         }
    }
</script>
