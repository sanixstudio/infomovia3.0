import axios from "axios";

export const fetchMediaData = async (fetchUrl: string) => {
  try {
    const res = await axios.get(fetchUrl);
    const { data } = res;
    return data;
  } catch (error) {
    console.error("Error fetching media data:", error);
    throw error;
  }
};
