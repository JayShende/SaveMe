import { useMutation, useQueryClient } from "@tanstack/react-query";
import { linksProps } from "../types/link";
import { addLink, createTag } from "./api";

// Interface for form submission data
interface AddLinkFormData {
  url: string;
  type: "Twitter" | "Instagram" | "WebUrl";
  title: string;
  description?: string;
  tags: string[]; // Tag IDs
}

export function useAddLink() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AddLinkFormData) => addLink(data),
    onMutate: () => {
      console.log("Mutatted");
    },
    onSuccess: () => {
      console.log("Successfull");
    },

    onSettled: async (_, error) => {
      if (error) {
        console.log("Some Error ");
      }

      await queryClient.invalidateQueries({
        queryKey: ["Get_Links"],
      });
    },
  });
}

export function useCreateTag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: createTag) => createTag(data),
    onMutate: () => {
      console.log("Mutatted");
    },
    onSuccess: () => {
      console.log("Successfull");
    },

    onSettled: async (_, error) => {
      if (error) {
        console.log("Some Error ");
      }

      await queryClient.invalidateQueries({
        queryKey: ["Get_Tags"],
      });
    },
  });
}
