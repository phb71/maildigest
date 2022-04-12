<template>
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
</template>
<script>
import GoTrue from "gotrue-js";

const auth = new GoTrue({
  APIUrl:
    "https://imaginative-sfogliatella-76a713.netlify.app/.netlify/identity",
  audience: "",
  setCookie: false,
});

export default {
  name: "CreateAccount",
  data() {
    return {
      email: null,
      password: null,
    };
  },

  mounted() {},

  methods: {
    createAccount() {
      auth
        .signup(this.email, this.password)
        .then((response) => console.log("Success", response))
        .catch((error) => console.log("It 's an error", error));
    },
  },
};
</script>