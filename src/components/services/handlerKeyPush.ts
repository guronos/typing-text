import { type Ref, ref, onMounted, onUnmounted } from 'vue';

const russianLanguage: Ref<boolean> = ref(false);
const currentLetter: Ref<number> = ref(0);
const errorCurrentLetter: Ref<number | null> = ref(null);
const successLetter: Ref<boolean[]> = ref([]);
const quantityError: Ref<number> = ref(0);

interface InfofromText {
  russianLanguage: Ref<boolean>;
  currentLetter: Ref<number>;
  errorCurrentLetter: Ref<number | null>;
  successLetter: Ref<boolean[]>;
  quantityText: number;
  quantityError: Ref<number>;
}

export const useKeyPush = (text: string): InfofromText => {
  const quantityText: number = text.length;

  const handlerKeyPush = function (event: { key: string }): void {
    if (event.key === text[currentLetter.value]) {
      russianLanguage.value = false;
      errorCurrentLetter.value = null;
      successLetter.value[currentLetter.value] = true;
      currentLetter.value += 1;
    } else {
      if (event.key.length < 2) {
        if (Number(event.key.codePointAt(0)) >= 1040) {
          russianLanguage.value = true;
        } else {
          if (errorCurrentLetter.value !== currentLetter.value) {
            quantityError.value += 1;
          }
          errorCurrentLetter.value = currentLetter.value;
        }
      }
    }
  };

  onMounted(() => {
    document.addEventListener('keydown', handlerKeyPush);
  });
  onUnmounted(() => {
    document.removeEventListener('keydown', handlerKeyPush);
  });
  return { russianLanguage, currentLetter, errorCurrentLetter, successLetter, quantityText, quantityError };
};
