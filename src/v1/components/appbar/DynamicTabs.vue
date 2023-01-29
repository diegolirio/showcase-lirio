<template>
      <v-tabs
        v-model="tab"
        color="blue-accent-4"
        align-tabs="center"
      >
        <v-tab>
          <router-link 
            to="/"
            style="color: inherit; text-decoration: none"
          >          
            Home
          </router-link>
        </v-tab>
        <v-tab
            v-if="$store.state.company.contact.showOntheWebSite.contactMenu"
        >
          <router-link 
            to="/contato"
            style="color: inherit; text-decoration: none"
          >
              Contato
          </router-link>
        </v-tab>
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

<script>
  
  export default {
    props: ['menuList'],
    data: () => ({ 
      tab: null, 
    }),
    methods: {

    },
    computed: {
      menu() {
        return this.menuList.filter(it => it.active)
      }  
    }
  }
</script>