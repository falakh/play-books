import create from "zustand";
import { Item, RootResponse } from "./api-response";

interface IBook {
  id?: string;
  title?: string;
  description?: string;
  imageURl?: string;
  rating?: number;
}

interface IStoreData {
  keyword?: string;
  books?: IBook[];
  isLoading?: boolean;
  requestBook: (key: string) => void;
}
const api = "https://www.googleapis.com/books/v1/volumes?q=";
export const useSearchBookstore = create<IStoreData>((set) => ({
  requestBook: async (key) => {
    set({ isLoading: true, books: [] });
    const request = await fetch(api + key);
    const json: RootResponse = await request.json();
    set({
      books: json.items.map((value) => ({
        id: value.id,
        description: value.volumeInfo?.description,
        imageURl: value.volumeInfo?.imageLinks.thumbnail,
        rating: value.volumeInfo?.averageRating,
        title: value.volumeInfo?.title,
      })),
      isLoading: false,
    });
  },
}));
