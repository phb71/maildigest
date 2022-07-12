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
      try {
        const response = await axios.post(
          '/.netlify/functions/send-email?city=' +
          this.city.name +
          '&lat=' +
          this.city.lat +
          '&lon=' +
          this.city.lon +
          '&email=' +
          'paul@urban-hideout.com'
        )
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
