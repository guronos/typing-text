import { ref } from "vue"

const timeHasPassedSecond = ref(0)

const useSensorSpeedPrint = function(timeBegin:number){
    console.log('1', timeBegin)
    function start(){
        timeHasPassedSecond.value=Math.round((Date.now()-timeBegin)/1000)
        if (timeHasPassedSecond.value >= 60) {
            timeHasPassedSecond.value
        }
        console.log('x', timeHasPassedSecond.value)
        return 
    }
setInterval(start, 100)
}
export { useSensorSpeedPrint, timeHasPassedSecond }