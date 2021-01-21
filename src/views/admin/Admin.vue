<template>
  <div>
    <Navbar v-bind:model="getRole" v-bind:navMiddle="getRole" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { mapGetters } from 'vuex'

export default {
  name: 'Admin',
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters(['getRole'])
  }
}
</script>

<style scoped>
</style>
