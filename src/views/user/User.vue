<template>
  <div>
    <Navbar v-bind:model="getRole" v-bind:navMiddle="getRole" />
    <router-view :socket="socket"></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { mapGetters } from 'vuex'
import io from 'socket.io-client'

export default {
  name: 'User',
  data () {
    return {
      socket: io(process.env.VUE_APP_SOCKET_IO)
    }
  },
  mounted () {
    this.socket.emit('initialUser', { idSender: localStorage.getItem('userId') })
  },
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
