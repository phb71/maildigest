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
  <button @click="loginAccount">Let me back in!</button>
  <div class="message"></div>
  </div>
</template>
<script>
import gotrue from '../gotrue.js'

console.log('Vue component - LoginAccount.vue')

export default {
  name: 'LoginAccount',
  data () {
    return {
      email: null,
      password: null
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
    loginAccount () {
      gotrue.auth
        .login(this.email, this.password, true)
        .then((response) => {
          this.loggedIn = true
          this.$router.push('/account')
        })
        .catch((error) =>
          console.log('Failed :( ' + JSON.stringify(error))
        )
    }
  }
}
</script>
