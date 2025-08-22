import { useQuery } from "@tanstack/react-query";
import { fetchAllLinks, getAllTags } from "./api";

// Here We Will Define and Export Hooks

export function useFetchAllLinks() {
  return useQuery({
    queryKey: ["Get_Links"],
    queryFn: fetchAllLinks,
    refetchOnWindowFocus: true,
  });
}

export function useGetAllTags() {
  return useQuery({
    queryKey: ["Get_Tags"],
    queryFn: getAllTags,
    refetchOnWindowFocus: true,
  });
}
