const showPass = {
  methods: {
    showPassword () {
      const password = document.getElementById('newPassword')
      if (password.type === 'password') {
        password.type = 'text'
      } else {
        password.type = 'password'
      }
    },
    showPassword2 () {
      const password = document.getElementById('confirmPassword')
      if (password.type === 'password') {
        password.type = 'text'
      } else {
        password.type = 'password'
      }
    }
  }
}

export default showPass
