<template>
  <div>
    <div class="content">
      <div class="image-aside">
        <img src="@/assets/img/robert-bye-95vx5QVl9x4-unsplash 2.png" alt="image-aside">
      </div>
      <router-view></router-view>
    </div>
    <div class="container-card">
      <div class="card-member">
        <div class="card-left">
          <h1>Get your member card now!!</h1>
          <p>Let's join with our member and enjoy the deals.</p>
        </div>
        <div class="button-card">
          <Button class="button" type="rounded" title="Create new"/>
        </div>
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../../components/Footer'
import Button from '../../components/_parts/Button'

export default {
  name: 'Auth',
  components: {
    Footer,
    Button
  }
}
</script>

<style scoped>
.content {
  display: flex;
}
/* Aside */
.image-aside{
  width: 45%;
  height: 780px;
}
.image-aside > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.container-card{
  width: 100%;
  display:flex;
  justify-content: center;
}
.card-member {
  margin-top: -120px;
  width: 80%;
  padding: 30px 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 1px rgb(201, 198, 198) ;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-left{
  flex: 1;
}
.button-card{
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.button-card .button {
  width: 40%;
}
.card-member h1 {
  margin-bottom: 10px;
  width: 90%;
}
.footer {
  margin-top: -75px;
  z-index: -2;
}
@media screen and (max-width: 540px) {
  .card-left{
    flex: 2;
  }
  .button-card{
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  .button-card .button {
    width: 90%;
  }
  .card-member {
    margin-top: 50px;
    width: 88%;
    padding: 10px 15px;
  }
  .card-member h1 {
    margin-bottom: 10px;
    font-size: 18px;
    width: 100%;
  }
  .image-aside{
    display: none;
  }
  .footer {
    margin-top: 20px;
  }
}
</style>
