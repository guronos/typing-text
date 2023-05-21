<template>
  <div class="fixed-top container bg-primary">Тренажер слепой печати</div>
  <div class="main container px-0 bg-white d-flex flex-column rounded">
   <InfoPanel 
   :printInfo="dataForPrintPanet"
   :timeBegin="timeBegin"
   />  
  
  <div class="main__text"> 
    <div class="main__loader-wrapper" v-show="!dataForPrintPanet?.quantityText">
        <div class="d-flex justify-content-center align-items-center main__loader-block">
  <div class="spinner-border text-primary main__loader-spiner" role="status">
    <span class="visually-hidden">Загрузка...</span>
  </div>
</div>
    </div>
    <Suspense>
<PrintPanel ref="dataForPrintPanet" />
</Suspense>
  </div>
  </div>
</template>

<script setup lang="ts">
import InfoPanel from './components/InfoPanel.vue';
import PrintPanel from './components/PrintPanel.vue'
import { ref } from 'vue'

const timeBegin = Date.now()
const dataForPrintPanet = ref()
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
.main__loader-block, .main__loader-wrapper {
    height: 100%;
    .main__loader-spiner {
        width: 3rem;
        height: 3rem;
        border-width: 7px;
    }
}
</style>
