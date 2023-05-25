import { useQuery } from "@tanstack/react-query";
import { fetchMediaData } from "@/utils/api_calls";

function useMediaData(queryKey: string, fetchUrl: string) {
  return useQuery([queryKey], () => fetchMediaData(fetchUrl));
}

export default useMediaData;
