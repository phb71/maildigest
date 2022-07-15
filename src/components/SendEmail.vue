<template>
    <button @click="sendEmail">send email</button>
</template>
<script>
import axios from 'axios'

console.log('Vue component - SendEmail.vue')

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
          '/.netlify/functions/utility?name=send-email&city=' +
          this.city.name +
          '&lat=' +
          this.city.lat +
          '&lon=' +
          this.city.lon +
          '&email=' +
          'ph.boudet@gmail.com'
        )
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
