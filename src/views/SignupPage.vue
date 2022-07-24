<template>
  <div>
  <CreateAccount />
  </div>
</template>
<script>
import CreateAccount from '../components/CreateAccount.vue'

console.log('Vue view - SignupPage.vue')

export default {
  name: 'SignupPage',
  components: {
    CreateAccount
  },
  data () {
    return {}
  }
}
</script>
