<template>
    <div>
    <p v-if="xsmall" class="advantage-title">{{$t('products.advantages')}}</p>
        <div class="companyFeatures d-grid">
            <div class="advantage d-flex" :key="advantage.id" v-for="advantage in getAdvantages()">
                <img :src="getIcon(advantage)" :alt="advantage.name" />
                <div class="advantage-info">
                    <p class="font-weight-bold text-dark">{{advantage.name}}</p>
                    <p class="text-dark">{{advantage.value}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import windowInstance from "../../../width";

    export default {
        name: 'Advantages',
        props: ['items'],
        data(){
            return {
                defaultItems: [
                    {
                        id: 0,
                        name: 'Warranty',
                        value: '5 years warranty',
                        icon: '/assets/icons/advantages/warranty.png'
                    },
                    {
                        id: 1,
                        name: 'Life of work',
                        value: 'Up to 20 years optional',
                        icon: '/assets/icons/advantages/life_of_work.png'
                    },
                    {
                        id: 2,
                        name: 'Delivery',
                        value: '350 MDL or pickup',
                        icon: '/assets/icons/advantages/delivery.png'
                    },
                    {
                        id: 3,
                        name: 'Online consultation',
                        value: 'Any time of the day 24/7',
                        icon: '/assets/icons/advantages/consultation.png'
                    }
                ]
            }
        },
        computed:{
            medium(){return windowInstance.data.medium},
            windowWidth(){return windowInstance.data.largeCompare},
            mediumCompare(){return windowInstance.data.mediumCompare},
            xsmall(){return windowInstance.data.xsmall}
        },
        methods: {
            getAdvantages(){
                return this.defaultItems;
            },
            getIcon(advantage){
                return advantage.advantages && advantage.advantages.icon ? advantage.advantages.icon : advantage.icon;
            }
        }
    }
</script>
