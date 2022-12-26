<template>
    <div id="backend-login">
        <div class="container">
            <div class="row">
                <div class="offset-3 col-md-5 login">
                    <div class="card bg-white p-4 border-0">
                        <div>
                            <h3 class="font-weight-bold text-dark mt-2 mb-4">Manager Authorization</h3>
                        </div>
                        <div>
                            <form @submit.prevent="login" method="post">
                                <div class="form-group">
                                    <input v-model="form['username']" type="text" class="form-control bg-light border-0 text-dark" name="username" placeholder="Username" required>
                                </div>
                                <div class="form-group position-relative">
                                    <input v-model="form['password']" type="password" class="form-control bg-light border-0" name="password" placeholder="Password">
                                    <span v-if="error.password" class="text-danger">{{error.password[0]}}</span>
                                    <span @click="visiblePassword($event)" class="gg-eye" style="cursor: pointer"></span>
                                </div>
                                <div class="form-group">
                                    <input v-model="form['remember_token']" id="rememberMe" name="remember_token" type="checkbox">
                                    <label class="ml-1" for="rememberMe">Keep me logged in</label>
                                </div>
                                <p v-if="error" class="text-danger my-2">{{error}}</p>
                                <button type="submit" class="btn font-weight-bold rounded">Log in</button>
                            </form>
                        </div>
                        <p v-if="success" class="text-success text-center"><v-progress-circular indeterminate color="primary" class="mr-2"></v-progress-circular>{{success}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'login',
        data(){
            return{
                form:[],
                success:'',
                error:''
            }
        },
        methods:{
            visiblePassword(e){
                let input = $('body').find('input[name="password"]').attr('type') === 'text' ? 'password' : 'text';
                $('body').find('input[name="password"]').attr('type',input)
            },
            login(){
                this.error = '';
                this.success = '';
                axios.post('/login',{
                    username:this.form.username,
                    password:this.form.password,
                    remember:this.form.remember_token ? this.form.remember_token : false

                }).then((response)=>{
                    if(response.data === 'Error'){
                        this.error = 'Something went wrong!';
                    }else{
                        this.form = [];
                        this.success = 'Authentication successful';
                        this.$store.dispatch('userSession').then(()=>{
                            this.$router.go(this.$route.currentPage)
                        });

                    }
                })
            }
        }
    }
</script>
