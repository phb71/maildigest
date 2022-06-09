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
      console.log('The city is ' + this.city)
      // THIS NEEDS TO BE A POST
      const response = await axios.get(
        '/.netlify/functions/send-email?city=' + this.city
      )
      console.log(response)
    }
  }
}
</script>
