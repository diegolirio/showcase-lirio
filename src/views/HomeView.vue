<template>
  <v-app id="inspire">
  
    <app-bar />

    <v-main>
      <br/>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            xl="6" lg="4" md="4" sm="4" xs="6" cols="12" 
          >
              <card-item-store-showcase />
          </v-col>


          <!-- https://raw.githubusercontent.com/LaCasaDeLustre/LaCasaDeLustre.github.io/master/lustres/IMG-7928.jpg -->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import AppBar from '../components/AppBar' 
  import CardItemStoreShowcase from '../components/CardItemStoreShowcase'
  export default {
    components: {
      AppBar,
      CardItemStoreShowcase
    },
    //data: () => ({ drawer: false }),
  }
</script>