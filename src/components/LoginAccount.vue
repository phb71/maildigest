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
import GoTrue from 'gotrue-js'

export default {
  name: 'LoginAccount',
  data () {
    return {
      email: null,
      password: null,
      auth: new GoTrue({
        APIUrl:
          'https://imaginative-sfogliatella-76a713.netlify.app/.netlify/identity',
        audience: '',
        setCookie: true
      })
    }
  },

  methods: {
    loginAccount () {
      this.auth
        .login(this.email, this.password, true)
        .then((response) => {
          this.$store.commit('signedIn', true)
          this.$router.push('/account')
        })
        .catch((error) =>
          console.log('Failed :( ' + JSON.stringify(error))
        )
    }
  }
}
</script>
