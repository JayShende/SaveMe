import axios from "axios";
import { linksProps } from "../types/link";

export const fetchAllLinks = async () => {
  const response = await axios({
    method: "get",
    url: "api/v1/links/fetchAllLinks",
  });

  return response.data;
};

export const addLink = async (data: linksProps) => {
  const response = await axios({
    method: "post",
    url: "api/v1/links/addLink",
    data: data,
  });

  return response.data;
};

export interface createTag {
  name: string;
}

export const createTag = async (data: createTag) => {
  const response = await axios({
    method: "post",
    url: "api/v1/tags/createTag",
    data: data,
  });
  return response.data;
};

export const getAllTags = async () => {
  const response = await axios({
    method: "get",
    url: "api/v1/tags/getAllTags",
  });

  return response.data;
};
