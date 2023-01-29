<template>
  <div 
    v-if="showOntheWebSite.address && address.description"
  >
            <v-row>
                <v-col cols="6" style="margin-left: 0px;">   
                  <v-row style="padding-top: 30px">
                       <span style="font-size: 1.5rem !important;" class="white--text">  
                          Endereço
                       </span>
                  </v-row>
                </v-col> 
                <br/><br/>
            </v-row>     
            <v-row>
                <br/>
                {{ address.description }}
            </v-row>       
            <v-row v-if="showOntheWebSite.address && showOntheWebSite.map">
                <v-col
                  xl="6" lg="6" md="6" sm="6" xs="12" cols="12"
                >
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14630.869939718294!2d-46.37206755!3d-23.542661550000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce653496af91e3%3A0x5e5e5c504f3643d5!2sUze%20Academia!5e0!3m2!1spt-BR!2sbr!4v1674916242867!5m2!1spt-BR!2sbr" 
                      style="border:0; width: 100% !important;" 
                      height="400"
                      width="850"
                      allowfullscreen="" 
                      loading="lazy" 
                      referrerpolicy="no-referrer-when-downgrade"
                      class="iframe-maps"
                    >
                    </iframe>
                </v-col>   
            </v-row>           
            <v-row v-if="showOntheWebSite.address">
                <v-col 
                  xl="2" lg="2" md="2" sm="2" xs="2" cols="2"
                  v-if="showOntheWebSite.uber"
                >            
                  <a 
                    style="color: inherit; text-decoration: none;" 
                    target="_blank"
                  >
                      <v-img align="" src="@/assets/uber.png" height="41" width="41" />
                  </a>
                </v-col>
                <v-col 
                  xl="4" lg="4" md="4" sm="4" xs="4" cols="4" style="margin-top: -5px;"
                  v-if="showOntheWebSite.waze"
                >            
                  <a 
                    style="color: inherit; text-decoration: none;" 
                    target="_blank"
                  >
                      <v-img align="" src="@/assets/waze.png" height="55" width="55" />
                  </a>
                </v-col>      
            </v-row>            
  </div>
</template>
<script>
  export default {
    name: "MyLocation",
    props: [ 'address', 'showOntheWebSite' ],
    data: () => ({}),
    methods: {},
  }
</script>