<template>
    <div>
        <input type="text" placeholder="Username" v-model="username">
        <input type="text" v-model="password" placeholder="password">
        <button type="submit" @click.prevent="send">Reset</button>
        {{message}}
    </div>
</template>

<script>
    export default{
        data:()=>{
            return{
                username:'',
                password:'',
                message:''
            }
        },
        methods:{
            send(){
                axios.post('/admin/reset',{username:this.username,password:this.password}).then(()=>{
                    this.message = 'Your password has been changed!'
                })
            }
        }
    }
</script>
