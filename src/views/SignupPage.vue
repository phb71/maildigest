<template>
  <div>
  <h1>Account creation</h1>
  <CreateAccount />
  </div>
</template>
<script>
import CreateAccount from '../components/CreateAccount.vue'

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
