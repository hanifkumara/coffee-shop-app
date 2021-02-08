<template>
  <div class="bg-content">
    <div class="container">
      <div class="row wrapper-content-chat">
        <div class="col-md-4 container-chat-left">
          <div class="search-chat">
            <input type="text" placeholder="Search Chat">
            <div class="wrapper-icon-search">
              <img src="@/assets/img/search.png" alt="Search icon">
            </div>
          </div>
          <h6 class="text-center my-4">Please choose staff</h6>
          <div class="list-chat-staff" v-for="data in getAllStaff" :key="data.id" @click="pushChatRoom(data.id)">
            <div class="d-flex">
              <div class="wrapper-left-chat">
                <div class="wrapper-photo">
                  <img :src="data.avatar" alt="Photo User">
                </div>
              </div>
              <div class="wrapper-rigth-chat">
                <h6>{{data.displayName}}</h6>
                <p>{{data.deliveryAddress}}</p>
              </div>
            </div>
            <hr style="width: 100%; color: white;">
          </div>
        </div>
        <div class="col-md-8 container-chat-rigth">
          <div class="empty-chat" v-if="handleEmptyChat"><h3>please click one of the staff messages</h3></div>
          <router-view :socket="socket" v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ChatUser',
  data () {
    return {
      handleEmptyChat: true
    }
  },
  props: ['socket'],
  methods: {
    ...mapActions(['setAllStaff', 'getUserById', 'setHistoryChat']),
    pushChatRoom (id) {
      this.handleEmptyChat = false
      this.getUserById(id)
      this.setHistoryChat(id)
      this.$router.push({ name: 'ChatRoomUser', params: { id } })
    },
    imgPlaceholder (e) {
      console.log(e)
      e.target.src = 'https://via.placeholder.com/300'
    }
  },
  mounted () {
    this.setAllStaff()
  },
  computed: {
    ...mapGetters(['getAllStaff'])
  }
}
</script>

<style scoped>
.bg-content{
  background-image: url('../../assets/img/joshua-ness--bEZ_OfWu3Y-unsplash 1.png');
  width: 100%;
  padding: 60px 0;
}
.container-chat-left{
  border-radius: 15px 0 0 15px;
  color: white;
  padding: 25px 30px;
  height: 600px;
  overflow-y: scroll;
  background-color: #6a4029;;
}
.wrapper-icon-search{
  position: absolute;
  left: 17px;
  bottom: 12px;
  width: 25px;
  height: 25px;
}
.wrapper-icon-search > img{
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.search-chat{
  width: 100%;
  position: relative;
}
.search-chat > input{
  width: 100%;
  padding: 10px 20px;
  padding-left: 50px;
  border-radius: 25px;
  border: none;
}
.search-chat > input:focus{
  outline: none;
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
.wrapper-rigth-chat{
  margin-left: 15px;
}
.wrapper-rigth-chat > p {
  font-size: 13px;
  margin: 0;
}
.container-chat-rigth{
  color: black;
  background-color: white;
  border-radius: 0 15px 15px 0;
}
.empty-chat{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 768px ) {
  .container-chat-rigth {
    margin-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
