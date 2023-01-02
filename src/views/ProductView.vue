<template>
  <div class="Product">

      <app-bar />

      <v-main>
          <v-container>
            <v-row>
              <v-col
                xl="6" lg="6" md="6" sm="6" xs="12" cols="12" 
              >
                    <v-card>
                      <v-img
                        src="https://picsum.photos/500/300?image=15"
                        lazy-src="https://picsum.photos/10/6?image=15"
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
                xl="6" lg="6" md="6" sm="6" xs="12" cols="12" 
              >
                  <p v-if="n < 5">Newmind Lâmpada, lâmpadas sala de, luminárias decorativas e refletor de, lâmpadas de decoração de de hotel, Preto 24x20x12,5cm </p>
                  <p v-else>Newmind Lâmpada, lâmpadas sala  </p>
                  <b>R$ 189,00</b>             
              </v-col>


              <!-- https://raw.githubusercontent.com/LaCasaDeLustre/LaCasaDeLustre.github.io/master/lustres/IMG-7928.jpg -->
            </v-row>
          </v-container>
      </v-main>      
    
  </div>
</template>

<script>
  import AppBar from '../components/AppBar' 
  export default {
    components: {
      AppBar,
    }
  }
</script>
