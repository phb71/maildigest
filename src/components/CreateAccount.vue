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
    <button @click="createAccount">Sign me up!</button>
    <div class="message"></div>
  </div>
</template>
<script>
import gotrue from '../gotrue.js'

export default {
  name: 'CreateAccount',
  data () {
    return {
      email: null,
      password: null
    }
  },

  methods: {
    createAccount () {
      gotrue.auth
        .signup(this.email, this.password)
        .then((response) => console.log('Success', response))
        .catch((error) => console.log("It 's an error", error))
    }
  }
}
</script>
