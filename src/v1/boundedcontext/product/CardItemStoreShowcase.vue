<template>

  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template >
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <router-link :to="`/p/${product._id}`" style="color: inherit; text-decoration: none">

        <v-img
            width="374"
            height="300"
            :src="product.photo"
        ></v-img>

        <v-card-title>{{ product.shortName }}</v-card-title>

        <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
                <!-- <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
                ></v-rating> -->

                <!-- <div class="grey--text ms-4">
                4.5 (413)
                </div> -->
            </v-row>

            <div class="my-4 text-subtitle-1">
                <!-- $ • Italian, Cafe -->
            </div>

            <div>{{ substrDescription(product.description) }}</div>
        </v-card-text>

        <!-- <v-divider class="mx-4"></v-divider> -->

        <v-card-title>{{ product.price }}</v-card-title>

        <!-- 
        <v-card-text>
        <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
        >
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
        </v-chip-group>
        </v-card-text> 
        -->
    
    </router-link>

    <v-card-actions>
      <!-- <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn> -->
      <button-buy-whats-app 
        v-if="$store.state.company.contact.contactUs.whatsApp"
        class="align-end flex-column"
        :phoneNumber="$store.state.company.contact.contactUs.whatsApp" 
        :message="messageWhatsAPP()" 
      />       
    </v-card-actions>
  </v-card>    
</template>
<script>
  import ButtonBuyWhatsApp from '../../components/ButtonBuyWhatsApp'
  export default {
    name: "CardItemStoreShowcase",
    props: [ 'product' ],
    components: {
        ButtonBuyWhatsApp
    },
    data: () => ({
      loading: false,
      selection: 1,
    }),
    methods: {
      reserve () {
        this.loading = true
      },
      substrDescription(description) {
        if(description) {
            return description.substring(0, 48) + (description.length > 48 ? "..." : "")
        }
        return ""
      },
      messageWhatsAPP() {
        return `Segue o Link do meu pedido na Loja 👉 https://${location.host}/p/${this.product._id}`
      } 
    },
  }
</script>