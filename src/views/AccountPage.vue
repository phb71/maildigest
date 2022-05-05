<template>
<div>
  <h1>Your account</h1>
  <p>Your city: {{ this.city }}</p>
  <UpdateCity />
  <br />
  <SendEmail :city="this.city" />
  </div>
</template>
<script>
import SendEmail from '../components/SendEmail.vue'
import UpdateCity from '../components/UpdateCity.vue'
import gotrue from '../gotrue.js'
// import { mapState } from 'pinia'
// import { useUser } from '../stores/user'

export default {
  name: 'AccountPage',
  computed: {
    // ...mapState(useUser, ['loggedIn'])
  },
  components: {
    SendEmail,
    UpdateCity
  },

  data () {
    return {
      city: null
    }
  },

  mounted () {
    if (gotrue.auth.currentUser()) {
      this.city = gotrue.auth.currentUser().user_metadata.city
    } else {
      this.$router.push('/signin')
    }
  }
}
</script>
