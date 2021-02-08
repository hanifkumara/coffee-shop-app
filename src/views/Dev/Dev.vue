<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 my-5">
          <div class="card-chat">
            <h4 v-for="(data, index) in hisotryMessage" :key="index">{{data}}</h4>
          </div>
        </div>
        <div class="col-md-6 my-5">
          <form @submit.prevent="handleMessage">
            <input type="text" class="form-control" placeholder="Create a message . . ." v-model="message">
            <button class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: 'Dev',
  data () {
    return {
      socket: io(`${process.env.VUE_APP_SOCKET_IO}`),
      message: '',
      hisotryMessage: []
    }
  },
  methods: {
    handleMessage () {
      this.socket.emit('sendMessage', { message: this.message })
    }
  },
  mounted () {
    this.socket.on('sendBack', data => {
      this.hisotryMessage.push(data)
      console.log(data)
    })
  }
}
</script>

<style scoped>
.card-chat{
  width: 90%;
  border-radius: 10px;
  border: .4px solid;
  padding: 20px 35px;
}
</style>
