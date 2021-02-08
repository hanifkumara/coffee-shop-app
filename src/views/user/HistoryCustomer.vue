<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p class="lets-see">Let’s see what you have boughasat!</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p class="long-press">Long press to delete item</p>
        </div>
      </div>
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

label {
  font-style: normal;
  margin-left: 15px;
}

.profile {
  background: url("../../assets/img/Alat.png");
  height: fit-content;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.lets-see{
  color: white;
  font-weight: 700;
  font-size: 29px;
  text-align: center;
}

.long-press {
  text-align: center;
  margin-bottom: 20px;
  font-family: Rubik;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
}
</style>
