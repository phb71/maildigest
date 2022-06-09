<template>
  <div>
    <input id="autocomplete" type="text" placeholder="City you live in?" v-model="city.name" />
    <button @click="cityChange">Update</button>
  </div>
</template>

<script>
import gotrue from '../gotrue.js'

export default {
  name: 'UpdateCity',
  data () {
    return {
      city: {}
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete')
    )
    autocomplete.setTypes(['locality'])

    function placeChangedListener () {
      const place = autocomplete.getPlace()
      this.city.name = place.name
      this.city.lat = place.geometry.location.lat()
      this.city.lon = place.geometry.location.lng()
    }

    autocomplete.addListener('place_changed', placeChangedListener.bind(this))
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
