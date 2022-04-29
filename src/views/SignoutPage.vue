<template>
  <div>
    <h1>{{ message }}</h1>
    <p>{{this.$store.state.isSignedIn }}</p>
  </div>
</template>
<script>
import GoTrue from 'gotrue-js'

export default {
  name: 'SignoutPage',

  data () {
    return {
      message: null,
      auth: new GoTrue({
        APIUrl:
          'https://imaginative-sfogliatella-76a713.netlify.app/.netlify/identity',
        audience: '',
        setCookie: true
      })
    }
  },

  mounted () {
    if (!this.$store.state.isSignedIn) {
      this.message = 'You are already signed out'
    } else {
      const user = this.auth.currentUser()
      user
        .logout()
        .then((response) => {
          this.message = 'You are now signed out'
          this.$store.commit('signedIn', false)
        })
        .catch((error) => {
          console.log('Failed to logout user: %o', error)
          throw error
        })
    }
  }
}
</script>
