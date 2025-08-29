import { useQuery } from "@tanstack/react-query";
import {
  fetchAllLinks,
  getAllTags,
  getInstagramLinks,
  getTwitterLinks,
  getWebLinks,
} from "./api";

// Here We Will Define and Export Hooks

export function useFetchAllLinks() {
  return useQuery({
    queryKey: ["Get_Links"],
    queryFn: fetchAllLinks,
    refetchOnWindowFocus: false,
  });
}

export function useGetAllTags() {
  return useQuery({
    queryKey: ["Get_Tags"],
    queryFn: getAllTags,
    refetchOnWindowFocus: false,
  });
}

export function useGetInstagramLinks() {
  return useQuery({
    queryKey: ["get_instagram_links"],
    queryFn: getInstagramLinks,
    refetchOnWindowFocus: false,
  });
}

export function useGetTwitterLinks() {
  return useQuery({
    queryKey: ["get_twitter_links"],
    queryFn: getTwitterLinks,
    refetchOnWindowFocus: false,
  });
}

export function useGetWebLinks() {
  return useQuery({
    queryKey: ["get_web_links"],
    queryFn: getWebLinks,
    refetchOnWindowFocus: false,
  });
}
