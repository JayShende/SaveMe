import { linkTypes } from "@/app/types/link";
import * as z from "zod";

export const addLinkSchema = z.object({
  url: z.string(),
  type: z.enum(["Twitter", "Instagram", "WebUrl"]),
  title: z
    .string()
    .min(1, "Title is required")
    .max(50, "Title must be less than 50 characters"),
  description: z
    .string()
    .max(150, "Description must be less than 150 characters")
    .optional(),
  tags: z
    .array(z.string()) // Tag IDs (strings)
    .min(1, "At least one tag is required")
    .max(5, "Maximum 5 tags allowed"),
});
