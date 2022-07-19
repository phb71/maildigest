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
import gotrue from './shared/gotrue.js'

console.log('Firing App.vue')

export default {
  name: 'App',
  data () {
    return {
      gotrue
    }
  },
  mounted () {
    if (window.location.hash) {
      const tokenRecovery = window.location.hash.split('recovery_token=')[1]
      if (tokenRecovery) {
        console.log('recover_token')
        gotrue.auth
          .recover(tokenRecovery, true)
          .then(response => {
            console.log(response)
            this.$router.push('/resetpassword')
          })
          .catch((error) => {
            console.log(error)
          })
      }
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
