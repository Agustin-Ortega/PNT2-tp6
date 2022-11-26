<template>

  <div id="app">
    <Header />
  </div>
</template>

<script>

import Header from './componentes/Header.vue';


export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style>
#app {
  /* background: steelblue; */
  font-family: "Montserrat", "Avenir";


}

body {
  background-color: #232323;
  margin-top: -20px;
  font-family: "Montserrat", "Avenir";

}

html {
  background-color: rgb(32, 24, 20);
}
</style>
