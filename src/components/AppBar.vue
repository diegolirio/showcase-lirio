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

      
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>

      <!-- <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template> -->
    </v-app-bar>

</template>

<script>
  export default {
    data: () => ({ drawer: false }),
  }
</script>