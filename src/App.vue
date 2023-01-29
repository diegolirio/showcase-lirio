<template>
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
import companyGateway from './gateway/company-gateway.js'
export default {
  name: 'App',

  data: () => ({
    loadingSite: false
  }),
  beforeMount() {
    this.loadingSite = true
    let domain = location.host
    
    if(location.host.includes('localhost') || location.host.includes('netlify.app') || location.host.includes('192.168.1.196')) {
      domain = 'lacasadelustre.com.br'
      console.warn(`Domain alterado para ${domain}, rodando em ${location.host}`)
    }
    companyGateway.getCompanyByDomain(domain, res => {
        if(res.length == 1) {
          this.$store.state.company = res[0]
          this.loadingSite = false
          return
        } 
        if(res.length > 1) {
          let company = res.filter(it => it.domain === domain)[0]
          if(company) {
            this.$store.state.company = res[0]
            this.loadingSite = false
            return
          }          
          alert(`Existem dois cadastros com o dominio ${domain}`)
          console.warn('Domain', domain)    
          return
        }
        alert('Seu dominio nao esta cadastrado acione o ADMIN do Site!')
        console.warn('Domain', domain)    
    }, err => {
        console.error(err)
        alert('Erro ao carregar informacoes do Servidor, Recarregue a Pagina ou tente novamente mais tarde')
    })          
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