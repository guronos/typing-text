const API = 'https://baconipsum.com/api/'
const params = '?type=meat-and-filler&sentences=25&text'

export const useGetDataFromAPI =
async function () {
    const responseFromAPI = await fetch(`${API}${params}`)
    const data = await responseFromAPI.json()
    return data
}