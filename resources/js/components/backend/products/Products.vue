<template>
<div id="single-page" class="all-product-page">
    <Navbar :heading="this.title"></Navbar>
    <dataTables @page="setPage" @statusUpdated="dispatchItems" :lang="lang" :numberPage="page" :add="'Product'" v-bind:page-type="'products'" v-bind:heading="this.title" :categories="categories" :headings="headers" v-bind:items="items"></dataTables>
</div>
</template>

<script>
    import {bus} from "../../../event/eventbus";
    const Navbar = () => import("../includes/Navbar");
    const dataTables = () => import("../data/dataTables");
export default{
    name:'productsPage',
    props:{
        title:String,
    },
    components:{
        Navbar,
        dataTables
    },
    data(){
        return{
            headers: [
                {
                    text: 'Type',
                    sortable:false,
                    align: 'left',
                    value: 'type'
                },
                {
                    text: 'Product',
                    sortable:false,
                    value: 'name'
                },
                {
                    text: 'Available',
                    sortable:false,
                    value: 'available'
                },
                {
                    text: 'Set number',
                    sortable:false,
                    value: 'sku'
                },
                {
                    text: 'Price',
                    sortable:false,
                    value: 'price'
                },
                {
                    text:'',
                    sortable:false,
                    value:'controls'
                }
            ],
            open:false,
            lang:0,
            items:[],
            page:0,
            categories:[]
        }
    },
    mounted(){
        this.lang = Vue.prototype.$lang;
    },
    created() {
        bus.$on('discard',val => {
            this.setPage(val)
        })
        this.$store.dispatch('categories',{lang_id:2}).then(()=>{
            this.categories = this.$store.getters.getCategories
            this.categories.unshift({id:0,data:{name:'All products'}})
        })
        this.dispatchItems()
    },
    computed:{

    },
    methods:{
        setPage(val){
            this.page = val;
        },
        dispatchItems(){
            this.$store.dispatch('products',{length:0,offset:0}).then(()=>{
                this.showProducts();
            })
        },
        langChange(){
            this.lang = 3;
        },
        showProducts(){
            let products = this.$store.getters.getProducts;
            let data = [];
            if(products){
                if(Array.isArray(products)){
                    products.forEach((item)=>{
                        if(item.name){
                            data.push({
                                value: true,
                                type: item.type,
                                name: item.name,
                                available: item.available,
                                sku: item.sku,
                                price: item.price+' EUR',
                                id: item.id
                            });
                        }
                    });
                }else{
                    data.push({
                        value:false,
                        type:products.type,
                        name:products.name,
                        available:products.available,
                        sku:products.sku,
                        price:products.price,
                        id:products.id
                    })
                }
                this.items = data;
            }
        }
    }

}
</script>
