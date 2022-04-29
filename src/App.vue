<template>
  <div>
    <div id="nav">
      <router-link to="/signup">Sign up</router-link> |
      <router-link to="/signin">Sign in</router-link> |
      <router-link to="/account">Account</router-link> |
      <router-link to="/signout">Sign out</router-link> - You are
      {{ $store.state.isSignedIn ? "signed in" : "signed out" }}
    </div>
    <router-view />
  </div>
</template>
<script>
import GoTrue from 'gotrue-js'

export default {
  name: 'App',

  data () {
    return {
      auth: new GoTrue({
        APIUrl:
          'https://imaginative-sfogliatella-76a713.netlify.app/.netlify/identity',
        audience: '',
        setCookie: true
      })
    }
  },

  mounted () {
    if (this.auth.currentUser()) {
      this.$store.commit('signedIn')
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
