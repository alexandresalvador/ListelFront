<template>
  <div class="container">
    <h5>Cadastro</h5>
    <hr />
    <div class="container pt-3">
      <div class="row">
        <div class="col bg-light">
          <div class="container2">
            <div class="about">
              <p class="d-flex justify-content-center h1">Cadastrar</p>
              <br />
              <br />
              <form>
                <!-- <div v-if="telaInicial" class="row justify-content-around"> -->
                <!-- </div> -->
                <div class="row">
                  <div class="col">
                    <label for="nome">
                      <span class="d-flex justify-content-between">
                        <label> Nome: </label>
                        <small v-if="small1()" class="text-danger"
                          >Obrigatório!</small
                        >
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        id="inputNome"
                        maxlength="25"
                        v-model="nome"
                      />
                    </label>
                  </div>
                  <div class="col">
                    <label for="email">
                      <span class="d-flex justify-content-between">
                        <label> E-mail: </label>
                        <small v-if="small2()" class="text-danger"
                          >Obrigatório!</small
                        >
                      </span>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail"
                        maxlength="35"
                        v-model="email"
                      />
                    </label>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <label for="senha">
                      <span class="d-flex justify-content-between">
                        <label> Senha: </label>
                        <small v-if="small3()" class="text-danger"
                          >Obrigatório!</small
                        >
                      </span>
                      <input
                        type="password"
                        class="form-control"
                        id="senha"
                        required
                        minlength="8"
                        maxlength="10"
                        v-model="senha"
                      />
                      <button
                        @click="mostrarOcultarSenha()"
                        type="button"
                        class="btn btn-outline-primary waves-effect"
                      >
                        <i class="bi bi-eye" aria-hidden="true"></i>
                      </button>
                    </label>
                  </div>
                  <div class="col">
                    <label for="repetirSenha">
                      <span class="d-flex justify-content-between">
                        <label> Repita: </label>
                        <small v-if="small4()" class="text-danger"
                          >Obrigatório!</small
                        >
                      </span>
                      <input
                        type="password"
                        class="form-control"
                        id="confirmar-senha"
                        required
                        minlength="8"
                        maxlength="10"
                        v-model="senha2"
                      />
                      <button
                        @click="mostrarOcultarSenha2()"
                        type="button"
                        class="btn btn-outline-primary waves-effect"
                      >
                        <i class="bi bi-eye" aria-hidden="true"></i>
                      </button>
                    </label>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <label for="cidade">
                      <span class="d-flex justify-content-between">
                        <label> Cidade: </label>
                        <small v-if="small5()" class="text-danger"
                          >Obrigatório!</small
                        >
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        id="inputCidade"
                        maxlength="25"
                        v-model="cidade"
                      />
                    </label>
                  </div>
                  <div class="col">
                    <label for="estado">
                      <span class="d-flex justify-content-between">
                        <label> Estado: </label>
                        <small v-if="small6()" class="text-danger"
                          >Obrigatório!</small
                        >
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        id="inputEstado"
                        maxlength="25"
                        v-model="estado"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <br />
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
                    <router-link to="/login">
                      Já possui conta? Clique para entrar!
                    </router-link>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col" id="imagem-cadastro">
          <a class="navbar-brand" href="">
            <img
              src="../assets/cadastro.jpg"
              width="600"
              height="500"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistView",
  components: {},
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
      senha2: "",
      cidade: "",
      estado: "",
    };
  },
  computed: {
    telaInicial() {
      return this.$route.name === "";
    },
  },
  methods: {
    mostrarOcultarSenha: function () {
      var senha = document.getElementById("senha");

      if (senha.type == "password") {
        senha.type = "text";
      } else {
        senha.type = "password";
      }
    },
    mostrarOcultarSenha2: function () {
      var senha = document.getElementById("confirmar-senha");

      if (senha.type == "password") {
        senha.type = "text";
      } else {
        senha.type = "password";
      }
    },
    disabled() {
      return (
        this.nome === "" || this.email === "" || this.senha === "" || this.senha2 === "" || this.cidade === "" || this.estado === ""
      );
    },
    small1() {
      return this.nome === "";
    },
    small2() {
      return this.email === "";
    },
    small3() {
      return this.senha === "";
    },
    small4() {
      return this.senha2 === "";
    },
    small5() {
      return this.cidade === "";
    },
    small6() {
      return this.estado === "";
    },
  },
};
</script>

<style scoped>
.container {
  padding: 10px;
}

.container2 {
  padding: 30px;
}

#imagem-cadastro {
  align-content: center;
}

/* input:invalid {
  border-color: rgb(241, 103, 103);
}

input:valid {
  border-color: GREEN;
} */
</style>


