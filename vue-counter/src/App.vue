<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
 
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

html {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
}

body {
    background-color: lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
