<template>
  <div id="services">
    <header class="section-header">
      <h3>Serviços</h3>
      <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
    </header>
    <b-row>
      <b-col col lg="4" md="6" sm="12" cols="12">
        <div class="box">
          <div class="icon" style="background: #fceef3;">
            <i class="icon ion-ios-analytics" style="color: #ff689b;"></i>
          </div>
          <h4 class="title">
            <a href>Lorem Ipsum</a>
          </h4>
          <p
            class="description"
          >Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
      </b-col>
      <b-col col lg="4" md="6" sm="12" cols="12">
        <div class="box">
          <div class="icon" style="background: #fff0da;">
            <i class="icon ion-md-bookmarks" style="color: #e98e06;"></i>
          </div>
          <h4 class="title">
            <a href>Dolor Sitema</a>
          </h4>
          <p
            class="description"
          >Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
        </div>
      </b-col>
      <b-col col lg="4" md="6" sm="12" cols="12">
        <div class="box">
          <div class="icon" style="background: #e6fdfc;">
            <i class="icon ion-ios-paper" style="color: #3fcdc7;"></i>
          </div>
          <h4 class="title">
            <a href>Sed ut perspiciatis</a>
          </h4>
          <p
            class="description"
          >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
      </b-col>
      <b-col col lg="4" md="6" sm="12" cols="12">
        <transition name="fade">
          <div class="box">
            <div class="icon" style="background: #eafde7;">
              <i class="icon ion-ios-speedometer" style="color:#41cf2e;"></i>
            </div>
            <h4 class="title">
              <a href>Magni Dolores</a>
            </h4>
            <p
              class="description"
            >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
        </transition>
      </b-col>
      <b-col col lg="4" md="6" sm="12" cols="12">
        <div class="box">
          <div class="icon" style="background: #e1eeff;">
            <i class="icon ion-ios-globe" style="color: #2282ff;"></i>
          </div>
          <h4 class="title">
            <a href>Nemo Enim</a>
          </h4>
          <p
            class="description"
          >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
        </div>
      </b-col>
      <b-col col lg="4" md="6" sm="12" cols="12">
        <div class="box">
          <div class="icon" style="background: #ecebff;">
            <i class="icon ion-ios-clock" style="color: #8660fe;"></i>
          </div>
          <h4 class="title">
            <a href>Eiusmod Tempor</a>
          </h4>
          <p
            class="description"
          >Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <why-us></why-us>
    </b-row>
  </div>
</template>

<script>
import WhyUs from "./porquenos.vue";
import JQuery from "jquery";
let $ = JQuery;

export default {
  name: "servico",
  components: {
    WhyUs
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#services {
  padding: 40px 0 40px 0;
  min-height: 768px;
}

#services .box {
  padding: 30px;
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
</style>
