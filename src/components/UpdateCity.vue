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
import GoTrue from 'gotrue-js'

export default {
  name: 'UpdateCity',

  data () {
    return {
      city: null,
      auth: new GoTrue({
        APIUrl:
          'https://imaginative-sfogliatella-76a713.netlify.app/.netlify/identity',
        audience: '',
        setCookie: true
      })
    }
  },

  methods: {
    cityChange () {
      const user = this.auth.currentUser()

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
