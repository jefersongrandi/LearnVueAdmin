<template>
  <div id="app">
    <p>
      <router-link to="/home">Go to Foo</router-link>
    </p>

    <router-view></router-view>
    <!--<img width="25%" src="./assets/logo.png">
    <HelloWorld msg="Hello Vue in CodeSandbox!" />-->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>
<style lang="scss">
  @import './assets/styles/variables';
  @import './assets/styles/bootstrap';
  //@import './assets/styles/style';
</style>
