<template>
     <div class="d-flex main__title">
    <div class="mx-2"> Скорость: {{ printInfo?.successLetter?.length }}</div>
  <div class="mx-2">Точность: {{ accuracy }}</div>
  <div class="mx-2">Букв без ошибок: {{ printInfo?.successLetter?.length }}</div>
  <div>Количество: {{ printInfo?.quantityText }}</div>
  <div>Ошибки: {{ printInfo?.quantityError }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, Ref } from 'vue';

const props = defineProps(['printInfo'])
const textShare = computed<number | string>(()=>(100/props.printInfo?.quantityText).toFixed(2))
const accuracy = computed(()=>
{
    console.log(textShare.value)
    return 100 - ((Number(textShare.value) * props?.printInfo.quantityError).toFixed(2))
}
)
</script>