<template>
  <div>
    <input id="autocomplete" type="text" placeholder="Update your city" v-model="city.name" />
    <button @click="cityChange" :disabled='this.loading'>Update</button>
    <LoadingElement :loading="this.loading" />
    <FormSubmission :msg="this.msg" />
  </div>
</template>

<script>
import LoadingElement from '../components/LoadingElement.vue'
import FormSubmission from '../components/FormSubmission.vue'
import gotrue from '../shared/gotrue.js'

console.log('Vue component - UpdateCity.vue')

export default {
  name: 'UpdateCity',
  components: {
    LoadingElement,
    FormSubmission
  },
  data () {
    return {
      city: {},
      googleKey: String,
      loading: false,
      msg: 0
    }
  },
  emits: ['change-city'],
  mounted () {
    this.googleKey = import.meta.env.VITE_GOOGLEPLACE_API_TOKEN
    this.$loadScript('https://maps.googleapis.com/maps/api/js?libraries=places&key=' + this.googleKey)
      .then(() => {
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
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    cityChange () {
      this.loading = true
      this.msg = 0
      const user = gotrue.auth.currentUser()
      user
        .update({
          data: {
            city: this.city
          }
        })
        .then((user) => {
          console.log('User updated', user)
          this.$emit('change-city', this.city)
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
