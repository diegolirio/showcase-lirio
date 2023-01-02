<template>
  
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <img 
          src="https://raw.githubusercontent.com/LaCasaDeLustre/LaCasaDeLustre.github.io/master/oshine/images/logo-lacasadelustre-Page-1-transparente.png" 
          height="60"
          style="padding-top: 7px"
        />
      </v-toolbar-title>
    </v-app-bar>
</template>