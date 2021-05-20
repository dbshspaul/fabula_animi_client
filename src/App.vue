<template>
  <div id="app">
    <HelloWorld msg="Welcome"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)


export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  @import "~vuetify/dist/vuetify.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
