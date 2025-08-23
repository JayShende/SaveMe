import { TagsProps } from "./tags";

export enum linkTypes {
  Twitter,
  Instagram,
  WebUrl,
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
