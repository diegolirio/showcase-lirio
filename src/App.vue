<template>
  
  <!-- <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app> -->

  <v-app id="inspire">         
    <router-view v-if="!loadingSite" />  
    <v-progress-circular
      v-else
      :size="100"
      :width="7"
      color="primary"
      indeterminate
      class="centered"
    ></v-progress-circular>    
  </v-app>

</template>

<script>

export default {
  name: 'App',

  data: () => ({
    loadingSite: false,
  }),
  beforeMount() {
    this.loadingSite = false 
    // TODO get web-site by domain ---> location.host
  }
}
</script>
<style scoped>
  .centered {
    position: fixed; /* or absolute */
    top: 30%;
    left: 40%;
  }
</style>