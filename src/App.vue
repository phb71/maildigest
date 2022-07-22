<template>
  <div class="w-4/12 inline-block">
  <nav>
    <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
            <ul>
                <li>
                    <router-link to="/signup">Sign up</router-link>
                </li>
                <li>
                    <router-link to="/signin">Sign in</router-link>
                </li>
                <li>
                    <router-link to="/account">Account</router-link>
                </li>
                <li>
                    <router-link to="/digest">Digest</router-link>
                </li>
            </ul>
    </div>
  </nav>
    <div class="text-left">
      <router-view />
    </div>
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