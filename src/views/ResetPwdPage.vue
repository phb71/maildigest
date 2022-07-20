<template>
  <div>
    <h1>Reset password</h1>
    <div v-if="!this.resetpwd">
      <p><input type="text" placeholder="Enter your email" v-model="email" /></p>
      <button @click="recoverPassword" :disabled='this.loading'>Send password recovery email</button>
      <LoadingElement :loading="this.loading" />
      <FormSubmission :msg="this.msg" />
    </div>
    <div v-else>
      <p>
        <input type="password" placeholder="Enter your new password" v-model="pwd1" /><br />
        <input type="password" placeholder="Re-enter your new password" v-model="pwd2" />
      </p>
      <button @click="resetPassword" :disabled='this.loading'>Reset my password</button>
      <LoadingElement :loading="this.loading" />
      <FormSubmission :msg="this.msg" />
    </div>
  </div>
</template>
<script>
import LoadingElement from '../components/LoadingElement.vue'
import FormSubmission from '../components/FormSubmission.vue'
import gotrue from '../shared/gotrue.js'

console.log('Vue view - ResetPwdPage.vue')

export default {
  name: 'ResetPwdPage',
  components: {
    LoadingElement,
    FormSubmission
  },
  data () {
    return {
      resetpwd: false,
      pwd1: undefined,
      pwd2: undefined,
      email: undefined,
      loading: false,
      msg: 0
    }
  },
  mounted () {
    // Checking if the user is logged in and displaying the content accordingly
    if (gotrue.auth.currentUser()) {
      this.resetpwd = true
    }
  },
  methods: {
    // This method sends a password recovery email to the user.
    recoverPassword () {
      this.loading = true
      this.msg = 0
      gotrue.auth
        .requestPasswordRecovery(this.email)
        .then(() => {
          this.loading = false
          this.msg = 1
        })
        .catch((error) => {
          console.log(error)
          this.loading = false
          this.msg = 2
        })
    },

    // This method resets the user's password.
    resetPassword () {
      if (this.pwd1 !== this.pwd2) {
        alert('Passwords do not match')
      } else {
        this.loading = true
        this.msg = 0
        const user = gotrue.auth.currentUser()
        user
          .update({ email: user.email, password: this.pwd1 })
          .then(user => {
            this.loading = false
            this.msg = 1
          })
          .catch(error => {
            console.log(error)
            this.loading = false
            this.msg = 2
          })
      }
    }

  }
}
</script>
