import { useQuery } from "@tanstack/react-query";


function useFetch(url , key) {
    const {data , isLoading , error} = useQuery({
        queryKey:[key],
        queryFn:async()=>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
            
        }
  })
  return {data, isLoading , error}
}

export default useFetch