<script>
import InputComponent from "@/components/InputComponent.vue";
import SelectComponent from "@/components/SelectComponent.vue";
export default {
  name: "Register",

  components: {
    InputComponent,
    SelectComponent
  },

  mounted() {
    $(document).trigger('changed')
    this.getGenders()
  },

  data() {
    return {
      name: null,
      surname: null,
      patronymic: null,
      gender: null,
      phone_number: null,
      email: null,
      password: null,
      password_confirmation: null,
      genders: [],
      errors: [],
    }
  },

  computed: {
    isDisabled() {
      return this.name && this.email && this.password && this.password_confirmation
    }
  },

  methods: {
    register() {
      axios.get('/sanctum/csrf-cookie')
          .then(response => {
            axios.post('/api/users/register', {
              name: this.name,
              surname: this.surname,
              patronymic: this.patronymic,
              gender: this.gender,
              phone_number: this.phone_number,
              email: this.email,
              password: this.password,
              password_confirmation: this.password_confirmation
            })
                .then(res => {
                  localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                  this.$router.push({name: 'main'})
                })
                .catch(err => {
                  this.errors = err.response.data.errors
                })
          })
    },
    getGenders() {
      axios.get('/api/users/get-genders')
          .then(res => {
            this.genders = res.data
            this.gender = this.genders[0].value
          })
    }
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
              <li><a href="/">Главная</a></li>
              <li><span>Регистрация</span></li>
            </ul>
          </nav>
        </div>
      </div>
    </div><!-- ./breadcrumbs -->

    <div class="container mb-3">
      <div class="row">
        <div class="col-12">
          <div class="page-register bg-white p-3">
            <h1 class="section-title h3"><span>Регистрация</span></h1>

            <div class="row">
              <div class="col-md-6 offset-md-3">
                <form action="" class="needs-validation" novalidate>

                  <InputComponent v-model="name"
                                  :errors="errors.name"
                                  id="name"
                                  label="Имя"
                                  placeholder="Введите имя"
                                  required="true"
                                  invalid_feedback="Имя обязательно для заполнения">
                  </InputComponent>

                  <InputComponent v-model="surname"
                                  :errors="errors.surname"
                                  id="surname"
                                  label="Фамилия"
                                  placeholder="Введите фамилию">
                  </InputComponent>

                  <InputComponent v-model="patronymic"
                                  :errors="errors.patronymic"
                                  id="patronymic"
                                  label="Отчество"
                                  placeholder="Введите отчество">
                  </InputComponent >

                  <SelectComponent v-model="gender"
                                   :withName="true"
                                   :errors="errors.gender"
                                   :values="genders"
                                   id="gender"
                                   label="Выберите пол">
                  </SelectComponent>

                  <InputComponent v-model="phone_number"
                                  :errors="errors.phone_number"
                                  type="number"
                                  id="phone_number"
                                  label="Номер телефона"
                                  placeholder="Введите номер телефона">
                  </InputComponent>

                  <InputComponent v-model="email"
                                  :errors="errors.email"
                                  type="email"
                                  id="email"
                                  label="Email"
                                  required="true"
                                  placeholder="Введите email">
                  </InputComponent>

                  <InputComponent v-model="password"
                                  :errors="errors.password"
                                  type="password"
                                  id="password"
                                  label="Пароль"
                                  required="true"
                                  placeholder="Введите пароль">
                  </InputComponent>

                  <InputComponent v-model="password_confirmation"
                                  :errors="errors.password_confirmation"
                                  type="password"
                                  id="password_confirmation"
                                  label="Подтверждение пароля"
                                  required="true"
                                  placeholder="Введите пароль еще раз">
                  </InputComponent>

                  <div class="mb-3">
                    <input @click.prevent="register" :disabled="!isDisabled" type="submit" value="Зарегистрироваться" class="btn btn-warning">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- ./form -->

  </main><!-- ./main -->
</template>

<style scoped>

</style>