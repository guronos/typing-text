<template>
  <div class="d-flex main__title rounded-top justify-content-center">
    <div class="my-2 mx-3">
      <div class="d-flex align-items-center"><img class="px-1" src="../assets/speed.svg" alt="speed icon" /> Скорость:</div>
      <div class="text-white bg-opacity-75">{{ speedPrint }} зн/мин</div>
    </div>
    <div class="my-2 mx-3">
      <div class="d-flex align-items-center"><img class="px-1" src="../assets/accuracy.svg" alt="accuracy icon" /> Точность:</div>
      <div class="text-white bg-opacity-75">{{ accuracy }}%</div>
    </div>
    <div class="my-2 mx-3">
      <div class="d-flex align-items-center"><img class="px-1" src="../assets/succes.svg" alt="succes icon" /> Символов без ошибок:</div>
      <div class="text-white bg-opacity-75">{{ quantitySuccessLetter }}</div>
    </div>
    <div class="my-2 mx-3">
      <div class="d-flex align-items-center"><img class="px-1" src="../assets/text.svg" alt="text icon" /> Всего символов в тексте:</div>
      <div class="text-white bg-opacity-75">{{ printInfo?.quantityText }}</div>
    </div>
    <div class="my-2 mx-3">
      <div class="d-flex align-items-center"><img class="px-1" src="../assets/errors.svg" alt="errors icon" /> Ошибок:</div>
      <div class="text-white bg-opacity-75">{{ printInfo?.quantityError }}</div>
    </div>
    <div class="my-2 mx-3">
      <div class="d-flex align-items-center"><img class="px-1" src="../assets/time.svg" alt="time icon" /> Прошедшее время:</div>
      <div class="text-white bg-opacity-75">{{ pastTime }}</div>
    </div>
  </div>

  <div class="progress mt-2 mx-2" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" :style="{ width: textShare * quantitySuccessLetter + '%' }"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { timeHasPassedSecond } from './services/sensorsForInfopanel.ts';

interface PropsPrintInfo {
  successLetter: boolean[];
  errorCurrentLetter: number | null;
  quantityText: number;
  currentLetter: number;
  quantityError: number;
}
const props = defineProps<{
  printInfo?: PropsPrintInfo;
}>();

const textShare = computed<number>(() => (props.printInfo?.quantityText ? Number((100 / props.printInfo?.quantityText).toFixed(2)) : 0));
const quantitySuccessLetter = computed(() => (props?.printInfo?.successLetter ? props.printInfo.successLetter.length : 0));
const accuracy = computed((): number => (props.printInfo?.quantityError ? 100 - Number((textShare.value * props.printInfo?.quantityError).toFixed(2)) : 0));
const speedPrint = computed((): number =>
  timeHasPassedSecond.value < 60 ? quantitySuccessLetter.value : Math.round(quantitySuccessLetter.value / (timeHasPassedSecond.value / 60)),
);
const pastTime = computed(() => {
  if (timeHasPassedSecond.value > 59) {
    if (timeHasPassedSecond.value % 60 < 10) {
      return `${Math.round(timeHasPassedSecond.value / 60)}:0${timeHasPassedSecond.value % 60}`;
    } else {
      return `${Math.round(timeHasPassedSecond.value / 60)}:${timeHasPassedSecond.value % 60}`;
    }
  } else {
    if (timeHasPassedSecond.value < 10) {
      return `0${timeHasPassedSecond.value}`;
    } else {
      return timeHasPassedSecond.value;
    }
  }
});
</script>
<style>
.main__title {
  background: rgb(119, 172, 233);
  font-size: 18px;
}
</style>
