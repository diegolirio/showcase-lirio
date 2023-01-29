<template>
  
    <v-navigation-drawer v-model="drawer"></v-navigation-drawer>

    <v-app-bar color="">
      
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      
      <v-toolbar-title>
        <router-link to="/" style="color: inherit; text-decoration: none">
              <img 
                :src="$store.state.company.site.logoUrl" 
                height="60"
                style="padding-top: 7px"
              />
        </router-link>
      </v-toolbar-title>

      <dynamic-tabs 
        :menuList="$store.state.company.site.menu" 
        v-if="!isMobile" 
      />      
      <template v-slot:extension v-if="isMobile" >
          <dynamic-tabs 
            :menuList="$store.state.company.site.menu" 
          />      
      </template>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>

    </v-app-bar>

</template>

<script>
import DynamicTabs from './DynamicTabs.vue'
  export default {
  components: { DynamicTabs },
    data: () => ({ 
      drawer: false, 
      tab: null, 
    }),
    computed: {
      isMobile() {
        return this.$vuetify.display.width < 400
      },    
    }
  }
</script>