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
    this.getProduct()
  },

  data() {
    return {
      product: null,
      qty: 1,
    }

  },

  methods: {
    getProduct() {
      axios.get(`/api/products/${this.$route.params.id}`)
          .then(res => {
            this.product = res.data.data
            console.log(this.product)
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    },
  }
}
</script>

<template>
  <main class="main" v-if="product">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="breadcrumbs">
            <ul>
              <li>
                <router-link :to="{ name: 'main' }">Главная</router-link>
              </li>
              <li v-for="cat in product.category.parentCategories">
                <router-link :to="{ name: 'category.show', params: {id: cat.id}}">
                  {{ cat.title }}
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'category.show', params: {id: product.category.id} }">
                  {{ product.category.title }}
                </router-link>
              </li>
              <li><span>{{ product.title }}</span></li>
            </ul>
          </nav>
        </div>
      </div>
    </div><!-- ./breadcrumbs -->

    <div class="container">
      <div class="row">
        <div class="col-md-5 col-lg-4 mb-3">
          <div class="bg-white h-100">
            <div id="carouselProduct" class="carousel carousel-dark slide carousel-fade">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img :src="product.image" class="d-block w-100" alt="...">
                </div>
                <!--                <div class="carousel-item">
                                  <img src="" class="d-block w-100" alt="...">
                                </div>-->
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselProduct"
                      data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselProduct"
                      data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div><!-- ./product carousel -->

        <div class="col-md-7 col-lg-8 mb-3">
          <div class="bg-white product-content p-3 h-100">
            <h1 class="section-title h3"><span>{{ product.title }}</span></h1>

            <div class="product-price mt-2">
              <small v-if="product.old_price">{{ product.old_price }} &#8381;</small>
              {{ product.price }} &#8381;
            </div>
            <p class="mt-2">Количество на складе: <span class="text-decoration-underline">{{ product.count }}</span></p>
            <div class="product-add2cart">
              <div class="input-group">
                <input v-model="qty" type=number class="form-control" value="1" min="1">
                <button @click.prevent="addProduct(product, qty)" class="btn btn-warning">
                  <i class="fas fa-shopping-cart"></i>Add to cart
                </button>
              </div>
            </div>

            <div class="row mt-3 product-cards-row">
              <div class="col-xl-4 col-lg-6 mb-2">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title"><i class="fa-solid fa-shield-halved"></i> Гарантия
                    </h5>
                    <ul class="list-unstyled">
                      <li>Гарантия 1 год</li>
                      <li>Возвращение товара в течение 14 дней</li>
                      <li>Гарантия качества</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-6 mb-2">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title"><i class="fa-solid fa-truck-fast"></i> Доставка</h5>
                    <ul class="list-unstyled">
                      <li>Доставка по всей стране</li>
                      <li>Доставка почтой</li>
                      <li>Самовывоз</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-6 mb-2">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title"><i class="fa-regular fa-credit-card"></i> Оплата</h5>
                    <ul class="list-unstyled">
                      <li>Наличный рассчет</li>
                      <li>Безналичный рассчет</li>
                      <li>VISA/MasterCard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!-- ./product-content -->
      </div>

      <div class="row mt-3">
        <div class="col-12">
          <div class="product-content-details bg-white p-4">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="features-tab" data-bs-toggle="tab"
                        data-bs-target="#features-tab-pane" type="button" role="tab"
                        aria-controls="features-tab-pane" aria-selected="true">Характеристики
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="description-tab" data-bs-toggle="tab"
                        data-bs-target="#description-tab-pane" type="button" role="tab"
                        aria-controls="description-tab-pane" aria-selected="false">Описание
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">

              <div class="tab-pane fade show active" id="features-tab-pane" role="tabpanel"
                   aria-labelledby="features-tab" tabindex="0">
                <table class="table">
                  <tbody>
                  <tr v-for="attribute in product.attributes">
                    <th scope="row">{{ attribute.title }}</th>
                    <td>{{ attribute.value }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <div class="tab-pane fade" id="description-tab-pane" role="tabpanel"
                   aria-labelledby="description-tab" tabindex="0">
                {{ product.description }}
              </div>

            </div>
          </div>
        </div>
      </div><!-- ./product-content-details -->
    </div><!-- ./product -->

    <section class="new-products">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <h2 class="section-title">
              <span>Новинки</span>
            </h2>
          </div>
        </div>

        <div class="owl-carousel owl-theme owl-carousel-full">
          <div class="product-card">
            <div class="product-card-offer">
              <div class="offer-hit">Hit</div>
              <div class="offer-new">New</div>
            </div>
            <div class="product-thumb">
              <a href="product.html"><img src="@/assets/img/products/1.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="product.html">Product 1 Lorem ipsum dolor sit amet, consectetur
                  adipisicing.</a>
              </h4>
              <p class="product-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Iste, sint!</p>
              <div class="product-bottom-details d-flex justify-content-between">
                <div class="product-price">
                  <small>$70</small>
                  $65
                </div>
                <div class="product-links">
                  <a href="#" class="btn btn-outline-secondary add-to-cart"><i
                      class="fas fa-shopping-cart"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="product-card-offer">
              <div class="offer-hit">Hit</div>
            </div>
            <div class="product-thumb">
              <a href="product.html"><img src="@/assets/img/products/2.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="product.html">Product 2</a>
              </h4>
              <p class="product-excerpt">Lorem ipsum dolor </p>
              <div class="product-bottom-details d-flex justify-content-between">
                <div class="product-price">
                  $65
                </div>
                <div class="product-links">
                  <a href="#" class="btn btn-outline-secondary add-to-cart"><i
                      class="fas fa-shopping-cart"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="product-card-offer">
              <!--<div class="offer-hit">Hit</div>
              <div class="offer-new">New</div>-->
            </div>
            <div class="product-thumb">
              <a href="product.html"><img src="@/assets/img/products/3.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="product.html">Product 3 Lorem ipsum </a>
              </h4>
              <p class="product-excerpt">Lorem ipsum </p>
              <div class="product-bottom-details d-flex justify-content-between">
                <div class="product-price">
                  $100
                </div>
                <div class="product-links">
                  <a href="#" class="btn btn-outline-secondary add-to-cart"><i
                      class="fas fa-shopping-cart"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="product-card-offer">
              <div class="offer-hit">Hit</div>
            </div>
            <div class="product-thumb">
              <a href="product.html"><img src="@/assets/img/products/4.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="product.html">Product 4</a>
              </h4>
              <p class="product-excerpt">Lorem ipsum dolor sit amet</p>
              <div class="product-bottom-details d-flex justify-content-between">
                <div class="product-price">
                  <small>$70</small>
                  $65
                </div>
                <div class="product-links">
                  <a href="#" class="btn btn-outline-secondary add-to-cart"><i
                      class="fas fa-shopping-cart"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="product-card-offer">
              <div class="offer-hit">Hit</div>
              <div class="offer-new">New</div>
            </div>
            <div class="product-thumb">
              <a href="product.html"><img src="@/assets/img/products/5.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="product.html">Product 5 Lorem ipsum dolor sit amet, consectetur
                  adipisicing.</a>
              </h4>
              <p class="product-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Iste, sint!</p>
              <div class="product-bottom-details d-flex justify-content-between">
                <div class="product-price">
                  <small>$70</small>
                  $65
                </div>
                <div class="product-links">
                  <a href="#" class="btn btn-outline-secondary add-to-cart"><i
                      class="fas fa-shopping-cart"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="product-card-offer">
              <div class="offer-hit">Hit</div>
              <div class="offer-new">New</div>
            </div>
            <div class="product-thumb">
              <a href="product.html"><img src="@/assets/img/products/6.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="product.html">Product 6 Lorem ipsum dolor sit amet, consectetur
                  adipisicing.</a>
              </h4>
              <p class="product-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Iste, sint!</p>
              <div class="product-bottom-details d-flex justify-content-between">
                <div class="product-price">
                  <small>$70</small>
                  $65
                </div>
                <div class="product-links">
                  <a href="#" class="btn btn-outline-secondary add-to-cart"><i
                      class="fas fa-shopping-cart"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="product-card-offer">
              <div class="offer-hit">Hit</div>
              <div class="offer-new">New</div>
            </div>
            <div class="product-thumb">
              <a href="product.html"><img src="@/assets/img/products/7.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="product.html">Product 7 Lorem ipsum dolor sit amet, consectetur
                  adipisicing.</a>
              </h4>
              <p class="product-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Iste, sint!</p>
              <div class="product-bottom-details d-flex justify-content-between">
                <div class="product-price">
                  <small>$70</small>
                  $65
                </div>
                <div class="product-links">
                  <a href="#" class="btn btn-outline-secondary add-to-cart"><i
                      class="fas fa-shopping-cart"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="product-card-offer">
              <div class="offer-hit">Hit</div>
              <div class="offer-new">New</div>
            </div>
            <div class="product-thumb">
              <a href="product.html"><img src="@/assets/img/products/8.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="product.html">Product 8 Lorem ipsum dolor sit amet, consectetur
                  adipisicing.</a>
              </h4>
              <p class="product-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Iste, sint!</p>
              <div class="product-bottom-details d-flex justify-content-between">
                <div class="product-price">
                  <small>$70</small>
                  $65
                </div>
                <div class="product-links">
                  <a href="#" class="btn btn-outline-secondary add-to-cart"><i
                      class="fas fa-shopping-cart"></i> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- ./new-products -->

  </main><!-- ./main -->
</template>

<style scoped>

</style>