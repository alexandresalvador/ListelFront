<template>
  <div id="app">
    <Navbar /> <!-- a navbar é pra todas as telas -->
    <hr>
    <router-view/> <!-- aqui renderiza todas view das rotas -->
    <Footer />     <!-- o footer é pra todas as telas -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>

</style>