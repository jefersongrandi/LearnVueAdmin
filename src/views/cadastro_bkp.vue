<template>
  <div>
    <!-- Tabs with card integration -->
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <form-wizard
        @on-complete="onComplete"
        title
        subtitle
        shape="circle"
        :start-index="0"
        @on-loading="setLoading"
        @on-validate="handleValidation"
        @on-error="handleErrorMessage"
        back-button-text="Voltar"
        next-button-text="Avançar"
        finish-button-text="Enviar"
        error-color="#f00"
      >
        <!--color="#9b59b6"-->
        <tab-content title="Responsável" icon="ti-user" :before-change="validateAsync">
          <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Nome do Pai/mãe ou Responsável"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Data Nascimento:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Data de Nascimento Ex: 01/01/2020"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Sexo">
            <b-form-radio-group
              id="radio-group-1"
              v-model="selected"
              :options="options"
              name="radio-options"
            ></b-form-radio-group>
          </b-form-group>
        </tab-content>
        <tab-content title="Aluno">
          <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Nome do(a) aluno(a)"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Data Nascimento:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Data de Nascimento Ex: 01/01/2020"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Sexo">
            <b-form-radio-group
              id="radio-group-1"
              v-model="selected"
              :options="options"
              name="radio-options"
            ></b-form-radio-group>
          </b-form-group>
        </tab-content>
        <tab-content title="Contato">Contato</tab-content>
        <div class="loader" v-if="loadingWizard"></div>
        <div v-if="errorMsg">
          <span class="error">{{errorMsg}}</span>
        </div>
      </form-wizard>
    </b-form>
  </div>
</template>
<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  name: "Cadastro",
  components: {
    FormWizard,
    TabContent
  },
  data() {
    return {
      loadingWizard: false,
      errorMsg: null,
      count: 0,
      tabIndex: 0,
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      selected: "first",
      options: [
        { text: "Mascullino", value: "M" },
        { text: "Feminino", value: "F" }
      ],
      show: true,
      btnDireita: "Próximo",
      btnEsquerda: "Anterior",
      mostrarBtnAnterior: false,
      value: 0,
      max: 100
    };
  },
  methods: {
    onComplete: function() {
      alert("Yay. Done!");
    },
    setLoading: function(value) {
      this.loadingWizard = value;
    },
    handleValidation: function(isValid, tabIndex) {
      console.log("Tab: " + tabIndex + " valid: " + isValid);
    },
    handleErrorMessage: function(errorMsg) {
      this.errorMsg = errorMsg;
    },
    validateAsync: function() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.count < 1) {
            this.count++;
            reject(
              "This is a custom validation error message. Click next again to get rid of the validation"
            );
          } else {
            this.count = 0;
            resolve(true);
          }
        }, 1000);
      });
    },
    validateFirstStep() {
      return new Promise((resolve, reject) => {
        this.$refs.ruleForm.validate(valid => {
          resolve(valid);
        });
      });
    },
    btnVoltar() {
      this.tabIndex--;
      this.tabIndex !== 2
        ? (this.btnDireita = "Próximo")
        : (this.btnDireita = "Enviar");
      this.tabIndex > 0
        ? (this.mostrarBtnAnterior = true)
        : (this.mostrarBtnAnterior = false);
      if (this.tabIndex === 0) {
        this.value = 0;
      }
      if (this.tabIndex === 1) {
        this.value = 33;
      }
      if (this.tabIndex === 2) {
        this.value = 66;
      }
    },
    btnAvancar() {
      this.tabIndex++;
      this.tabIndex !== 2
        ? (this.btnDireita = "Próximo")
        : (this.btnDireita = "Enviar");
      this.tabIndex > 0
        ? (this.mostrarBtnAnterior = true)
        : (this.mostrarBtnAnterior = false);
      if (this.tabIndex === 0) {
        this.value = 0;
      }
      if (this.tabIndex === 1) {
        this.value = 33;
      }
      if (this.tabIndex === 2) {
        this.value = 66;
      }
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
.vue-form-wizard {
  min-height: 600px;
}

button {
  min-width: 90px !important;
  max-width: 120px !important;
}
</style>

