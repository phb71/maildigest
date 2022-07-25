<template>
  <div>
    <EnterAccount type="signup" />
  </div>
</template>
<script>
import EnterAccount from '../components/EnterAccount.vue'

console.log('Vue view - SignupPage.vue')

export default {
  name: 'SignupPage',
  components: {
    EnterAccount
  },
  data () {
    return {}
  }
}
</script>
