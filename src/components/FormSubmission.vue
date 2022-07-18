<template>
  <div>
    <p v-if="this.msg == 1" style="color:green;">Success!</p>
    <p v-if="this.msg == 2" style="color:red;">Oops, problem!</p>
  </div>
</template>
<script>
console.log('Vue component - FormSubmission.vue')

export default {
  name: 'FormSubmission',
  props: ['msg'],
  data () {
    return {}
  }
}
</script>
