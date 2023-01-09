import create from "zustand";

interface IBook {
  id?: string;
  title?: string;
  description?: string;
  imageURl?: string;
  rating?: number;
}

interface IStoreData {
  books: IBook[];
  isLoading?: boolean;
  saveBook: (books: IBook) => void;
  counter: number;
  hydrate: () => void;
}

const key = "favorite";

export const useFavoriteBookstore = create<IStoreData>((set) => ({
  books: [],
  counter: 0,
  saveBook: (saveBooks) => {
    set((state) => {
      if (state.books.find((value) => value.id === saveBooks.id)) {
        return { books: [...state.books.filter((value) => value.id !== saveBooks.id)] };
      }
      return { books: [...state.books, saveBooks] };
    });
    set((state) => {
      window.localStorage.setItem(key, JSON.stringify(state));
      return { counter: state.counter++ };
    });
  },
  hydrate: () => {
    const data = window.localStorage.getItem(key);
    if (data) {
      set(JSON.parse(data));
    }
  },
}));
