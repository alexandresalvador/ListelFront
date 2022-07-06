<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
     <a class="navbar-brand" href="#">
      <router-link class="text-decoration-none margin-top text-dark" to="/">
      <img
          src="../assets/listel.png"
          alt=""
          width="80"
          height="80"
          class="d-inline-block align-text-top"
        />
         ListelApp 
      </router-link>
      </a>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>
      </nav>
      <nav class="navbar">
        <button class="btn btn-primary" type="button">
          <router-link class="text-decoration-none text-white" to="/login"
            >Fazer Login</router-link
          >
        </button>
        <button class="btn btn-light border-top border-secondary" type="button">
          <router-link
            class="text-decoration-none text-secondary"
            to="/criar-conta"
            >Cadastro</router-link
          >
        </button>
      </nav>

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
