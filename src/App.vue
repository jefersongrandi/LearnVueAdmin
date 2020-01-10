<template>
  <b-row id="app" align-h="center">
    <b-col col-sm="11" cols="12">
      <!--<p>
        <router-link to="/home">Go to Foo</router-link>
      </p>-->
      <header id="header">
        <b-navbar toggleable="sm" type="dark" variant="light" fixed="top" :class="'main-nav'">
          <b-navbar-brand></b-navbar-brand>
          <h3 class="text-light">
            <a>Maria Bailarina</a>
          </h3>
          <b-button type="submit" @click="modalCad = !modalCad" variant="primary">Matricule sua pequena</b-button>
          <b-navbar-toggle target="nav-collapse" style="border: solid 1px black"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav class="navitems">
            <!--<b-navbar-nav>
              <b-nav-item class="ativado">MARIA BAILARINA</b-nav-item>
            </b-navbar-nav>-->
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item id="lkhome" :class="'active'" @click="moverScroll">Home</b-nav-item>
              <b-nav-item id="lksobre" @click="moverScroll">Sobre</b-nav-item>
              <b-nav-item id="lkservicos" @click="moverScroll">Serviços</b-nav-item>
              <b-nav-item id="lkequipe" @click="moverScroll">Equipe</b-nav-item>
              <b-nav-item id="lkcontato" @click="moverScroll">Contato</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </header>
      <main class="principal">
        <!--<div id="nenhum" class="row"></div>-->
        <section id="home" class="section hero is-primary is-fullheight">
          <b-container fluid>
            <home></home>
          </b-container>
        </section>
        <section id="sobre" class="section hero is-primary is-fullheight">
          <b-container fluid>
            <sobre></sobre>
          </b-container>
        </section>
        <section id="servicos" class="section hero is-primary is-fullheight">
          <b-container fluid>
            <servico></servico>
          </b-container>
        </section>
        <section id="equipe" class="section hero is-primary is-fullheight">
          <b-container fluid>
            <meu-time></meu-time>
          </b-container>
        </section>
      </main>

      <footer id="footer" class="section-bg">
        <section id="contato" class="section hero is-primary is-fullheight">
          <b-container fluid>
            <contato></contato>
          </b-container>
        </section>
      </footer>

      <b-modal size="lg" scrollable centered hide-footer v-model="modalCad" id="modal-1" title="Cadastro de Aluno">
        <!--<p class="my-4">Hello from modal!</p>-->
        <cadastro></cadastro>
      </b-modal>

      <div v-scroll="handleScroll" v-if="mostrarScroll"></div>
      <!--<router-view></router-view>-->
      <!--<img width="25%" src="./assets/logo.png">
      <HelloWorld msg="Hello Vue in CodeSandbox!" />-->
    </b-col>
    <!--<a target="_blank"><img class="whatsapp" src="img/whatsapp.png" /></a>-->
  </b-row>
</template>

<script>
import Home from "./views/home.vue";
import Sobre from "./views/sobre.vue";
import Servico from "./views/servico.vue";
import MeuTime from "./views/meutime.vue";
import Contato from "./views/contato.vue";
import Cadastro from "./views/cadastro.vue";
import JQuery from "jquery";
let $ = JQuery;

export default {
  name: "App",
  components: {
    Home,
    Sobre,
    Servico,
    MeuTime,
    Contato,
    Cadastro
  },
  data() {
    return {
      mostrarScroll: true,
      modalCad: false
    };
  },
  mounted() {},
  created: function() {},
  beforeDestroy() {},
  methods: {
    moverScroll(event) {
      var vm = this;
      vm.mostrarScroll = false;
      var target = event.target.parentElement;
      var linka = target.getAttribute("id").replace("lk", "");
      //var linka = this.$refs.lkhome.getAttribute("id").replace("lk", "");

      //var main_nav = $(".main-nav, .mobile-nav"); navitems
      var main_nav = $(".navitems");
      main_nav.find("li").removeClass("active");

      event.target.parentElement.className = "active";
      //this.$refs.lkhome.parentElement.className = "active";
      //console.log(event.target.parentElement.parentElement);

      //document.body.scrollTop = 2426; // For Safari
      //document.documentElement.scrollTop = 2426; // For Chrome, Firefox, IE and Opera

      /*window.scrollTo(1426, 0)
      return*/

      //container.scrollTop = scrollHeight
      //$( ".principal" ).scrollTop( scrollHeight );
      $("html,body").animate(
        {
          scrollTop: $("#" + linka).offset().top - 100
        },
        2000,
        function() {
          vm.mostrarScroll = true;
        }
      );
      //vm.mostrarScroll = true
    },

    //this.$refs.fullpage.api.moveTo(section);
    //var container = document.querySelector("#menu");
    /*let link = "lk" + section;
      var linkEl = document.querySelector("#" + link);
      let pai = linkEl.parentNode;
      pai.classList.add("active");*/
    //var nav_sections = $("section");
    //console.log(nav_sections);
    //linkEl.innerHTML = 'Todo o HTML de p será substituído!';
    handleScroll() {
      //console.log("Handrescroll");
      //console.log(window.scrollY);

      if (!this.mostrarScroll) return;

      var nav_sections = $("section");
      var main_nav = $(".main-nav, .mobile-nav");
      var main_nav_height = $("#header").outerHeight();
      var cur_pos = window.scrollY;

      console.log("agora: " + cur_pos);
      //console.log(main_nav);
      //return;

      //$.each(nav_sections, function() {
      nav_sections.each(function(index, item) {
        console.log($(this).attr("id"));
        var atrr = $(this).attr("id");
        var top = $(this).offset().top - (main_nav_height + 180);
        var bottom = top + $(this).outerHeight() + 40;

        console.log("Top: " + top);
        console.log("Bottom: " + bottom);

        if (cur_pos >= top && cur_pos <= bottom) {
          //console.log(main_nav.find('a[id="lk' + $(this).attr("id") + ""))
          main_nav.find("li").removeClass("active");
          main_nav.find("li").each(function(index, item) {
            //console.log('lk'+atrr);
            if ($(this).attr("id") === "lk" + atrr) {
              $(this).addClass("active");
              //console.log($(this));
            } else {
              $(this).removeClass("active");
            }
          });

          /*main_nav
            .find('a[id="lk' + $(this).attr("id") + "")
            .parent("li")
            .addClass("active");*/
        }
      });
    }
  }
};

(function($) {
  // Navigation active state on scroll
  /*
  var nav_sections = $("section");
  var main_nav = $(".main-nav, .mobile-nav");
  var main_nav_height = $("#header").outerHeight();

  $(window).on("scroll", function() {
    var cur_pos = $(this).scrollTop();    

      //console.log(nav_sections)

    $.each(nav_sections, function(index, el) {
    //nav_sections.each(function(index, el) {
      console.log(index)
      var top = $(this).offset().top - main_nav_height,
        bottom = top + $(this).outerHeight();

        console.log('TOP: '+top);
        console.log('BOTTOM: '+bottom);

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find("li").removeClass("active");
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
    });
  });*/
})(JQuery);
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
  background-color: #ffffff !important;
  /*max-width: 1280px !important;*/
}

a {
  color: #0a98c0 !important;
  transition: 0.5s;
}

.main-pages {
  margin-top: 60px;
}

.navbar {
  background-color: #322663 !important;
  margin: 0;
  padding: 10px;
}

.navitems > ul > li > a {
  font-weight: bold;
}

a:hover,
a:active,
a:focus {
  color: #1bb1dc !important;
  outline: none;
  text-decoration: none;
}

.navbar-nav a:hover,
.navbar-nav .active > a,
.navbar-nav li:hover > a {
  color: #1bb1dc !important;
  text-decoration: none;
}

.main-nav {
  padding: 10px 35px 10px 35px;
}

/*
.main {
  padding-top: 100px !important;
}

.hero.is-fullheight {
  min-height: 100vh;
}
.hero.is-primary {
  background-color: #00d1b2;
  color: #fff;
}
.section {
  background-color: #fff;
} */
main {
  margin-top: 50px;
}

.hero {
  min-height: 768px;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  background-color: #ffffff !important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

#footer {
  padding: 0 0 30px 0;
  font-size: 14px;
  background: #fff;
}

/*.whatsapp {
  position: fixed;
  right: 15px;
  bottom: 60px;
  transition: background 0.5s;
  z-index: 10000000;
  max-width: 100px;
  max-height: 50px;
}*/
</style>
