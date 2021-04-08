<template>
    <div className='login-container'>

        <div className='form'>
            <h1>Cadastro</h1>
            <input v-model="email" type='text' name='email' id='email' placeholder="email" class='input-style'/>
            <input v-model="username" type='text' name='username' id='username' placeholder="username" class='input-style'/>
            <input v-model="password" type='password' name='password' id='password' placeholder="password" class='input-style'/>
            <input v-model="confirmPassword" type='password' name='confirmPassword' id='confirmPassword' placeholder="confirm password" class='input-style'/>
            <Button text='Cadastrar' @click="registerClick"/>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button'
import { verifyEmail, createUser } from '../services/firebase'

export default {
    name: 'Register',
    components: {
        Button
    },
    data (){
        return{
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
    },
     methods: {
        async registerClick(){
            try {
                const emailOk = await verifyEmail(this.email)
                console.log(emailOk)
                if(this.checkPasswords() && !emailOk){
                    const newUser = {email: this.email, username: this.username, password: this.password}
                    await createUser(newUser)
                    this.$router.push({name: 'counter'})
                } else{
                    alert('Há algo de errado')
                } 
            } catch (error) {
                console.log(error)
            }
        },
        checkPasswords(){
            return this.password === this.confirmPassword
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