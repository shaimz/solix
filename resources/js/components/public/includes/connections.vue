<template>
    <div id="connections">
        <div class="col-12 col-lg-12 py-0">
            <div class="row padding-125 flex-column">
                <div class="col-xl-5 col-11 py-0 left-connection super-margin">
                    <div class="connections-text w-75 ml-auto">
                        <h2>{{$t('b2c.connections.title')}}</h2>

                        <div v-if="xsmall"
                             class="nav flex-column nav-pills me-3 col-lg-2 col-11 px-0 flex-md-row flex-lg-column"
                             id="v-pills-tab" role="tablist"
                             aria-orientation="vertical">
                            <ul>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="trigger8" data-toggle="dropdown" href="#" role="button"
                                       aria-haspopup="true" aria-expanded="false">{{title ? title :
                                        $t('b2c.connections.tabs')[0].title}}</a>
                                </li>
                            </ul>
                        </div>

                        <v-tabs v-model="tab" v-if="!xsmall">
                                <v-tab :key="'tab-'+index" v-for="(tab,index) in $t('b2c.connections.tabs')">
                                    <h5>{{tab.title}}</h5>
                                </v-tab>
                        </v-tabs>

                        <v-tabs-items v-if="!xsmall" v-model="tab">
                            <v-tab-item v-for="(item,i) in $t(page+'.connections.tabs')" :key="'tab-'+i">
                                <p>{{item.text}}</p>
                            </v-tab-item>
                        </v-tabs-items>

                        <div v-if="xsmall" class="tab-content col-lg-10 col-12 pr-0" id="v-pills-tabContent">
                            <div v-for="(item,i) in $t(page+'.connections.tabs')"
                                 :key="'tab-'+i"
                                 :class="['tab-pane', 'fade', item.title === active ? 'show active' : '']"
                                 :id="item.title"
                                 role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <p>{{item.text}}</p>
                            </div>
                        </div>

                        <button @click="toggleModal(true)" class="btn-primary">{{$t('order')}}</button>
                    </div>
                </div>

                <div class="col-xl-7 col-11 m-xl-0 m-auto py-0">
                    <v-tabs-items v-if="!xsmall" v-model="tab">
                        <v-tab-item v-for="(item,i) in $t(page+'.connections.tabs')" :key="'tab-item-'+i" :class="[i ? 'custom-cards' : '']">
                            <div class="connections-flex" :class="[item.tabNumber === 1 ? 'firstTab' : 'secondTab']">
                                <div class="content-card" :class="[card.group && card.header ? 'group' : (card.header && !card.group ? 'header' : ''), card.hasOwnProperty('type') ? 'icon-card-item' : '']" v-for="(card,num) in cards(item,item.cards)">
                                    <p v-if="card.header && !card.group" v-html="card.header"></p>

                                    <div v-if="!card.group && !card.hasOwnProperty('type')">
                                        <img v-lazy="card.img">
                                        <div class="body mt-4">
                                            <h5 class="card-title">{{card.title}}</h5>
                                            <p class="card-text">{{card.text}}</p>
                                        </div>
                                    </div>

                                    <div v-if="card.header && card.group && !card.hasOwnProperty('type')" class="group-parent">
                                        <p v-html="card.header"></p>
                                        <div class="group-flex">
                                            <div :class="[cg.hasOwnProperty('type') ? 'plus-card' : '']" v-for="cg in cardGroups(card.group)">
                                                <img v-if="!cg.hasOwnProperty('type')" v-lazy="cg.img" />
                                                <div v-if="!cg.hasOwnProperty('type')" class="body mt-4">
                                                    <h5 class="card-title">{{cg.title}}</h5>
                                                    <p class="card-text">{{cg.text}}</p>
                                                </div>
                                                <img class="plus-icon" v-if="cg.hasOwnProperty('type')" :src="cg.src" />
                                            </div>
                                        </div>
                                    </div>

                                    <img v-if="card.hasOwnProperty('type') && card.src === 'next'" :src="nextIcon.src" :style="nextIcon.style" />
                                </div>
                            </div>
                        </v-tab-item>
                    </v-tabs-items>

                    <div v-if="xsmall" class="tab-content col-lg-10 col-12 pr-0" id="v-pills-tabContent">
                        <div v-for="(item,index) in $t('b2c.connections.tabs')"
                             :class="['tab-pane', 'fade', item.title === active ? 'show active' : '',[index ? 'custom-cards' : '']]"
                             :id="item.title"
                             role="tabpanel" aria-labelledby="v-pills-home-tab">

                            <div class="connections-grid" :class="[item.tabNumber === 1 ? 'firstTab' : 'secondTab']">
                                <div class="content-card" :class="[card.group && card.header ? 'group' : (card.header && !card.group ? 'header' : ''), card.hasOwnProperty('type') ? 'icon-card-item' : '']" v-for="card in cards(item,item.cards)">
                                    <p v-if="card.header && !card.group" v-html="card.header"></p>

                                    <div v-if="!card.group && !card.hasOwnProperty('type')">
                                        <img v-lazy="card.img">
                                        <div class="body mt-4">
                                            <h5 class="card-title">{{card.title}}</h5>
                                            <p class="card-text">{{card.text}}</p>
                                        </div>
                                    </div>

                                    <div v-if="card.header && card.group && !card.hasOwnProperty('type')" class="group-parent">
                                        <p v-html="card.header"></p>
                                        <div class="group-flex">
                                            <div v-for="cg in cardGroups(card.group)">
                                                <img v-if="!cg.hasOwnProperty('type')" v-lazy="cg.img" />
                                                <div v-if="!cg.hasOwnProperty('type')" class="body mt-4">
                                                    <h5 class="card-title">{{cg.title}}</h5>
                                                    <p class="card-text">{{cg.text}}</p>
                                                </div>
                                                <img class="plus-icon" v-if="cg.hasOwnProperty('type')" :src="cg.src" />
                                            </div>
                                        </div>
                                    </div>

                                    <img v-if="card.hasOwnProperty('type') && card.src === 'next'" :src="nextIcon.src" :style="nextIcon.style" />
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
    import {bus} from "../../../event/eventbus";
    import windowInstance from "../../../width";

    export default {
        name: 'connections',
        props: ['page'],
        data() {
            return {
                tab: '',
                active: this.$t(this.page+'.connections.tabs')[0].title,
                text: '',
                title: '',
                icons:['/assets/icons/pen-factory.png','/assets/icons/123.png','/assets/icons/paper-factory.png','/assets/icons/tools-factory.png','/assets/icons/panel-factory.png'],
                nextIcon: {
                    src:'/assets/icons/arrow-down-2.png',
                    style:{'transform': 'rotate(270deg)'}
                },
                downIcon: {
                    src:'/assets/icons/arrow-down-2.png',
                },
                plusIcon:{
                    src:'/assets/icons/plus-sign.png'
                }
            }
        },
        computed: {
            width() {
                return windowInstance.data.width
            },
            windowWidth() {
                return windowInstance.data.compare
            },
            windowCompare() {
                return windowInstance.data.compare
            },
            small() {
                return windowInstance.data.mediumCompare
            },
            medium() {
                return windowInstance.data.medium
            },
            large() {
                return windowInstance.data.large
            },
            compare() {
                return windowInstance.data.windowCompare
            },
            xsmall() {
                return windowInstance.data.xsmall
            },
        },
        methods: {
            cardGroups(cards){
                let c = [...cards];
                c.forEach((e,i)=>{
                    if(e.icon === 'plus') c.splice(i+1,0,{type:'image',src:'/assets/icons/plus-sign.png'})
                })
                return c;
            },
            cards(main,cards){
                let index = main.icon.index.split(',');

                let c = [...cards];
                index.forEach((e,i)=>{
                    let indicator = parseInt(e)+1+i;
                    c.splice(indicator,0,{type:'image',src:main.hasOwnProperty('icon')? main.icon.type : ''})
                })

                return c;
            },
            getIcon(card,index,style = ''){
                if(style){
                    if(card.icon === 'next'){
                        if(!this.xsmall) {
                            return this.nextIcon.style
                        }
                    }
                }else{
                    switch(card.icon){
                        case 'next':
                            if(this.xsmall) return this.downIcon.src
                            else return this.downIcon.src
                        case 'plus':
                            return this.plusIcon.src
                    }
                }
            },
            getStyleIcon(card){
                return this.getIcon(card,true)
            },
            fetchList(list) {
                let array = [];
                for (let i in list) {
                    if (list[i].title) array.push({id:i,value:list[i].title})
                }
                return array;
            },
            getTab(item) {
                let list = this.$t(this.page + '.connections.tabs');
                for (let i in list) {
                    if (list[i].title === item.value) {
                        return list[i].title
                    }
                }
            },
            setTab(tab) {
                this.text = tab.title;
            },
            toggleModal(val) {
                bus.$emit('openModal', {value: val, type: 'call'});
            },
            initialisePicker(){
                setTimeout(() => {
                let trigger = document.querySelector('#trigger8');
                if(trigger) {
                        let _this = this;
                        let vm = this;
                        var mobileSelect1 = new MobileSelect({
                            trigger: "#trigger8",
                            title: "",
                            wheels: [{data: this.fetchList(this.$t(this.page + '.connections.tabs'))}],
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
            }
        },
        mounted() {
            this.initialisePicker()
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

<style scoped lang="scss">
    #app #connections {
        background-color: #F3F5F6;
        div.col-xl-7.col-11.m-xl-0{
            padding: 0 !important;
            max-width: 1160px !important;
        }
    }
    .connections-flex.firstTab{
        .content-card.icon-card-item{
            background-color: white !important;
            border-radius: 0 !important;
        }
        .content-card:not(.icon-card-item){
            &:nth-child(1){
                border-top-right-radius: 0 !important;
                border-bottom-right-radius: 0 !important;
            }
            &:nth-child(3){
                border-top-left-radius: 0 !important;
                border-bottom-left-radius: 0 !important;
            }
        }
    }

    .content-card img{
        margin-top: 20px !important;
        padding: 0 !important;
    }
    .icon-card-item{
        background-color: unset !important;
    }
    .custom-cards .connections-flex{
        .content-card{
            width: 180px !important;
            background-color: unset !important;
            padding: 10px 0 !important;
        }
    }
    .connections-flex{
        max-width: 1160px;
        display: flex;
        flex-flow: row wrap;
        align-content: space-between;
        justify-content: center;
        margin-top: 60px !important;
        .content-card{
            border-radius: 10px;
            text-align: center;
            background-color: white !important;
            padding:10px 0 40px 0 !important;
            display: flex;
            align-items: center;
            &.icon-card-item{
                background-color: unset !important;
                width: 30px !important;
                padding: 0 !important;
                margin: 0 !important;
                justify-content: center;
                &:nth-child(4){
                    margin-right: 20px !important;
                }
                &:nth-child(6){
                    margin-left: 20px !important;
                    margin-right: 20px !important;
                }
                img{
                    padding: 0 !important;
                    width: 18px;
                    height: 18px;
                    margin-bottom: 90px;
                }
            }
            &:nth-last-child(1){
                background-color: white !important
            }
            &.header{
                display: block;
                width: 220px !important;
                background-color: white !important;
            }
            &.group{
                width: auto !important;
                padding: 0 !important;
            }
            .body{
                h5:before{
                    display: none;
                }
                h5,p{
                    padding:0 15px !important;
                }
            }
        }
        .group-parent{
            background-color: white !important;
            padding:10px 0  !important;
            -moz-border-radius: 10px;
            -webkit-border-radius: 10px;
            border-radius: 10px;

            .group-flex{
                display: flex;
                height: 237px;
                div{
                    width: 210px !important;
                }
            }
        }
    }
    .connections-flex .group-parent .group-flex div.plus-card{
        width: 10px !important;
        padding: 0 !important;
        margin: 0 !important;
        justify-content: center;
        margin-top: 30px !important;
    }
    .group-parent > p{
        font-size: 14px !important;
        font-weight: 600 !important;
    }
    .content-card.header{
        & > p{
            font-size: 14px !important;
            font-weight: 600 !important;
        }
    }
    #connections .connections-flex .group-flex{
        .card-text{
            padding: 0 10px !important;
        }
    }
    .content-card{
        text-transform: uppercase;
        .body p.card-text{
            padding: 0 !important;
            font-size: 12px !important;
            font-weight: 500 !important;
        }
        .card-title{
            text-transform: capitalize !important;
        }
    }
    .connections-text {
        max-width: 760px;
        margin: auto !important;
        text-align: center;
    }

    #connections .v-tabs .v-tabs-bar {
        background-color: transparent !important;
    }

    #connections .theme--light.v-tabs-items {
        background-color: transparent !important;
    }

    .v-tab {
        padding: 0 30px 0 0;
        border-bottom: 1px solid #DEDEDE;
        font-weight: 600;
        width: 100%;
    }

    .v-tab.v-tab--active {
        color: #1f1f1f;
    }

    .connections-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(240px, 360px));
        grid-column-gap: 40px;
        grid-row-gap: 40px;
    }

    .content-card {
        background-color: white;
    }

    .content-card .card-title {
        padding: 00px 40px 0 40px;
        font-weight: 600;
    }

    .content-card img {
        padding: 30px 40px 10px 40px;
    }

    .content-card .card-text {
        padding: 0 40px 40px 40px;
    }

    .content-card .body h5 {
        position: relative;
    }

    .content-card .body h5:before {
        content: '';
        width: 2px;
        height: 100%;
        position: absolute;
        background-color: #FFE454;
        left: 0;
    }

    .v-tabs {
        margin-bottom: 30px;
    }

    .v-tabs-items {
        margin-bottom: 45px;
        margin-top: 20px;
    }
    .firstTab .content-card .body{
        p.card-text{
            padding:0 20px !important;
        }
    }

    @media (min-width: 429px) and (max-width: 564px){
        .connections-flex.firstTab .content-card {
            width: 45%
        }
    }

    @media (min-width: 1061px){
        #connections {
            .content-card.header {
                .body {
                    p.card-text {
                        width: 90%;
                        margin: 0 auto
                    }
                }
            }
        }
    }
</style>
