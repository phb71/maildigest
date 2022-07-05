<template>
    <button @click="sendEmail">send email</button>
</template>
<script>
import axios from 'axios'
export default {
  name: 'SendEmail',
  props: ['city'],
  data () {
    return {
    }
  },
  methods: {
    async sendEmail () {
      // THIS NEEDS TO BE A POST
      const response = await axios.get(
        '/.netlify/functions/send-email?city=' + this.city.name + '&lat=' + this.city.lat + '&lon=' + this.city.lon
      )
      console.log(response)
    }
  }
}
</script>
