<template>
  <div id="msg">
    <div  class="card">
      <div class="card-header">
        <slot name="header"></slot>
      </div>  
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "mensagem",
  data() {
    return{}    
  }, 
};
</script>

<style scoped>

#msg .card-body {
    min-height: 480px !important;
}

</style>
