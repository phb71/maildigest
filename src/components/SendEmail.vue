<template>
    <button @click="sendEmail">send email</button>
</template>
<script>
import axios from 'axios';
export default {
  name: 'sendEmail',
  data() {
    return {
    };
  },
  methods: {
    async sendEmail() {
    const response = await axios.get(
        'http://localhost:8888/.netlify/functions/send-email'
      );
    console.log(response);
    }
  }
};
</script>