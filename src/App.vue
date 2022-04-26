<template>
  <div id="nav">
      <router-link to="/signup">Sign up</router-link> |
      <router-link to="/signin">Sign in</router-link> |
      <router-link to="/sendemail">Send email</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
