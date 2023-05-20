<template>
  <div class="fixed-top container bg-primary">Тренажер слепой печати</div>
  <div class="main container px-0 bg-white d-flex flex-column rounded">
   <InfoPanel 
   :printInfo="printPanel"
   />
  <div class="main__text">
    <Suspense>
<PrintPanel ref="printPanel" />
</Suspense>
  </div>
  </div>
</template>

<script setup lang="ts">
import InfoPanel from './components/InfoPanel.vue';
import PrintPanel from './components/PrintPanel.vue'
import { ref } from 'vue'
const printPanel = ref({
  successLetter: null,
    errorCurrentLetter: null,
    quantityText: null,
    currentLetter: null,
    quantityError: null
});
</script>
<style lang="scss">
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "./style.scss";

body {
  background: rgb(140, 212, 194) !important;
  width: 100%;
}
.main {
  min-width: 80vw;
  height: 600px;
}
.main__title {
  background: rgb(119, 172, 233);
}
.main__text {
  background: $bg-text-color;
  height: 100%;
}
</style>
