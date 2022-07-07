<template>
  <div class="container">
    <h5>Listel | Add</h5>
    <hr />
    <div>
      <div class="row mb-3">
        <h6>Dados Gerais</h6>
        <hr />
        <div class="col-3">
          <div class="row mb-3">
            <label for="razao"
              ><span class="d-flex justify-content-between">
                <b>Razão Social: </b>
                <small v-if="small01()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
               
                v-model="estabelecimento.razaosocial"
                type="text"
                class="form-control"
                placeholder="razaosocial"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="inscricao"
              ><span class="d-flex justify-content-between">
                <b>Inscrição Estadual: </b>
                <small v-if="small02()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="estabelecimento.inscricao"
                type="text"
                class="form-control"
                placeholder="inscricao"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="cpf"
              ><span class="d-flex justify-content-between">
                <b>CNPJ ou CPF: </b>
                <small v-if="small03()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="estabelecimento.cpf"
                type="number"
                class="form-control"
                placeholder="cpf"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="rg"
              ><span class="d-flex justify-content-between">
                <b>IE ou RG: </b>
                <small v-if="small04()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="estabelecimento.rg"
                type="text"
                class="form-control"
                placeholder="rg"
                required
              />
            </label>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-3">
          <div class="row mb-3">
            <label for="nomefantasia"
              ><span class="d-flex justify-content-between">
                <b>Nome Fantasia: </b>
                <small v-if="small05()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="estabelecimento.nomefantasia"
                type="text"
                class="form-control"
                placeholder="nome fantasia"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="responsavel"
              ><span class="d-flex justify-content-between">
                <b>Responsavel: </b>
                <small v-if="small06()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="estabelecimento.responsavel"
                type="text"
                class="form-control"
                placeholder="responsavel"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="telefone"
              ><span class="d-flex justify-content-between">
                <b>Tel. Fixo/Celular</b>
                <small v-if="small07()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="estabelecimento.telefone"
                type="number"
                class="form-control"
                placeholder="47 99999-9999"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="email"
              ><span class="d-flex justify-content-between">
                <b>Email</b>
                <small v-if="small08()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="estabelecimento.email"
                type="email"
                class="form-control"
                placeholder="xpto@mail.com"
                required
              />
            </label>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="row mb-3">
        <h6>Endereço</h6>
        <hr />
        <div class="col-3">
          <div class="row mb-3">
            <label for="rua"
              ><span class="d-flex justify-content-between">
                <b>Rua: </b>
                <small v-if="small09()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                @input="disabled2"
                v-model="estabelecimento.rua"
                type="text"
                class="form-control"
                placeholder="rua"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="numero"
              ><span class="d-flex justify-content-between">
                <b>Número: </b>
                <small v-if="small10()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="estabelecimento.numero"
                type="text"
                class="form-control"
                placeholder="numero"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="complemento"
              ><span class="d-flex justify-content-between">
                <b>Complemento: </b>
                <small v-if="small11()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="estabelecimento.complemento"
                type="text"
                class="form-control"
                placeholder="complemento"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="bairro"
              ><span class="d-flex justify-content-between">
                <b>Bairro: </b>
                <small v-if="small12()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="estabelecimento.bairro"
                type="text"
                class="form-control"
                placeholder="bairro"
                required
              />
            </label>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-3">
          <div class="row mb-3">
            <label for="cidade"
              ><span class="d-flex justify-content-between">
                <b>Cidade: </b>
                <small v-if="small13()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="estabelecimento.cidade"
                type="text"
                class="form-control"
                placeholder="cidade"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="estado"
              ><span class="d-flex justify-content-between">
                <b>Estado: </b>
                <small v-if="small14()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="estabelecimento.estado"
                type="text"
                class="form-control"
                placeholder="estado"
                required
              />
            </label>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-3">
            <label for="email"
              ><span class="d-flex justify-content-between">
                <b>CEP: </b>
                <small v-if="small15()" class="text-danger">
                  Campo obrigatório!</small
                >
              </span>
              <input
                v-model="estabelecimento.cep"
                type="number"
                class="form-control"
                placeholder="CEP"
                required
              />
            </label>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="row mb-3">
        <h6>Social</h6>
        <hr />
      </div>
      <div class="row">
        <div class="col">
          <div class="row mb-3">
            <div class="col">
              <div class="d-flex justify-content-center align-items-center">
                <img
                  src="../assets/profile.png"
                  alt=""
                  width="80"
                  height="80"
                  class="d-inline-block align-text-top"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row mb-3">
            <div class="col">
              <div class="col-10">
                <div class="row mb-3">
                  <label for="url"
                    ><span class="d-flex justify-content-between">
                      <b>URL: </b>
                    </span>
                    <input
                      v-model="estabelecimento.url"
                      type="text"
                      class="form-control"
                      placeholder="url"
                    />
                  </label>
                </div>
              </div>
              <div class="col-10">
                <div class="row mb-3">
                  <label for="facebook"
                    ><span class="d-flex justify-content-between">
                      <b>Facebook: </b>
                    </span>
                    <input
                      v-model="estabelecimento.facebook"
                      type="text"
                      class="form-control"
                      placeholder="facebook"
                    />
                  </label>
                </div>
              </div>
              <div class="col-10">
                <div class="row mb-3">
                  <label for="youtube"
                    ><span class="d-flex justify-content-between">
                      <b>Youtube: </b>
                    </span>
                    <input
                      v-model="estabelecimento.youtube"
                      type="text"
                      class="form-control"
                      placeholder="youtube"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row mb-3">
            <div class="col">
              <div class="col-10">
                <div class="row mb-3">
                  <label for="instagram"
                    ><span class="d-flex justify-content-between">
                      <b>Instagram: </b>
                    </span>
                    <input
                      v-model="estabelecimento.instagram"
                      type="text"
                      class="form-control"
                      placeholder="instagram"
                    />
                  </label>
                </div>
              </div>
              <div class="col-10">
                <div class="row mb-3">
                  <label for="twitter"
                    ><span class="d-flex justify-content-between">
                      <b>Twitter: </b>
                    </span>
                    <input
                      v-model="estabelecimento.twitter"
                      type="text"
                      class="form-control"
                      placeholder="twitter"
                    />
                  </label>
                </div>
              </div>
              <div class="col-10">
                <div class="row mb-3">
                  <label for="whatsapp"
                    ><span class="d-flex justify-content-between">
                      <b>Whatsapp: </b>
                    </span>
                    <input
                      v-model="estabelecimento.whatsapp"
                      type="text"
                      class="form-control"
                      placeholder="whatsapp"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="col-10">
            <div class="row mb-3">
              <label for="username"
                ><span class="d-flex justify-content-between">
                  <b>Tags: </b>
                </span>
                <textarea
                  v-model="estabelecimento.tags"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="8"
                ></textarea>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-evenly">
      <div class="">
        <div class="col-5">
          <button id="cancelar" type="button" class="btn btn-secondary">
            <router-link class="text-light text-decoration-none" to="/">
              Cancelar
            </router-link>
          </button>
        </div>
        <div>
          <button
            v-if="disabled2()"
            type="button"
            disabled
            class="btn btn-light border border-primary"
          >
            <router-link class="text-primary text-decoration-none" to="/"
              >Salvar
            </router-link>
          </button>
          <button
            v-else
            @click="cadastrarEstabelecimento()"
            type="button"
            class="btn btn-light border border-primary text-primary"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import supabase from '../services/index';

export default {
  name: "adicionar",
  components: {},
  data() {
    return {
      estabelecimento: {
        razaosocial: "",
        inscricao: "",
        cpf: "",
        rg: "",
        nomefantasia: "",
        responsavel: "",
        telefone: "",
        email: "",
        rua: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
        url: "",
        facebook: "",
        youtube: "",
        instagram: "",
        twitter: "",
        whatsapp: "",
        tags: "",
      },
    };
  },
  methods: {
     cadastrarEstabelecimento() {
      const cadastroEst = {
        razaosocial: this.razaosocial,
        inscricao: this.inscricao,
        cpf: this.cpf,
        rg: this.rg,
        nomefantasia: this.nomefantasia,
        responsavel: this.responsavel,
        telefone: this.telefone,
        email: this.email,
        rua: this.rua,
        numero: this.numero,
        complemento: this.complemento,
        bairro: this.bairro,
        cidade: this.cidade,
        estado: this.estado,
        cep: this.cep,
        url: this.url,
        facebook: this.facebok,
        youtube: this.youtube,
        instagram: this.instagram,
        twitter: this.twitter,
        whatsapp: this.whatsapp,
        tags: this.tags,
      };
      this.salvaCadastro(cadastroEst);
      this.$router.push('/');
    },
    async salvaCadastro(camposCadastro) {
      const { data, error } = await supabase
        .from('estabelecimento')
        .insert([camposCadastro]);
      this.success(data);
      this.error(error);
    },
    success(data) {
      console.log('informações: ', data);
    },
    error(error) {
      if (error) {
        console.log('error', error);
      }
    },
    disabled2() {
      return (
        this.estabelecimento.razaosocial === "" ||
        this.estabelecimento.inscricao === "" ||
        this.estabelecimento.cpf === "" ||
        this.estabelecimento.rg === "" ||
        this.estabelecimento.nomefantasia === "" ||
        this.estabelecimento.responsavel === "" ||
        this.estabelecimento.telefone === "" ||
        this.estabelecimento.email === "" ||
        this.estabelecimento.rua === "" ||
        this.estabelecimento.numero === "" ||
        this.estabelecimento.complemento === "" ||
        this.estabelecimento.bairro === "" ||
        this.estabelecimento.cidade === "" ||
        this.estabelecimento.estado === "" ||
        this.estabelecimento.cep === ""
      );
    },
    small01() {
      return this.estabelecimento.razaosocial === "";
    },
    small02() {
      return this.estabelecimento.inscricao === "";
    },
    small03() {
      return this.estabelecimento.cpf === "";
    },
    small04() {
      return this.estabelecimento.rg === "";
    },
    small05() {
      return this.estabelecimento.nomefantasia === "";
    },
    small06() {
      return this.estabelecimento.responsavel === "";
    },
    small07() {
      return this.estabelecimento.telefone === "";
    },
    small08() {
      return this.estabelecimento.email === "";
    },
    small09() {
      return this.estabelecimento.rua === "";
    },
    small10() {
      return this.estabelecimento.numero === "";
    },
    small11() {
      return this.estabelecimento.complemento === "";
    },
    small12() {
      return this.estabelecimento.bairro === "";
    },
    small13() {
      return this.estabelecimento.cidade === "";
    },
    small14() {
      return this.estabelecimento.estado === "";
    },
    small15() {
      return this.estabelecimento.cep === "";
    },
  },
};
</script>


<style scoped>
</style>