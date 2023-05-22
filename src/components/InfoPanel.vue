<template>
  <div class="d-flex main__title rounded-top justify-content-center">
    <div class="m-2 bg-info rounded px-1">
      Скорость: <span class="text-white bg-opacity-75">{{ speedPrint }} зн/мин</span>
    </div>
    <div class="m-2 bg-info rounded px-1">
      Точность: <span class="text-white bg-opacity-75">{{ accuracy }}%</span>
    </div>
    <div class="m-2 bg-info rounded px-1">
      Символов без ошибок: <span class="text-white bg-opacity-75">{{ quantitySuccessLetter }}</span>
    </div>
    <div class="m-2 bg-info rounded px-1">
      Всего символов в тексте: <span class="text-white bg-opacity-75">{{ printInfo?.quantityText }}</span>
    </div>
    <div class="m-2 bg-info rounded px-1">
      Ошибок: <span class="text-white bg-opacity-75">{{ printInfo?.quantityError }}</span>
    </div>
    <div class="m-2 bg-info rounded px-1">
      Прошедшее время:
      <span class="text-white bg-opacity-75">{{ timeHasPassedSecond > 59 ? `${Math.round(timeHasPassedSecond / 60)}:${timeHasPassedSecond % 60}` : timeHasPassedSecond }}</span>
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

const textShare = computed<number>(() => {
  return props.printInfo?.quantityText ? Number((100 / props.printInfo?.quantityText).toFixed(2)) : 0;
});
const quantitySuccessLetter = computed(() => (props?.printInfo?.successLetter ? props.printInfo.successLetter.length : 0));
const accuracy = computed((): number => {
  return props.printInfo?.quantityError ? 100 - Number((textShare.value * props.printInfo?.quantityError).toFixed(2)) : 0;
});
const speedPrint = computed((): number => {
  return timeHasPassedSecond.value < 60 ? quantitySuccessLetter.value : Math.round(quantitySuccessLetter.value / (timeHasPassedSecond.value / 60));
});
</script>
