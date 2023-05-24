// utility function for api call with no params
export const fetchMedia = async (apiLink: RequestInfo | URL) => {
  try {
    const res = await fetch(apiLink);
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error((err as Error).message);
    return [];
  }
};
