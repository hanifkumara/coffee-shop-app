<template>
  <div>
      <button @click="activate" :disabled="loading" :class="type">
        <div class="wrapper d-flex justify-content-center align-items-center">
          {{title}}
          <template v-if="loading" class="ml-3">. . . .
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background: none; display: block; shape-rendering: auto;" width="24px" height="24px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)"><g><animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.3759398496240602s" repeatCount="indefinite"></animateTransform><path d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20" fill="#1d3f72"></path></g></g></svg>
          </template>
        </div>
      </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: String,
    title: String,
    loading: Boolean
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
