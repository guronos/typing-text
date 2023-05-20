export async function useGetDataFromAPI(URL:string) {
    const responseFromAPI = await fetch(`${URL}`)
    const data = responseFromAPI.json()
    return data
}    