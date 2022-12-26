<template>
    <div id="economy" class="text-white padding-125">
        <div class="row justify-content-center px-0">
            <div class="row-economy col-lg-11 col-xl-7 col-11 justify-content-center pl-0">
                <div class="economy-body">
                    <h2 v-html="$t(page+'.economy.title')"></h2>
                    <p>{{$t(page+'.economy.text')}}</p>
                    <button v-if="page !== 'b2g'" class="btn-primary" @click="toggleModal(true)">{{$t('order')}}</button>
                </div>
                <div class="economy-data d-flex">
                    <p v-show="page !== 'b2g'">{{$t('home.economy.formula')}}</p>
                    <p v-show="page !== 'b2g'">1,3 m kwh×1.812 mdl/kwh = 2 355 600 mdl</p>
                    <div class="economy-item col-lg-3 col-md-12" v-for="item in $t(page+'.economy.data')">
                        <h1 class="number">{{item.value}}</h1>
                        <div class="economy-bottom">
                            <span><img v-lazy="'/assets/icons/light-yellow.png'"/></span>
                            <p class="d-inline-block ml-2 mt-2">{{item.name}}<span data-toggle="tooltip" :title="item.tooltip.text" v-if="item.tooltip" class="tooltip"><img src="/assets/icons/tooltip.png" /></span></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {bus} from "../../../event/eventbus";

    export default {
        name: 'economy',
        props: ['page'],
        data() {
            return {
                scrolled:true
            }
        },
        mounted() {
            this.initiateCount()
            $('[data-toggle="tooltip"]').tooltip();
        },
        methods: {
            toggleModal(val) {
                bus.$emit('openModal', {value: val, type: 'call'});
            },
            initiateCount() {
                let _this = this;
                    $(window).scroll(function () {
                        var scrTop = $(window).scrollTop();
                        if(_this.scrolled && $('.economy-item .number').offset() !== undefined){
                            if (scrTop > $('.economy-item .number').offset().top - $(window).height()) {
                                _this.animate();
                                _this.scrolled = false;
                            }
                        }
                    })
            },
            animate() {
                let numbers = $('.economy-item');
                numbers.each((i,e) => {
                    var number = 0;
                    let num = $(e).find('.number').text().replace(/(,)/g,'.');
                    let char = num.replace(/\d+/g,'');
                        let reset = setInterval(function () {
                            number = parseFloat(number) + (num.includes('.') ? 0.1 : 1);
                            if (number.toFixed(2) <= parseFloat(num)) {
                                $(e).find('.number').text(`${parseFloat(number.toFixed(4)).toString().replace('.', ',')}${(char === '.' ? '' : char)}`);
                            }else{
                                clearInterval(reset)
                            }
                        }, 60);

                })
            }
        }
    }
</script>
