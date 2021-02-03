<template>
<div class="container mt-5">
    <div class="row">
      <div class="col-md-4 p-3">
        <div class="image-wrapper">
          <img v-bind:src="getProduct.data.image" width="250" height="250" :alt="getProduct.data.name">
        </div>
        <but class="button-brown fw-bolder text-center mx-auto mt-5" @click="addToCart">Add to Cart</but>
        <button class="button-yellow fw-bolder mx-auto mt-3">Ask a Staff</button>
      </div>
      <div class="col-md-8">
        <div class="details">
          <p>Delivery only on <span class="fw-bold">Monday to friday</span> at  <span class="fw-bold">1 - 7 pm</span></p>
          <p class="description">{{ getProduct.data.description }}</p>
          <div class="sizes">
            <h4 class="text-center fw-bold mb-3">Choose a size</h4>
            <div class="d-flex justify-content-center">
              <button @click="productSize = size" class="button-size mx-3" v-for="size in getProduct.sizes" v-bind:key="size">{{ size }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5 mb-5">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body
          ">
            <div class="row">
              <div class="col-md-4 p-3">
                <div class="icon-wrapper">
                  <img v-bind:src="getProduct.data.image" width="100" height="100" :alt="getProduct.data.name">
                </div>
              </div>
              <div class="col-md-4 d-flex align-items-center">
                <h4 class="fw-bolder d-block text-center w-100">{{ getProduct.data.name }}</h4>
              </div>
              <div class="col-md-4 d-flex align-items-center">
                <div class="input-group mb-3">
                  <button class="btn fw-bolder" type="button" @click="amount--">-</button>
                  <input type="number" v-model="amount" class="form-control fw-bold text-center">
                  <button class="btn fw-bolder" type="button" @click="amount++">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <button class="d-flex justify-content-center align-items-center fw-bold checkout-button" :disabled="loading" @click="addToCart">
          CHECKOUT
          <template v-if="loading" class="ml-3">. . . .
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background: none; display: block; shape-rendering: auto;" width="24px" height="24px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)"><g><animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.3759398496240602s" repeatCount="indefinite"></animateTransform><path d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20" fill="#1d3f72"></path></g></g></svg>
          </template>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'ProductDetail',
  computed: {
    ...mapGetters(['getProduct'])
  },
  methods: {
    ...mapActions(['getSingleProduct', 'addToCartRequest']),
    addToCart () {
      this.loading = true
      const order = {
        productSize: this.productSize,
        amount: this.amount,
        productId: this.getProduct.data.id
      }

      console.log(order)

      this.addToCartRequest(order)
        .then(res => {
          this.loading = false
          Swal.fire(
            'Success',
            'Success add to cart',
            'success'
          )
          this.$router.push({ path: '/customer/cart' })
        })
        .catch(err => {
          this.loading = false
          Swal.fire(
            err.status,
            err.message,
            'error'
          )
        })
    }
  },
  data () {
    return {
      selectedSize: '',
      selectedDeliveryMethod: '',
      productSize: '',
      amount: 0,
      loading: false
    }
  },
  created () {
    this.getSingleProduct(this.$route.params.productId)
      .then(() => {
        console.log(this.getProduct)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
.button-brown {
  display: block;
  width: 90%;
  outline: none;
  border: none;
  background-color: #6A4029;
  COLOR: white;
  padding: 1em;
  border-radius: 1em;
}

.button-yellow {
  display: block;
  width: 90%;
  outline: none;
  border: none;
  background-color: #FFBA33;
  COLOR: white;
  padding: 1em;
  border-radius: 1em;
}

.button-size {
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  background-color: #FFBA33;
  border-radius: 50%;
}

.checkout-button {
  width: 100%;
  outline: none;
  border: none;
  background-color: #FFBA33;
  height: 100%;
  border-radius: 1em;
}
.image-wrapper{
  width: 220px;
  height: 220px;
  display: block;
  margin: auto;
}
.icon-wrapper {
  width: 90px;
  display: block;
  margin: auto;
  height: 90px;
}
.image-wrapper > img, .icon-wrapper > img {
  object-fit: cover;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}

div.details {
  width: 80%;
  margin: auto;
  border-radius: 1em;
  background-color: white;
  padding: 35px 40px;
  height: 400px;
}

p.description {
  height: 50%;
}

@media (max-width: 768px) {
  div.details {
    width: 100%;
  }
}
</style>
