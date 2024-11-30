import { Request, Response } from "express";
import { searchQuerySchema } from "../schemas/search-schema";
import { searchBooks } from "../services/book-service";

export const searchController = async (req: Request, res: Response) => {
  const validatedQuery = searchQuerySchema.parse(req.query);
  const { q, page = "1", limit = "5", sort } = validatedQuery;
  const offset = Number(page) * Number(limit);

  try {
    const booksData = await searchBooks({
      q: q,
      limit: limit,
      page: offset.toString(),
      sort: sort,
    });
    res.json({
      total: booksData.numFound,
      page: Number(page),
      limit: Number(limit),
      books: booksData.docs,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
};
