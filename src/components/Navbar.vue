<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <router-link class="text-decoration-none text-dark" to="/">
        <img
          src="../assets/logo.png"
          alt=""
          width="200"
          height="100"
          class="d-inline-block align-text-top"
        />
        ListelApp
      </router-link>
        <button class="btn btn-primary" type="button">
          <router-link class="text-decoration-none text-white" to="/login">Fazer Login</router-link>
        </button>
        <button class="btn btn-light border-top border-secondary" type="button">
          <router-link class="text-decoration-none text-secondary" to="/criar-conta">Cadastro</router-link>
        </button>
    </div>
  </nav>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Navbar",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
</style>
