<template>
    <div class="card">
        <img src="https://images.solopos.com/2019/11/Es-teh-plastikan.-Twitter-1200x800.jpg" alt="product">
        <router-link to="#">Veggie tomato mix</router-link>
        <p>IDR 25.000</p>
    </div>
</template>

<script>
export default {
  name: 'CardList'
}
</script>

<style scoped>
.card {
      width: 156px;
      height: 212px;
      display: flex;
      flex-direction: column;
      background: #FFFFFF;
      box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
      border-radius: 30px;
      align-items: center;
      box-sizing: border-box;
      margin: 60px 7px 7px 0;
      position: relative;
    }
    .card img {
      width: 128px;
      height: 128px;
      border-radius: 50%;
      margin-top: -50px;
    }
    .card a {
      font-family: Poppins;
      font-style: normal;
      font-weight: 900;
      font-size: 22px;
      color: #000000;
      text-align: center;
      text-decoration: none;
    }
    .card p {
      margin-top: 0px;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 17px;
      line-height: 25px;
      text-align: center;
      color: #6A4029;
      position: absolute;
      bottom: 0;
    }
</style>
