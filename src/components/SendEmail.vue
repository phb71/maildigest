<template>
  <div>
    <button @click="sendEmail" :disabled='this.loading'>Send yourself a preview email</button>
    <LoadingElement :loading="this.loading" />
    <FormSubmission :msg="this.msg" />
  </div>
</template>
<script>
import LoadingElement from '../components/LoadingElement.vue'
import FormSubmission from '../components/FormSubmission.vue'
import axios from 'axios'

console.log('Vue component - SendEmail.vue')

export default {
  name: 'SendEmail',
  props: ['city', 'email', 'firstName'],
  components: {
    LoadingElement,
    FormSubmission
  },
  data () {
    return {
      loading: false,
      msg: 0
    }
  },
  methods: {
    async sendEmail () {
      this.loading = true
      this.msg = 0
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
        this.loading = false
        this.msg = 1
      } catch (error) {
        console.log(error)
        this.loading = false
        this.msg = 2
      }
    }
  }
}
</script>
