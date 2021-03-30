<template>
  <input v-model="currentValue" :value="value" :type="returnInputType"  :name="type" :id="type" :placeholder="type" class='input-style'/>    
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    type: String,
    value: ''
  },
  computed: {
    returnInputType(){
      return this.type.includes('password')  ? 'password' : 'text'
    },
    currentValue(){
      
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
</style>
