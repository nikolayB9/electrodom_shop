<script>
import InputComponent from "@/components/InputComponent.vue";
export default {
  name: "Login",

  components: {
    InputComponent,
  },

  mounted() {
    $(document).trigger('changed')
  },

  data() {
    return {
      email: null,
      password: null,
      errors: [],
    }
  },

  computed: {
    isDisabled() {
      return this.email && this.password
    }
  },

  methods: {
    login() {
      axios.get('/sanctum/csrf-cookie')
          .then(response => {
            axios.post('api/users/login', {
              email: this.email,
              password: this.password,
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
              <li><span>Войти</span></li>
            </ul>
          </nav>
        </div>
      </div>
    </div><!-- ./breadcrumbs -->

    <div class="container mb-3">
      <div class="row">
        <div class="col-12">
          <div class="page-register bg-white p-3">
            <h1 class="section-title h3"><span>Войти</span></h1>

            <div class="row">
              <div class="col-md-6 offset-md-3">
                <form action="" class="needs-validation" novalidate>

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

                  <div class="mb-3">
                    <input @click.prevent="login" :disabled="!isDisabled" type="submit" value="Войти" class="btn btn-warning">
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