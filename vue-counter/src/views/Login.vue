<template>
    <div className='login-container'>

        <div className='form'>
            <h2>Login</h2>
            <input v-model="username" type='text' name='username' id='username' placeholder="username"/>
            <input v-model="password" type='password' name='password' id='password' placeholder="password"/>
            <Button text='Entrar' @click="loginClick"/>
            <!-- <Link to='/cadastro'>
                <Button text='Cadastrar-se' callback={()=>{}}/>
            </Link> -->
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

</style>