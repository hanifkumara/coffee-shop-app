import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/auth/Auth.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
import CreatePassword from '../views/auth/CreatePassword.vue'
import User from '../views/user/User.vue'
import Profile from '../views/user/Profile.vue'
import editProduct from '../views/admin/editProduct.vue'
import Admin from '../views/admin/Admin.vue'
import NewProduct from '../views/admin/NewProduct.vue'
import PaymentDelivery from '../views/user/PaymentDelivery.vue'
import ManageOrder from '../views/admin/ManageOrder.vue'
import HistoryCustomer from '../views/user/HistoryCustomer.vue'
import HomeUser from '../views/user/Home.vue'
import UserProductDetail from '../views/user/ProductDetail.vue'
import HomePage from '../views/user/HomePage.vue'
import AdminProductDetail from '../views/admin/ProductDetail.vue'
import HomeAdmin from '../views/admin/Home.vue'
import ConfirmationEmail from '../views/auth/ConfirmationEmail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    redirect: '/auth/login',
    meta: { requiresVisitor: true }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: { requiresVisitor: true },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: { requiresVisitor: true }
      },
      {
        path: 'signup',
        name: 'Signup',
        component: Signup,
        meta: { requiresVisitor: true }
      },
      {
        path: 'forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword,
        meta: { requiresVisitor: true }
      },
      {
        path: 'create-password/:token',
        name: 'CreatePassword',
        component: CreatePassword,
        meta: { requiresVisitor: true }
      }
    ]
  },
  {
    path: '/confirmation-email/:token',
    name: 'ConfirmationEmail',
    component: ConfirmationEmail
  },
  {
    path: '/customer',
    name: 'Customer',
    component: User,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: { requiresAuth: true }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: PaymentDelivery,
        meta: { requiresAuth: true }
      },
      {
        path: 'history',
        name: 'History',
        component: HistoryCustomer,
        meta: { requiresAuth: true }
      },
      {
        path: 'home',
        name: 'HomeUser',
        component: HomeUser,
        meta: { requiresAuth: true }
      },
      {
        path: 'product/:productId',
        name: 'UserProductDetail',
        component: UserProductDetail,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true, requiresPriv: true },
    children: [
      {
        path: 'home',
        name: 'HomeAdmin',
        component: HomeAdmin,
        meta: { requiresAuth: true, requiresPriv: true }
      },
      {
        path: 'product/:productId',
        name: 'AdminProductDetail',
        component: AdminProductDetail,
        meta: { requiresAuth: true }
      },
      {
        path: 'edit-product/:productId',
        name: 'editProduct',
        component: editProduct,
        meta: { requiresAuth: true, requiresPriv: true }
      },
      {
        path: 'new-product',
        name: 'newProduct',
        component: NewProduct,
        meta: { requiresAuth: true, requiresPriv: true }
      },
      {
        path: 'manage-order',
        name: 'ManageOrder',
        component: ManageOrder,
        meta: { requiresAuth: true, requiresPriv: true }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/auth/login'
      })
    }

    next()
  }

  if (to.matched.some(record => record.meta.requiresPriv)) {
    if (localStorage.getItem('userRole') !== 'admin') {
      next({
        path: '/customer/home'
      })
    }

    next()
  }

  if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (localStorage.getItem('token')) {
      next({
        path: '/customer/home'
      })
    }

    next()
  }

  next()
})

export default router
