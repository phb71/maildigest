<template>
<div>
  <h1>Your daily digest</h1>
  <h4>Today is <i><GetToday /></i></h4>
  <h4>The temperature in <i>{{ this.city.name }}</i> is <i>{{ this.temperature }}°C</i></h4>
</div>
</template>
<script>
import gotrue from '../gotrue.js'
import axios from 'axios'
import GetToday from '../components/GetToday.vue'

export default {
  name: 'DigestPage',
  components: {
    GetToday
  },
  data () {
    return {
      city: {},
      temperature: null
    }
  },

  mounted () {
  // Checking if the user is logged in. If they are, it will set the city name to the user's city. If
  // they are not, it will redirect them to the sign in page.
    if (gotrue.auth.currentUser()) {
      this.city = gotrue.auth.currentUser().user_metadata.city
      this.loadTemperature()
    } else {
      this.$router.push('/signin')
    }
  },

  methods: {
  // Calling the get-temperature function and passing the latitude and longitude of the user's city.
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
  }
}
</script>
