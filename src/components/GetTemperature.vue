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
      const response = await axios.get(
        'http://localhost:8888/.netlify/functions/get-temperature?lat=' + this.city.lat + '&lon=' + this.city.lon
      )
      this.temperature = response.data
    }
  }
}
</script>
