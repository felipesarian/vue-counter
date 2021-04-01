<template>
    <h1> {{count}} </h1>
    <Button text='Counter' @click="counter" class='button'/>
</template>

<script>
import Button from '../components/Button';

export default {
    name: 'Counter',
    components: {
        Button
    },
    data (){
        return {
            count: 0
        }
    },
    methods: {
        counter(){
            this.count++
        }
    }
}
</script>

<style scoped>
.button{
    background-color: white;
    color: lightgreen
}
</style>
