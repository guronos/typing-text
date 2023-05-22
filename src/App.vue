<template>
  <div class="upper-bar fs-4 fw-semibold py-1 fixed-top container shadow rounded-bottom">Тренажер слепой печати</div>

  <transition name="modal">
    <div v-if="showModal">
      <BaseModalWindow @close="startPrint" />
    </div>
  </transition>

  <div class="main container px-0 bg-white d-flex flex-column rounded shadow">
    <InfoPanel :printInfo="dataForPrintPanet" />

    <div class="main__text bg-light-subtle rounded">
      <div class="main__loader-wrapper" v-show="!dataForPrintPanet?.quantityText">
        <div class="main__loader-block">
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
import InfoPanel from './components/InfoPanel.vue'
import PrintPanel from './components/PrintPanel.vue'
import BaseModalWindow from './components/BaseModalWindow.vue'
import { ref } from 'vue'
import { useSensorSpeedPrint } from './components/services/sensorsForInfopanel.ts'

const showModal = ref(true)
const dataForPrintPanet = ref()

const startPrint = () => {
  showModal.value = false
  useSensorSpeedPrint(Date.now())
}
</script>
<style>
body {
  background: rgb(140, 212, 194) !important;
  width: 100%;
}
.upper-bar {
  background: rgba(119, 172, 233, 0.664);
  color: rgba(233, 240, 247, 0.904);
  text-shadow: 0 0 #8d8787;
}
.main {
  width: 100%;
  min-height: 60vh;
  margin: 0 auto;
}
.main__title {
  background: rgb(119, 172, 233);
}
.main__text {
  height: 100%;
}
.main__loader-block,
.main__loader-wrapper {
  height: 100%;

}
.main__loader-spiner {
    width: 3rem;
    height: 3rem;
    border-width: 7px;
    margin: auto;
  }
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transition: all 2s linear;
  -webkit-transform: scale(1.2);
  transform: scale(0.5) translateY(-100%);
}
</style>
