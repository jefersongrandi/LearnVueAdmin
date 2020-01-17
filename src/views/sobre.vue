<template>
  <div id="about">
    <b-row align-h="center">
      <b-col col lg="5" md="5" cols="10">
        <div class="about-img">
          <img src="../img/who_us.jpeg" class="img-fluid" alt>
          <!--<b-img src="../img/about-img.jpg" fluid alt="Responsive image"></b-img> class="img-fluid" -->
        </div>
      </b-col>
      <b-col col lg="5" md="5" cols="10">
        <div class="about-content">
          <h2>Sobre nós</h2>
          <ul>
            <li>
              <i class="icon ion-md-bookmark"></i> 
              O Maria Bailarina existe desde 2013 em Campo Mourão ofertando aulas de balé clássico em parceria com algumas escolas da cidade, com o intuito de que esta arte seja cada vez mais disseminada e que a partir dela, a criança possa se desenvolver e aprender novas formas de existir e perceber o mundo. Prezando sempre pela aprendizagem prazerosa e divertida desta dança.
            </li>
            <li>
              <i class="icon ion-md-bookmark"></i> 
              Nós acreditamos que a dança possui milhares de objetivos e importância, principalmente para o desenvolvimento infantil, tanto na cognição e psicomotricidade, quanto na área psicossocial e psicológica.
            </li>
            <li>
              <i class="icon ion-md-bookmark"></i> 
                Por isso, ao ser uma Mariazinha a criança está inserida em um meio que amplia os seus olhares para a dança, e ela se torna mediadora de muitos processos, possibilitando à bailarina/bailarino um maior conhecimento de seu corpo, do espaço que habita, superando as suas limitações e reconhecendo suas habilidades e potencialidades.        
            </li>
            <li> <!-- ion-android-checkmark-circle -->
              <i class="icon ion-md-bookmark"></i> 
              Nosso objetivo também é, através da dança, permitir uma maior estruturação emocional e que a criança tenha uma experiência dançante leve, respeitada e feliz.
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </div>
</template>


<script>

export default {
  name: "sobre",
  data() {
    return {};
  }
};
</script>

<style scoped>

#about {
  padding: 100px 0 100px 0;
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

#about .about-content p {
  font-size: 20px;
  padding: 35px 0px 35px 0px;
}

#about .about-content ul {
  list-style: none;
  padding: 0;
}

#about .about-content ul li {
  padding: 15px 0px 15px 0px;
  font-size: 20px;
}

#about .about-content ul li i {
  font-size:30px;
  padding-right: 4px;
  color: #1bb1dc;
}

#about .about-img {
  position: relative;
  margin: 30px 30px 30px 30px;
  opacity: 1;
}

#about .about-img img {
  width: 100%;
  border: 8px solid #fff;
  transition: 0.8s;
}

#about .about-img img:hover {
  width: 100%;
  opacity: 1 !important;
  filter: alpha(opacity=100);
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


@media screen and (max-width: 767px) {  
  #about .about-img {
    margin: 0px;
  }


  #about .about-content ul li {
    padding: 5px 0px 5px 0px;
    font-size: 16px;
  }


  #about .about-content p {
    font-size: 16px;
    padding: 5px 0px 5px 0px;
  }

}


</style>
