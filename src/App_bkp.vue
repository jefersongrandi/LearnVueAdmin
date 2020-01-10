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

          <nav class="main-nav float-right d-none d-lg-block">
            <ul>
              <li class="active">
                <a href="#intro" @click="teste()">Home</a>
                <!-- v-scroll-to="{element: '#home', offset: -100 }" -->
              </li>
              <li>
                <a href="#about" v-scroll-to="{element: '#sobre'}">Sobre</a>
              </li>
              <li>
                <a href="#services" v-scroll-to="{element: '#servicos'}">Serviços</a>
              </li>
              <li>
                <a href="#" v-scroll-to="{element: '#fotos'}">Fotos</a>
              </li>
              <li>
                <a href="#" v-scroll-to="{element: '#equipe'}">Equipe</a>
              </li>
              <li>
                <a href="#">Matricule-se</a>
              </li>
              <li>
                <a href="#" v-scroll-to="{element: '#contato'}">Contato</a>
              </li>
            </ul>
          </nav>
          <!-- .main-nav -->
        </div>
      </div>
    </header>
    <main>
      <!--<div id="nenhum" class="row"></div>-->
      <section id="home" class="section hero is-primary is-fullheight">
        <div class="container">
          <h1 class="heading title is-1">Home</h1>
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
      <section id="contato" class="section hero is-primary is-fullheight">
        <div class="container">
          <h1 class="heading title is-1">Contato</h1>
        </div>
      </section>
    </main>
    <!--<scrollactive class="my-nav" v-on:itemchanged="onItemChanged">
      <a class="scrollactive-item"><router-link to="/home">Home</router-link></a>
      <a href="#about-us" class="scrollactive-item">About Us</a>
      <a href="#portfolio" class="scrollactive-item">Portfolio</a>
      <a href="#contact" class="scrollactive-item">Contact</a>
    </scrollactive>-->
    <!--<header id="site-header" class="nav is-fixed">
      <div class="container">
        <nav class="scrollactive-nav">
          <ul class="nav-center">
            <li><a href="#section-1" class="scrollactive-item nav-item is-active">Section 1</a></li>
            <li><a href="#section-2" class="scrollactive-item nav-item">Section 2</a></li>
            <li><a href="#section-3" class="scrollactive-item nav-item">Section 3</a></li>
            <li><a href="#section-4" class="scrollactive-item nav-item">Section 4</a></li>
          </ul>
        </nav>
      </div>
    </header>-->
    <!--<router-view></router-view>-->
    <!--<img width="25%" src="./assets/logo.png">
    <HelloWorld msg="Hello Vue in CodeSandbox!" />-->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import VueScrollTo from "vue-scrollto";

export default {
  name: "App",
  components: {
    HelloWorld, VueScrollTo
  },
  data() {
    return {
      ctrlScroll: null
    };
  },
  created: function() {
    //this.$VueScrollTo("element", 1500);
    //this.ctrlScroll = this.$scrollTo("element", 1500);
    //this.ctrlScroll();
    //console.log(this.$VueScrollTo);
    //this.$VueScrollTo = { element: "#home", offset: -150 };
    //this.$scrollTo("#contato", "1500", "1500");
    //this.ctrlScroll()
  },
  methods: {
    teste(element, duration, options) {
      console.log(this.VueScrollTo);
      var cancelScroll = this.$VueScrollTo.scrollTo(element, duration, options)
      console.log(cancelScroll);
      //cancelScroll = this.$scrollTo("#home", 1500, {});
      //cancelScroll();
      //var cancelScroll = this.$scrollTo("#home", "1500", "")
      //console.log(cancelScroll)
      //cancelScroll.scrollTo("#home", 1500)
    },
    onItemChanged(event, currentItem, lastActiveItem) {
      console.log(event);
      console.log(currentItem);
      console.log(lastActiveItem);
    }
  }
};
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

#nenhum {
  height: 100px;
}

#element,
#element2,
#element3 {
  height: 600px;
}

.hero.is-fullheight {
  min-height: 100vh;
}
.hero.is-primary {
  background-color: #00d1b2;
  color: #fff;
}
.section {
  padding-top: 100px;
}
.section {
  background-color: #fff;
  padding: 3rem 1.5rem;
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
