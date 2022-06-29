<template>
<div>
  <h1>Your account</h1>
  <p>
    <b>Your city:</b> {{ this.city.name }} - {{ this.temperature }}°C
  </p>
  <UpdateCity @changeCity="(n) => this.city = n" />
  <br />
  <SendEmail :city="this.city" />
  </div>
</template>
<script>
import SendEmail from '../components/SendEmail.vue'
import UpdateCity from '../components/UpdateCity.vue'
import gotrue from '../gotrue.js'
import axios from 'axios'

export default {
  name: 'AccountPage',
  components: {
    SendEmail,
    UpdateCity
  },

  data () {
    return {
      city: {},
      temperature: null
    }
  },

  mounted () {
    if (gotrue.auth.currentUser()) {
      this.city = gotrue.auth.currentUser().user_metadata.city
    } else {
      this.$router.push('/signin')
    }
  },

  methods: {
    async loadTemperature () {
      try {
        const response = await axios.get(
          '/.netlify/functions/get-temperature?lat=' + this.city.lat + '&lon=' + this.city.lon
        )
        this.temperature = response.data
      } catch (error) {
        console.log(error)
      }
    }
  },

  watch: {
    city () {
      this.loadTemperature()
    }
  }
}
</script>
