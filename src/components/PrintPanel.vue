<template>
    <div class="text">
        <div v-if="russianLanguage">Выбрана русская раскладка клавиатуры!</div>
        <template v-for="(letter,id) in text" :key="id">
            <span :class="{success : successLetter[id]===true, carriage : currentLetter === id, error : errorCurrentLetter === id}" >{{ letter }}</span>
        </template>

    </div>
</template>
<script setup lang="ts">
import { useGetDataFromAPI } from './services/getDataFromAPI.ts'
import { useKeyPush } from './services/handlerKeyPush.ts'

const URL_API = 'https://baconipsum.com/api/?type=meat-and-filler&sentences=25&text'
const [text] = await useGetDataFromAPI(URL_API)

const {russianLanguage, currentLetter, errorCurrentLetter, successLetter, quantityText, quantityError} = useKeyPush(text)
defineExpose ({
    successLetter,
    errorCurrentLetter,
    quantityText,
    currentLetter,
    quantityError
})
</script>
<style lang="scss">
.text {
    font-size: 20px;
    text-align: justify;
    padding: 0.8rem;
}
.carriage {
    background: rgb(19, 53, 165);
    color: #fff;
}
.success {
    color: rgb(100, 211, 100);
}
.error {
    background: rgb(228, 47, 15);
    color: #fff;
}
</style>