<!-- <template>
  <HelloWorld />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
  },
});
</script> -->

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
            <router-link to="/p/1234567890" style="color: inherit; text-decoration: none">
                <v-card>
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
                <p v-if="n < 5">Newmind Lâmpada, lâmpadas sala de, luminárias decorativas e refletor de, lâmpadas de decoração de de hotel, Preto 24x20x12,5cm </p>
                <p v-else>Newmind Lâmpada, lâmpadas sala  </p>
                <b>R$ 189,00</b>              
              </router-link>  
          </v-col>


          <!-- https://raw.githubusercontent.com/LaCasaDeLustre/LaCasaDeLustre.github.io/master/lustres/IMG-7928.jpg -->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import AppBar from '../components/AppBar' 
  export default {
    components: {
      AppBar
    },
    data: () => ({ drawer: false }),
  }
</script>