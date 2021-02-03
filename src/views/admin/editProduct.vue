<template>
  <div>
    <aside>
      <img :src="getProduct.data.image" width="250" alt="Product">
       <form @submit.prevent  enctype="multipart/form-data">
        <label for="input-image">Choose image</label>
        <input type="file" id="input-image" style="display: block; margin: 3em auto;" ref="image" @change="handleImage($event)">
        </form>
    </aside>
    <main>
      <Input style="margin-top: 2em;" v-on:input="name = $event.target.value" v-bind:value="getProduct.data.name" formStyle="underlined"/>
      <p style="color: red; font-size: 14px; margin-top: 5px;" v-if="name.length >= 1 && name.length <= 5 ">name must be more than 5 character</p>
      <Input formStyle="underlined" style="margin-top: 2em;" v-on:input="price = $event.target.value" v-bind:value="getProduct.data.price" />
      <Input formStyle="underlined" style="margin-top: 2em;" v-on:input="description = $event.target.value" v-bind:value="getProduct.data.description" />
      <p style="color: red; font-size: 14px; margin-top: 5px;"  v-if="description.length >= 1 && description.length <= 10 ">description must be more than 10 character</p>
      <Button type="rectangle" @click="handleE" :loading="loading" title="Save Change" />
    </main>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions, mapGetters } from 'vuex'
import Button from '../../components/_parts/Button.vue'
import Input from '../../components/_parts/Input.vue'

export default {
  name: 'editProduct',
  data () {
    return {
      name: '',
      price: null,
      description: '',
      selected: '',
      sizes: [
        { id: 1, size: 10 },
        { id: 2, size: 20 },
        { id: 3, size: 40 },
        { id: 4, size: 70 },
        { id: 5, size: 100 }
      ],
      idProduct: this.$route.params.productId,
      image: null,
      loading: false
    }
  },
  components: {
    Button,
    Input
  },
  mounted () {
    this.getSingleProduct(this.idProduct)
  },
  methods: {
    ...mapActions(['getSingleProduct', 'updateProduct']),
    handleImage (event) {
      this.image = event.target.files[0]
    },
    handleE () {
      this.loading = true
      const formData = new FormData()
      if (this.image) {
        formData.append('image', this.image, this.image.name)
      }
      formData.append('name', this.name || this.getProduct.data.name)
      formData.append('price', this.price || this.getProduct.data.price)
      formData.append('description', this.description || this.getProduct.data.description)
      formData.append('id', this.idProduct)
      this.updateProduct(formData)
        .then((result) => {
          this.loading = false
          Swal.fire(
            'Update data success!!',
            '',
            'success'
          )
        }).catch(err => {
          this.loading = false
          console.log(err.response)
          Swal.fire(
            err.status,
            err.message,
            'error'
          )
        })
    }
  },
  computed: {
    ...mapGetters(['getProduct'])
  }
}
</script>

<style scoped>
div {
  display: flex;
  width: 95%;
  margin: auto;
}

div aside {
  flex: 1;
  padding: 2em;
}

div aside img {
  display: block;
  width: 480px;
}

div main {
  flex: 3;
  padding: 2em;
}
form > label {
  border-radius: 10px;
  margin-top: 30px;
  width: 100%;
  padding: 13px 0;
  text-align: center;
  background-color: rgb(255, 184, 51);
  cursor: pointer;
}
form > label:hover {
  transform: scale(1.02);
}
input#input-image {
  display: none !important;
}
</style>
