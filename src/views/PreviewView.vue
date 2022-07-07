<template>
 <div class="container">
    <h5> Listel | Profile/9992</h5>
    <hr />
    <div>
      <div class="row mb-3">
        <Info  />
      </div>
      <div class="row mb-3">
        <h2>Feedback: </h2>
        <hr />
        <div class="col">
          <div class="col-10">
            <div class="row mb-3">
              <label for="username"
                ><span class="d-flex justify-content-between">
                  <b>Criticas, sugestoes e observaçoes: </b>
                </span>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <h2>Depoimentos: </h2>
        <hr />
         <div class="col">
          <div class="col-10">
            <div class="row mb-3">
              <label for="username"
                ><span class="d-flex justify-content-between">
                  <b>Depoimentos: </b>
                </span>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </label>
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
  name: "preview",
  components: {
    Info,
  },
};
</script>


<style scoped>

</style>