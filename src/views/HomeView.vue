<template>

   <div class="container">
    <h5> Estabelecimentos Cadastrados </h5>
    <hr />
     <div>
    <div class="card mb-3" style="max-width: 1540px">
      <div class="row g-0">
        <div class="col-md-1">
          <img
            src="../assets/home-icon.png"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <p class="card-text">
              Sem Estabelecimentos Cadastrados
            </p>
            <!-- <p class="card-text">
              <small class="text-muted">.</small>
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Info from "@/components/Info.vue";
export default {
  name: "home",
  components: {
    Info,
  },
};
</script>


<style scoped>

</style>