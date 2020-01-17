<template>
  <div id="homein">

      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100 desktop"
              src="../img/slide1_w.jpg"
              alt="image slot"
            >
            <img
              class="d-block img-fluid w-100 mobile"
              src="../img/slide1_h.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100 desktop"
              src="../img/slide2_w.jpg"
              alt="image slot"
            >
            <img
              class="d-block img-fluid w-100 mobile"
              src="../img/slide2_h.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100 desktop"
              src="../img/slide3_w.jpg"
              alt="image slot"
            >
            <img
              class="d-block img-fluid w-100 mobile"
              src="../img/slide3_h.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
      </b-carousel>
  </div>
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

<style>


.carousel-indicators {
    padding-bottom: 50px;
}

#carousel-1 .carousel-item .img-fluid {
  width: 100vw !important;
  height:100%;
  min-height: 100vh !important;
  max-height: 100vh !important;
}

#carousel-1 .carousel-item .mobile {
  display: none !important;
}

#carousel-1 .carousel-item .desktop {
  display: block !important;
}

#carousel-1 .carousel-inner img {
  margin: auto;
}

@media screen and (max-width: 767px) {
  #carousel-1 .carousel-item .img-fluid {
    width: 100% !important;
    min-width: 100vw !important;
    height: 100vh !important;
    min-height: 100vh !important;
    max-height: 100vh !important;
  }
      
  #carousel-1 .carousel-item .mobile {
    display: block !important;
  }
  
  #carousel-1 .carousel-item .desktop {
    display: none !important;
  }
}

</style>
