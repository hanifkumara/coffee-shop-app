<template>
  <div class="content">
    <div class="content-room-chat mt-3">
      <div class="top-room-chat d-flex">
        <div class="rigth-top-room">
          <div class="wrapper-photo">
            <img :src="getUser.avatar" alt="Photo Customer" @error="imgPlaceholder">
          </div>
        </div>
        <div class="left-top-room">
          <h6>{{getUser.displayName}}</h6>
          <h5>{{getUser.deliveryAddress}}</h5>
        </div>
      </div>
      <hr>
      <div class="content-chat" ref="messageBody">
        <div v-for="(data, index) in getHistoryChat" :key="index">
          <div class="d-flex justify-content-start mt-2" v-if="data.note === 'sender' || data.idReceiver === idLogin">
            <h6 class="wrapper-chat-receiver">{{data.message}}</h6>
            <p style="margin-left: 10px; font-size: 11px;">{{data.createdAt | moment("calendar")}}</p>
          </div>
          <div class="d-flex justify-content-end mt-2" v-else>
            <p style="margin-right: 10px; font-size: 11px;">{{data.createdAt | moment("calendar")}}</p>
            <h6 class="wrapper-chat-sender">{{data.message}}</h6>
          </div>
        </div>
      </div>
      <div class="bottom-chat-room">
        <div class="wrapper-input-message">
          <input type="text" placeholder="please input message . . ." v-model="inputMessage" @keypress.enter="handleSendMessage">
          <div class="wrapper-icon-send" @click="handleSendMessage">
            <img src="@/assets/img/74-749231_png-file-svg-send-message-icon-png-transparent-removebg.png" alt="Icon Send">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ChatRoomUser',
  data () {
    return {
      inputMessage: '',
      historyMessages: [],
      idLogin: localStorage.getItem('userId')
    }
  },
  props: ['socket'],
  mounted () {
    this.getUserById(this.$route.params.id)
    this.setHistoryChat(this.$route.params.id)
    this.socket.on('sendBack', () => {
      this.handleHistoryMessage()
    })
  },
  methods: {
    ...mapActions(['setHistoryChat', 'getUserById', 'setHistoryChat']),
    handleSendMessage () {
      const idSender = localStorage.getItem('userId')
      const idReceiver = this.$route.params.id
      const note = 'sender'
      this.socket.emit('messagePrivate', { idSender, idReceiver, message: this.inputMessage, note })
      this.inputMessage = ''
    },
    handleHistoryMessage () {
      const idReceiver = this.$route.params.id
      this.setHistoryChat(idReceiver)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    imgPlaceholder (e) {
      console.log(e)
      e.target.src = 'https://via.placeholder.com/300'
    }
  },
  watch: {
    getHistoryChat: function () {
      setTimeout(() => {
        const container = this.$refs.messageBody
        container.scroll({
          top: container.scrollHeight,
          behavior: 'smooth'
        })
      }, 100)
    }
  },
  computed: {
    ...mapGetters(['getHistoryChat', 'getUser'])
  }
}
</script>

<style scoped>
.left-top-room{
  margin-left: 10px;
}
.left-top-room > h5, .left-top-room > h6 {
  margin: 0;
}
.wrapper-photo{
  width: 60px;
  height: 60px;
}
.wrapper-photo > img {
  object-fit: cover;
  width: 100%;
  border-radius: 50%;
  height: 100%;
}
.content-chat{
  padding: 0 10px;
  height: 420px;
  width: 100%;
  overflow-y: scroll;
}
.wrapper-input-message{
  position: relative;
  margin-top: 10px;
  width: 100%;
}
.wrapper-input-message > input {
  padding: 7px 15px;
  padding-right: 50px;
  border: none;
  border-bottom: 1px solid;
  width: 100%;
}
.wrapper-input-message > input:focus {
  outline: none;
}
.wrapper-chat-sender{
  width: fit-content;
  padding: 9px 12px;
  border-radius: 10px 0 10px 10px;
  background-color: grey;
}
.wrapper-chat-receiver {
  width: fit-content;
  padding: 9px 12px;
  border-radius: 0 10px 10px 10px;
  background-color: rgb(255, 209, 123);
}

.wrapper-icon-send{
  display: none;
  position: absolute;
  right: 15px;
  bottom: 12px;
  width: 20px;
  height: 20px;
}
.wrapper-icon-send > img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

::-webkit-scrollbar {
  width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}
@media screen and (max-width: 768px) {
  .wrapper-icon-send{
    display: block
  }
}
</style>
