<template>
  <div class="content">
    <header>
      <nav>
        <div class="header-left">
          <div class="icon-coffee">
            <img src="../../assets/img/coffee 1.png" alt="coffee">
          </div>
          <h3>Coffee Shop</h3>
        </div>
        <div class="header-right">
          <router-link :to="{name: 'Login'}" class="btn-signup"><p>Login</p></router-link>
        </div>
      </nav>
      <div class="content-children">
        <h2 class="title">Sign Up</h2>
          <form @submit.prevent="handleSignup">
            <div class="form-email">
              <label for="email">Email Address :</label>
              <Input type="text" placeholder="Enter your email address" v-on:input="email = $event.target.value" name="email"/>
              <p style="color: red; font-size: 14px; margin-top: 5px;" v-if="email.length >=1 && !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)">Format email invalid</p>
            </div>
            <div class="form-password">
              <label for="password" class="password">Password :</label>
              <Input type="password" placeholder="Enter your password" v-on:input="password = $event.target.value" name="password"/>
              <p style="color: red; font-size: 14px; margin-top: 5px;"  v-if="password.length >= 1 && password.length <= 5 ">Password must be more than 5 character</p>
            </div>
            <div class="form-password">
              <label for="phone" class="phone">Phone Number :</label>
              <Input type="text" placeholder="Enter your phone number" v-on:input="phone = $event.target.value" name="phone"/>
              <p style="color: red; font-size: 14px; margin-top: 5px;"  v-if="phone.length >= 1 && phone.length <= 10 ">Phone must be more than 10 character</p>
            </div>
          <div class="button-rounded">
            <Button type="rounded" :loading="loading" title="Sign Up"/>
          </div>
        </form>
      </div>
    </header>
  </div>
</template>

<script>
import Button from '../../components/_parts/Button'
import Input from '../../components/_parts/Input'
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'

export default {
  name: 'Signup',
  components: {
    Button,
    Input
  },
  data () {
    return {
      email: '',
      password: '',
      phone: '',
      loading: false
    }
  },
  methods: {
    ...mapActions(['signup']),
    handleSignup () {
      if (!this.email) {
        Swal.fire(
          'Fill email required!',
          'please input your email',
          'error'
        )
        return
      }
      if (!this.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        Swal.fire(
          'Format email invalid',
          'please input format email e.g (name@gmail.com)',
          'error'
        )
        return
      }
      if (!this.password) {
        Swal.fire(
          'Fill password required!',
          'please input your password',
          'error'
        )
        return
      }
      if (this.password.length <= 5) {
        Swal.fire(
          'Password must be more than 5 character',
          '',
          'error'
        )
        return
      }
      if (!this.phone) {
        Swal.fire(
          'Fill phone required!',
          'please input your password',
          'error'
        )
        return
      }
      if (this.phone.length <= 10) {
        Swal.fire(
          'Phone must be more than 10 character',
          '',
          'error'
        )
      } else {
        this.loading = true
        const payload = {
          email: this.email,
          password: this.password,
          mobileNumber: this.phone
        }
        this.signup(payload)
          .then(() => {
            this.loading = false
            Swal.fire(
              'Register success!!',
              'Please check your email message for confirmation account',
              'success'
            )
            this.$router.push({ path: '/auth/login' })
          })
          .catch(err => {
            this.loading = false
            console.log(err.response.data)
            Swal.fire(
              'Email already exists!!',
              '',
              'error'
            )
          })
      }
    }
  }
}
</script>

<style scoped>
.content{
  width: 65%;
}
header {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.content-children{
  padding: 20px 60px;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  height: 60px;
  padding: 50px 60px;
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
.header-left, .header-right {
  flex: 1;
}
.header-left{
  display: flex;
}
.header-left h3 {
  display: flex;
  align-items: center;
  padding: 2px 0;
}
.header-right{
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
}

/* header Right */
.btn-signup {
  background-color: #ffba33;
  color: #6a4029;
  border-radius: 50px;
  padding: 15px 50px;
  border: none;
  cursor: pointer;
  margin-left: 50px;
  box-shadow: 0px 0px 10px .2px#f8b020;
  font-weight: 600;
}
.header-right > p {
  font-weight: 600;
}
.btn-signup:focus{
  outline: none;
}
.btn-signup:hover{
  transform: scale(1.05)
}

.title{
  color: #6A4029;
}
form{
  width: 90%;
  height: 400px;
}
label{
  font-weight: 600;
}
.form-email{
  margin-top: 40px;
}
.form-password {
  margin-top: 20px;
  margin-bottom: 18px;
}
a.forgot {
  color: #6A4029;
  font-weight: 600;
}
.google{
  height: 40px;
}
.button-rounded{
  margin: 20px 0;
}
@media screen and (max-width: 768px) {
  nav {
    border-bottom: .3px solid rgb(141, 109, 3);
  }
  .content {
    width: 100%;
  }
  .content-children {
    margin: 0 auto;
    margin-top: 40px;
    padding: 0;
  }
  .header-right{
    margin-right: 10px;
  }
  .btn-signup {
    border-radius: 25px;
    padding: 15px 10px;
  }
  .btn-signup > p{
    width: 70px;
  }
  .header-left h3 {
    font-size: 18px;
    align-items: center;
    padding: 2px 0;
  }
  .header-left {
    align-items: center;
  }
}
</style>
