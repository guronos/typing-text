<template>
  <div class="text d-flex flex-column align-items-center">
    <div>
      <div class="warning" data-title="Выбрана русская раскладка клавиатуры!" v-if="russianLanguage"></div>
      <template v-for="(letter, id) in text" :key="id">
        <transition name="error">
        <img class="error__image" src="../assets/error.jpg" v-if="errorCurrentLetter === id" >
    </transition>
        <span :class="{ success: successLetter[id] === true, carriage: currentLetter === id, 'error__wrap-letter': errorCurrentLetter === id }">{{ letter }}</span>
      </template>
    </div>
    <div>
      <button class="btn btn-info mt-4 text-white bg-opacity-75 shadow" @click="refreshPage">Начать заново</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGetDataFromAPI } from './services/getDataFromAPI.ts';
import { useKeyPush } from './services/handlerKeyPush.ts';

const URL_API = 'https://baconipsum.com/api/?type=meat-and-filler&sentences=25&text';
const [text] = await useGetDataFromAPI(URL_API);

const { russianLanguage, currentLetter, errorCurrentLetter, successLetter, quantityText, quantityError } = useKeyPush(text);

const refreshPage = () => {
  location.reload();
};

defineExpose({
  successLetter,
  errorCurrentLetter,
  quantityText,
  currentLetter,
  quantityError,
});
</script>
<style>
.text {
  font-size: 20px;
  text-align: justify;
  padding: 0.8rem;
}
.carriage {
  border: #0e1ac56c 4px solid;
  border-radius: 5px;
  padding: 2px;
}
.success {
  color: rgb(100, 211, 100);
}
.error__wrap-letter {
  background: rgba(228, 47, 15, 0.979);
  color: #fff;
  padding: 2px;
}
.warning::after {
  content: attr(data-title);
  position: absolute;
  top: 5%;
  width: 1200px;
  z-index: 1;
  background: rgba(228, 39, 39, 0.6);
  color: #fff;
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 14px;
  padding: 5px 10px;
  border: 1px solid #333;
}
.error__image {
    position: absolute;
    left: 5%;
}
.error-enter-active {
    transition: all 0.1s ease;
}
.error-leave-active {
    transition: all 0.1s ease;
}
.error-enter-from,
.error-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}
</style>
