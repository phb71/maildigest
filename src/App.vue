<template>
  <div>
    <div id="nav">
      <router-link to="/signup">Sign up</router-link>&nbsp;
      <router-link to="/signin">Sign in</router-link>&nbsp;
      <router-link to="/account">Account</router-link>&nbsp;
      <router-link to="/digest">Digest</router-link>&nbsp;
    </div>
    <router-view />
  </div>
</template>
<script>
import gotrue from './gotrue.js'

export default {
  name: 'App',
  data () {
    return {
      gotrue
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
