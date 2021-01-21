<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['interceptorsRequest', 'interceptorsResponse'])
  },
  created () {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* border: 1px solid blue */
}
body {
  font-family: Arial, Helvetica, sans-serif;
  color: #444444;
}

div#app {
  background-color: #eee;
}
</style>
