<template>
  <div class="Contact">

      <app-bar />

      <v-main>
          <v-container>


            <v-row>
                <v-col cols="6" style="margin-left: 0px;">   
                  <v-row style="padding-top: 30px">
                       <span style="font-size: 1.6rem !important;" class="white--text">  
                          Fale com a Gente!
                       </span>
                  </v-row>
                </v-col> 
                <v-col cols="3" >   
                  <a
                    style="color: inherit; text-decoration: none" 
                    target="_blank"
                  >
                      <v-img align="" src="@/assets/uber.png" height="33" width="33" />
                  </a>
                </v-col>              
                <v-col cols="3" style=" margin-top: -3px;">   
                  <a 
                    style="color: inherit; text-decoration: none;" 
                    target="_blank"
                  >
                      <v-img align="" src="@/assets/Waze.png" height="41" width="41" />
                  </a>
                </v-col> 
            </v-row>   

            <v-row>
                <v-col
                  xl="6" lg="6" md="6" sm="6" xs="12" cols="12"
                >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14630.869939718294!2d-46.37206755!3d-23.542661550000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce653496af91e3%3A0x5e5e5c504f3643d5!2sUze%20Academia!5e0!3m2!1spt-BR!2sbr!4v1674916242867!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </v-col>
                <v-col
                  xl="6" lg="6" md="6" sm="6" xs="12" cols="12"
                > 
                    <div>
                        <h4 class="white--text">📍 Endereço</h4>   
                        <br/>
                        <p style="margin-left: 30px;">
                          <small class="white--text">Rua Riberia de Iguape</small> 
                        </p>
                    </div>
                    <br/>
                    <div>
                        
                        <h4 class="white--text">
                          📱 Siga a gente nas Redes 
                        </h4>   

                        <p 
                          style="margin-left: 10px; margin-top: 15px;"
                        >
                            <v-btn text>
                              <v-icon color="white">mdi-instagram</v-icon> 
                              <span style="text-transform: lowercase; margin-left: 10px;" class="white--text">@diegolirio</span>
                            </v-btn>                        
                        </p>
                        
                        <p 
                          style="margin-left: 10px;"
                        >
                            <v-btn text>
                              <v-icon color="white">mdi-facebook</v-icon> 
                              <span style="text-transform: lowercase; margin-left: 10px;" class="white--text">/liriodiego</span>
                            </v-btn>     
                        </p>
                        <br/>
                        <p>
                            <v-btn icon>
                              <v-icon color="green">mdi-whatsapp</v-icon>
                            </v-btn>
                            <span class="green--text">{{ '11961409798' }}</span>
                        </p>                    
                    </div>
                    <br/>

                </v-col>
            </v-row>

          </v-container>
          <br/><br/><br/>
      </v-main>      
    
  </div>
</template>

<script>
  import AppBar from '../components/appbar/AppBar' 
  export default {
    components: {
      AppBar,
    },
    data: () => ({ product: {} }),
    beforeMount() {

    },
    methods: {

    }
  }
</script>