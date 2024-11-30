import { Request, Response } from "express";
import { searchBooks } from "../services/book-service";

export const searchController = async (req: Request, res: Response) => {
  const { q, page = 1, limit = 10 } = req.query;
  const offset = (Number(page) - 1) * Number(limit);

  try {
    const booksData = await searchBooks(q as string, Number(limit), offset);
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
