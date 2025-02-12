<script>
import useCart from "@/composables/cart.js";
import InputComponent from "@/components/InputComponent.vue";

export default {
  name: "Show",
  components: {InputComponent},

  setup() {
    const {productsMinData} = useCart()
    return {productsMinData}
  },

  mounted() {
    $(document).trigger('changed')
    this.getToken()
    this.getUserData()
    this.getSumPrice()
  },

  data() {
    return {
      cartPrice: null,
      totalPrice: null,
      coupon: 100,
      shipping: 150,
      token: null,
      auth: false,
      name: null,
      surname: null,
      patronymic: null,
      email: null,
      phone_number: null,
      city: null,
      street: null,
      house: null,
      flat_number: null,
      comment: null,
      errors: [],
    }
  },

  methods: {
    getToken() {
      this.token = localStorage.getItem('x_xsrf_token')
    },
    getSumPrice() {
      axios.post('api/orders/get-sum-price', {
        'products': this.productsMinData,
        'coupon': this.coupon,
        'shipping': this.shipping,
      })
          .then(res => {
            this.cartPrice = res.data.cartPrice
            this.totalPrice = res.data.totalPrice
          })
    },
    getUserData() {
      if (this.token) {
        axios.get('/api/users/show')
            .then(res => {
              this.auth = true
              const user = res.data.data
              this.name = user.name
              this.surname = user.surname
              this.patronymic = user.patronymic
              this.email = user.email
              this.phone_number = user.phone_number
              if (user.address) {
                this.city = user.address.city
                this.street = user.address.street
                this.house = user.address.house
                this.flat_number = user.address.flat_number
              }
            })
      }
    },
    storeOrder() {
      axios.post('/api/orders/store', {
        'products': this.productsMinData,
        'coupon': this.coupon,
        'shipping': this.shipping,
        'cartPrice': this.cartPrice,
        'totalPrice': this.totalPrice,
        'name': this.name,
        'surname': this.surname,
        'patronymic': this.patronymic,
        'email': this.email,
        'phone_number': this.phone_number,
        'city': this.city,
        'street': this.street,
        'house': this.house,
        'flat': this.flat_number,
        'comment': this.comment,
      })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            this.errors = err.response.data.errors
          })
    },
  }
}
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="breadcrumbs">
            <ul>
              <li>
                <router-link :to="{ name: 'main' }">Главная</router-link>
              </li>
              <li><span>Оформление заказа</span></li>
            </ul>
          </nav>
        </div>
      </div>
    </div><!-- ./breadcrumbs -->

    <div v-if="productsMinData.length" class="container">
      <div class="row">
        <div class="col-lg-8 mb-3">
          <div class="checkout-content p-3 h-100 bg-white">
            <h1 class="section-title h4 mb-3"><span>Контактная информация</span></h1>

            <div v-if="!token" class="my-3">
              Уже есть аккаунт?
              <router-link :to="{ name: 'user.login' }">Авторизация</router-link>
            </div>

            <div class="row g-3">

              <div class="col-md-6">
                <InputComponent :disabled="auth"
                                v-model="name"
                                :errors="errors.name"
                                id="name"
                                label="Имя"
                                required="true">
                </InputComponent>
              </div>

              <div class="col-md-6">
                <InputComponent :disabled="auth"
                                v-model="surname"
                                :errors="errors.surname"
                                id="surname"
                                label="Фамилия">
                </InputComponent>
              </div>

              <div class="col-md-6">
                <InputComponent :disabled="auth"
                                v-model="patronymic"
                                :errors="errors.patronymic"
                                id="patronymic"
                                label="Отчество">
                </InputComponent>
              </div>

              <div class="col-md-6">
                <InputComponent :disabled="auth"
                                v-model="email"
                                :errors="errors.email"
                                type="email"
                                id="email"
                                label="Email"
                                required="true">
                </InputComponent>
              </div>

              <div class="col-md-6">
                <InputComponent :disabled="auth"
                                v-model="phone_number"
                                :errors="errors.phone_number"
                                type="number"
                                id="phone_number"
                                label="Номер телефона"
                                required="true">
                </InputComponent>
              </div>

              <div class="col-md-6">
                <InputComponent v-model="city"
                                :errors="errors.city"
                                id="city"
                                label="Город"
                                required="true">
                </InputComponent>
              </div>

              <div class="col-md-6">
                <InputComponent v-model="street"
                                :errors="errors.street"
                                id="street"
                                label="Улица">
                </InputComponent>
              </div>

              <div class="col-md-6">
                <InputComponent v-model="house"
                                :errors="errors.house"
                                id="house"
                                label="Дом">
                </InputComponent>
              </div>

              <div class="col-md-6">
                <InputComponent v-model="flat_number"
                                :errors="errors.flat_number"
                                id="flat"
                                label="Квартира">
                </InputComponent>
              </div>

              <div class="col-12">
                <label for="comment" class="form-label">Комментарий</label>
                <textarea v-model="comment" class="form-control" :class="{ 'is-invalid': errors.comment }" id="comment"
                          rows="3"
                          maxlength="250"></textarea>
                <div v-for="error in errors.comment" class="invalid-feedback">{{ error }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-3">
          <div class="cart-summary p-3 sidebar">
            <h5 class="section-title"><span>Заказ</span></h5>

            <div class="d-flex justify-content-between my-3">
              <h6>Товаров на сумму</h6>
              <h6>{{ cartPrice }} &#8381;</h6>
            </div>

            <div class="d-flex justify-content-between my-3">
              <h6>Купон</h6>
              <h6>-{{ coupon.toFixed(2) }} &#8381;</h6>
            </div>

            <div class="d-flex justify-content-between my-3">
              <h6>Доставка</h6>
              <h6>{{ shipping.toFixed(2) }} &#8381;</h6>
            </div>

            <button class="btn btn-link px-0 btn-coupon" data-bs-toggle="collapse"
                    data-bs-target="#collapseCoupon">
              Имеется купон?
            </button>

            <div class="input-group collapse mb-3" id="collapseCoupon">
              <input type="text" class="form-control" placeholder="Введите код купона">
              <button class="btn btn-warning" type="submit"><i
                  class="fa-regular fa-circle-check"></i></button>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="radio" name="payment-method"
                     id="payment-method1" value="payment-method1" required>
              <label class="form-check-label" for="payment-method1">
                Оплата картой
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="payment-method"
                     id="payment-method2" value="payment-method2" required>
              <label class="form-check-label" for="payment-method2">
                Оплата при доставке
              </label>
            </div>

            <div class="d-flex justify-content-between my-3">
              <h4 class="me-2">Сумма <span class="text-nowrap">к оплате</span></h4>
              <h4 class="text-nowrap">{{ totalPrice }} &#8381;</h4>
            </div>

            <div class="d-grid mt-3">
              <button @click.prevent="storeOrder" class="btn btn-warning">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main><!-- ./main -->
</template>

<style scoped>

</style>
