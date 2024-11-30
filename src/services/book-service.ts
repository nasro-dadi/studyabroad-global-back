import { z } from "zod";
import { searchQuerySchema } from "../schemas/search-schema";
import { fetchWithParams } from "../utils/fetch-utils";

interface Book {
  title: string;
  author_name?: string[];
  publish_year?: number[];
  ratings_count?: number;
  first_sentence?: string[];
}

type SearchParams = z.infer<typeof searchQuerySchema>;

export const searchBooks = async (searchParams: SearchParams) => {
  const validated = searchQuerySchema.parse(searchParams);

  const url = process.env.OPENLIBRARY_API_URL ?? "";

  const params = {
    q: validated.q,
    fields: "title,author_name,publish_year,ratings_count,first_sentence",
    limit: validated.limit,
    offset: validated.page,
    sort: validated.sort,
  };

  const response = await fetchWithParams(url, params);
  const data = await response.json();

  const books = data.docs.map((book: Book) => ({
    title: book.title,
    author: book.author_name?.join(", "),
    year: book.publish_year?.[0],
    rating: book.ratings_count,
    firstSentence: book.first_sentence?.[0],
  }));

  return {
    numFound: data.numFound,
    docs: books,
  };
};
