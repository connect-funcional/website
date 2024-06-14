/* eslint-disable no-console */
export async function getJsonFromResponse(response: Response) {
  try {
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.info('\nRESPONSE:\n', response, '\n');
    console.error('>> Error converting data to JSON\n', error);
    return null;
  }
}
