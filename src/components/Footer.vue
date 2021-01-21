<template>
  <footer>
    <div class="footer-left">
      <div class="title-footer">
        <div class="icon-coffee">
          <img src="../assets/img/coffee 1.png" alt="icon-cofee">
        </div>
        <h4>Coffee Shop</h4>
      </div>
      <p class="footer-desc">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
      <div class="icon-sosmed">
        <div class="icon-fb">
          <img src="../assets/img/Facebook.png" alt="facebook">
        </div>
        <div class="icon-twt">
          <img src="../assets/img/Twitter.png" alt="twitter">
        </div>
        <div class="icon-ig">
          <img src="../assets/img/Instagram.png" alt="instagram">
        </div>
      </div>
      <p class="copyright">©2020CoffeeStore</p>
    </div>
    <div class="footer-right">
      <div class="product">
        <h4>Product</h4>
        <p>Download</p>
        <p>Pricing</p>
        <p>Locations</p>
        <p>Countries</p>
        <p>Blog</p>
      </div>
      <div class="engage">
        <h4>Engage</h4>
        <p>Coffee shop?</p>
        <p>FAQ</p>
        <p>About Us</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 80px 140px;
  background: #F8F8F8;
}

/* Footer Left */
.title-footer{
  display: flex;
  align-items: center;
}
.icon-coffee {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
.icon-coffee>img{
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.footer-desc{
  width: 47%;
  font-weight: 500;
  line-height: 28px;
  margin: 15px 0;
}
.icon-sosmed {
  display: flex;
}
.icon-fb, .icon-twt, .icon-ig{
  margin-left: -12px;
  height: 50px;
  width: 50px
}
.icon-fb>img, .icon-twt>img, .icon-ig>img{
  object-fit: contain;
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.icon-fb>img:hover, .icon-twt>img:hover, .icon-ig>img:hover{
  transform: scale(1.07)
}
.copyright{
  font-size: 15px;
  color: #AFB5C0;
}
/* End footer left */

/* Footer right */
.footer-right{
  display: flex;
}
.product{
  margin-right: 20px;

}
.footer-right p {
  margin-top: 15px;
  width: 150px;
  color: #4F5665;
  font-size: 14px;
}
/* End footer right */

/* Responsive */
@media screen and (max-width: 920px) {
  footer {
    padding: 40px 60px;
  }
  .footer-desc{
    width: 77%;
  }
}
@media screen and (max-width: 760px) {
  footer {
    padding: 30px 40px;
  }
  .footer-desc{
    width: 87%;
  }
  .product{
    margin-right: 8px;
  }
  .footer-right p {
    margin-top: 15px;
    width: 120px;
  }
}
@media screen and (max-width: 520px) {
  footer {
    padding: 15px 25px;
    flex-wrap: wrap;
  }
  .footer-right{
    order: 1;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 100%
  }
  .footer-left{
    order: 2;
  }
  .footer-desc{
    width: 95%;
  }
  .product{
    margin-right: 8px;
  }
  .footer-right p {
    margin-top: 15px;
    width: 120px;
  }
}
/* End responsive */
</style>
