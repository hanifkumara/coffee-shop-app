<template>
  <div class="bg-cart">
    <div class="container">
    <h2 class="title">Check Out your item now!</h2>
      <div class="row justify-content-between">
        <div class="col-md-5">
          <div class="cart-left">
            <div class="card-order">
              <div class="container-list-order">
              <h2 class="order-summary">Order Summary</h2>
                <div class="list-order d-flex justify-content-between" v-for="order in getCart.orders" v-bind:key="order.id">
                  <div class="list-left d-flex">
                    <div class="img-product">
                      <img :src="order.image" alt="product-img">
                    </div>
                    <div class="name-total">
                      <h5>{{ order.name }}</h5>
                      <h6>x{{ order.amount }}</h6>
                    </div>
                  </div>
                  <h5>{{ order.price }}</h5>
                </div>
                <hr style="margin: 40px 0;">
                <div class="list-total d-flex justify-content-between">
                  <div class="left-text">
                    <h5>SUBTOTAL</h5>
                    <h5>TAX & FEES</h5>
                    <h5>SHIPPING</h5>
                  </div>
                  <div class="right-text">
                    <h5>{{ getCart.cart.subTotal }}</h5>
                    <h5>{{ getCart.cart.tax }}</h5>
                    <h5>-</h5>
                  </div>
                </div>
                <div class="total-order d-flex justify-content-between">
                  <h2>TOTAL</h2>
                  <h2>{{ getCart.cart.subTotal + getCart.cart.tax }}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="cart-right">
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
                <input @click="paymentMethod = 'Bank Account'" type="radio" id="bank-account" name="payment-method" value="card">
                <label for="bank-account">Bank account</label>
              </div>
              <hr>
              <div class="method-cod">
                <input @click="paymentMethod = 'Cash on Delivery'" type="radio" id="cod" name="payment-method" value="card">
                <label for="cod">Cash on delivery</label>
              </div>
            </div>
            <button class="btn confirm" @click="checkoutCart">Confirm and pay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Button from '../../components/_parts/Button.vue'
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
    ...mapGetters(['getCart', 'getUser'])
  },
  methods: {
    ...mapActions(['getUserCart', 'getUserById', 'checkout']),
    checkoutCart () {
      console.log(this.paymentMethod)
      this.checkout({
        paymentMethod: this.paymentMethod
      })
        .then((res) => {
          console.log(res)
          Swal.fire(
            res.status,
            res.message,
            'success'
          )

          this.$router.push({ path: '/customer/home' })
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
    this.getUserById()
    this.getUserCart()
      .then(res => {
        //
        console.log(this.getCart)
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
.bg-cart{
  background: url('../../assets/img/pnd.png');
  padding: 50px 0;
  height: fit-content;
  width: 100%;
  color: white;
}
h2.title{
  width: 25%;
  font-weight: 600;
  text-shadow: 1px 2px 2px black;
}
.order-summary {
  text-align: center;
  margin-bottom: 60px;
}
.cart-left{
  margin-top: 50px;
}
.container-list-order{
  width: 100%;
  padding: 60px 20px;
  color: black;
  border-radius: 25px;
  background-color: #fff;
}
.list-order{
  margin-top: 20px;
}
.img-product{
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
.name-total{
  margin-left: 10px;
}
.list-total{
  margin-bottom: 30px;
}

.cart-right{
  margin-top: 50px;
}
.cart-right > h4 {
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
