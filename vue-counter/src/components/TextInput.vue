<template>
  <input v-model="currentValue" :value="value" :type="returnInputType"  :name="type" :id="type" :placeholder="type" className='input-style'/>    
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
