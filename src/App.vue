<template>
  <NavBar />
  <!-- use container class for fit to the form -->
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  methods: {
    ...mapActions(['loadLocalStorage'])
  },
  created() {
    this.loadLocalStorage()
  }
}
</script>
