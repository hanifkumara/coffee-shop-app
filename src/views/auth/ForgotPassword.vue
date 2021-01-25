<template>
  <div class="content-children">
    <div class="form-forgot-password">
      <h2>Forgot Password</h2>
      <form @submit.prevent="handleSubmit">
        <Input name="email" label="Email" placeholder="Input your email" @input="email = $event.target.value"/>
        <p class="text-danger" v-if="email.length > 1 && !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)">Email invalid</p>
        <Button type="rounded" title="Confirm"/>
      </form>
    </div>
  </div>
</template>

<script>
import Input from '../../components/_parts/Input'
import Button from '../../components/_parts/Button'
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'ForgotPassword',
  components: {
    Input,
    Button
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    ...mapActions(['forgotPassword']),
    handleSubmit () {
      if (!this.email) {
        Swal.fire('Fill require', 'please check again', 'error')
        return
      }
      if (!this.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        Swal.fire('Email invalid', 'please check again', 'error')
      } else {
        this.forgotPassword({ email: this.email })
          .then(res => {
            this.$router.push({ name: 'Login' })
            Swal.fire(res.data.message, 'please check your email for reset password', 'success')
          })
          .catch(err => {
            Swal.fire(err.data.message, 'please check again', 'error')
            console.log(err.data.message)
          })
      }
    }
  }
}
</script>

<style scoped>
.content-children{
  display: block;
  margin: 0 auto;
  margin-top: 120px;
  width: 40%;
}
</style>
