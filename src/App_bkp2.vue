<template>
  <div id="app">
    <!--<p>
      <router-link to="/home">Go to Foo</router-link>
    </p>-->
    <header id="header">
      <div id="topbar">
        <div class="container">
          <div class="social-links">
            <a href="#" class="twitter">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#" class="instagram">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="d-flex w-100 justify-content-center">
        <div class="container menu">
          <div class="logo float-left" id="titulobar">
            <!-- Uncomment below if you prefer to use an image logo -->
            <h3 class="text-light">
              <a href="#intro" class="scrollto">Maria Bailarina</a>
            </h3>
            <!--<a href="#header" class="scrollto"><img src="img/mbailarina.jpg" alt="" class="img-fluid" style="width:200px;height:100px;"></a> -->
          </div>

          <nav class="main-nav float-right d-none d-lg-block" id="menu">
            <ul>
              <li class="active">
                <a id="lkhome" @click="moverScroll">Home</a>
              </li>
              <li>
                <a id="lksobre" @click="moverScroll">Sobre</a>
              </li>
              <li>
                <a id="lkservicos" @click="moverScroll">Serviços</a>
              </li>
              <li>
                <a id="lkfotos" @click="moverScroll">Fotos</a>
              </li>
              <li>
                <a id="lkequipe" @click="moverScroll">Equipe</a>
              </li>
              <li>
                <a id="lkmatricule" @click="moverScroll">Matricule-se</a>
              </li>
              <li>
                <a id="lkcontato" @click="moverScroll">Contato</a>
              </li>
            </ul>
          </nav>
          <!-- .main-nav -->
        </div>
      </div>
    </header>

    <main class="principal">
      <!--<div id="nenhum" class="row"></div>-->
      <section id="home" class="section hero is-primary is-fullheight">
        <div class="container">
          <!--<h1 class="heading title is-1">Home</h1>-->
          <home></home>
        </div>
      </section>
      <section id="sobre" class="section hero is-primary is-fullheight">
        <div class="container">
          <h1 class="heading title is-1">Sobre</h1>
        </div>
      </section>
      <section id="servicos" class="section hero is-primary is-fullheight">
        <div class="container">
          <h1 class="heading title is-1">Servicos</h1>
        </div>
      </section>
      <section id="fotos" class="section hero is-primary is-fullheight">
        <div class="container">
          <h1 class="heading title is-1">Fotos</h1>
        </div>
      </section>
      <section id="equipe" class="section hero is-primary is-fullheight">
        <div class="container">
          <h1 class="heading title is-1">Nossa Equipe</h1>
        </div>
      </section>
      <section id="matricule" class="section hero is-primary is-fullheight">
        <div class="container">
          <h1 class="heading title is-1">Matricula Online</h1>
        </div>
      </section>
      <section id="contato" class="section hero is-primary is-fullheight">
        <div class="container">
          <h1 class="heading title is-1">Contato</h1>
        </div>
      </section>
    </main>

    <div v-scroll="handleScroll" v-if="mostrarScroll"></div>

    <!--<router-view></router-view>-->
    <!--<img width="25%" src="./assets/logo.png">
    <HelloWorld msg="Hello Vue in CodeSandbox!" />-->
  </div>
</template>

<script>
import Home from "./views/home.vue";
import JQuery from "jquery";
let $ = JQuery;

export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      mostrarScroll: true
    };
  },
  mounted() {},
  created: function() {},
  beforeDestroy() {},
  methods: {
    moverScroll(event) {
      var vm = this;
      vm.mostrarScroll = false;
      var target = event.target;
      var linka = target.getAttribute("id").replace("lk", "");

      var main_nav = $(".main-nav, .mobile-nav");
      main_nav.find("li").removeClass("active");

      event.target.parentElement.className = "active";

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

      //console.log("agora: " + cur_pos);

      //$.each(nav_sections, function() {
      nav_sections.each(function(index, item) {
        //console.log($(this).attr("id"));
        var top = $(this).offset().top - (main_nav_height + 100);
        var bottom = top + $(this).outerHeight() + 10;

        if (cur_pos >= top && cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
          main_nav
            //.find('a[href="#' + $(this).attr("id") + '"]')
            //'td[id="'+horaInicial+'"]'
            .find('a[id="lk' + $(this).attr("id") + "")
            .parent("li")
            .addClass("active");
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
  color: #2c3e50;
  margin-top: 60px;
}

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
  /*margin-top: 100px !important;*/
}
.section {
  background-color: #fff;
  /*padding: 3rem 1.5rem;*/
}
.hero {
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  background-color: #fff;
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
</style>
