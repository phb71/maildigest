<template>
<div>
  <p class="mb-6">
    <label>Email</label>
    <input type="email" v-model="email" required />
  </p>
  <p class="mb-6">
    <label>Password</label>
    <input type="password" v-model="password" required />
  </p>
  <button :class="{ loading: this.loading }" @click="loginAccount" :disabled='this.loading'>Sign in to my account</button>
  <FormSubmission :msg="this.msg" />
  </div>
</template>
<script>
import FormSubmission from '../components/FormSubmission.vue'
import gotrue from '../shared/gotrue.js'

console.log('Vue component - LoginAccount.vue')

export default {
  name: 'LoginAccount',
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
  mounted () {
    if (gotrue.auth.currentUser()) {
      this.$router.push('/account')
    } else {
      this.$router.push('/signin')
    }
  },
  methods: {
    // This method logs the user in.
    loginAccount () {
      this.loading = true
      this.msg = 0
      gotrue.auth
        .login(this.email, this.password, true)
        .then((response) => {
          this.msg = 1
          this.$router.push('/account')
          this.loading = false
        })
        .catch((error) => {
          this.msg = 2
          console.log('Failed :( ' + JSON.stringify(error))
          this.loading = false
        })
    }
  }
}
</script>
