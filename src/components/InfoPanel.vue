<template>
     <div class="d-flex main__title">
    <div class="mx-2"> Скорость: {{ speedPrint }}</div>
  <div class="mx-2">Точность: {{ accuracy }}</div>
  <div class="mx-2">Букв без ошибок: {{ quantitySuccessLetter }}</div>
  <div>Количество: {{ printInfo?.quantityText }}</div>
  <div>Ошибки: {{ printInfo?.quantityError }}</div>
  <div>Секунды: {{ timeHasPassedSecond }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSensorSpeedPrint, timeHasPassedSecond } from './services/sensorsForInfopanel.ts'

interface PropsPrintInfo {
    successLetter: boolean[]
    errorCurrentLetter: number | null
    quantityText: number
    currentLetter: number
    quantityError: number
}
const props = defineProps<{
    printInfo : PropsPrintInfo,
    timeBegin : number
}>()
// console.log(props.printInfo.timeBegin);

const textShare = computed<number>(()=>{
    return Number((100/props.printInfo?.quantityText).toFixed(2))
})
const quantitySuccessLetter = computed(()=>props?.printInfo?.successLetter ? props.printInfo.successLetter.length : 0)
const accuracy = computed(():number=>
{
    return quantitySuccessLetter.value ? 100 - Number(((textShare.value * props.printInfo.quantityError)).toFixed(2)) : 0
}
)
const speedPrint = computed(():number=>
{
    return timeHasPassedSecond.value<60 ? quantitySuccessLetter.value : Math.round(quantitySuccessLetter.value / (timeHasPassedSecond.value / 60))
}
)
useSensorSpeedPrint(props.timeBegin)
</script>