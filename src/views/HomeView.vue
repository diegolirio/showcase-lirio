<template>
  <v-app id="inspire">
  
    <app-bar />

    <v-main>

      <v-row v-if="$store.state.company.sloganImageUrl">
        <v-col cols="12">
          <v-card>
            <v-img
              :src="$store.state.company.sloganImageUrl"
              max-width="5000"
              class="grey darken-4"
            ></v-img>
            <!-- gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" -->
          </v-card>
        </v-col>
      </v-row>        
      <v-row v-if="$store.state.company.sloganAsABanner && $store.state.company.sloganAsABanner.sloganText && !$store.state.company.sloganImageUrl">
        <v-col cols="12">
          <!-- <v-card color="$store.state.company.sloganAsABanner.sloganBackgroundColor">
              <h2 class="font-weight-black text-center">{{ $store.state.company.sloganAsABanner.sloganText }}</h2>
          </v-card> -->
          <v-banner
            height="120"
            color="primary"
            
          >          
              <h2 
                class="text-center pa-4 mx-auto" 
                :class="'text--'+$store.state.company.sloganAsABanner.sloganTextColor"
              >
                {{ $store.state.company.sloganAsABanner.sloganText }}
              </h2>
          </v-banner>
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