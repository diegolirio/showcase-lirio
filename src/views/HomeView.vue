<!-- <template>
  <HelloWorld />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
  },
});
</script> -->

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <img 
          src="https://raw.githubusercontent.com/LaCasaDeLustre/LaCasaDeLustre.github.io/master/oshine/images/logo-lacasadelustre-Page-1-transparente.png" 
          height="80"
          style="padding-top: 7px"
        />
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <br/>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: false }),
  }
</script>