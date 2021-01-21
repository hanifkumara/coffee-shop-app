<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'ConfirmationEmail',
  methods: {
    toLogin () {
    }
  },
  mounted () {
    Swal.fire('Verification Success', 'Wait a moment to go to the login page', 'success')
    axios.get(`${process.env.VUE_APP_SERVICE_API}/users/confirmation/${this.$route.params.token}`)
      .then(res => {
        setTimeout(() => {
          this.$router.push({ name: 'Login' })
        }, 3000)
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
