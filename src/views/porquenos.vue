<template>
  <div id="why-us">
    <header class="section-header">
      <h3>Why choose us?</h3>
      <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
    </header>

    <b-row align-h="center">
      <b-col col md="6" cols="10">
        <div class="why-us-img">
          <img src="../img/why-us.jpg" alt class="img-fluid">
        </div>
      </b-col>
      <b-col col md="6" cols="10">
        <div class="why-us-content">
          <p>Molestiae omnis numquam corrupti omnis itaque. Voluptatum quidem impedit. Odio dolorum exercitationem est error omnis repudiandae ad dolorum sit.</p>
          <p>
            Explicabo repellendus quia labore. Non optio quo ea ut ratione et quaerat. Porro facilis deleniti porro consequatur
            et temporibus. Labore est odio.
            Odio omnis saepe qui. Veniam eaque ipsum. Ea quia voluptatum quis explicabo sed nihil repellat..
          </p>

          <div class="features wow bounceInUp clearfix">
            <i class="fa fa-diamond" style="color: #f058dc;"></i>
            <h4>Corporis dolorem</h4>
            <p>Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias dignissimos et ipsum. Soluta at enim modi ut incidunt dolor et.</p>
          </div>

          <div class="features wow bounceInUp clearfix">
            <i class="fa fa-object-group" style="color: #ffb774;"></i>
            <h4>Eum ut aspernatur</h4>
            <p>Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.</p>
          </div>

          <div class="features wow bounceInUp clearfix">
            <i class="fa fa-language" style="color: #589af1;"></i>
            <h4>Voluptates dolores</h4>
            <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.</p>
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
  name: "porquenos",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#why-us {
  padding: 40px 0;
}

#why-us .why-us-content .features {
  margin: 0 0 15px 0;
  padding: 0;
  transition: 0.3s ease-in-out;
}

#why-us .why-us-content .features i {
  font-size: 36px;
  float: left;
}

#why-us .why-us-content .features h4 {
  font-size: 24px;
  font-weight: 600;
  margin-left: 56px;
  color: #413e66;
  margin-bottom: 5px;
}

#why-us .why-us-content .features p {
  font-size: 16px;
  margin-left: 56px;
  color: #555186;
}

#why-us .counters {
  padding-top: 40px;
}

#why-us .counters span {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 48px;
  display: block;
  color: #555186;
}

#why-us .counters p {
  padding: 0;
  margin: 0 0 20px 0;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #8a87b6;
}
</style>
