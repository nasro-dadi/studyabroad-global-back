import { z } from "zod";

export const searchQuerySchema = z.object({
  q: z.string().min(1, "Search query is required"),
  page: z.string().optional(),
  limit: z.string().optional(),
  sort: z.string().optional(),
});
