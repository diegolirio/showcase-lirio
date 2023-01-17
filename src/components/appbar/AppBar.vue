<template>
  
    <v-navigation-drawer v-model="drawer">
      
    </v-navigation-drawer>

    <!-- <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/" style="color: inherit; text-decoration: none">
              <img 
                :src="$store.state.company.logoUrl" 
                height="60"
                style="padding-top: 7px"
              />
        </router-link>
      </v-toolbar-title>
    </v-app-bar> -->


    <v-app-bar color="">
      
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      
      <v-toolbar-title>
        <router-link to="/" style="color: inherit; text-decoration: none">
              <img 
                :src="$store.state.company.logoUrl" 
                height="60"
                style="padding-top: 7px"
              />
        </router-link>
      </v-toolbar-title>

      <v-tabs
        v-if="!isMobile"
        v-model="tab"
        color="blue-accent-4"
        align-tabs="center"
      >
        <v-tab >Contato</v-tab>
        <v-tab 
          v-for="menuItem in menu" 
          :key="menuItem.menuDisplay"
        >
          <a 
            :href="menuItem.hyperLink" 
            target="_blank"
            style="color: inherit; text-decoration: none"
          >
          {{ menuItem.menuDisplay }}
          </a>
        </v-tab>
      </v-tabs>      
      <template v-slot:extension v-if="isMobile">
          <v-tabs
            v-model="tab"
            color="blue-accent-4"
            align-tabs="center"
          >
            <v-tab >Contato</v-tab>
            <v-tab 
              v-for="menuItem in menu" 
              :key="menuItem.menuDisplay"
            >
                <a 
                  :href="menuItem.hyperLink" 
                  target="_blank"
                  style="color: inherit; text-decoration: none"
                >
                {{ menuItem.menuDisplay }}
                </a>
            </v-tab>
          </v-tabs>
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
  export default {
    data: () => ({ 
      drawer: false, 
      tab: null, 
    }),
    computed: {
      isMobile() {
        return this.$vuetify.display.width < 400
      },    
      menu() {
        return this.$store.state.company.menu.filter(it => it.active)
      }  
    }
  }
</script>