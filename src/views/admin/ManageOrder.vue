<template>
  <div class="bg-cart">
    <div class="container">
      <h2 class="title">Finish your customer order now.</h2>
      <div class="row justify-content-between">
        <div class="col-md-5">
          <div class="card-left">
            <div class="card-delivery">
            <h3 class="delivery-order">Delivery Order</h3>
              <div class="list-order mt-3 d-flex justify-content-between" v-for="order in getOrder.orders" v-bind:key="order.id">
                <div class="list-order-left d-flex">
                  <div class="img-product">
                    <img :src="order.image" alt="img product">
                  </div>
                  <div class="name-total">
                    <h6>{{ order.name }}</h6>
                    <h6>{{ order.amount }}</h6>
                  </div>
                </div>
                <div class="list-order-right">
                  <h6>IDR {{ order.price }}</h6>
                </div>
              </div>
              <hr style="margin: 40px 0;">
              <div class="list-total d-flex justify-content-between">
                <div class="total-left">
                  <h6>SUBTOTAL</h6>
                  <h6>TAX & FEES</h6>
                  <h6>SHIPPING</h6>
                </div>
                <div class="total-right">
                  <h6>IDR {{ getOrder.order.subTotal }}</h6>
                  <h6>IDR {{ getOrder.order.tax }}</h6>
                  <h6>-</h6>
                </div>
              </div>
              <div class="total-delivery d-flex justify-content-between">
                <h2>TOTAL</h2>
                <h2>IDR {{ getOrder.order.subTotal + getOrder.order.tax }}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card-right">
            <h4>Address details</h4>
            <div class="card-delivery">
              <!-- <h5><span style="font-weight: 700;">Delivery</span> to iskandar Street</h5>
              <hr> -->
              <h5>{{ getUser.deliveryAddress }}</h5>
              <hr>
              <h5>{{ getUser.mobileNumber }}</h5>
            </div>
            <h4 style="margin-top: 30px;">Payment Method</h4>
            <div class="card-payment">
              <div class="method-card">
                <input @click="paymentMethod = 'Card'" type="radio" id="card" name="payment-method" value="card">
                <label for="card">Card</label>
              </div>
              <hr>
              <div class="method-bank">
                <input @click="paymentMethod = 'Card'" type="radio" id="card" name="payment-method" value="card">
                <label for="card">Bank account</label>
              </div>
              <hr>
              <div class="method-cod">
                <input @click="paymentMethod = 'Card'" type="radio" id="card" name="payment-method" value="card">
                <label for="card">Cash on delivery</label>
              </div>
            </div>
            <button class="btn confirm" @click="markAsComplete">Mark as complete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'PaymentDelivery',
  data () {
    return {
      paymentMethod: ''
    }
  },
  computed: {
    ...mapGetters(['getOrder', 'getUser'])
  },
  methods: {
    ...mapActions(['getUserOrder', 'getUserById', 'confirmOrder']),
    markAsComplete () {
      this.confirmOrder({ cartId: this.getOrder.order.id })
        .then(res => {
          Swal.fire(
            res.status,
            res.message,
            'success'
          )
        })
        .catch(err => {
          Swal.fire(
            err.status,
            err.message,
            'error'
          )
        })
    }
  },
  created () {
    this.getUserOrder()
      .then(res => {
        this.getUserById(this.getOrder.order.userId)
        console.log(this.getOrder)
      })
      .catch(err => {
        Swal.fire(
          err.status,
          err.message,
          'error'
        )

        this.$router.push({ path: '/customer/home' })
      })
  }
}
</script>

<style scoped>
h2.title{
  text-shadow: 1px 2px 2px black;
  width: 30%;
  margin-bottom: 20px;
}
.bg-cart{
  background: url('../../assets/img/pnd.png');
  padding: 50px 0;
  height: fit-content;
  width: 100%;
  color: white;
}
.card-delivery{
  width: 100%;
  padding: 60px 20px;
  background-color: #fff;
  color: black;
  border-radius: 25px;
}
.img-product{
  margin-right: 10px;
  width: 90px;
  height: 90px;
  border-radius: 10px;
  background-color: rgb(194, 194, 194);
}
.img-product > img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.list-total {
  margin-bottom: 30px;
}
h3.delivery-order {
  text-align: center;
  margin-bottom: 60px;
}
.card-right{
  margin-top: 20px;
}
.card-right > h4 {
  text-shadow: 1px 2px 2px black;
}
.card-delivery{
  margin-top: 22px;
  padding: 35px 20px;
  border-radius: 15px;
  color: black;
  background-color: #fff;
}
.card-payment{
  padding: 35px 20px;
  margin-top: 22px;
  border-radius: 15px;
  color: black;
  font-size: 24px;
  background-color: #fff;
}
.card-payment label {
  margin-left: 10px;
}
button.confirm{
  background-color: rgb(97, 38, 38);
  color: white;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
}
@media screen and (max-width: 768px) {
  h2.title{
    width: 55%;
  }
}
@media screen and (max-width: 540px){
  .cart-left{
    margin-top: 20px;
  }
}
</style>
