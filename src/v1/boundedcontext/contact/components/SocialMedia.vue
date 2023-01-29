<template>
  <div 
    v-if="showOntheWebSite.facebook || 
          showOntheWebSite.instagram || 
          showOntheWebSite.tiktok"
  >
            <v-row>
                <v-col cols="12" style="margin-left: 0px;">   
                  <v-row style="padding-top: 30px">
                       <span style="font-size: 1.5rem !important;" class="white--text">  
                          Siga-nos nas Redes Sociais
                       </span>
                  </v-row>
                </v-col> 
                <br/><br/>
            </v-row>     
            <v-row
              v-if="(showOntheWebSite.instagram && socialMedia.instagram) || 
                    (showOntheWebSite.facebook  && socialMedia.facebook)"
            >
                <v-col 
                  xl="1" lg="1" md="1" sm="2" xs="2" cols="2"
                  v-if="showOntheWebSite.instagram && socialMedia.instagram"
                >   
                  <a 
                    style="color: inherit; text-decoration: none;" 
                    target="_blank"
                  >
                      <v-img align="" src="@/assets/instagram.png" height="41" width="41" />
                  </a>
                </v-col> 
                <v-col 
                  xl="3" lg="3" md="3" sm="10" xs="10" cols="10" style="padding-top:20px"
                  v-if="showOntheWebSite.instagram && socialMedia.instagram"
                >    
                  <a 
                    style="color: inherit; text-decoration: none;" 
                    target="_blank"
                  >                  
                    @{{ socialMedia.instagram }}
                  </a>
                </v-col>
                <v-col 
                  xl="1" lg="1" md="1" sm="2" xs="2" cols="2"
                  v-if="showOntheWebSite.facebook  && socialMedia.facebook"
                >   
                  <a 
                    style="color: inherit; text-decoration: none;" 
                    target="_blank"
                  >
                      <v-img align="" src="@/assets/facebook.png" height="41" width="41" />
                  </a>
                </v-col> 
                <v-col 
                  xl="3" lg="3" md="3" sm="10" xs="10" cols="10" style="padding-top:20px"
                  v-if="showOntheWebSite.facebook && socialMedia.facebook"
                >    
                  <a 
                    style="color: inherit; text-decoration: none;" 
                    target="_blank"
                  >                     
                    /{{socialMedia.facebook }}
                  </a>
                </v-col>   
                <br/><br/>
            </v-row>
            <v-row
              v-if="showOntheWebSite.tiktok && socialMedia.tiktok"
            >
                <v-col 
                  xl="1" lg="1" md="1" sm="2" xs="2" cols="2"
                  v-if="showOntheWebSite.tiktok && socialMedia.tiktok"
                >   
                  <a 
                    style="color: inherit; text-decoration: none;" 
                    target="_blank"
                  >
                      <v-img align="" src="@/assets/tiktok.png" height="41" width="41" />
                  </a>
                </v-col> 
                <v-col 
                  xl="3" lg="3" md="3" sm="10" xs="10" cols="10" style="padding-top:20px"
                  v-if="showOntheWebSite.tiktok && socialMedia.tiktok"
                >    
                  <a 
                    style="color: inherit; text-decoration: none;" 
                    target="_blank"
                  >                     
                    @{{ socialMedia.tiktok }}
                  </a>
                </v-col>                   
                <br/><br/><br/>
            </v-row> 
  </div>
</template>
<script>
  export default {
    name: "SocialMedia",
    props: [ 'socialMedia', 'showOntheWebSite' ],
    data: () => ({}),
    methods: {},
  }
</script>