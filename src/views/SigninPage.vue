<template>
<div>
  <h1>Account sign in</h1>
  <LoginAccount />
  <p><router-link to="/resetpassword">Reset password</router-link></p>
  </div>
</template>
<script>
import LoginAccount from '../components/LoginAccount.vue'

console.log('Vue view - SigninPage.vue')

export default {
  name: 'SigninPage',
  components: {
    LoginAccount
  },
  data () {
    return {}
  }
}

</script>
