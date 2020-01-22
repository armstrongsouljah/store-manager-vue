<template>
    <div class="container">
        Login component
        <div class="login-container">
            <form method="POST">
                <div class="input-field">
                    <label for="username">username</label>
                    <input class="form-control" id="username" v-model="username" type="text" placeholder="johndoe"/>
                </div>
                <div class="input-field">
                    <label for="password">Password</label>
                    <input class="form-control" v-model="password" id="password" type="password" />
                </div>
                <input type="submit" @click.prevent="handleSubmit" class="submit-button" value="Login"/>
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'LoginPage',
    data(){
        return {
            username: null,
            password: null
        }
    },
    methods:{
        ...mapActions(['loginUser']),
        handleSubmit(){
           const userData = {
               username: this.username,
               password: this.password
           }
           this.loginUser(userData)
        }
    }
}
</script>
<style scoped>
 .container{
     width: 40vw;
     height:45vh;
     margin: 0 auto;
     display: flex;
     flex:1;
     flex-flow: column;
     padding: 12px;
     border:1px solid #333;
     align-items: center;
     justify-content: center;
     margin-top: 160px;
 }
 .input-field>input{
     width: 40vw;
     outline: none;
     border: none;
     padding: 6px;
     border-bottom: 2px solid #333;
     margin-left: 5px;
     margin-bottom: 4px;
 }
 .input-field>input:focus{
     background: none;
     
 }
</style>