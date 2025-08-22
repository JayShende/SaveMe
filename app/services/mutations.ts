import { useMutation, useQueryClient } from "@tanstack/react-query";
import { linksProps } from "../types/link";
import { addLink, createTag } from "./api";


export function useAddLink(){

    const queryClient=useQueryClient();

    return useMutation({
        mutationFn:(data:linksProps)=>addLink(data),
         onMutate:()=>{
            console.log("Mutatted");
        },
        onSuccess:()=>{
            console.log("Successfull");
        },

        onSettled:async(_,error)=>{
           if(error){
            console.log("Some Error ");
           }

           await queryClient.invalidateQueries({
            queryKey:["Get_Links"]
           })
            
        }
    })
}

export function useCreateTag(){

    const queryClient=useQueryClient();

    return useMutation({
        mutationFn:(data:createTag)=>createTag(data),
         onMutate:()=>{
            console.log("Mutatted");
        },
        onSuccess:()=>{
            console.log("Successfull");
        },

        onSettled:async(_,error)=>{
           if(error){
            console.log("Some Error ");
           }

           await queryClient.invalidateQueries({
            queryKey:["Get_Tags"]
           })
            
        }
    })
}