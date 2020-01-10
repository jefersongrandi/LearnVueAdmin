<template>
  <div id="timemaria">
    <div class="section-header">
      <h3>Nosso time</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
    </div>

    <b-row align-h="center" align-v="center"> <!--class="justify-content-lg-center"-->
      <b-col col lg="3" md="4" sm="8" cols="10">
        <div class="member">
          <!--<b-img thumbnail fluid :src="'../src/img/team-1.jpg'" alt="image1"></b-img>
          <b-img thumbnail fluid :src="require('../img/team-1.jpg')" alt="image1"></b-img>-->
          <!--<b-img :src="'../img/team-1.jpg'"></b-img>-->
          <img src="../img/team-1.jpg" class="img-fluid" alt="image1">
          <div class="member-info">
            <div class="member-info-content">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <div class="social">
                <a href>
                  <i class="fa fa-twitter"></i>
                </a>
                <a href>
                  <i class="fa fa-facebook"></i>
                </a>
                <a href>
                  <i class="fa fa-google-plus"></i>
                </a>
                <a href>
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col col lg="3" md="4" sm="8" cols="10">
        <div class="member">
          <img src="../img/team-2.jpg" class="img-fluid" alt>
          <div class="member-info">
            <div class="member-info-content">
              <h4>Karina Senger</h4>
              <span>Sócia-Professora</span>
              <div class="social">
                <a href>
                  <i class="fa fa-twitter"></i>
                </a>
                <a href>
                  <i class="fa fa-facebook"></i>
                </a>
                <a href>
                  <i class="fa fa-google-plus"></i>
                </a>
                <a href>
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col col lg="3" md="4" sm="8" cols="10">
        <div class="member">
          <img src="../img/team-4.jpg" class="img-fluid" alt>
          <div class="member-info">
            <div class="member-info-content">
              <h4>Luana Passos Bertoldi</h4>
              <span>Sócia-Professora</span>
              <div class="social">
                <a href>
                  <i class="fa fa-twitter"></i>
                </a>
                <a href>
                  <i class="fa fa-facebook"></i>
                </a>
                <a href>
                  <i class="fa fa-google-plus"></i>
                </a>
                <a href>
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;

export default {
  name: "MeuTime",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#timemaria {
  padding: 40px 0 40px 0;
  min-height: 940px;
}

#timemaria .member {
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}

#timemaria .member .member-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.2s;
  padding: 15px 0;
  background: rgba(29, 28, 41, 0.6);
}

#timemaria .member .member-info-content {
  transition: margin 0.2s;
  height: 40px;
  transition: height 0.4s;
}

#timemaria .member:hover .member-info {
  transition: 0.4s;
}

#timemaria .member:hover .member-info-content {
  height: 80px;
}

#timemaria .member h4 {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
  color: #fff;
}

#timemaria .member span {
  font-style: italic;
  display: block;
  font-size: 13px;
  color: #fff;
}

#timemaria .member .social {
  margin-top: 15px;
}

#timemaria .member .social a {
  transition: none;
  color: #fff;
}

#timemaria .member .social a:hover {
  color: #1bb1dc;
}

#timemaria .member .social i {
  font-size: 18px;
  margin: 0 2px;
}
</style>
