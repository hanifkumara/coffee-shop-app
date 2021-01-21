<template>
  <div class="profile">
    <div class="Lets-see-what-you-have-bought">
      <p>Let’s see what you have bought!</p>
    </div>
    <div class="Long-press-to-delete">
        Long press to delete item
    </div>
    <div class="container" style="display: flex; flex-wrap: wrap;">
        <CardHistory
          v-for="history in getHistory"
          :key="history.id"
          :name="history.name"
          :image="history.image"
          :price="history.price"
        />
    </div>
  </div>
</template>

<script>
import CardHistory from '../../components/_parts/CardHistory.vue'
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'HistoryCustomer',
  components: {
    CardHistory
  },
  computed: {
    ...mapGetters(['getHistory'])
  },
  methods: {
    ...mapActions(['getUserHistory'])
  },
  created () {
    this.getUserHistory()
      .then(() => {
        // console.log(this.getHistory)
      })
      .catch(err => {
        Swal.fire(
          err.status,
          err.message,
          'error'
        )
      })
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* border: 1px solid blue */
}

body,
html {
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  color: #444444;
}

/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

label {
    font-style: normal;
    margin-left: 15px;
}

.profile {
  background: url("../../assets/img/Alat.png");
  height: 1400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.Lets-see-what-you-have-bought{
  width: 653px;
  height: 20px;
  margin: 107px 192px 20px 353px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.8);
  font-family: Rubik;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}

.Long-press-to-delete {
  margin: 40px 192px 59px 560px;
  font-family: Rubik;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
}

.container {
  display: flex;
  padding: 10px 120px;
  margin: 0;
}

.container1 {
  display: flex;
  padding: 0 50px 300px 50px;
}
</style>
