<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
<script>
import gotrue from '../gotrue.js'

export default {
  name: 'SignoutPage',

  data () {
    return {
      message: null
    }
  },

  mounted () {
    const user = gotrue.auth.currentUser()
    if (user) {
      user
        .logout()
        .then((response) => {
          this.message = 'You are now signed out'
        })
        .catch((error) => {
          console.log('Failed to logout user: %o', error)
          throw error
        })
    } else {
      this.$router.push('/signin')
    }
  }
}
</script>
