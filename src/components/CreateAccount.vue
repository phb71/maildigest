<template>
  <div>
    <p>
      <label
        >Email
        <input type="text" v-model="email" required />
      </label>
    </p>
    <p>
      <label
        >Password
        <input type="password" v-model="password" required />
      </label>
    </p>
    <button :class="{ loading: this.loading }" @click="createAccount" :disabled='this.loading'>Sign me up!</button>
    <FormSubmission :msg="this.msg" />
  </div>
</template>
<script>
import FormSubmission from '../components/FormSubmission.vue'
import gotrue from '../shared/gotrue.js'

console.log('Vue component - CreateAccount.vue')

export default {
  name: 'CreateAccount',
  components: {
    FormSubmission
  },
  data () {
    return {
      email: null,
      password: null,
      loading: false,
      msg: 0
    }
  },

  methods: {
    createAccount () {
      this.loading = true
      this.msg = 0
      gotrue.auth
        .signup(this.email, this.password)
        .then((response) => {
          console.log('Success', response)
          this.loading = false
          this.msg = 1
        })
        .catch((error) => {
          console.log("It 's an error", error)
          this.loading = false
          this.msg = 2
        })
    }
  }
}
</script>
