<template>
  <ca-button @click="testBingo" type="success">This is Future</ca-button>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import { CaButton } from '@cain-group/cain-ui-vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    // CaButton
  },
  mounted(){
    // console.log(CaButton)
  },
  methods:{
    testBingo(){
      alert('bingo')
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
