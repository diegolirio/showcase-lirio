<template>
  <v-app id="inspire">
  
    <app-bar />

    <v-main>
      <br/>
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
    data: () => ({ products: [] }),
    beforeMount() {
      productGateway.getProductsByCompanyId("1", res => {
        this.products = res
      })
    }
  }
</script>