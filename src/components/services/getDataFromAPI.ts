export async function useGetDataFromAPI(URL: string): Promise<string[]> {
  const responseFromAPI = await fetch(`${URL}`);
  const data: string[] = await responseFromAPI.json();
  return data;
}
