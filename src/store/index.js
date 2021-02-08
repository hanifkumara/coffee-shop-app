import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '' || localStorage.getItem('token'),
    userRole: '' || localStorage.getItem('userRole'),
    userId: '' || localStorage.getItem('userId'),
    products: [],
    product: {
      data: {},
      sizes: [],
      deliveryMethods: []
    },
    pagination: {},
    user: {},
    cart: {},
    order: {},
    history: [],
    allStaff: [],
    historyChat: [],
    listStaffChat: []
  },
  mutations: {
    SET_TOKEN (state, payload) {
      state.token = payload
    },
    SET_HISTORY (state, payload) {
      state.history = payload
    },
    SET_PRODUCT (state, payload) {
      state.product.sizes = []
      state.product.deliveryMethods = []
      state.product.data = payload.product
      for (const size of payload.sizes) {
        state.product.sizes.push(size)
      }
      for (const deliveryMethod of payload.deliveryMethods) {
        state.product.deliveryMethods.push(deliveryMethod)
      }
    },
    SET_USER_ROLE (state, payload) {
      state.userRole = payload
    },
    SET_USER_ID (state, payload) {
      state.userId = payload
    },
    SET_USER (state, payload) {
      state.user = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_PRODUCT_ID (state, payload) {
      state.productId = payload
    },
    SET_PAGINATION (state, payload) {
      state.pagination = payload
    },
    SET_CART (state, payload) {
      state.cart = payload
    },
    SET_ORDER (state, payload) {
      state.order = payload
    },
    SET_ALL_STAFF (state, payload) {
      state.allStaff = payload
    },
    SET_HISTORY_CHAT (state, payload) {
      state.historyChat = payload
    },
    SET_LIST_STAFF_CHAT (state, payload) {
      state.listStaffChat = payload
    }
  },
  actions: {
    getAllProducts ({ dispatch, commit }, payload) {
      return new Promise((resolve, reject) => {
        dispatch('interceptorsRequest')
        axios.get(`${process.env.VUE_APP_SERVICE_API}/products?keyword=${payload.keyword}&page=${payload.page || 1}`)
          .then(res => {
            commit('SET_PRODUCTS', res.data.products)
            commit('SET_PAGINATION', res.data.pagination)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getSingleProduct ({ dispatch, commit }, payload) {
      return new Promise((resolve, reject) => {
        dispatch('interceptorsRequest')
        axios.get(`${process.env.VUE_APP_SERVICE_API}/products/${payload}`)
          .then(res => {
            commit('SET_PRODUCT', res.data)
            resolve(res)
          })
          .catch(err => {
            console.log(err.response.data.message)
            reject(err)
          })
      })
    },
    getUserById ({ dispatch, commit }, payload = null) {
      return new Promise((resolve, reject) => {
        dispatch('interceptorsRequest')
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/${payload || localStorage.getItem('userId')}`)
          .then(res => {
            commit('SET_USER', res.data.data)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    updateUser ({ dispatch, commit }, payload) {
      return new Promise((resolve, reject) => {
        dispatch('interceptorsRequest')
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userId')}`, payload)
          .then(res => {
            dispatch('getUserById')
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    createProduct (context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios.post(`${process.env.VUE_APP_SERVICE_API}/products/create`, payload)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            console.log(err.response)
            reject(err.response.data)
          })
      })
    },
    updateProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/products/${payload.get('id')}`, payload)
          .then((result) => {
            context.dispatch('getSingleProduct', payload.get('id'))
            resolve(result)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
    deleteProduct (context, id) {
      return new Promise((resolve, reject) => {
        console.log(id)
        axios.delete(`${process.env.VUE_APP_SERVICE_API}/products/${id}`)
          .then((result) => {
            console.log('hapus berhasil')
            resolve(result)
          }).catch((err) => {
            console.log('hapus gagal')
            reject(err)
          })
      })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios.post(`${process.env.VUE_APP_SERVICE_API}/users/login`, payload)
          .then(res => {
            const result = res.data
            console.log(result)
            localStorage.setItem('token', result.authToken)
            context.commit('SET_TOKEN', result.authToken)
            localStorage.setItem('userRole', result.userRole)
            context.commit('SET_USER_ROLE', result.userRole)
            localStorage.setItem('userId', result.userId)
            context.commit('SET_USER_ID', result.userId)
            context.dispatch('getUserById')
            context.dispatch('interceptorsRequest')
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    signup (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/users/register`, payload)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    forgotPassword (context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios.post(`${process.env.VUE_APP_SERVICE_API}/users/forgot-password`, payload)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    setAllStaff (context) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/message/all-staff`)
          .then(res => {
            const { result } = res.data
            context.commit('SET_ALL_STAFF', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err.response)
          })
      })
    },
    setListStaffChat (context) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/message/list-staff-chat`)
          .then(res => {
            const { result2 } = res.data
            context.commit('SET_LIST_STAFF_CHAT', result2)
            resolve(result2)
          })
          .catch((err) => {
            reject(err.response)
          })
      })
    },
    setHistoryChat (context, id) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/message/${id}`)
          .then(res => {
            const { result } = res.data
            context.commit('SET_HISTORY_CHAT', result)
            resolve(result)
          })
          .catch((err) => {
            reject(err.response)
          })
      })
    },
    getUserCart ({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/orders/get-cart`)
          .then(res => {
            commit('SET_CART', res.data)
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response.data)
          })
      })
    },
    getUserOrder ({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/orders/get-order`)
          .then(res => {
            commit('SET_ORDER', res.data)
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response.data)
          })
      })
    },
    addToCartRequest (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/orders/add-to-cart`, payload)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response.data)
          })
      })
    },
    getUserHistory (context) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorsRequest')
        axios.get(`${process.env.VUE_APP_SERVICE_API}/orders/history`)
          .then(res => {
            context.commit('SET_HISTORY', res.data.history)
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response.data)
          })
      })
    },
    checkout (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorsRequest')
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/orders/checkout`, payload)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response.data)
          })
      })
    },
    confirmOrder (context, payload) {
      return new Promise((resolve, reject) => {
        context.dispatch('interceptorsRequest')
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/orders/complete-order`, payload)
          .then(res => {
            context.dispatch('getUserOrder')
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response.data)
          })
      })
    },
    interceptorsRequest (content) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    interceptorsResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        return Promise.reject(error)
      })
    }
  },
  getters: {
    getProducts (state) {
      return state.products
    },
    getPagination (state) {
      return state.pagination
    },
    getRole (state) {
      return state.userRole
    },
    getProduct (state) {
      return state.product
    },
    getUser (state) {
      return state.user
    },
    getCart (state) {
      return state.cart
    },
    getOrder (state) {
      return state.order
    },
    getHistory (state) {
      return state.history
    },
    getAllStaff (state) {
      return state.allStaff
    },
    getHistoryChat (state) {
      return state.historyChat
    },
    getlistStaffChat (state) {
      return state.listStaffChat
    }
  }
})
