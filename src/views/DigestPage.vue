<template>
<div>
  <h4>This is what you'll get in your inbox every morning:</h4>
  <h4>Today is <i>{{ this.today }}</i></h4>
  <h4>The temperature in <i>{{ this.city.name }}</i> is <i>{{ this.temperature }}°C</i></h4>
</div>
</template>
<script>
import gotrue from '../shared/gotrue.js'
// import { weekday } from '../shared/weekday'
import axios from 'axios'

console.log('Vue view - DigestPage.vue')

export default {
  name: 'DigestPage',
  data () {
    return {
      city: {},
      today: '', // weekday,
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
          '/.netlify/functions/utility?name=get-temperature&lat=' + this.city.lat + '&lon=' + this.city.lon
        )
        this.temperature = response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
