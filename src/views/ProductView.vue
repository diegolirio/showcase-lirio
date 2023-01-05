<template>
  <div class="Product">

      <app-bar />

      <v-main>
          <v-container>
            <v-row>
              <v-col
                xl="5" lg="5" md="5" sm="5" xs="12" cols="12" 
              >
                    <v-card
                        width="484"
                        height="410"
                    >
                      <v-img
                        :src="product.photo"
                        :lazy-src="product.photo"
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
                    </v-card>           
              </v-col>
              <v-col
                xl="7" lg="7" md="7" sm="7" xs="12" cols="12" 
              >
                  <h1>{{ product.shortName }}</h1>
                  <p>{{ product.description }}</p>
                  <p><b>{{ product.price }}</b></p>
                  <br/>
                  <!-- <v-btn
                    depressed
                    color="success"

                  >
                    Comprar
                  </v-btn>                   -->
                  <button-buy-whats-app 
                    phoneNumber="11961409798" 
                    message="Vi esse Lustre e quero realizar uma compra " 
                  />
              </v-col>


              <!-- https://raw.githubusercontent.com/LaCasaDeLustre/LaCasaDeLustre.github.io/master/lustres/IMG-7928.jpg -->
            </v-row>
          </v-container>
      </v-main>      
    
  </div>
</template>

<script>
  import AppBar from '../components/AppBar' 
  import ButtonBuyWhatsApp from '../components/ButtonBuyWhatsApp'
  import productGateway from '../gateway/product-gateway.js'
  export default {
    components: {
      AppBar,
      ButtonBuyWhatsApp 
    },
    data: () => ({ product: {} }),
    beforeMount() {
      productGateway.getProductById(this.$route.params._id, res => {
          this.product = res
      })
    }
  }
</script>
