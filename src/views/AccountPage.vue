<template>
<div>
  <h1>Your account</h1>
  <p>Your city: {{ this.$store.state.isSignedIn ? this.auth.currentUser().user_metadata.city : '' }}</p>
  <UpdateCity />
  <br />
  <SendEmail />
  </div>
</template>
<script>
import SendEmail from '../components/SendEmail.vue'
import UpdateCity from '../components/UpdateCity.vue'
import GoTrue from 'gotrue-js'

export default {
  name: 'AccountPage',
  components: {
    SendEmail,
    UpdateCity
  },

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
    if (!this.$store.state.isSignedIn) {
      this.$router.push('/signin')
    }
  }
}
</script>
