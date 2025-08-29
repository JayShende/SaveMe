import axios from "axios";
import { linksProps } from "../types/link";

export const fetchAllLinks = async () => {
  const response = await axios({
    method: "get",
    url: "/api/v1/links/fetchAllLinks",
  });

  return response.data;
};

// Interface for form submission data
interface AddLinkFormData {
  url: string;
  type: "Twitter" | "Instagram" | "WebUrl";
  title: string;
  description?: string;
  tags: string[]; // Tag IDs
}

export const addLink = async (data: AddLinkFormData) => {
  const response = await axios({
    method: "post",
    url: "/api/v1/links/addLink",
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
    url: "/api/v1/tags/createTag",
    data: data,
  });
  return response.data;
};

export const getAllTags = async () => {
  const response = await axios({
    method: "get",
    url: "/api/v1/tags/getAllTags",
  });

  return response.data;
};

export interface deleteLinkInterface {
  linkId: string;
}

export const deleteLink = async (data: deleteLinkInterface) => {
  const response = await axios({
    method: "post",
    url: "/api/v1/links/deleteLinks",
    data: data,
  });

  return response.data;
};

export const getInstagramLinks = async () => {
  const response = await axios({
    method: "get",
    url: "/api/v1/links/getInstagramLinks",
  });

  return response.data;
};

export const getTwitterLinks = async () => {
  const response = await axios({
    method: "get",
    url: "/api/v1/links/getTwitterLinks",
  });
  return response.data;
};

export const getWebLinks = async () => {
  const response = await axios({
    method: "get",
    url: "/api/v1/links/getWebLinks",
  });

  return response.data;
};
