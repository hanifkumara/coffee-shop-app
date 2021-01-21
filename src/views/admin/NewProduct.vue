<template>
  <div>
    <div class="content">
      <div class="side-left">
        <h4 class="title">Favorit and Promo <span style="color: #6a4029; font-weight: 600"> > Add new product</span></h4>
        <div class="img-circle">
          <h4>Photo</h4>
        </div>
        <div class="button mt-custom">
          <Button type="rectangle2" title="Take a picture"/>
        </div>
        <form @submit.prevent enctype="multipart/form-data">
        <input type="file" class="choose-file" ref="image" @change="handleImage($event)">
        </form>
        <h4 class="delivery">Delivery Hour :</h4>
        <div class="select">
          <Select :options="['One Hour', 'Two Hour']" default="Select start hour" class="select"/>
        </div>
        <div class="select">
          <Select :options="['One Hour', 'Two Hour']" default="Select end hour" class="select"/>
        </div>
        <h4 class="input-stok">Input stock :</h4>{{stock}}
        <div class="select">
          <Select :options="[10, 20, 40, 70, 100]" default="Input stock" class="select"/>
        </div>
      </div>
      <div class="side-right">
        <form @submit.prevent="">
          <h4>Name :</h4>
          <div class="input">
            <Input formStyle="underlined" placeholder="Type product name min. 5 char" @input="name = $event.target.value"/>
            <p style="color: red; font-size: 14px; margin-top: 5px;"  v-if="name.length >= 1 && name.length <= 5 ">Name product must be more than 5 character</p>
          </div>
          <h4>Price :</h4>
          <div class="input">
            <Input formStyle="underlined" placeholder="Type the price" @input="price = $event.target.value"/>
          </div>
          <h4>Description : </h4>
          <div class="input">
            <Input formStyle="underlined" placeholder="Describe your product min. 10 char" @input="description = $event.target.value"/>
            <p style="color: red; font-size: 14px; margin-top: 5px;"  v-if="description.length >= 1 && description.length <= 10 ">description must be more than 10 character</p>
          </div>
          <h4>Input product size :</h4>
          <p>Click size you want to use for this product</p>
          <div class="size">
            <div class="button" @click="sizeR">
              <Button title="R" type="rounded" />
            </div>
            <div class="button" @click="sizeL">
              <Button title="L" type="rounded"/>
            </div>
            <div class="button" @click="sizeXL">
              <Button title="XL" type="rounded"/>
            </div>
            <div class="button" @click="size250gr">
              <div class="button-grey">
                250 gr
              </div>
            </div>
            <div class="button" @click="size350gr">
              <div class="button-grey">
                350 gr
              </div>
            </div>
            <div class="button" @click="size500gr">
              <div class="button-grey">
                500 gr
              </div>
            </div>
          </div>
          <h4>Input delivery methods :</h4>
          <p>Click methods you want to use for this product</p>
          <div class="methods">
            <div class="button" @click="homeDelivery">
              <Button type="rectangle" title="Home delivery" />
            </div>
            <div class="button middle" @click="driveIn">
              <Button type="rectangle" title="Drive in" />
            </div>
            <div class="button" @click="takeAway">
              <Button type="rectangle" title="Take Away" />
            </div>
          </div>
          <div class="button" @click="handleSubmit">
            <Button type="rectangle2" title="Save product" />
          </div>
          <router-link :to="{ name: 'HomeAdmin' }" class="button cancel">
            Cancel
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../../components/_parts/Button'
import Select from '../../components/_parts/Select'
import Input from '../../components/_parts/Input'
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'NewProuct',
  data () {
    return {
      name: '',
      price: '',
      description: '',
      image: null,
      stock: null,
      productSizes: [],
      deliveryMethods: []
    }
  },
  components: {
    Button,
    Select,
    Input
  },
  methods: {
    ...mapActions(['createProduct']),
    handleImage (e) {
      this.image = e.target.files[0]
    },
    handleSubmit () {
      if (!this.name) {
        Swal.fire(
          'Fill name required!!',
          '',
          'error'
        )
        return
      }
      if (!this.description) {
        Swal.fire(
          'Fill description required!!',
          '',
          'error'
        )
        return
      }
      if (this.productSizes.join('').length < 1) {
        Swal.fire(
          'Please choose at least one product size',
          '',
          'error'
        )
        return
      }
      if (this.deliveryMethods.join('').length < 1) {
        Swal.fire(
          'Please choose at least one delivery method',
          '',
          'error'
        )
        return
      }
      if (this.name.length <= 5) {
        Swal.fire(
          'Type product name min. 5 characters',
          '',
          'error'
        )
        return
      }
      if (this.description.length <= 10) {
        Swal.fire(
          'Description must be more than 10 character',
          '',
          'error'
        )
      } else {
        const formData = new FormData()
        if (this.image) {
          formData.append('image', this.image, this.image.name)
        }

        const resProductSize = JSON.stringify({ productSizes: this.productSizes })
        const resDeliveryMethods = JSON.stringify({ deliveryMethods: this.deliveryMethods })
        formData.append('name', this.name)
        formData.append('price', this.price)
        formData.append('description', this.description)
        formData.append('stock', 50)
        formData.append('category', 'Food')
        formData.append('deliveryMethods', resDeliveryMethods)
        formData.append('productSizes', resProductSize)
        this.createProduct(formData)
          .then(() => {
            Swal.fire(
              'Add new product success',
              '',
              'success'
            )
            this.$router.push({ path: '/admin/home' })
          }).catch((err) => {
            Swal.fire(
              err.status,
              err.message,
              'error'
            )
          })
      }
    },
    sizeR () {
      console.log(this.productSizes)
      this.productSizes.push('R')
    },
    sizeL () {
      this.productSizes.push('L')
    },
    sizeXL () {
      this.productSizes.push('XL')
    },
    size250gr () {
      this.productSizes.push('250gr')
    },
    size350gr () {
      this.productSizes.push('350gr')
    },
    size500gr () {
      this.productSizes.push('500gr')
    },
    homeDelivery () {
      this.deliveryMethods.push('Home Delivery')
    },
    driveIn () {
      this.deliveryMethods.push('Drive In')
    },
    takeAway () {
      this.deliveryMethods.push('Take Away')
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: fit-content;
  padding: 0 120px;
  display: flex
}
.side-left{
  width: 30%;
  padding: 50px 0;
}
.side-right{
  margin-top: 95px;
  width: 70%;
  padding-left: 80px;
}
.choose-file{
  margin-top: 30px;
  width: 100%;
  border: .3px solid rgb(167, 167, 167);
}
.choose-file:hover{
  transform: scale(1.04)
}
h4.title{
  margin-bottom: 60px;
  color: rgb(146, 146, 146);
  font-weight: 400;
}
.img-circle{
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: grey;
}
.side-left .button {
  margin-top: 10px;
}
.delivery, .input-stok{
  margin-top: 80px;
  margin-bottom: 20px;
}
.select{
  margin-bottom: 30px;
}
/* Side right */
.side-right .size {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 55%;
  margin-bottom: 50px;
}
form{
  margin-top: 50px;
}
form > h4 {
  color: #6a4029
}
form > p {
  margin-top: 20px;
  font-size: 17px;
}
.input{
  margin-bottom: 30px;
}
.size > .button{
  width: 50px;
}
.size > .button > .button-grey {
  width: 50px;
  height: 50px;
  background-color: rgb(207, 207, 207);
  border-radius: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-align: center;
  font-weight: 600;
  padding: 10px;
}
.methods{
  display: flex;
  align-items: flex-start;
}
.methods > .button {
  width: 25%;
  margin-right: 10px;
}
.side-left .mt-custom{
  margin-top: 30px;
}
form > .cancel {
  border: none;
}
form > .cancel:focus {
  outline: none;
}
form > .button {
  margin-top: 30px;
  cursor: pointer;
}
.button.cancel{
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgb(190, 190, 190);
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
}
@media screen and (max-width: 540px) {
  .content{
    padding: 0 30px;
    flex-wrap: wrap;
  }
  .side-left{
    width: 100%;
    padding: 50px 0;
  }
  .side-right{
  border-top: 0.5px solid #9F9F9F;
    margin-top: 0;
    margin-bottom: 30px;
    width: 100%;
    padding-left: 0;
  }
  .side-right .size {
    width: 80%;
  }
  .side-left{
    padding: 0;
    padding-top: 30px;
  }
  .delivery, .input-stok{
    margin-top: 30px;
  }
  .input{
    font-size: 14px;
  }
}
@media screen and (max-width: 420px) {
  .side-right .size {
    width: 100%;
  }
  .methods{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .methods > .button {
    width: 100%;
  }
  .button.middle{
    margin: 0 10px;
  }
}
</style>
