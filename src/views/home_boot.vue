<template>
  <b-row id="home">

    <b-col lg="12">

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner center-block">
          <div class="carousel-item active">
            <img class="d-block img-fluid desktop" src="../img/slide1_w.jpg" alt="Primeiro Slide">
            <img class="d-block img-fluid mobile" src="../img/slide1_h.jpg" alt="Primeiro Slide">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid desktop" src="" alt="Segundo Slide">
            <img class="d-block img-fluid mobile" src="" alt="Segundo Slide">
          </div>
          <div class="carousel-item">
            <img class="d-block img-fluid desktop" src="" alt="Terceiro Slide">
            <img class="d-block img-fluid mobile" src="" alt="Terceiro Slide">
          </div> 
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Próximo</span>
        </a>
      </div>

    </b-col>
  </b-row>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;

export default {
  name: "home",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
};
</script>

<style scoped>

#home {
  padding: 0px 0 40px 0;
  min-height: 768px;
}

.carousel-item .img-fluid {
  width:100%;
  height:100%;
  min-height: 92vh !important;
  max-height: 92vh !important;
}

.carousel-item .mobile {
  display: none !important;
}

.carousel-item .desktop {
  display: block !important;
}

.carousel-inner img {
  margin: auto;
}

@media screen and (max-width: 767px) {
  .carousel-item .img-fluid {
    width: auto !important;
    height: 92vh !important;
    min-height: 92vh !important;
  }
      
  .carousel-item .mobile {
    display: block !important;
  }
  
  .carousel-item .desktop {
    display: none !important;
  }
}

</style>
