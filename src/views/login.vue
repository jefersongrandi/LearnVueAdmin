<template>
  <b-container fluid>
    <div class="row justify-content-md-center">
      <div class="col-lg-4">
        <b-alert v-model="existeerro" variant="danger" dismissible>{{erro}}</b-alert>
        <b-card class="card" bg-variant="secondary" text-variant="white" title="Login">
          <b-card-text>
            <b-form>
              <b-form-group id="loginemail" label="Email" label-for="Email">
                <b-form-input
                  id="loginemail"
                  v-model="email"
                  type="email"
                  placeholder="Digite seu email"
                ></b-form-input>
              </b-form-group>
              <br>
              <b-form-group id="loginsenha" label="Senha" label-for="Senha">
                <b-form-input
                  id="loginsenha"
                  v-model="senha"
                  type="password"
                  placeholder="Digite sua senha"
                ></b-form-input>
              </b-form-group>
              <b-button type="button" @click="login" variant="primary">Login</b-button>&nbsp&nbsp
              <b-button type="reset" variant="danger" @click="existeerro=false">Reset</b-button>
            </b-form>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </b-container>
</template>

<script>
//import firebase from 'firebase';

export default {
  name: "login",
  data() {
    return {
      email: "",
      senha: "",
      erro: "",
      existeerro: false
    };
  },
  created: function() {
    this.existeerro = false;
    this.erro = "";
  },
  methods: {
    login: function() {
      this.erro = "";
      this.existeerro = false;
      if (this.email !== "" && this.senha !== "") {
        this.$router.replace("home");
      } else {
        this.erro = "Preencha todos os campos para efetuar login";
        this.existeerro = true;
      }
      /*firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
          (user) => {
            this.$router.replace('home')
            alert(`Bem Vindo, ${{email}}`)
          },
          (err) => {
            alert('Não foi possível realizar o login. ' + err.message)
          }
        )*/
    }
  }
};
</script>

<style scoped>
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
