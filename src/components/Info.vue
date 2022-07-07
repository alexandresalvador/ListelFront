<template>
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
            <h5 class="card-title">Seguros Garcia</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <!-- <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Info from "@/components/Info.vue";
export default {
  name: "Info",
  components: {
    Info,
  },
};
</script>

<style scoped>
</style>