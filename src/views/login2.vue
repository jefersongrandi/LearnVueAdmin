<template>
  <b-container fluid>
    <div class="d-flex justify-content-center">
      <b-alert v-model="existeerro" variant="danger" dismissible>{{erro}}</b-alert>
      <h1>Login</h1>
      <b-form>
        <b-form-group id="Email" label="Email" label-for="Email">
          <b-form-input id="Email" v-model="email" type="email" placeholder="Digite seu email"></b-form-input>
        </b-form-group>
        <br>
        <b-form-group id="Senha" label="Senha" label-for="Senha">
          <b-form-input id="Senha" v-model="senha" type="password" placeholder="Digite sua senha"></b-form-input>
        </b-form-group>
        <b-button type="button" @click="login" variant="primary">Login</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <!--<input type="text" placeholder="Email" v-model="email">
      <br>
      <input type="password" placeholder="Senha" v-model="senha">
      <br>-->
      
      <p>
        Você não tem conta?
        <span>
          <router-link to="/registrar">crie uma conta</router-link>
        </span>
      </p>
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
        //this.$router.replace("home");
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
