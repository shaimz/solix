<template>
    <div id="values" class="padding-125">
        <div class="values-container col-xl-7 col-lg-11 col-11 m-auto">
            <h2>{{$t('about.values.title')}}</h2>
            <div class="values-grid">
                <div class="value card" :key="'value-'+index" v-for="(value,index) in $t('about.values.list')">
                    <span class="card-img"></span>
                    <div class="card-body">
                        <h5 class="card-title">{{value.title}}</h5>
                        <p class="card-text">{{value.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'values',
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .values-grid{
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(100px,260px));
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
    .card-text{
        margin-top:15px;
        padding:0 30px 40px 30px;
    }
    .card-body{
        padding: 0;
    }
    .card-img{
        height: 60px;
        width: 60px;
        max-width: 60px;
        max-height: 60px;
        background: url('/assets/icons/star.png');
        margin:30px 0px 0px 30px;
    }
    .card .card-title{
        position: relative;
        padding:0px 30px 0px 30px;
    }
    .card .card-title:before{
        content:'';
        width: 2px;
        height: 100%;
        position: absolute;
        left:-1px;
        background: #FFE454;

    }
    .card:hover{
        background: #79C25A;
    }
    .card:hover .card-body{
        color:white;
    }
    .card:hover .card-title:before{
        display: none;
    }
    .card:hover .card-img{
        background: url('/assets/icons/star2.png');
    }
    .card .card-img{
        margin-bottom: 30px;
    }

</style>
