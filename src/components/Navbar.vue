<template>
  <nav>
    <div class="nav-left">
      <div class="icon-coffee">
        <img src="../assets/img/coffee 1.png" alt="coffee">
      </div>
      <h2>Coffee Shop</h2>
    </div>
    <div v-if="model === 'admin' || 'user' " class="nav-middle" ref="navToogle" >
        <router-link v-if="navMiddle === 'user'" to="/customer/home">Home</router-link>
        <router-link v-else to="/admin/home">Home</router-link>
        <router-link to="/admin/home">Product</router-link>
        <router-link to="/customer/cart" v-if="navMiddle === 'user'" class="active">Your Cart</router-link>
        <router-link to="/admin/manage-order" v-else>Orders</router-link>
        <router-link to="/customer/history" v-if="navMiddle === 'user'">History</router-link>
        <p v-if="model === 'admin'" class="active">Dashboard</p>
        <form @submit.prevent="handleSearch" v-show="showSearch">
        <input type="text" v-model="keyword" placeholder="Search product" style="position: absolute;">
        </form>
    </div>
    <div class="nav-right" v-if="model === 'admin' || 'user'">
      <div class="icon search">
        <img src="../assets/img/search.svg" @click="showSearch = !showSearch" id="search-icon" alt="search">
      </div>
      <div class="icon message">
        <img src="../assets/img/chat (1) 1.png" alt="message">
      </div>
      <div class="icon avatar">
        <img @click="pushToProfile" v-bind:src="getUser.avatar" alt="avatar"  @error="imgPlaceholder">
      </div>
    </div>
    <div class="nav-right" v-if="model === 'Auth'">
      <p>Login</p>
      <button class="btn-signup"><p>Sign Up</p></button>
    </div>
    <div class="toogle-wrap">
      <input type="checkbox" @click="handleNav"/>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Navbar',
  props: {
    model: String,
    navMiddle: String,
    auth: String
  },
  computed: {
    ...mapGetters(['getRole', 'getUser'])
  },
  methods: {
    ...mapActions(['getUserById']),
    imgPlaceholder (e) {
      console.log(e)
      e.target.src = 'https://via.placeholder.com/300'
    },
    handleNav () {
      const handle = this.$refs.navToogle
      handle.classList.toggle('slide')
    },
    handleSearch () {
      if (this.getRole === 'user') {
        return this.$router.push({ path: `/customer/home?keyword=${this.keyword}` })
      }

      this.$router.push({ path: `/admin/home?keyword=${this.keyword}` })
    },
    pushToProfile () {
      this.$router.push({ path: '/customer/profile' })
    }
  },
  data () {
    return {
      showSearch: false,
      keyword: ''
    }
  },
  created () {
    this.getUserById()
  }
}
</script>

<style scoped>
a {
  color: #333333;
  text-decoration: none;
}
nav {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px 120px;
  border-bottom: 0.5px solid #9F9F9F;
  z-index: 9999;
}
#search-icon {
  cursor: pointer;
}
.icon-coffee{
  margin-right: 10px;
  width: 25px;
  height: 25px;
}
.icon-coffee>img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.nav-left, .nav-middle, .nav-right {
  flex: 1;
}
.nav-left{
  display: flex;
}
.nav-middle{
  justify-content: space-between;
  display: flex;
  width: 100%
}
.nav-middle p {
  font-size: 15px;
}
p.active{
  color: #6A4029;
  font-weight: 600;
}
.nav-right{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

/* Props Model Admin */
.nav-right > .icon{
  width: 30px;
  height: 30px;
  margin-left: 30px;
}
.nav-right > .icon > img{
  object-fit: contain;
  width: 100%;
  height: 100%;
}
/* Props Model Auth */
.btn-signup {
  background: #FFBA33;
  border-radius: 50px;
  padding: 15px 50px;
  border: none;
  cursor: pointer;
  margin-left: 50px;
  box-shadow: 0px 0px 10px .2px#f8b020;
  font-weight: 600;
}
.nav-right > p {
  font-weight: 600;
}
.btn-signup:focus{
  outline: none;
}
.btn-signup:hover{
  transform: scale(1.05)
}
/* Toogle wrap */
.toogle-wrap{
  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: 17px;
  position: relative;
}
.toogle-wrap > span{
  display: block;
  width: 25px;
  height: 2px;
  background-color: rgb(185, 149, 149);
  transition: all .3s;
}
.toogle-wrap input {
  position: absolute;
  width: 24px;
  height: 28px;
  top: -8px;
  right: 1px;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
}
.toogle-wrap span:nth-child(2) {
  transform-origin: 0 0;
}
.toogle-wrap span:nth-child(4) {
  transform-origin: 0 100%;
}
.toogle-wrap input:checked ~ span:nth-child(2) {
  transform: rotate(45deg) translate(-1px, -1px);
}
.toogle-wrap input:checked ~ span:nth-child(4) {
  transform: rotate(-45deg) translate(-1px, 0);
}
.toogle-wrap input:checked ~ span:nth-child(3) {
  transform: scale(0);
}

@media screen and (max-width: 920px) {
  nav {
    padding: 30px 60px;
  }
  .btn-signup {
    padding: 15px 30px;
    margin-left: 50px;
  }
  .btn-signup > p {
    border: 1px solid;
    width: 120px;
  }
}
@media screen and (max-width: 760px) {
  nav {
    padding: 20px 40px;
  }
  .nav-right{
    padding-right: 20px;
  }
  .nav-right > .icon{
    width: 23px;
    height: 23px;
  }
  .toogle-wrap{
    display: flex
  }
  .nav-middle{
    margin-top: 60px;
    position: fixed;
    flex-direction: column;
    right: -70%;
    top: 0;
    width: 70%;
    height: 80vh;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(104, 103, 103, 0.747);
    transition: .5s;
    opacity: 0;
    color: white;
  }
  .nav-middle p {
    font-size: 27px;
  }
  .nav-middle.slide{
    right: 0;
    opacity: 1;
  }
}
@media screen and (max-width: 520px) {
  nav {
    padding: 15px 25px;
  }
  .nav-left h2 {
    font-size: 14px;
    padding: 6px 0;
  }
  .nav-right > .icon{
    width: 18px;
    height: 18px;
  }
}
</style>
