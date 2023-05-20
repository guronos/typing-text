async function useGetDataFromAPI() {
    const result = await fetch('https://baconipsum.com/api/?type=meat-and-filler&sentences=25&text')
    const res = await result.json()
    console.log("result", res)
    return res
  }
  let zx = useGetDataFromAPI()
  console.log('zx', zx)
