<template>
  <div>
    <input type="text" placeholder="City you live in?" v-model="city" />
    <button @click="cityChange">Update</button>
  </div>
</template>

<script>
import gotrue from '../gotrue.js'

export default {
  name: 'UpdateCity',
  data () {
    return {
      city: null
    }
  },

  methods: {
    cityChange () {
      const user = gotrue.auth.currentUser()
      user
        .update({
          data: {
            city: this.city
          }
        })
        .then((user) => console.log('User updated', user))
        .catch((error) => {
          console.log('Failed to update user: %o', error)
          throw error
        })
    }
  }
}
</script>
