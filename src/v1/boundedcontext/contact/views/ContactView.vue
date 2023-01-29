<template>
  <div class="Contact">

      <app-bar />

      <v-main>
          <v-container>

                <contact-us-for-phone 
                  :contactUs="$store.state.company.contact.contactUs" 
                  :showOntheWebSite="$store.state.company.contact.showOntheWebSite" 
                />

                <social-media 
                  :socialMedia="$store.state.company.contact.socialMedia" 
                  :showOntheWebSite="$store.state.company.contact.showOntheWebSite" 
                />

                <my-location 
                  :address="$store.state.company.contact.address" 
                  :showOntheWebSite="$store.state.company.contact.showOntheWebSite" 
                /> 

          </v-container>
          
          <br/><br/><br/>

      </v-main>      
    
  </div>
</template>

<script>
  import AppBar from '../../../components/appbar/AppBar' 
  import ContactUsForPhone from '../components/ContactUsForPhone.vue' 
  import MyLocation from '../components/MyLocation.vue'
  import SocialMedia from '../components/SocialMedia.vue'
  export default {
    components: {
        AppBar, 
        ContactUsForPhone,
        SocialMedia,
        MyLocation
    },
    data: () => ({ product: {} }),
    beforeMount() {

    },
    methods: {

    }
  }
</script>
<style scoped>
 .iframe-maps iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
    }
</style>