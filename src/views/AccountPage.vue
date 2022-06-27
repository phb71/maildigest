<template>
<div>
  <h1>Your account</h1>
  <p>
    <b>Your city:</b> {{ this.city.name }} -
  <GetTemperature v-if="this.city" :city="this.city" />°C
  </p>
  <UpdateCity @changeCity="(n) => this.city.name = n" />
  <br />
  <SendEmail :city="this.city" />
  </div>
</template>
<script>
import SendEmail from '../components/SendEmail.vue'
import UpdateCity from '../components/UpdateCity.vue'
import GetTemperature from '../components/GetTemperature.vue'
import gotrue from '../gotrue.js'

export default {
  name: 'AccountPage',
  components: {
    SendEmail,
    UpdateCity,
    GetTemperature
  },

  data () {
    return {
      city: {}
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
