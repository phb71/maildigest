<template>
  <div>
    <input type="text" placeholder="Change your name" v-model="name" />
    <button @click="nameChange">Update</button>
  </div>
</template>

<script>
import gotrue from '../gotrue.js'

console.log('Vue component - UpdateName.vue')

export default {
  name: 'UpdateName',
  data () {
    return {
      name: undefined
    }
  },
  emits: ['change-name'],
  methods: {
    nameChange () {
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
        })
        .catch((error) => {
          console.log('Failed to update user: %o', error)
          throw error
        })
    }
  }
}
</script>
