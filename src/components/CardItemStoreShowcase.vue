<template>

                <!-- <v-card
                elevation="1"
                >
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    cover
                    class="bg-grey-lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey-lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
                <p v-if="n < 5">Newmind Lâmpada, lâmpadas sala de, luminárias decorativas e refletor de, lâmpadas de decoração de de hotel, Preto 24x20x12,5cm </p>
                <p v-else>Newmind Lâmpada, lâmpadas sala  </p>
                <h2>R$ 189,00</h2>
                
                <button-buy-whats-app 
                    class="align-end flex-column"
                    phoneNumber="11961409798" 
                    message="Vi esse Lustre e quero realizar uma compra " 
                />   -->

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

    <router-link to="/p/1234567890" style="color: inherit; text-decoration: none">

        <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>Lustre de Teto</v-card-title>

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

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>

        <!-- <v-divider class="mx-4"></v-divider> -->

        <v-card-title>R$ 189,99</v-card-title>

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
            class="align-end flex-column"
            phoneNumber="11961409798" 
            message="Vi esse Lustre e quero realizar uma compra " 
        />       
    </v-card-actions>
  </v-card>    
</template>
<script>
  import ButtonBuyWhatsApp from '../components/ButtonBuyWhatsApp'
  export default {
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

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>