<template>
    <button @click="sendEmail">Send yourself a preview email</button>
</template>
<script>
import axios from 'axios'

console.log('Vue component - SendEmail.vue')

export default {
  name: 'SendEmail',
  props: ['city', 'email', 'firstName'],
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
          this.email +
          '&firstname=' +
          this.firstName
        )
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
