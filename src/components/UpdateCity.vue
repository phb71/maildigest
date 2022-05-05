<template>
  <div>
    <input
      type="text"
      placeholder="where do you live"
      v-model="city"
    />
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
      this.localCity = this.city
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
