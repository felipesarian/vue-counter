<template>
    <div className='login-container'>

        <div className='form'>
            <h2>Login</h2>
            <input v-model="username" type='text' name='username' id='username' placeholder="username" class='input-style'/>
            <input v-model="password" type='password' name='password' id='password' placeholder="password" class='input-style'/>
            <Button text='Entrar' @click="loginClick"/>
            <router-link to='/register'>
                <Button text='Cadastrar-se'/>
            </router-link>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button'

export default {
    name: 'LoginPage',
    components: {
        Button
    },
    data (){
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        loginClick(){
            const user = {username:this.username, password:this.password}
            console.log(user)
        }
    }
}
</script>

<style scoped>
.input-style {
    margin-bottom: 10px;
    border: solid 0px;
    box-sizing: border-box;
    background-color: lightgray;
    height: 40px;
    width: 100%;
}

input::placeholder {
    padding-left: 3px;
}

.login-container {
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 350px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.form {
    width: 70%;
}
</style>