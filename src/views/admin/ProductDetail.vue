<template>
<div class="container mt-5">
    <div class="row">
      <div class="d-flex flex-column align-items-center col-md-4 p-3">
        <div class="wrapper-image">
          <img v-bind:src="getProduct.data.image" :alt="getProduct.data.name">
        </div>
        <router-link  :to="{ path: `/admin/edit-product/${getProduct.data.id}` }" class="button-brown fw-bolder mx-auto mt-5 text-center text-decoration-none">Edit Product</router-link>
        <button class="button-yellow bg-dark fw-bolder mx-auto mt-5" @click="handleDelete(getProduct.data.id)">Delete</button>
      </div>
      <div class="col-md-8">
        <div class="details p-3">
          <p>Delivery only on <span class="fw-bold">Monday to friday</span> at  <span class="fw-bold">1 - 7 pm</span></p>
          <p class="description">{{ getProduct.data.description }}</p>
          <div class="sizes ">
            <h4 class="text-center fw-bold mb-3">Choose a size</h4>
            <div class="d-flex justify-content-center">
              <button class="button-size mx-3" v-for="size in getProduct.sizes" @click="size = size" v-bind:key="size">{{ size }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5 mb-5">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4 d-flex flex-column align-items-center p-3">
                <div class="wrapper-icon">
                  <img v-bind:src="getProduct.data.image" :alt="getProduct.data.name">
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
        <button class="d-block fw-bold checkout-button">CHECKOUT</button>
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
    ...mapActions(['getSingleProduct', 'deleteProduct']),
    handleDelete (id) {
      this.deleteProduct(id)
        .then(() => {
          Swal.fire(
            'Delete Success',
            '',
            'success'
          )
          this.$router.push({ name: 'HomeAdmin' })
        })
        .catch(() => {
          Swal.fire(
            'Something went wrong',
            '',
            'error'
          )
        })
    }
  },
  data () {
    return {
      selectedSize: '',
      size: '',
      amount: 0,
      productId: this.$route.params.productId
    }
  },
  created () {
    this.getSingleProduct(this.productId)
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

div.col-md-4 img {
  display: block;
  margin: auto;
  border-radius: 50%;
}

div.details {
  width: 80%;
  margin: auto;
  border-radius: 1em;
  background-color: white;
  height: 350px;
}

p.description {
  height: 50%;
}
.wrapper-image {
  width: 270px;
  height: 270px;
}
.wrapper-icon{
  width: 90px;
  height: 90px;
}
.wrapper-image > img, .wrapper-icon > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
@media (max-width: 768px) {
  div.details {
    width: 100%;
  }
}
</style>
