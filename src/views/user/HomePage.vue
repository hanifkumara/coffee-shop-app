<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <img class="images" src='../../assets/img/coffee 1.png'>
  <a class="navbar-brand" href="#">Coffee shop</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Product</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Your Cart</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">History</a>
      </li>
      <div class="nav-brand1">
       <li class="nav-item mt-2">
        <router-link class="nav-link-disabled" href="/auth/login">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/auth/signup" type="button" class="btn btn-warning">Sign Up</router-link>
      </li>
      </div>
    </ul>
  </div>
</nav>

<div class="jumbotron">
<div class="container">
 <form class="form-inline">
      <!-- <img class="images1" src='../../assets/img/Vector (1).png'> -->
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>
<h1>Start Your Day with<br>
Coffee and Good Meals</h1>
<p>We provide high quality beans, good taste, and healthy<br>
meals made by leve just for you. Start your day with us for a bigger smile!</p>
<button type="button" class="btn btn-warning">Get Started</button>
</div>
</div>

<div class="image-card">
  <div class="image-card1">
  <img class="image1" src='../../assets/img/oranje.png'>
  <div class="textcard">
  <h1>90+</h1>
  <p>staff</p>
  </div>
  </div>
  <div class="image-card1">
  <img class="image1" src='../../assets/img/oranje.png'>
   <div class="textcard">
  <h1>30+</h1>
  <p>stores</p>
  </div>
  </div>
  <div class="image-card1">
  <img class="image1" src='../../assets/img/oranje.png'>
   <div class="textcard">
  <h1>800+</h1>
  <p>customers</p>
  </div>
  </div>
</div>

<div class="wripper">
<div class="box">
<img class="image1" src='../../assets/img/img2.png'>
</div>
 <div class="box1">
  <h2>we provide Good Coffee <br>
  and Healthy Meals</h2>
   <h6> you can explore the menu that we provide with fun and
    have their own taste and make your day better</h6>
  <div class="text-card">
    <div class="image-text">
      <img class="image1" src='../../assets/img/Vector (1).png'>
  </div>
  <p>High quality beans</p>
  </div>
  <div class="text-card">
    <div class="image-text">
      <img class="image1" src='../../assets/img/Vector (1).png'>
  </div>
  <p>Healthy meals, you can request the ingredients</p>
  </div>
  <div class="text-card">
    <div class="image-text">
      <img class="image1" src='../../assets/img/Vector (1).png'>
  </div>
  <p>Chat with our staff to get better experience for ordering</p>
  </div>
  <div class="text-card">
    <div class="image-text">
      <img class="image1" src='../../assets/img/Vector (1).png'>
  </div>
  <p>Free member card with a minimum purchase of IDR 200.000</p>
  </div>
  </div>
</div>

<div class="content">
  <div class="text-content">
    <h2>Here is People's Favorite</h2>
    <p>Lets's choose and have a bit taste of people's favorite. It might be yours too!</p>
    </div>
  <div class="card-content">
    <div class="card-content1">
       <img class="image1" src='../../assets/img/image 22.png'>
       <h1>Hazelnut Latte</h1>
       <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>HazelnutSyrup</p>
  </div>
  <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>Vanilla Whipped Cream</p>
  </div>
  <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>Ice/Hot</p>
  </div>
  <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>Sliced Banana on Top</p>
  </div>
      <span>IDR 25.000</span>
      <div class="card-btn1">
        <button type="button" class="btn">select</button>
      </div>
      </div>
      <div class="card-content1">
        <img class="image1" src='../../assets/img/image 27.png'>
        <h1>Pinky Promise</h1>
         <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>1Shot of Coffee</p>
  </div>
  <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>Vanilla Whipped Cream</p>
  </div>
  <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>Chocolate Biscuits</p>
  </div>
  <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>Strawberry Syrup</p>
  </div>
   <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>Sliced Strawberry on Top</p>
  </div>
         <span>IDR 25.000</span>
      <div class="card-btn1">
        <button type="button" class="btn">select</button>
      </div>
      </div>
      <div class="card-content1">
         <img class="image1" src='../../assets/img/image 30.png'>
        <h1>Chicken Wings</h1>
       <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>Wings</p>
  </div>
  <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>Drum Sticks</p>
  </div>
  <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>Mayonaise and Lemon</p>
  </div>
  <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>Hot Fried</p>
  </div>
   <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>Secret Recipe</p>
  </div>
   <div class="text-box">
    <div class="image-text">
      <img class="image1" src='../../assets/img/row.png'>
  </div>
  <p>Buy 1 Get 1 only for Dine in</p>
  </div>
         <span>IDR 25.000</span>
      <div class="card-btn">
        <button type="button" class="btn">select</button>
      </div>
      </div>
</div>
</div>
      <div class="section">
      <h2>Visit Our Store in the <br>
      Spot on the Map Below</h2>
    <p>
      See our store in every city on the spot and spen your good day there. See<br>
      you soon !
    </p>
   <div class="section-img">
    <img class="image1" src='../../assets/img/peta.png'>
   </div>
    <div class="section1">
      <h3>Our Partner</h3>
     <div class="section-image1">
        <img class="image1" src='../../assets/img/mask1.png'>
        <img class="image1" src='../../assets/img/mask2.png'>
        <img class="image1" src='../../assets/img/mask3.png'>
        <img class="image1" src='../../assets/img/mask4.png'>
        <img class="image1" src='../../assets/img/mask5.png'>
    </div>
    </div>
    <div class="content">
  <div class="text-content">
    <h2>Here is People's Favorite</h2>
    <p>Lets's choose and have a bit taste of people's favorite. It might be yours too!</p>
    </div>
  <div class="section-content">
    <div class="section-content1">
      <div class="section-profile">
       <img class="image1" src='../../assets/img/image 22.png'>
       <div class="section-text">
       <h1>Vienzh Robert</h1>
       <h6>Warsaw, Poland</h6>
       </div>
       </div>
       <p>"Wow .. I am very happy to spend my whole<br>
         day here. the wi-fi is good, and the coffee and
         meals tho. I like it herell Very recommended!"</p>
       </div>
        <div class="section-content1">
        <div class="section-profile">
       <img class="image1" src='../../assets/img/image 22.png'>
        <div class="section-text">
       <h1>Yessica Christy</h1>
       <h6>Shanxi, China</h6>
       </div>
       </div>
       <p>"I like it because I like to travel far and still can
          make my day better just by drinking their
          Hazelnut Latte</p>
       </div>
        <div class="section-content1">
        <div class="section-profile">
       <img class="image1" src='../../assets/img/image 22.png'>
       <div class="section-text">
       <h1>Kim Young Jou</h1>
       <h6>Seoul, South Korea</h6>
       </div>
       </div>
       <p>"This very unusual for my taste, I haven't
        liked coffee is the
        besti and yup, you
        </p>
       </div>
</div>
</div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style  scoped>
/* {
  border: 1px solid white;
} */
.navbar {
  padding: 15px;
  margin: 1px;
}
.navbar .navbar-brand {
  font-weight:bold;
  font-size: 17px;
  color: black;
  margin-top: 15px;
}
.collapse .nav-item .nav-link {
  margin-left: 100px;
  color: grey;
}
.collapse .nav-item .nav-link-disabled {
  margin-right: 70px;
  color: black;
}
.nav-brand1{
  display:flex;
  flex-direction: row;
  margin-left: 150px;
}
.nav-item .btn{
  width:100px;
  border-radius: 12px;
}
.jumbotron {
  height: max-content;
  background-image: url('../../assets/img/img1.png');
}
.container {
  height: 500px;
  margin-bottom: 500px;
}
.container .form-inline {
  margin-left: 900px;
}
.image-card {
  background-color:white;
  width: 700px;
  height: 60px;
  text-align: center;
  justify-content: center;
  margin-top: -550px;
  margin-left: 400px;
  box-shadow: 12px;
  flex-direction: row;
  display: flex;
}
.image-card1 {
  width: 900px;
  height: 80px;
  margin-top: 30px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
}
.image-card1 img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 20px;
}
.textcard h1 {
  display:flex;
  flex-direction: row;
  margin-top: 15px;
  color:black;
  font-weight: bold;
  font-size: 30px;
}
.wripper {
  display: flex;
  flex-direction: row;
}
.box {
  display: flex;
  flex-direction: row;
}
.box .image1 {
  width: 500px;
  margin-top: 100px;
}
.box1 {
  margin-top: 22px;
}
.box1 h2{
  margin-top: 100px;
  margin-left: 350px;
}
.box1 h6{
  margin-left: 350px;
  width: 400px;
}
.text-card {
  display: flex;
  flex-direction: row;
  background-color: white;
  margin-left: 350px;
}
 .container .box .text .h2 {
  float: right;
  background-color: blueviolet;
 }
.content {
  background-color: #BCBABA;
  width: 1500px;
  height: 800px;
}
.text-content h2 {
  color:black;
  margin-left: 500px;
}
.text-content p {
  color: grey;
  margin-left: 430px;
  margin-top: 10px;
}
.card-content{
  display:flex;
  flex-direction: row;
}
.card-content1{
  background-color: white;
  margin: 20px;
  border-radius: 12px;
  margin-left: 100px;
  text-align: center;
  justify-content: center;
  width: 300px;
  height: 500px;
  padding: 15px;
}
.card-content1 img{
  width: 80px;
  height: 80px;
  border-radius: 40px;
}
.text-box {
  display: flex;
  flex-direction: row;
}
.text-box .image-text .image1{
  width: 10px;
  height: 20px;
  margin-left: 50px;
  margin-right: 30px;
}
.card-btn1 button{
  background-color: white;
  border-color: yellow;
  width: 150px;
  border-radius: 20px;
  margin-top: 70px;
}
.card-btn button {
  background-color: yellow;
  border-radius: 20px;
  width: 150px;
  margin-top: 70px;
}
.section {
  background-color: #BCBABA;
  width: 1400px;
  height: 800px;
}
.section-content {
  display:flex;
  flex-direction: row;
}
.section-content1{
  background-color: white;
  margin: 20px;
  border-radius: 12px;
  margin-left: 100px;
  text-align: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  padding: 15px;
}
.section-content1 img{
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.section-profile {
  display: flex;
  flex-direction: row;
  margin-bottom: 7px;
}
.section-text {
  display: flex;
  flex-direction: column;
}
.section-text h1 {
  font-size: 20px;
  font-weight: bold;
  margin-left: 5px;
}
.section-text p {
  font-size: 20px;
  margin-left: 5px;
  margin-top: 10px;
}
</style>
