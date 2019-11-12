<template>
    <v-app>
        <Headerpadrao />
        <v-container>
          <v-card
    class="mx-auto"
    width="344"
    height="300"
  >
    
  </v-card>
          </v-container>
        <Footer />
    </v-app>
</template>

<script>
import Headerpadrao from '../components/Headerpadrao';
import Footer from '../components/Footer';

export default {
  components: {
    Headerpadrao,
    Footer,
  },
};
</script>
