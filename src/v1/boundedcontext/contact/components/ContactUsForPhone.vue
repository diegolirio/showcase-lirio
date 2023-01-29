<template>
  <div v-if="showOntheWebSite.phoneNumber || showOntheWebSite.whatsApp">
    <v-row>
        <v-col cols="12" style="margin-left: 0px;">   
          <v-row style="padding-top: 30px">
                <span style="font-size: 1.8rem !important;" class="white--text">  
                  Fale com a Gente!
                </span>
          </v-row>
        </v-col> 
        <br/><br/>
    </v-row>
    <v-row>
        <v-col 
          xl="1" lg="1" md="1" sm="2" xs="2" cols="2"
          v-if="showOntheWebSite.phoneNumber"
        >   
          <a 
            style="color: inherit; text-decoration: none;" 
            target="_blank"
          >
              <v-img align="" src="@/assets/telephone-call.png" height="41" width="41" />
          </a>
            <!-- <v-icon color="white">mdi-instagram</v-icon>  -->
        </v-col> 
        <v-col 
          xl="3" lg="3" md="3" sm="10" xs="10" cols="10" style="padding-top:20px"
          v-if="showOntheWebSite.phoneNumber"
        >   
          <a 
            style="color: inherit; text-decoration: none;" 
            target="_blank"
          >                  
            (11) 96140-9798
          </a>
        </v-col>
        <v-col 
          xl="1" lg="1" md="1" sm="2" xs="2" cols="2"
          v-if="showOntheWebSite.whatsApp"
        >   
          <a 
            style="color: inherit; text-decoration: none;" 
            target="_blank"
          >
              <v-img align="" src="@/assets/whatsapp.png" height="41" width="41" />
          </a>
        </v-col> 
        <v-col 
          xl="3" lg="3" md="3" sm="10" xs="10" cols="10" style="padding-top:20px"
          v-if="showOntheWebSite.whatsApp"
        >    
          <a 
            style="color: inherit; text-decoration: none;" 
            target="_blank"
          >                     
            WhatsApp
          </a>
        </v-col>                
        <br/><br/>
    </v-row>
  </div>
</template>
<script>
  export default {
    name: "ContactUsForPhone",
    props: [ 'contactUs', 'showOntheWebSite' ],
    data: () => ({}),
    methods: {},
  }
</script>