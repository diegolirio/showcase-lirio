<template>
  <v-app id="inspire">
  
    <app-bar />

    <v-main>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-img
              src="https://raw.githubusercontent.com/LaCasaDeLustre/LaCasaDeLustre.github.io/master/oshine/Screenshot%20from%202023-01-13%2003-12-06.png"
              max-width="5000"
              class="grey darken-4"
            ></v-img>
            <!-- gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" -->
          </v-card>
        </v-col>
      </v-row>            
      <v-container>
        <v-row>
          <v-col
            v-for="item in products"
            :key="item._id"
            xl="6" lg="4" md="4" sm="4" xs="6" cols="12" 
          >
              <card-item-store-showcase :product="item"  />
          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import AppBar from '../components/AppBar' 
  import CardItemStoreShowcase from '../components/CardItemStoreShowcase'
  import productGateway from '../gateway/product-gateway.js'
  export default {
    components: {
      AppBar,
      CardItemStoreShowcase
    },
    data: () => ({ 
      products: [] 
    }),
    beforeMount() {  
      productGateway.getProductsByCompanyId(this.$store.state.company.id, res => {
        this.products = res
      })
    }
  }
</script>