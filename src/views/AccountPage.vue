<template>
  <div class="space-y-6">
    <h3>Hello {{ this.firstName || 'there' }} &#128075;</h3>
    <div>
      In your account, you can customise your daily email digest and
      <router-link to="/digest">preview it</router-link>. You can also
      <router-link to="/resetpassword">reset</router-link> your password or
      <router-link to="/signout">sign out</router-link>.
    </div>
    <label
      for="digest"
      class="inline-flex relative items-center cursor-pointer"
    >
      <input
        type="checkbox"
        value=""
        id="digest"
        class="sr-only peer"
        :checked="this.digest"
        @click="switchDigest"
      />
      <div
        class="toggle peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-blue-600"
      ></div>
      <span class="ml-3 text-base font-medium text-gray-900"
        >Your daily digest is turned {{ this.digest ? 'on' : 'off' }}</span
      >
    </label>
    <div><h3 class="mt-10">Add sections to customise your digest</h3></div>
    <div>
      <div class="flex justify-between">
        <h4>&#9728; Weather</h4>
        <!--<label
          for="weather"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input type="checkbox" value="" id="weather" class="sr-only peer" />
          <div
            class="toggle peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-blue-600"
          ></div>
        </label>-->
        <a href=""
          ><svg
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <p>
        Get today's temperature and forecast:<br />
        <span class="font-semibold">{{ this.city.name || '' }}</span>
      </p>
      <p><UpdateCity @changeCity="(n) => (this.city = n)" /></p>
    </div>
    <div>
      <!--
      <h2>Personal info</h2>
        <b>Name:</b> {{ this.firstName || 'Not set'}}
        <p><UpdateName @changeName="(n) => this.firstName = n" /></p>
      <h2>Location</h2>
        <b>City:</b> {{ this.city.name || 'Not set' }}
        <br />
        <b>Temperature:</b> {{ this.temperature }}°C
        <p><UpdateCity @changeCity="(n) => this.city = n" /></p>
      <h2>Digest</h2>
        <p>
          <SendEmail
          :city="this.city"
          :email="this.email"
          :firstName="this.firstName"
          />
        </p>
      <br />-->
    </div>
  </div>
</template>
<script>
import SendEmail from '../components/SendEmail.vue'
import UpdateCity from '../components/UpdateCity.vue'
import UpdateName from '../components/UpdateName.vue'
import gotrue from '../shared/gotrue.js'
import axios from 'axios'

console.log('Vue view - AccountPage.vue')

export default {
  name: 'AccountPage',
  components: {
    SendEmail,
    UpdateCity,
    UpdateName
  },

  data () {
    return {
      city: {},
      firstName: null,
      email: null,
      temperature: undefined,
      digest: null
    }
  },

  // Checking if the user is logged in. If not, it redirects to the signin page.
  mounted () {
    if (gotrue.auth.currentUser()) {
      this.city = gotrue.auth.currentUser().user_metadata.city || {
        name: undefined
      }
      this.firstName =
        gotrue.auth.currentUser().user_metadata.full_name || undefined
      this.email = gotrue.auth.currentUser().email || undefined
    } else {
      this.$router.push('/signin')
    }
  },

  methods: {
    // Get the temperature of the user's city through a netlify function and OpenWeatherMap API.
    async loadTemperature () {
      try {
        const response = await axios.get(
          '/.netlify/functions/utility?name=get-temperature&lat=' +
            this.city.lat +
            '&lon=' +
            this.city.lon
        )
        this.temperature = response.data
      } catch (error) {
        console.log(error)
      }
    },
    async switchDigest () {
      this.digest = !this.digest
      const user = gotrue.auth.currentUser()
      user
        .update({
          data: {
            digest: this.digest
          }
        })
        .then((user) => {
          console.log('User updated', user)
        })
        .catch((error) => {
          console.log('Failed to update user: %o', error)
          throw error
        })
    }
  },

  watch: {
    city () {
      this.city.name ? this.loadTemperature() : (this.temperature = undefined)
    }
  }
}
</script>
