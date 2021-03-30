<template>
    <h1>Tela de Cadastro</h1>
    <Button text='Cadastrar' @click="registerClick"/>
</template>

<script>
import Button from '../components/Button'

export default {
    name: 'Register',
    components: {
        Button
    },
     methods: {
        registerClick(){
            this.$router.push({name: 'counter'})
        }
    }
}
</script>

<style scoped>

</style>