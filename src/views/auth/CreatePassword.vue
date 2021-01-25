<template>
  <div class="content-children">
    <h4>Forgot Password</h4>
    <form @submit.prevent="handleConfirm">
      <div class="wrapper-new-password">
        <Input type="password" class="form-control" label="New Password" name="newPassword" @input="newPassword = $event.target.value" placeholder="input new password"/>
        <img src="@/assets/img/ic_sharp-remove-red-eye.png" alt="icon-eye" @click="showPassword">
      </div>
      <p class="text-danger" v-if="newPassword.length > 1 & newPassword.length <= 7">Pasword must be more than 7 characters</p>
      <div class="wrapper-confirm-password">
        <Input type="password" class="form-control" label="Confirm Password" name="confirmPassword" @input="confirmPassword = $event.target.value" placeholder="repeat new password"/>
        <img src="@/assets/img/ic_sharp-remove-red-eye.png" alt="icon-eye" @click="showPassword2">
      </div>
      <p class="text-danger" v-if="confirmPassword.length > 1 & confirmPassword.length <= 7">Pasword must be more than 7 characters</p>
      <Button type="rounded" title="confirm"/>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import Input from '../../components/_parts/Input'
import Button from '../../components/_parts/Button'
import showPass from '../../mixins/showPassword'

export default {
  name: 'CretePassaword',
  mixins: [showPass],
  data () {
    return {
      newPassword: '',
      confirmPassword: '',
      errorNotSame: false
    }
  },
  components: {
    Input,
    Button
  },
  methods: {
    async handleConfirm () {
      if (!this.newPassword || !this.confirmPassword) {
        Swal.fire('Fill required', 'please check again', 'error')
        return
      }
      if (this.newPassword !== this.confirmPassword) {
        Swal.fire('Password not same', 'please check again', 'error')
        return
      }
      if (this.newPassword.length <= 7) {
        Swal.fire('Pasword must be more than 7 characters', 'please check again', 'error')
        return
      }
      if (this.confirmPassword.length <= 7) {
        Swal.fire('Pasword must be more than 7 characters', 'please check again', 'error')
      } else {
        try {
          const token = this.$route.params.token
          const apiUrl = `${process.env.VUE_APP_SERVICE_API}`
          const authAxios = axios.create({
            baseURL: apiUrl,
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          const result = await authAxios.patch('/users/reset-password', { password: this.newPassword })
          console.log(result)
          Swal.fire('Success', 'Lets go login now', 'success')
          this.$router.push('/auth/login')
        } catch (error) {
          console.log(error.response)
        }
      }
      console.log('hello')
    }
  }
}
</script>

<style scoped>
.content-children{
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  display: block;
  margin: 0 auto;
  margin-top: 120px;
  width: 40%;
  height: fit-content
}
.wrapper-new-password, .wrapper-confirm-password {
  width: 100%;
  position: relative;
  margin-top: 20px
}
.wrapper-new-password > img, .wrapper-confirm-password > img {
  position: absolute;
  right: 18px;
  bottom: 19px;
}
@media screen and (max-width: 540px) {
  .content-children{
    width: 80%;
  }
}
</style>
