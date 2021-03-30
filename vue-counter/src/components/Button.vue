<template>
    <button type='button' className='action-button' class='action-button'>{{text}}</button> 

</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String
    }
}
</script>

<style scoped>
    .action-button {
    width: 100%;
    height: 40px;
    border: solid 0;
    background-color: lightgreen;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
}
</style>