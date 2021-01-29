<template>
  <div class="container mt-5">
    <div class="row">
      <!-- <div class="col-md-4"></div> -->
      <div class="col-md-12">
        <div class="product-filter row">
          <p @click="filterAll" class="col-4 text-center fw-bolder">All</p>
          <p @click="filterFood" class="col-4 text-center fw-bolder">Food</p>
          <p @click="filterDrink" class="col-4 text-center fw-bolder">Drink</p>
        </div>

        <div class="product-list row">
          <div class="col-md-4" v-for="product in getProducts" v-bind:key="product.id">
            <div class="product-card py-4 bg-light shadow" @click="openProductDetail(product.id)">
              <div class="image-wrap">
                <img :src="product.image" class="mb-3" width="100" height="100" :alt="product.name">
              </div>
              <p class="product-name text-center">{{ product.name }}</p>
              <p class="product-price text-center fw-bolder">{{ product.price }}</p>
            </div>
          </div>
        </div>

        <nav class="d-flex justify-content-center mt-5" aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" v-if="getRole === 'admin'" :class="{ disabled: !getPagination.previous }"><router-link :to="{ path: `/admin/home?keyword=${$route.query.keyword || ''}&page=${getPagination.previous}` }" class="page-link">Previous</router-link></li>
            <li class="page-item" v-else :class="{ disabled: !getPagination.previous }"><router-link :to="{ path: `/customer/home?keyword=${$route.query.keyword || ''}&page=${getPagination.previous}` }" class="page-link">Previous</router-link></li>
            <li class="page-item disabled"><a class="page-link">{{ getPagination.current }}</a></li>
            <li class="page-item" v-if="getRole === 'admin'" :class="{ disabled: !getPagination.next }"><router-link :to="{ path: `/admin/home?keyword=${$route.query.keyword || ''}&page=${getPagination.next}` }" class="page-link">Next</router-link></li>
            <li class="page-item" v-else :class="{ disabled: !getPagination.next }"><router-link :to="{ path: `/customer/home?keyword=${$route.query.keyword || ''}&page=${getPagination.next}` }" class="page-link">Next</router-link></li>
          </ul>
        </nav>

        <router-link v-show="getRole === 'admin'" class="btn btn-primary btn-lg btn-block" style="width: 100%;" to="/admin/new-product">Create new product</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'
export default {
  name: 'Home',
  data () {
    return {
      pagination: {}
    }
  },
  methods: {
    ...mapActions(['getAllProducts']),
    filterFood () {
      this.$router.push({ path: '/customer/home?keyword=Food' })
        .catch(() => {
          //
        })
    },
    filterDrink () {
      this.$router.push({ path: '/customer/home?keyword=Drink' })
        .catch(() => {
          //
        })
    },
    filterAll () {
      this.$router.push({ path: '/customer/home?keyword=' })
        .catch(() => {
          //
        })
    },
    openProductDetail (productId) {
      if (this.getRole === 'admin') {
        return this.$router.push({ path: `/admin/product/${productId}` })
      }

      this.$router.push({ path: `/customer/product/${productId}` })
    }
  },
  computed: {
    ...mapGetters(['getProducts', 'getPagination', 'getRole'])
  },
  created () {
    this.getAllProducts({ page: this.$route.query.page || 1, keyword: this.$route.query.keyword || '' })
      .then(res => {
        //
      })
      .catch(err => {
        Swal.fire(
          err.response.data.status,
          err.response.data.message,
          'error'
        )
        this.$router.push({ path: '/customer/home' })
      })
  },
  watch: {
    $route () {
      this.getAllProducts({ page: this.$route.query.page || 1, keyword: this.$route.query.keyword || '' })
        .then(res => {
          //
        })
        .catch(err => {
          Swal.fire(
            err.response.data.status,
            err.response.data.message,
            'error'
          )
          this.$router.push({ path: '/customer/home' })
        })
    }
  }
}
</script>

<style scoped>
.product-filter {
  cursor: pointer;
}
.product-card {
  width: 90%;
  cursor: pointer;
  margin: 1em auto;
  /* border: 1px solid; */
  border-radius: .5em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image-wrap{
  margin-bottom: 20px;
  width: 90px;
  height: 90px;
}
.image-wrap img {
  object-fit: cover;
  border-radius: 50%;
}
</style>
