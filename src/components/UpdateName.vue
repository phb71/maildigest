<template>
  <div>
    <input type="text" placeholder="Change your name" v-model="name" />
    <button @click="nameChange" :disabled='this.loading'>Update</button>
    <LoadingElement :loading="this.loading" />
    <FormSubmission :msg="this.msg" />
  </div>
</template>

<script>
import LoadingElement from '../components/LoadingElement.vue'
import FormSubmission from '../components/FormSubmission.vue'
import gotrue from '../shared/gotrue.js'

console.log('Vue component - UpdateName.vue')

export default {
  name: 'UpdateName',
  components: {
    LoadingElement,
    FormSubmission
  },
  data () {
    return {
      name: undefined,
      loading: false,
      msg: 0
    }
  },
  emits: ['change-name'],
  methods: {
    nameChange () {
      this.loading = true
      this.msg = 0
      const user = gotrue.auth.currentUser()
      user
        .update({
          data: {
            full_name: this.name
          }
        })
        .then((user) => {
          console.log('User updated', user)
          this.$emit('change-name', this.name)
          this.loading = false
          this.msg = 1
        })
        .catch((error) => {
          console.log('Failed to update user: %o', error)
          this.loading = false
          this.msg = 2
          throw error
        })
    }
  }
}
</script>
