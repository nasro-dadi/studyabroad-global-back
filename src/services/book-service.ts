import { fetchWithParams } from "../utils/fetch-utils";

interface Book {
  title: string;
  author_name?: string[];
  publish_year?: number[];
  ratings_count?: number;
  first_sentence?: string[];
}

export const searchBooks = async (q: string, limit: number, offset: number) => {
  const url = "https://openlibrary.org/search.json";
  const params = {
    q,
    fields: "title,author_name,publish_year,ratings_count,first_sentence",
    limit,
    offset,
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
