<template>
  <div id="services">
    <header class="section-header">
      <h3>Serviços</h3>
      <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
    </header>
    <b-row>
      <b-col col lg="4" md="6" sm="12" cols="12">
        <div class="box" @click.prevent="mostrartexto(1)">
          <div class="icon" style="background: #fceef3;">
            <i class="icon ion-ios-analytics" style="color: #ff689b;"></i>
          </div>
          <h4 class="title">
            <a href="">“Aulas especiais”? Elas existem? </a>
          </h4>
          <p
            class="description">
          </p>
        </div>
      </b-col>
      <b-col col lg="4" md="6" sm="12" cols="12">
        <div class="box" @click.prevent="mostrartexto(2)">
          <div class="icon" style="background: #fff0da;">
            <i class="icon ion-md-bookmarks" style="color: #e98e06;"></i>
          </div>
          <h4 class="title">
            <a href>Como é nossa Rotina?</a>
          </h4>
          <p
            class="description"
          ></p>
        </div>
      </b-col>
      <b-col col lg="4" md="6" sm="12" cols="12">
        <div class="box" @click.prevent="mostrartexto(3)">
          <div class="icon" style="background: #e6fdfc;">
            <i class="icon ion-ios-paper" style="color: #3fcdc7;"></i>
          </div>
          <h4 class="title">
            <a href>"Prof" posso assistir a aula?</a>
          </h4>
          <p
            class="description"
          ></p>
        </div>
      </b-col>

      <b-modal
        size="lg"
        scrollable
        centered
        hide-footer
        v-model="modalCad"
        id="modal-2"
        title=""
      >
        <!--<p class="my-4">Hello from modal!</p>-->
        <div v-if="inTexto1">

          <mensagem>

            <template v-slot:header>
              <h3>“Aulas especiais”? Elas existem? </h3>
            </template>

            <p>
              Todos os meses nós realizamos algumas aulas diferenciadas, cada uma com um objetivo específico:
              </p>
            <p>
              Temos nossa aula de teoria, onde a relembramos conteúdos já apresentados às pequenas. Buscamos correlacionar o que vivenciamos na prática com ilustrações, desenhos que as vezes são elaborados pelas próprias bailarinas e atividades diversas que abarcam atividades de psicomotricidade fina.
            </p>
            <p>
              As aulas de alongamento não podem faltar. É um momento em que passamos toda a aula com foco em explorar melhor os limites e possibilidades de cada corpo, e conhece-lo de forma mais específica.
            </p>
            <p>
              E não podemos esquecer das aulas de recreação, que aparecem uma vez por mês, para alegria das nossas pequenas, que amam se divertir, ter um momento de descontração com as amigas, e aprender sempre algo novo.
            </p>          

          </mensagem>
        </div>

        <div v-if="inTexto2">

          <mensagem>

            <template v-slot:header>
              <h3>Como é nossa Rotina? </h3>
            </template>

            <p>
              Nossas aulas acontecem duas vezes por semana, e tem duração de 45 minutos. Iniciamos ela com um aquecimento, depois de termos os corpos aquecidos vamos a técnica do balé clássico. 
            </p>
            <p>
              Na sequência fazemos algum exercício que tenha foco em desenvolver alguma habilidade específica, e por fim, encerramos a aula com alguma brincadeira, que tem sempre algum objetivo inserido por meio da ludicidade.
            </p>
            <p>
              Em todas as etapas da aula, as brincadeiras, o lúdico e a fantasia estão inseridas. A criança sempre é colaboradora nesse processo, tendo espaço para ser ouvida e vivenciar todas as etapas das aulas.
            </p>
          </mensagem>
        </div>

        <div v-if="inTexto3">

          <mensagem>

            <template v-slot:header>
              <h3>"Prof. posso assistir a aula?"</h3>
            </template>

            <p>
              O início das crianças no Balé é sempre um momento de muito entusiasmo, para pequenas, mas também para os pais, e é comum ouvir alguma mamãe perguntando: "Prof°, posso assistir a aula?"  
            </p>
            <p>
              Nós sabemos o quanto é difícil ficar do lado de fora da sala enquanto sua pequena bailarina faz as primeiras aulas de Balé, mas esse contato com a professora, sem a presença dos pais, é de extrema importância para criar uma conexão entre ambas, e assim gerar confiança e afinidade! 
            </p>
            <p>
              Sabe o que é mais legal? Para encerrar o primeiro semestre convidamos os familiares de nossas bailarinas para assistirem a uma aula! É a nossa "Aula Expositiva"!  
            </p>
            <p>
              E no encerramento do segundo semestre realizamos o nosso Espetáculo Anual, oportunidade de levar parentes e amigos para assistirem sua bailarina brilhar e encantar!
            </p>
            <p>
              Então não precisa se preocupar, você pode assistir a aula sim, no momento certo, ok?!
            </p>
          </mensagem>
        </div>  

      </b-modal>
     
    </b-row>
    <b-row>
      <why-us></why-us>
    </b-row>
  </div>
</template>

<script>
import WhyUs from "./porquenos.vue";
import mensagem from "./mensagem.vue";

export default {
  name: "servico",
  components: {
    WhyUs,
    mensagem
  },
  data() {
    return {
      modalCad: false,
      msgcontext: '',
      inTexto1: false,
      inTexto2: false,
      inTexto3: false,
      texto1: '',
      texto2: '',
      texto3: '',
    };
  },
  created() {
  },
  methods: {
    mostrartexto (item) {
      this.inTexto1 = false
      this.inTexto2 = false
      this.inTexto3 = false
      if (item == 1) {
        this.inTexto1 = true
      } else if (item == 2) {
        this.inTexto2 = true
      }else if (item == 3) {
        this.inTexto3 = true
      }
      this.modalCad = !this.modalCad
    }
  }
};
</script>

<style scoped>
#services {
  padding: 100px 0 100px 0;
  min-height: 100vh;
}

#services .box {
  padding: 60px;
  min-height: 300px;
  position: relative;
  overflow: hidden;
  border: solid 1px silver;
  border-radius: 10px;
  margin: 0 10px 40px 10px;
  background: #fff;
  box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
  transition: all 0.3s ease-in-out;
  text-align: center;
}

#services .box:hover {
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
}

#services .icon {
  margin: 0 auto 15px auto;
  padding-top: 6px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
}

#services .icon i {
  font-size: 36px;
  line-height: 1;
}

#services .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

#services .title a {
  color: #111;
}

#services .box:hover .title a {
  color: #1bb1dc;
}

#services .description {
  font-size: 14px;
  line-height: 28px;
  margin-bottom: 0;
  text-align: left;
}

@media screen and (max-width: 767px) {
  #services .box {
    padding: 40px;
  }
}

</style>
