<template>
  <div>
  <span>Daily digest:</span>
  <input type="checkbox">
  </div>
</template>
<script>
console.log('Vue component - SetDigest.vue')

export default {
  name: 'SetDigest',
  data () {
    return {
      email: null,
      password: null
    }
  }
}
</script>
