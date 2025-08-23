import { TagsProps } from "./tags";

export enum linkTypes {
  Twitter = "Twitter",
  Instagram = "Instagram", 
  WebUrl = "WebUrl"
}
export interface linksProps {
  linkId: string;
  url: string;
  type: linkTypes;
  createdAt: Date;
  tags: TagsProps[];
  userId: string;
  title: string;
  description?: string;
}
