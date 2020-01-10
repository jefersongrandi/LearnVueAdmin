<template>
  <div id="about">
    <b-row align-h="center">
      <b-col col lg="5" md="5" cols="10">
        <div class="about-img">
          <img src="../img/about-img.jpg" class="img-fluid" alt>
          <!--<b-img src="../img/about-img.jpg" fluid alt="Responsive image"></b-img> class="img-fluid" -->
        </div>
      </b-col>
      <b-col col lg="5" md="5" cols="10">
        <div class="about-content">
          <h2>Sobre nós</h2>
          <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>
          <ul>
            <li>
              <i class="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>
              <i class="ion-android-checkmark-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li>
              <i class="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;

export default {
  name: "sobre",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>

#about {
  padding: 40px 0 40px 0;
  min-height: 768px;
}


#about .about-content {
  padding-top: 40px;
}

#about .about-content h2 {
  color: #413e66;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}

#about .about-content h3 {
  color: #696592;
  font-weight: 400;
  font-size: 22px;
  font-style: italic;
}

#about .about-content ul {
  list-style: none;
  padding: 0;
}

#about .about-content ul li {
  padding-bottom: 10px;
}

#about .about-content ul li i {
  font-size: 20px;
  padding-right: 4px;
  color: #1bb1dc;
}

#about .about-img {
  position: relative;
  margin: 30px 30px 30px 30px;
}

#about .about-img img {
  width: 100%;
  border: 8px solid #fff;
  transition: 0.5s;
}

#about .about-img img:hover {
  width: 100%;
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}

#about .about-img::before {
  position: absolute;
  left: -31px;
  top: -30px;
  width: 90%;
  height: 92%;
  z-index: -1;
  content: "";
  background-color: #ebf1fa;
  transition: 0.5s;
}

#about .about-img::after {
  position: absolute;
  right: -31px;
  bottom: -30px;
  width: 90%;
  height: 92%;
  z-index: -1;
  content: "";
  background-color: #ebf1fa;
  transition: 0.5s;
}
</style>
