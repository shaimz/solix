<template>
    <div class="pt-16 bg-secondary padding-bottom-125">
        <div class="d-flex justify-content-center col-xl-8 col-lg-11 col-11 mx-auto py-0">
            <div class="col-md-12 p-0 ml-4 position-unset">
                <div class="tab-content col-12 pr-0" id="v-pills-tabContent" v-if="render">
                    <div v-for="item in $t('home.projects.filter')"
                         :class="['tab-pane', 'fade', item.tab === active ? 'show active' : '']" :id="item.tab"
                         role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div class="service-department" v-for="(card,key) in itemSort(services,active)" :key="'service-'+key">
                            <h2>{{card.category}}</h2>
                            <div class="services">
                                <div
                                    class="justify-content-evenly card service"
                                    v-for="item in card.items" v-if="item.data" :key="item.id">
                                    <img :src="'/private/images/services/'+item.id+'/service-'+item.id+'-min.jpg'">

                                    <div class="card-body">
                                        <h4 class="mb-4">{{item.data.name}}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import windowInstance from "../../../../width";

    export default {
        name: 'allServices',
        props: ['lang', 'show'],
        data() {
            return {
                language: this.$route.params.locale === 'en' ? 1 : (this.$route.params.locale === 'ru' ? 3 : 2),
                services: [],
                active: 'all',
                itemsToShow: 4,
                toShow: this.show,
                total: 0,
                render: false,
                text:''

            }
        },
        computed: {
            xsmall(){return windowInstance.data.xsmall},
            windowWidth(){return windowInstance.data.xlarge}
        },
        methods: {
            fetchList(list) {
                let array = [];
                for (let i in list) {
                    if (list[i].text) array.push({id:i,value:list[i].text})
                }
                return array;
            },
            getTab(item) {
                let list = this.$t('home.projects.filter');
                for (let i in list) {
                    if (list[i].text === item.value) {
                        return list[i].tab
                    }
                }
            },
            initialisePicker() {
                setTimeout(() => {
                let trigger = document.querySelector('#trigger7');
                if(trigger) {

                        let _this = this;
                        let vm = this;
                        var mobileSelect1 = new MobileSelect({
                            trigger: "#trigger7",
                            title: "",
                            wheels: [{data: this.fetchList(this.$t('home.projects.filter'))}],
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
                                vm.active = _this.getTab(s)
                                vm.text = s.value;
                            },
                        });
                    }
                }, 700)
            },
            addItem(item, index = 0) {
                this.text = item.text;
                this.$nextTick(() => {
                    this.active = item.tab
                })
            },
            itemSort(items, type) {
                let data = [];

                switch (type) {
                    case 'all':
                        return items;
                    case 'person':
                        items.forEach((elem,index)=>{
                            if(elem) data.push({category:elem.category,items:elem.items.map(item => {if(item.type === 'personal') return item})})
                        })
                        break;
                    case 'business':
                        items.forEach((elem,index)=>{
                            if(elem) data.push({category:elem.category,items:elem.items.map(item => {if(item.type === 'business') return item})})
                        })
                        break;
                    case 'juridic':
                        items.forEach((elem,index)=>{
                            if(elem) data.push({category:elem.category,items:elem.items.map(item => {if(item.type === 'juridic') return item})})
                        })
                        break;
                    default:
                        data = [];
                        break;
                }

                let array = [];
                data.map((item) => {if(item.items[0]) return array.push(item)})
                return array
            },
            setActive(tab) {
                let types = {all: '', personal: 'personal', business: 'business', juridic: 'juridic'};
                if (tab !== this.active) {
                    this.active = tab;
                    let total = Object.values(this.services).filter((item, key) => item.type === types[tab]);
                    this.total = total.length;

                    if (tab === 'all') {
                        this.total = this.services.length
                    }
                }
            },
        },
        created() {
            this.$store.dispatch('services', {lang_id: this.language, limit: this.show, offset: 0}).then(() => {
                this.services = this.$store.getters.getServices
                this.total = this.services.length
                this.itemsToShow = this.show
                this.render = true;
            })
        },
        mounted() {
            this.initialisePicker()
        },
        watch: {
            language(newVal, oldVal) {
                if (oldVal !== newVal) this.language = newVal;
                this.$store.dispatch('services', {lang_id: newVal, limit: this.show, offset: 0}).then(() => {
                    this.services = this.$store.getters.getServices
                    this.total = this.services.length
                })
            },
            services(newVal, oldVal) {
                if (newVal !== oldVal) this.total = this.services.length;

            },
            rowsToShow(newVal, oldVal) {
                if (newVal !== oldVal) this.itemsToShow = newVal;
            },
            xsmall(n,o){
                if( n !== o){
                    if (n){
                        this.initialisePicker()
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .services-grid {
        grid-template-columns: repeat(2, minmax(150px, 1fr));
        grid-column-gap: 40px;
        grid-row-gap: 35px;
        grid-auto-rows:324px;
    }
    .services{
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(250px,360px));
        grid-column-gap: 40px;
        grid-row-gap: 35px;
    }

    .list-unstyled{
        padding:0 30px 30px 30px !important;
        margin-bottom: 0 !important;
    }
    .border-left-section:before {
        content: '';
        position: absolute;
        width: 2px;
        height: 98%;
        background-color: #DEDEDE;
        transform: translateY(5px);
        z-index: 1;
    }
    .card-body {
        padding: 0;
        text-align: left;
        flex:auto !important;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .card-body img{
        filter: invert(66%) sepia(15%) saturate(1360%) hue-rotate(
            58deg
        ) brightness(197%) contrast(89%);
    }
    .card:hover{
        background-color: #79C25A;
    }
    .card:hover h4{
        color:white;
    }
    .card:hover .card-body img{
        filter: unset;
    }
    .card-body h4{
        display: flex;
        padding-left: 30px;
        padding-right: 20px;
        padding-bottom: 30px;
        padding-top: 30px;
        margin-bottom: 0 !important;
    }

    .card {
        border-color: transparent;
        border-radius: 10px;
        display: flex !important;
        flex-direction: column;
    }

    .card{
        overflow: hidden;
    }
    #v-pills-tab {
        z-index: 1;
        padding-top: 0;
    }
    .service-department{
        margin-bottom: 80px;
    }
    .service-department h2{
        margin-bottom: 35px;
    }

</style>
