<script>
export default {
  name: "Index",

  mounted() {
    $(document).trigger('changed')
  },
}
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div id="carousel" class="carousel slide carousel-fade">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active"
                      aria-current="true"
                      aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="3"
                      aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="4"
                      aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="@/assets/img/slider/1.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h2>First slide label</h2>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/slider/2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h2>Second slide label</h2>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/slider/3.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h2>Third slide label</h2>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/slider/4.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h2>Fourth slide label</h2>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/slider/5.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h2>Fifth slide label</h2>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel"
                    data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel"
                    data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div><!-- ./carousel -->

    <section class="advantages">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <h2 class="section-title">
              <span>Наши преимущества</span>
            </h2>
          </div>
        </div>

        <div class="row gy-3 items">
          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <p>
                <i class="fas fa-shipping-fast"></i>
              </p>
              <p>Прямые поставки от производителей брендов</p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <p>
                <i class="fas fa-cubes"></i>
              </p>
              <p>Широкий ассортимент товаров. Более 10 тыс. наименований</p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <p>
                <i class="fas fa-hand-holding-usd"></i>
              </p>
              <p>Приятные и конкурентные цены</p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <p>
                <i class="fa-solid fa-user-graduate"></i>
              </p>
              <p>Консультации от профессионалов</p>
            </div>
          </div>
        </div>

      </div>
    </section><!-- ./advantages -->

    <section class="featured-products">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <h2 class="section-title">
              <span>Рекомендуемые товары</span>
            </h2>
          </div>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div class="product-card">
              <div class="product-card-offer">
                <div class="offer-hit">Hit</div>
                <div class="offer-new">New</div>
              </div>
              <div class="product-thumb">
                <a href="#"><img src="@/assets/img/products/1.jpg" alt=""></a>
              </div>
              <div class="product-details">
                <h4>
                  <a href="#">Product 1 Lorem ipsum dolor sit amet, consectetur
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

          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div class="product-card">
              <div class="product-card-offer">
                <div class="offer-hit">Hit</div>
              </div>
              <div class="product-thumb">
                <a href="#"><img src="@/assets/img/products/2.jpg" alt=""></a>
              </div>
              <div class="product-details">
                <h4>
                  <a href="#">Product 2</a>
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
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div class="product-card">
              <div class="product-card-offer">
                <!--<div class="offer-hit">Hit</div>
                <div class="offer-new">New</div>-->
              </div>
              <div class="product-thumb">
                <a href="#"><img src="@/assets/img/products/3.jpg" alt=""></a>
              </div>
              <div class="product-details">
                <h4>
                  <a href="#">Product 3 Lorem ipsum </a>
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
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div class="product-card">
              <div class="product-card-offer">
                <div class="offer-hit">Hit</div>
              </div>
              <div class="product-thumb">
                <a href="#"><img src="@/assets/img/products/4.jpg" alt=""></a>
              </div>
              <div class="product-details">
                <h4>
                  <a href="#">Product 4</a>
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
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div class="product-card">
              <div class="product-card-offer">
                <div class="offer-hit">Hit</div>
                <div class="offer-new">New</div>
              </div>
              <div class="product-thumb">
                <a href="#"><img src="@/assets/img/products/5.jpg" alt=""></a>
              </div>
              <div class="product-details">
                <h4>
                  <a href="#">Product 5 Lorem ipsum dolor sit amet, consectetur
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

          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div class="product-card">
              <div class="product-card-offer">
                <div class="offer-hit">Hit</div>
                <div class="offer-new">New</div>
              </div>
              <div class="product-thumb">
                <a href="#"><img src="@/assets/img/products/6.jpg" alt=""></a>
              </div>
              <div class="product-details">
                <h4>
                  <a href="#">Product 6 Lorem ipsum dolor sit amet, consectetur
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

          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div class="product-card">
              <div class="product-card-offer">
                <div class="offer-hit">Hit</div>
                <div class="offer-new">New</div>
              </div>
              <div class="product-thumb">
                <a href="#"><img src="@/assets/img/products/7.jpg" alt=""></a>
              </div>
              <div class="product-details">
                <h4>
                  <a href="#">Product 7 Lorem ipsum dolor sit amet, consectetur
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

          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div class="product-card">
              <div class="product-card-offer">
                <div class="offer-hit">Hit</div>
                <div class="offer-new">New</div>
              </div>
              <div class="product-thumb">
                <a href="#"><img src="@/assets/img/products/8.jpg" alt=""></a>
              </div>
              <div class="product-details">
                <h4>
                  <a href="#">Product 8 Lorem ipsum dolor sit amet, consectetur
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
      </div>
    </section><!-- ./featured-products -->

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
              <a href="#"><img src="@/assets/img/products/1.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="#">Product 1 Lorem ipsum dolor sit amet, consectetur
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
              <a href="#"><img src="@/assets/img/products/2.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="#">Product 2</a>
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
              <a href="#"><img src="@/assets/img/products/3.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="#">Product 3 Lorem ipsum </a>
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
              <a href="#"><img src="@/assets/img/products/4.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="#">Product 4</a>
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
              <a href="#"><img src="@/assets/img/products/5.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="#">Product 5 Lorem ipsum dolor sit amet, consectetur
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
              <a href="#"><img src="@/assets/img/products/6.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="#">Product 6 Lorem ipsum dolor sit amet, consectetur
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
              <a href="#"><img src="@/assets/img/products/7.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="#">Product 7 Lorem ipsum dolor sit amet, consectetur
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
              <a href="#"><img src="@/assets/img/products/8.jpg" alt=""></a>
            </div>
            <div class="product-details">
              <h4>
                <a href="#">Product 8 Lorem ipsum dolor sit amet, consectetur
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
    </section>
    <!-- ./new-products -->

    <section class="about-us" id="about">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <h2 class="section-title">
              <span>О нас</span>
            </h2>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum distinctio error fuga illo
              necessitatibus nemo nulla possimus quod repellendus saepe tempore ullam vel, velit. Eligendi
              in natus necessitatibus odit sapiente!</p>
            <p>A aut commodi consequuntur corporis culpa deserunt dignissimos doloremque fuga magnam modi
              nemo nihil nostrum obcaecati praesentium quae quaerat quod recusandae rerum sit, voluptate.
              Alias consectetur dignissimos facilis minima quam?</p>
            <p>A aliquid architecto autem eaque earum et ex facilis incidunt itaque libero mollitia natus
              nobis odio optio, perspiciatis porro, quod tempore tenetur, vero voluptatem? Asperiores
              dolorem facilis ipsam obcaecati veniam!</p>
          </div>
        </div>
      </div>
    </section><!-- ./about-us -->

    <iframe id="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12739.126232575809!2d50.82833731093578!3d61.66481988436891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1732519296809!5m2!1sru!2sru"
            width="100%" height="450" style="border:0; display: block;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe><!-- ./map -->
  </main><!-- ./main -->
</template>

<style>

</style>