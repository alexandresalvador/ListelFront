<template>
  <div class="container">
    <h5>Login</h5>
    <hr />
    <div class="container pt-3">
      <div class="row">
        <div class="col" id="imagem-login">
          <a class="navbar-brand" href="#">
            <img
              src="../assets/login.jpg"
              width="600"
              height="500"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
        <div class="col bg-light">
          <div class="container2">
            <div class="about">
              <p class="d-flex justify-content-center h1">Entrar</p>
              <br />
              <br />
              <form>
                <div>
                  <div class="mb-3">
                    <!-- <label for="email" class="form-label"> -->
                      <span class="d-flex justify-content-between">
                        <label> E-mail: </label>
                        <small v-if="smallLogin()" class="text-danger"
                          >Obrigatório!</small
                        >
                      </span>
                      <input
                      type="email"
                      class="form-control"
                      id="emailLogin"        
                      maxlength="35"            
                      v-model="emailLogin"
                    />
                    <!-- </label> -->
                    
                  </div>
                  <div class="mb-3">
                    <!-- <label for="senha" class="form-label"> -->
                      <span class="d-flex justify-content-between">
                        <label> Senha: </label>
                        <small v-if="smallSenha()" class="text-danger"
                          >Obrigatório!</small
                        >
                      </span>
                    <!-- </label> -->
                    <input
                      type="password"
                      class="form-control"
                      id="senhaLogin"
                      maxlength="10"
                      v-model="senhaLogin"
                    />
                    <button @click="mostrarOcultarSenha()" type="button" class="btn btn-outline-primary waves-effect"><i class="bi bi-eye" aria-hidden="true"></i></button>                    
                  </div>
                </div>
                <div>
                <button 
                  v-if="disabled()"
                  type="button" 
                  disabled
                  class="btn btn-light border border-primary"
                  >
                  <router-link
                    class="text-primary text-decoration-none"
                    to="/"
                     >Entrar
                 </router-link>
                  </button>
                  <button
                   v-else
                  @click="click"
                   type="button"
                   class="btn btn-light border border-primary"
                   >
                 <a class="text-primary text-decoration-none" href="/">
                    Entrar
                 </a>
                </button>
                  <br />
                  <br />
                  <a class="nav-link active" aria-current="page" href="#">
                    <router-link to="/esqueci-senha"
                      >Esqueceu a senha ? Cique Aqui!</router-link
                    >
                  </a>
                  <br />
                  <a class="nav-link active" aria-current="page" href="#">
                    <router-link to="/criar-conta"
                      >Não possui conta? Cadastre-se</router-link
                    >
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Card />
  </div>
</template>

<script>
export default {
  name: "LoginView",
  components: {

  },
  data() {
    return {
      emailLogin: "",
      senhaLogin: "",
    };
  },
  methods: {
    mostrarOcultarSenha: function(){
       var senha=document.getElementById("senhaLogin");
      
       if(senha.type=="password"){
           senha.type="text"
       }else{
           senha.type="password"
       }
   },
    disabled() {
      return (
        this.emailLogin === "" || this.senhaLogin === "" 
        );
    },
    smallLogin() {
      return this.emailLogin === "";
    },
    smallSenha() {
      return this.senhaLogin === "";
    },
}

};
</script>

<style scoped>
.container {
  padding: 10px;
}

.container2 {
  padding: 30px;
}

#imagem-login {
  align-content: center;
}
</style>


