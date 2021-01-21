<template>
  <div>
      <button @click="activate" :class="type">{{title}}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: String,
    title: String
  },
  methods: {
    activate () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

button {
    display: block;
    width: 100%;
    margin: 2.5em 0 0 0;
    border-color: transparent;
    cursor: pointer;
    outline: none;
}
button:focus{
  outline: none;
}
button.rounded {
  height: 50px;
  border-radius: 50px;
  background-color: #ffba33;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #6a4029;
}

button.rectangle {
  height: 50px;
  border-radius: 10px;
  background-color: #ffba33;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #6a4029;
}

button.rectangle2 {
  height: 50px;
  border-radius: 10px;
  background-color: #6A4029;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}

button.white {
  height: 75px;
  border-radius: 20px;
  box-shadow: 0 6px 20px 0 rgba(196, 196, 196, 0.67);
  background-color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
}

button.white2 {
  height: 60px;
  border-radius: 20px;
  border: solid 1px #9f9f9f;
  background-color: #ffffff;
}

</style>
