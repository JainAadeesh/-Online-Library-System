import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: '1', title: 'The Martian', author: 'Andy Weir', category: 'Sci-Fi', description: 'A stranded astronaut on Mars.', rating: 4.5 },
    { id: '2', title: 'Becoming', author: 'Michelle Obama', category: 'Non-Fiction', description: 'Memoir of the First Lady.', rating: 4.8 },
    { id: '3', title: '1984', author: 'George Orwell', category: 'Fiction', description: 'A dystopian future.', rating: 4.7 },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({ ...action.payload, id: Date.now().toString() });
    },
  },
});

export const { addBook } = booksSlice.actions;
export const selectBooks = (state) => state.books.books;
export default booksSlice.reducer;
