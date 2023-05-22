import { ref } from 'vue'

const timeHasPassedSecond = ref(0)

const useSensorSpeedPrint = function (timeBegin: number): void {
  function start (): void {
    timeHasPassedSecond.value = Math.round((Date.now() - timeBegin) / 1000)
  }
  setInterval(start, 100)
}
export { useSensorSpeedPrint, timeHasPassedSecond }
