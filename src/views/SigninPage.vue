<template>
<div>
  <h1>Account sign in</h1>
  <LoginAccount />
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
