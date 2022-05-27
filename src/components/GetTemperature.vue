<template>
  <span>- {{ this.temperature }}°C</span>
</template>
<script>
import axios from 'axios'

export default {
  name: 'GetTemperature',
  props: ['city'],
  data () {
    return {
      temperature: null
    }
  },
  watch: {
    city () {
      this.loadTemperature()
    }
  },
  methods: {
    async loadTemperature () {
      // // TO FIX HERE, USE A NETLIFY FUNCTION TO RUN THIS CODE AND ACT AS PROXY
      // // const openweatherKey = import.meta.env.OPENWEATHER_API_TOKEN
      const weatherTemp = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?lat=' +
          this.city.lat +
          '&lon=' +
          this.city.lng +
          '&appid=' +
          // TO FIX HERE
          '' +
          '&units=metric'
      )
      this.temperature = weatherTemp.data.main.temp
    }
  }
}
</script>
