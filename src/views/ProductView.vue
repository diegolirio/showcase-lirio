<template>
  <div class="Product">

      <app-bar />

      <v-main>
          <v-container>
            <v-row>
              <v-col
                xl="5" lg="5" md="5" sm="5" xs="12" cols="12" 
              >
                    <Carousel>
                      <Slide v-for="slide in product.photos" :key="slide">
                        <div class="carousel__item">
                          <v-img
                            :src="slide"
                            :lazy-src="slide"
                            aspect-ratio="1"
                            cover
                            class="bg-grey-lighten-2"
                          >
                            <template v-slot:placeholder>
                              <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                              >
                                <v-progress-circular
                                  indeterminate
                                  color="grey-lighten-5"
                                ></v-progress-circular>
                              </v-row>
                            </template>
                          </v-img>
                        </div>

                      </Slide>

                      <template #addons>
                        <Navigation />
                        <Pagination />
                      </template>
                    </Carousel>                        
              
              </v-col>
              <v-col
                xl="7" lg="7" md="7" sm="7" xs="12" cols="12" 
              >
                  <h1>{{ product.shortName }}</h1>
                  <p>{{ product.description }}</p>
                  <p><b>{{ product.price }}</b></p>
                  <br/>
                  <button-buy-whats-app 
                    phoneNumber="11961409798" 
                    :message="messageWhatsAPP()" 
                  />
              </v-col>

            </v-row>

          </v-container>
          <br/><br/><br/>
      </v-main>      
    
  </div>
</template>

<script>
  import AppBar from '../components/AppBar' 
  import ButtonBuyWhatsApp from '../components/ButtonBuyWhatsApp'
  import productGateway from '../gateway/product-gateway.js'
  
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'  
  
  export default {
    components: {
      AppBar,
      ButtonBuyWhatsApp,
      Carousel,
      Slide,
      Pagination,
      Navigation,      
    },
    data: () => ({ product: {} }),
    beforeMount() {
      productGateway.getProductById(this.$route.params._id, res => {
          this.product = res
          this.product.photos.unshift(this.product.photo)
      })
    },
    methods: {
      messageWhatsAPP() {
        return `Segue o Link do meu pedido na Loja 👉 https://${location.host}/p/${this.product._id}`
      } 
    }
  }
</script>
<style>
.carousel__item {
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

/* .carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
} */
</style>
