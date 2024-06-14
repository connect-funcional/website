export async function fetcher(fetchConfig: Parameters<typeof fetch>) {
  try {
    const response = await fetch(...fetchConfig);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('>> FETCH ERROR\n', error);
    return null;
  }
}
