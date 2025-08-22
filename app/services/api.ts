import axios from "axios"
import { linksProps } from "../types/link"

interface test{
    userId:string
}

export const getAllLinks=async(data:test)=>{
    const response=await axios({
        method:"post",
        url:"api/v1/links/fetchAllLinks",
        data:data
    })

    return response.data
}

export const addLink=async(data:linksProps)=>{
    const response=await axios({
        method:"post",
        url:"api/v1/links/addLink",
        data:data
    })

    return response.data;
}

interface createTag{
    name:string
}

export const createTag=async(data:createTag)=>{

    const response=await axios({
        method:"post",
        url:"api/v1/tags/createTag",
        data:data
    })
    return response.data;
}

export const getAllTags=async()=>{

    const response=await axios({
        method:"get",
        url:"api/v1/tags/getAllTags"
    })

    return response.data;
}