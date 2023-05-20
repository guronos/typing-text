export async function getTextFromAPI() {
    const responseFromAPI = await fetch('https://baconipsum.com/api/?type=meat-and-filler&sentences=25&text')
    const text = responseFromAPI.json()
    return text
}