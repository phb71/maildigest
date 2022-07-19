<template>
<div>
  <h1>Your account</h1>
    <h2>Personal info</h2>
      <b>Name:</b> {{ this.firstName || 'Not set'}}
      <p><UpdateName @changeName="(n) => this.firstName = n" /></p>
    <h2>Location</h2>
      <b>City:</b> {{ this.city.name || 'Not set' }}
      <br />
      <b>Temperature:</b> {{ this.temperature }}°C
      <p><UpdateCity @changeCity="(n) => this.city = n" /></p>
    <h2>Digest</h2>
      <p>
        <SendEmail
        :city="this.city"
        :email="this.email"
        :firstName="this.firstName"
        />
      </p>
    <br />
    <p><router-link to="/resetpassword">reset password</router-link></p>
    <p><router-link to="/signout">sign out</router-link></p>
  </div>
</template>
<script>
import SendEmail from '../components/SendEmail.vue'
import UpdateCity from '../components/UpdateCity.vue'
import UpdateName from '../components/UpdateName.vue'
import gotrue from '../shared/gotrue.js'
import axios from 'axios'

console.log('Vue view - AccountPage.vue')

export default {
  name: 'AccountPage',
  components: {
    SendEmail,
    UpdateCity,
    UpdateName
  },

  data () {
    return {
      city: {},
      firstName: null,
      email: null,
      temperature: undefined
    }
  },

  // Checking if the user is logged in. If not, it redirects to the signin page.
  mounted () {
    if (gotrue.auth.currentUser()) {
      this.city = gotrue.auth.currentUser().user_metadata.city || { name: undefined }
      this.firstName = gotrue.auth.currentUser().user_metadata.full_name || undefined
      this.email = gotrue.auth.currentUser().email || undefined
    } else {
      this.$router.push('/signin')
    }
  },

  methods: {
    async loadTemperature () {
      try {
        const response = await axios.get(
          '/.netlify/functions/utility?name=get-temperature&lat=' + this.city.lat + '&lon=' + this.city.lon
        )
        this.temperature = response.data
      } catch (error) {
        console.log(error)
      }
    }
  },

  watch: {
    city () {
      this.city.name ? this.loadTemperature() : this.temperature = undefined
    }
  }
}
</script>
