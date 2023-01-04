<template>
    <a 
        style="color: inherit; text-decoration: none"
        :href="`https://api.whatsapp.com/send?phone=55${phoneNumber.replace(/\D/g,'')}&text=Olá ${message}`"
    >                        
        <v-btn
            color="success darken-2"
        >
            <v-icon>mdi-whatsapp</v-icon> <span style="margin-left: 5px;">Comprar</span>
        </v-btn>  
    </a>       
</template>
<script>
    export default {
        name: 'ButtonBuyWhatsApp',
        props: [ 'message', 'phoneNumber' ]
    }
</script>