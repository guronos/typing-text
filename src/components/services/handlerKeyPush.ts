import { Ref, ref, onMounted, onUnmounted } from 'vue'

let russianLanguage: Ref<boolean> = ref(false)
let currentLetter:Ref<number> = ref(0)
let errorCurrentLetter:Ref<number | null> = ref(null)
let successLetter:Ref<boolean[]> = ref([])

export const useKeyPush = (text:string)=>{


    const handlerKeyPush = function (event: {key : string}) {
    
    if (event.key===text[currentLetter.value]) {
        russianLanguage.value = false
        errorCurrentLetter.value = null
        successLetter.value[currentLetter.value] = true
        currentLetter.value += 1
    } else {
        if (event.key.length>=2){

        } else{
            errorCurrentLetter.value = currentLetter.value
            if (Number(event.key.codePointAt(0))>=1040) {
                russianLanguage.value = true
            }
        }
    }   
}

onMounted(()=>{
    document.addEventListener('keydown', handlerKeyPush)
    
})
onUnmounted(()=>{
    document.removeEventListener('keydown', handlerKeyPush)
})
return {russianLanguage, currentLetter, errorCurrentLetter, successLetter}
}