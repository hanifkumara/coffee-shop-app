<template>
    <div class="card-history">
      <img :src="image" alt="prod">
        <span>
          <h1>{{ name }}</h1>
          <p>IDR {{ price }}</p>
          <p>Delivered</p>
        </span>
    </div>
</template>

<script>
export default {
  name: 'CardHistory',
  props: ['name', 'price', 'image']
}
</script>

<style scoped>
.card-history{
      width: 394px;
      height: 126px;
      display: flex;
      background: #FFFFFF;
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
      align-items: center;
      padding: 10px;
      border-radius: 20px;
      margin: 0 8px 10px 0;
    }
    .card-history img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      margin: 10px;
      object-fit: cover;
    }
    .card-history span {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5px 0 5px 8px;
    }
    .card-history span h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      line-height: 37px;
      color: #000000;
      margin: 0;
    }
    .card-history span p {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      color: #895537;
      margin: 0;
    }
</style>
