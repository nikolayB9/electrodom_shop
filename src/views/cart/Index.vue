<script>
import useCart from "@/composables/cart.js";

export default {
  name: "Index",

  setup() {
    const {cartProducts, changeQty, removeProduct, cartTotal, updateStorage, getDecimalPrice} = useCart()
    return {cartProducts, changeQty, removeProduct, cartTotal, updateStorage, getDecimalPrice}
  },

  mounted() {
    $(document).trigger('vueChange');
  },
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
              <li><span>Корзина</span></li>
            </ul>
          </nav>
        </div>
      </div>
    </div><!-- ./breadcrumbs-->

    <div class="container">
      <div class="row">
        <div class="col-lg-8 mb-3">
          <div class="cart-content p-3 h-100 bg-white">
            <div class="table-responsive">
              <table class="table align-middle table-hover">
                <thead class="table-dark">
                <tr>
                  <th>Изображение</th>
                  <th>Товар</th>
                  <th>Цена</th>
                  <th>Количество</th>
                  <th>Стоимость</th>
                  <th><i class="fa-regular fa-trash-can"></i></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in cartProducts">
                  <td class="product-img-td">
                    <img :src="product.image" alt="product image">
                  </td>
                  <td class="product-title-td">
                    <router-link :to="{name: 'product.show', params: {id: product.id} }"
                                 class="cart-content-title">
                      {{ product.title }}
                    </router-link>
                  </td>
                  <td class="text-nowrap">{{ product.price }}</td>
                  <td>
                    <input type="number"
                           @change="changeQty(product)"
                           :id="product.title"
                           :value="product.qty"
                           class="form-control cart-count"
                           step="1"
                           min="1">
                  </td>
                  <td class="text-nowrap">{{ getDecimalPrice(product.price * product.qty) }}</td>
                  <td>
                    <button @click.prevent="removeProduct(product.id)" class="btn btn-danger"><i
                        class="fa-regular fa-circle-xmark"></i>
                    </button>
                  </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                  <td colspan="6" class="text-end">
                    <button @click="updateStorage" class="btn btn-outline-warning">Обновить</button>
                  </td>
                </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div><!-- ./cart-content -->

        <div class="col-lg-4 mb-3">
          <div class="cart-summary p-3 sidebar">
            <h5 class="section-title"><span>Итого</span></h5>

            <div class="d-flex justify-content-between my-3">
              <h4 class="me-2">Стоимость товаров</h4>
              <h4 class="text-nowrap">{{ cartTotal }} &#8381;</h4>
            </div>

            <div v-if="cartProducts.length" class="d-grid">
              <router-link :to="{ name: 'checkout.index' }" class="btn btn-warning">
                Оформить заказ
              </router-link>
            </div>
          </div>
        </div><!-- ./cart-summary -->
      </div>
    </div><!-- ./cart -->

  </main><!-- ./main -->
</template>

<style scoped>

</style>
