<template>
  <div>
    <form-wizard
      @on-complete="onComplete"
      title
      subtitle
      shape="circle"
      color="#e67e22"
      error-color="#ff4949"
      :start-index="3"
    >
      <!--color="#20a0ff"-->
      <tab-content title="Responsável" icon="icon ion-md-contact" :before-change="validaResp">
        <el-form :model="formResp" class="demo-form-inline" :rules="regrasResp" ref="regraFormResp" label-position="top" >
          <el-form-item>

            <el-col :span="24">
              <el-form-item label="Nome" prop="nome">
                <el-input v-model="formResp.nome" placeholder="Nome Completo"></el-input>
              </el-form-item>
            </el-col>

          </el-form-item>

          <el-form-item>

            <el-col :span="24">
              <el-form-item prop="datanascto" label="Data de Nascimento" required>
                <el-date-picker
                  type="date"
                  placeholder="Data de Nascimento"
                  v-model="formResp.datanascto"
                  format="dd/MM/yyyy"
                  style="width: 100%;"
                  :prefix-icon="'icon ion-md-calendar'"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>

          <el-form-item>          
            <el-col :span="24">
              <el-form-item label="Sexo" prop="sexo" required>
                <el-radio-group v-model="formResp.sexo">
                  <el-radio :label="'M'">Masculino</el-radio>
                  <el-radio :label="'F'">Feminino</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-form-item> 
        </el-form>
      </tab-content>
      <tab-content title="Bailarina(o)" icon="icon ion-md-body" :before-change="validaAluno"> <!-- class="demo-form-inline" -->
        <el-form
          :model="formAluno"
          :rules="regrasAluno"
          ref="formAlunoRule"
          label-width="120px"
          label-position="top" 
          
        >
          
          <el-form-item>
            <el-col :xs="24">
              <el-form-item label="Nome" prop="nome" required>
                <el-input v-model="formAluno.nome" placeholder="Nome Completo"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>

          <el-form-item>
            <el-col :lg="{span: 11}" :sm="24">
              <el-form-item prop="datanascto" label="Data de Nascimento" required>
                <el-date-picker
                  type="date"
                  placeholder="Data de Nascimento"
                  v-model="formAluno.datanascto"
                  format="dd/MM/yyyy"
                  style="width: 100%;"
                  :prefix-icon="'icon ion-ios-analytics'"
                ></el-date-picker>
              </el-form-item>
            </el-col>
   
            <el-col :lg="{span: 11, offset: 2}" :sm="{span: 24, offset: 0}">
              <el-form-item prop="sexo" label="Sexo" required>
                <el-radio-group v-model="formAluno.sexo">
                  <el-radio :label="'M'">Masculino</el-radio>
                  <el-radio :label="'F'">Feminino</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-form-item>

          <el-form-item>          
            <el-col :span="24">
              <el-form-item label="Escola" prop="escola" required>
                <el-select v-model="formAluno.escola" filterable placeholder="Select" class="col-lg-12 px-0">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>          
          </el-form-item>
        </el-form>
      </tab-content>

      <tab-content title="Endereço" icon="icon ion-md-home" :before-change="validaEndereco">
        <el-form
          :model="formEndereco"
          :rules="regrasEndereco"
          ref="formEnderecoRule"
          label-width="120px"
          label-position="top" 
        >
          <el-form-item>
            <el-col :md="{span: 5}" :xs="{span: 24}">
              <el-form-item label="Cep" prop="cep" required>
                <el-input v-model="formEndereco.cep" placeholder="Ex. 87306-319"></el-input>
              </el-form-item>
            </el-col>

            <el-col :md="{span: 17, offset: 2}" :sm="{span: 24, offset: 0}">
              <el-form-item label="Bairro" prop="bairro">
                <el-input v-model="formEndereco.bairro" placeholder="Jd. Isabel"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>

          <el-form-item>
            <el-col :xs="{span: 24, offset: 0}">
              <el-form-item label="Logradouro" prop="logradouro" required>
                <el-input
                  v-model="formEndereco.logradouro"
                  placeholder="Ex. Av. Manoel Mendes Camargo, 178"
                ></el-input>
              </el-form-item>              
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :xs="{span: 24, offset: 0}">
              <el-form-item label="Complemento" prop="complemento">
                <el-input v-model="formEndereco.complemento" placeholder="Ex. Apto 201"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>    
        </el-form>
      </tab-content>

      <tab-content title="Contato" icon="icon ion-logo-whatsapp" :before-change="validaContato">
        <el-form
          :model="formContato"
          class="demo-form-inline"
          :rules="regrasContato"
          ref="formContatoRule"
          label-position="top"
        >
          <el-form-item>
            <el-col :span="24">
              <el-form-item label="Celular" prop="celular" required>
                <!--<el-input v-model="formContato.celular" placeholder="Ex. (44)99876-6532"></el-input> -->
                <vue-tel-input v-model="formContato.celular" placeholder="Insira um telefone celular"></vue-tel-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="24">
              <el-form-item label="Fixo" prop="fixo">
                <!--<el-input v-model="formContato.fixo" placeholder="Ex. (44)3523-3333"></el-input>-->
                <!--<input type="text" v-model="formContato.fixo"/>-->
                  <vue-tel-input v-model="formContato.fixo" placeholder="Insira um telefone fixo"></vue-tel-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="24">
              <el-form-item label="E-mail" prop="email">
                <el-input v-model="formContato.email" placeholder="mariabailarina@gmail.com"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-form>
      </tab-content>

      <el-button type="warning" slot="prev">Voltar</el-button>
      <el-button type="warning" slot="next">Próximo</el-button>
      <el-button type="warning" slot="finish">Enviar</el-button>
    </form-wizard>
  </div>
</template>
<script>
import { VueTelInput } from "vue-tel-input";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  name: "Cadastro",
  components: {
    VueTelInput,
    FormWizard,
    TabContent
  },
  data() {
    return {
      options: [
        {
          value: "1",
          label: "Colégio Santa Cruz"
        },
        {
          value: "2",
          label: "Colégio Integrado"
        },
        {
          value: "3",
          label: "Colégio Alfa"
        },
        {
          value: "4",
          label: "Colégio Conexão"
        },
        {
          value: "5",
          label: "Colégio Caic"
        }
      ],
      value: "",
      formResp: {
        nome: "",
        datanascto: "",
        sexo: "",
        date1: ""
      },
      regrasResp: {
        nome: [
          {
            required: true,
            message: "Informe nome completo do Pai/Mãe ou Responsável",
            trigger: "blur"
          },
          {
            min: 3,
            max: 100,
            message: "Digite pelo menos 3 cacteres",
            trigger: "blur"
          }
        ],
        datanascto: [
          {
            type: "date",
            required: true,
            message: "Informe Data Nascimento. Ex: '01/01/1990'",
            trigger: "change"
          }
        ],
        sexo: [
          {
            required: true,
            message: "Informe o sexo",
            trigger: "change"
          }
        ]
      },
      formAluno: {
        nome: "",
        datanascto: "",
        sexo: "",
        escola: ""
      },
      regrasAluno: {
        nome: [
          {
            required: true,
            message: "Informe nome completo do Aluno(a)",
            trigger: "blur"
          },
          {
            min: 3,
            max: 100,
            message: "Digite pelo menos 3 cacteres",
            trigger: "blur"
          }
        ],
        datanascto: [
          {
            type: "date",
            required: true,
            message: "Informe Data Nascimento. Ex: '01/01/1990'",
            trigger: "change"
          }
        ],
        sexo: [
          {
            required: true,
            message: "Informe o sexo",
            trigger: "change"
          }
        ],
        escola: [
          {
            required: true
          }
        ]
      },
      formEndereco: {
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: ""
      },
      regrasEndereco: {
        cep: [
          {
            required: true,
            message: "Informe o CEP",
            trigger: "blur"
          },
          {
            min: 8,
            max: 9,
            message: "Digite pelo menos 8 cacteres",
            trigger: "blur"
          }
        ],
        logradouro: [
          {
            required: true,
            message: "Informe o endereço incluido número do local",
            trigger: "blur"
          },
          {
            min: 10,
            max: 100,
            message: "Digite pelo menos 10 cacteres",
            trigger: "blur"
          }
        ],
        complemento: [
          {
            required: false
          }
        ],
        bairro: [
          {
            message: "Informe um bairro",
            trigger: "blur"
          }
        ]
      },
      formContato: {
        celular: "",
        fixo: "",
        email: ""
      },
      regrasContato: {
        celular: [
          {
            required: true,
            message: "Informe Celular para contato",
            trigger: "blur"
          },
          {
            min: 15,
            max: 15,
            message: "Telefone fixo de ter 11 números",
            trigger: "blur"
          }
        ],
        fixo: [
          {
            min: 14,
            max: 14,
            message: "Telefone fixo de ter 10 números",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Informe endereço de e-mail para contato",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Informe um e-mail corretamente",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  methods: {
    onComplete: function() {
      alert("Feito!");
    },
    validaResp() {
      return new Promise((resolve, reject) => {
        this.$refs.regraFormResp.validate(valid => {
          resolve(valid);
        });
      });
    },
    validaAluno() {
      return new Promise((resolve, reject) => {
        this.$refs.formAlunoRule.validate(valid => {
          resolve(valid);
        });
      });
    },
    validaEndereco() {
      return new Promise((resolve, reject) => {
        this.$refs.formEnderecoRule.validate(valid => {
          resolve(valid);
        });
      });
    },
    validaContato() {
      return new Promise((resolve, reject) => {
        this.$refs.formContatoRule.validate(valid => {
          resolve(valid);
        });
      });
    }
  }
};
</script>

<style>
.vue-form-wizard {
  min-height: 450px;
}

.vue-form-wizard.md .wizard-icon-circle {
  color: #e67e22 !important;
}

.vue-form-wizard .stepTitle {
  color: #e67e22 !important;
}

.vue-form-wizard button {
  min-width: 90px !important;
  max-width: 120px !important;
}

.vue-form-wizard .wizard-tab-content {
  min-height: 20px;
  padding: 20px 20px 10px;
}

.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle {
  position: relative;
  top: 36px;
  height: 4px;
}

.vue-form-wizard.md .wizard-icon-circle {
  max-width: 60px;
  max-height: 60px;
  font-size: 30px;
}


.vue-form-wizard .el-form-item__label {
  padding: 0;
  margin: 0;
}

.vue-form-wizard .stepTitle {
  font-size: 14px;
}

@media (max-width: 520px) {
  .vue-form-wizard .wizard-tab-content {
    min-height: 20px;
    padding: 20px 20px 10px;
  }

  .vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle {
    position: relative;
    top: 26px;
    height: 4px;
  }

  .vue-form-wizard.md .wizard-icon-circle {
    max-width: 40px;
    max-height: 40px;
    font-size: 14px;
  }

  .vue-form-wizard .el-form-item__label {
    padding: 0;
    margin: 0;
  }

  .vue-form-wizard .stepTitle {
    font-size: 10px;
  }
}
</style>
