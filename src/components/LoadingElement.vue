<template>
    <p v-if="this.loading" style="color:blue;">Working...</p>
</template>
<script>
console.log('Vue component - LoadingElement.vue')

export default {
  name: 'LoadingElement',
  props: ['loading'],
  data () {
    return {}
  }
}
</script>
