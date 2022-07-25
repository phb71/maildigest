<template>
<div>
  <EnterAccount type="signin" />
  <p><router-link to="/resetpassword">Lost password?</router-link></p>
  </div>
</template>
<script>
import EnterAccount from '../components/EnterAccount.vue'

console.log('Vue view - SigninPage.vue')

export default {
  name: 'SigninPage',
  components: {
    EnterAccount
  },
  data () {
    return {}
  }
}

</script>
