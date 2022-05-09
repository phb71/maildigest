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
  mounted () {
    this.loadTemperature()
  },
  methods: {
    async loadTemperature () {
      // // TO FIX HERE
      // // const openweatherKey = import.meta.env.OPENWEATHER_API_TOKEN
      const weatherTemp = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
          this.city +
          '&appid=' +
          // TO FIX HERE
          '4aaab05e359265e8581e6fa7ff10857c' +
          '&units=metric'
      )
      console.log(weatherTemp)
      this.temperature = weatherTemp.data.main.temp
    }
  }
}
</script>
