<template>
  <div>
    {{ message }}
  </div>
</template>
<script>
import gotrue from '../shared/gotrue.js'

console.log('Vue view - SignoutPage.vue')

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
