<script>
import useCart from "@/composables/cart.js";

export default {
  name: "Show",

  setup() {
    const {addProduct} = useCart()
    return {addProduct}
  },

  mounted() {
    $(document).trigger('changed')
    this.getCategory()
    this.getFilters()
    this.getProducts()
  },

  data() {
    return {
      category: null,
      products: [],
      filters: [],
      attributes: {},
      priceMin: null,
      priceMax: null,
      orderBy: null,
      showBy: 9,
      pagination: [],
    }
  },

  methods: {
    getCategory() {
      axios.get(`/api/categories/${this.$route.params.id}`)
          .then(res => {
            this.category = res.data.data
          })
    },

    getFilters() {
      axios.get(`/api/categories/${this.$route.params.id}/get-filters`)
          .then(res => {
            this.filters = res.data
            this.priceMin = res.data.prices.min
            this.priceMax = res.data.prices.max
            this.orderBy = res.data.orderBy[0]['value']
          })
    },

    getProducts(page = 1) {
      axios.post('/api/products', {
        'categoryId': this.$route.params.id,
        'attributes': this.attributes,
        'priceMin': this.priceMin,
        'priceMax': this.priceMax,
        'orderBy': this.orderBy,
        'showBy': this.showBy,
        'page': page
      })
          .then(res => {
            console.log(res)
            this.products = res.data.data
            this.pagination = res.data.meta
          })
    },

    toggleAttributeValue(attributeId, value) {
      if (this.attributes[attributeId] && this.attributes[attributeId].includes(value)) {
        let index = this.attributes[attributeId].indexOf(value)
        this.attributes[attributeId].splice(index, 1)
        if (this.attributes[attributeId].length === 0) {
          delete this.attributes[attributeId]
        }
      } else if (this.attributes[attributeId]) {
        this.attributes[attributeId].push(value);
      } else {
        this.attributes[attributeId] = [value]
      }
    },
  }
}
</script>

<template>
  <main v-if="category" class="main">

    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="breadcrumbs">
            <ul>
              <li>
                <router-link :to="{ name: 'main' }">Главная</router-link>
              </li>
              <li v-for="cat in category.parentCategories">
                <router-link :to="{ name: 'category.show', params: {id: cat.id}}">
                  {{ cat.title }}
                </router-link>
              </li>
              <li><span>{{ category.title }}</span></li>
            </ul>
          </nav>
        </div>
      </div>
    </div><!-- ./breadcrumbs -->

    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="sidebar">

            <button class="btn btn-warning w-100 mb-3 text-start collapse-filters-btn" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters">
              <i class="fa-solid fa-filter"></i> Фильтры
            </button>

            <div v-if="filters.attributes" class="collapse collapse-filters" id="collapseFilters">
              <div v-for="attribute in filters.attributes" class="filter-block">
                <h5 class="section-title"><span>{{ attribute.title }}</span></h5>
                <template v-for="value in attribute.values">
                  <div class="form-check d-flex justify-content-between">
                    <div>
                      <input class="form-check-input"
                             @click="toggleAttributeValue(attribute.id, value)"
                             type="checkbox">
                      <label class="form-check-label">
                        {{ value }}
                      </label>
                    </div>
                  </div>
                </template>
              </div>

              <div v-if="filters.prices" class="filter-block">
                <h5 class="section-title"><span>Цена, руб</span></h5>
                <div class="d-flex align-items-center">
                  <input type="number"
                         v-model="priceMin"
                         class="form-control cart-count w-100"
                         style="font-size:0.9rem;"
                         step="1"
                         :min="filters.prices.min"
                         :max="filters.prices.max">
                  <span class="mx-2">&mdash;</span>
                  <input type="number"
                         v-model="priceMax"
                         class="form-control cart-count w-100"
                         style="font-size:0.9rem;"
                         step="1"
                         :min="filters.prices.min"
                         :max="filters.prices.max">
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-warning my-3" @click.prevent="getProducts()">Применить</button>
          </div>
        </div><!-- ./sidebar -->

        <div class="col-lg-9 col-md-8">
          <div class="row mb-3">
            <div class="col-12">
              <h3 class="section-title"><span>{{ category.title }}</span></h3>
            </div>
            <div class="col-4 col-sm-2">
              <img :src="category.image" alt="" class="img-thumbnail">
            </div>
            <div class="col-8 col-sm-10">
              <ul class="list-unstyled">
                <li v-for="cat in category.subcategories">
                  <router-link :to="{ name: category.show, params: {id:cat.id}}"
                               class="btn btn-secondary btn-sm me-2 mb-1">
                    {{ cat.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div><!-- ./category description -->

          <hr>

          <div class="row">
            <div class="col-sm-6">
              <div class="input-group mb-3">
                <span class="input-group-text">Сортировка:</span>
                <select v-model="orderBy" @change="getProducts()" class="form-select" aria-label="Sort by:">
                  <template v-for="item in filters.orderBy">
                    <option :value="item.value">{{ item.name }}</option>
                  </template>
                </select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-group mb-3">
                <span class="input-group-text">Показать:</span>
                <select v-model="showBy" @change="getProducts()" class="form-select" aria-label="Show by:">
                  <option value="9">9</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                </select>
              </div>
            </div>
          </div><!-- ./catalog settings -->

          <div class="row">
            <div v-for="product in products" class="col-lg-4 col-sm-6 mb-3">
              <div class="product-card">
                <div class="product-card-offer">
                  <div class="offer-hit">Hit</div>
                  <div class="offer-new">New</div>
                </div>
                <div class="product-thumb">
                  <router-link :to="{ name: 'product.show', params: {id: product.id}}">
                    <img :src="product.image" alt="">
                  </router-link>
                </div>
                <div class="product-details">
                  <h4>
                    <router-link :to="{ name: 'product.show', params: {id: product.id}}">
                      {{ product.title }}
                    </router-link>
                  </h4>
                  <div class="product-bottom-details d-flex justify-content-between">
                    <div class="product-price">
                      <small v-if="product.old_price">{{ product.old_price }} &#8381;</small>
                      {{ product.price }} &#8381;
                    </div>

                    <div class="product-links">
                      <a @click.prevent="addProduct(product)" href="#" class="btn btn-outline-secondary add-to-cart"><i
                          class="fas fa-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- ./products -->

          <div v-if="pagination.last_page > 1" class="row">
            <div class="col-12 ">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li v-if="pagination.current_page !== 1" class="page-item">
                    <a @click.prevent="getProducts(pagination.current_page - 1)" class="page-link" href="#">Previous</a>
                  </li>

                  <li v-for="link in pagination.links"
                      :class="link.active ? 'page-item active' : 'page-item'">
                    <template v-if="Number(link.label) &&
                      (pagination.current_page - link.label < 2 &&
                      pagination.current_page - link.label > -2) ||
                      Number(link.label) === 1 || Number(link.label) === pagination.last_page">
                      <a @click.prevent="getProducts(link.label)" class="page-link" href="#">{{ link.label }}</a>
                    </template>
                    <template v-if="Number(link.label) &&
                      (pagination.current_page !== 3) &&
                      (pagination.current_page - link.label === 2) ||
                      Number(link.label) &&
                      (pagination.current_page !== pagination.last_page - 2) &&
                      (pagination.current_page - link.label === -2)">
                      <a class="page-link">...</a>
                    </template>
                  </li>

                  <li v-if="pagination.current_page !== pagination.last_page" class="page-item">
                    <a @click.prevent="getProducts(pagination.current_page + 1)" class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div><!-- ./pagination -->

        </div><!-- ./category catalog -->
      </div>
    </div><!-- ./category -->

  </main><!-- ./main -->
</template>

<style scoped>

</style>
