<template>
    <div id="steps" class="row padding-125">
        <div class="col-xl-7 col-11 m-auto">
            <h2>{{$t(page+'.steps.title')}}</h2>

            <v-tabs v-model="tab">
                <template>
                    <div v-if="xsmall"
                         class="nav flex-column nav-pills me-3 col-lg-2 col-11 px-0 flex-md-row flex-lg-column"
                         id="v-pills-tab" role="tablist"
                         aria-orientation="vertical">
                        <ul>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="trigger4" data-toggle="dropdown" href="#" role="button"
                                   aria-haspopup="true" aria-expanded="false">{{active ? active :
                                    $t(page+'.steps.tabs')[0].title}}</a>
                            </li>
                        </ul>
                    </div>
                </template>
                <v-tab v-if="!xsmall" v-for="(tab,index) in $t(page+'.steps.tabs')" :key="'tab-'+index"><h5>{{tab.title}}</h5></v-tab>
            </v-tabs>
            <v-tabs-items v-if="!xsmall" v-model="tab">
                <v-tab-item v-for="(item,index) in $t(page+'.steps.tabs')" :key="'tab-item-'+index">
                    <p class="steps-description">{{item.text}}</p>
                    <div class="steps-grid">
                        <div class="step" v-for="(tabItem,i) in item.list" :key="'step-'+i">
                            <div class="step-title d-flex">
                                <span class="roboto">{{i+1}}</span>
                                <span>{{tabItem.title}}</span>
                            </div>
                            <div class="step-text">
                                <p>{{tabItem.text}}</p>
                            </div>
                        </div>
                    </div>
                </v-tab-item>
            </v-tabs-items>
            <div v-else class="tab-content col-lg-10 col-12 pr-0" id="v-pills-tabContent">
                <div v-for="(item,i) in $t(page+'.steps.tabs')"
                     :key="'tab-'+i"
                     :class="['tab-pane', 'fade', item.title === active ? 'show active' : '']"
                     :id="item.title"
                     role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <p class="steps-description">{{item.text}}</p>
                    <div class="steps-grid">
                        <div class="step" v-for="(tabItem,i) in item.list" :key="'step-'+i">
                            <div class="step-title d-flex">
                                <span class="roboto">{{i+1}}</span>
                                <span>{{tabItem.title}}</span>
                            </div>
                            <div class="step-text">
                                <p>{{tabItem.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="schema">
                <lottie-player :src="$t('b2b.steps.scheme.animation')" :options="optionsLottie"> </lottie-player>
<!--                <h2 class="schema-title">{{$t(page+'.steps.scheme.title')}}</h2>-->
<!--                <div class="row">-->
<!--                    <div class="col-md-2 m-auto">-->
<!--                        <img v-lazy="'/assets/components/scheme/factory.png'" alt="'"/>-->
<!--                        <h5 class="my-3">{{$t(page+'.steps.scheme.customer.title')}}</h5>-->
<!--                        <p>{{$t(page+'.steps.scheme.customer.text')}}</p>-->
<!--                    </div>-->
<!--                    <div class="col-md-7 text-center m-auto schema-visualisation">-->
<!--                        <p v-html="$t(page+'.steps.scheme.upperText')"></p>-->
<!--                        <p v-html="$t(page+'.steps.scheme.lowerText')"></p>-->
<!--                    </div>-->
<!--                    <div class="col-md-2 m-auto text-right">-->
<!--                        <img v-lazy="'/assets/components/header/logo-vector-yellow.png'" alt="'"/>-->
<!--                        <h5 class="my-3">{{$t(page+'.steps.scheme.supplier.title')}}</h5>-->
<!--                        <p>{{$t(page+'.steps.scheme.supplier.text')}}</p>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import windowInstance from "../../../width";
    import {bus} from "../../../event/eventbus";

    export default{
        name:'steps',
        props:['page'],
        data(){
            return{
                tab: '',
                active:this.$t(this.page+'.steps.tabs')[0].title,
                text:'',
                optionsLottie:{
                    autoplay: true,
                    speed: 1,
                    maxWidth:'600px',
                    loop:true
                }
            }
        },
        computed:{
            small(){return windowInstance.data.mediumCompare},
            xsmall(){return windowInstance.data.xsmall}
        },
        mounted() {
          this.initialisePicker()
        },
        methods:{
            fetchList(list) {
                let array = [];
                for (let i in list) {
                    if (list[i].title) array.push({id:i,value:list[i].title})
                }

                return array;
            },
            getTab(item) {
                let list = this.$t(this.page + '.steps.tabs');
                for (let i in list) {
                    if (list[i].title === item.value) {
                        return list[i].title
                    }
                }
            },
            initialisePicker(){
                setTimeout(() => {
                let trigger = document.querySelector('#trigger4');
                if(trigger) {
                        let _this = this;
                        let vm = this;
                        var mobileSelect1 = new MobileSelect({
                            trigger: "#trigger4",
                            title: "",
                            wheels: [{data: this.fetchList(this.$t(this.page+'.steps.tabs'))}],
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
                }, 800)
            },
            setTab(tab){
                this.text = tab.title;
            }
        },
        watch:{
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
    .schema{
        background-color: transparent !important;
        display: flex;
        margin: auto;
        justify-content: center;
    }
    .steps-grid{
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(100px,240px));
        grid-column-gap: 40px;
        margin:40px 0;
    }
    .steps-description{
        max-width: 860px;
    }
    .steps-grid .step-title{
        align-items: center;
        position: relative;
    }
    .steps-grid .step-title .roboto{
        margin-left: 30px;
        margin-right: 30px;
    }
    .steps-grid .step-title span:nth-child(2){
        font-weight: 700;
        font-size: 16px;
    }
    .steps-grid .step-text{
        margin-top:15px;
    }
    .v-tab{
        border-bottom: 1px solid #DEDEDE;
    }
    .steps-grid .step-title:before{
        content:'';
        position: absolute;
        left:0;
        width: 2px;
        height: 46px;
        background-color: #FFE454;
    }
    .v-tab.v-tab--active{
        color:#1f1f1f;
    }
    .schema{
        background-color: #F3F5F6;
        border-radius: 10px;
        margin-bottom:40px
    }
    .schema .schema-title{
        margin-bottom:50px;
    }
    .schema > .row > .col-md-2 > h5{
        text-transform: uppercase;
    }
    .schema > .row > .col-md-2 > p{
        font-weight: 400;
    }

    .schema-visualisation p:nth-child(1){
        border-bottom: 2px dashed #79C25A;
        padding-bottom: 40px;
        margin-bottom: 40px !important;
    }
    .schema-visualisation p:nth-child(2){
        border-top: 2px dashed #DEDEDE;
        padding-top: 40px;
    }
    .schema-visualisation p:nth-child(1):after{
        content: '';
        position: absolute;
        left: 0;
        display: flex;
        margin-top: 37px;

        border: solid #79C25A;
        border-width: 0 2px 2px 0;
        padding: 3px;
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }
    .schema-visualisation p:nth-child(2):before{
        content: '';
        position: absolute;
        right: 0;
        display: flex;
        margin-top: -45px;

        border: solid #DEDEDE;
        border-width: 0 2px 2px 0;
        padding: 3px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
    .arrow{

    }

    .arrow.right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }

    .arrow.left {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }

</style>
