import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const [formData, setFormData] = useState({
    title: '', author: '', category: '', description: '', rating: ''
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, category, description, rating } = formData;
    if (!title || !author || !category || !description || !rating) {
      setError('All fields are required!');
      return;
    }
    dispatch(addBook({ ...formData, rating: parseFloat(rating) }));
    navigate('/books/all');
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Add a New Book
        </h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm font-medium text-center">
            ⚠️ {error}
          </div>
        )}

        <input
          name="title"
          placeholder="Book Title"
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          name="author"
          placeholder="Author"
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full mb-4 p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
        ></textarea>
        <input
          name="rating"
          placeholder="Rating (e.g. 4.5)"
          type="number"
          step="0.1"
          onChange={handleChange}
          className="w-full mb-6 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          📘 Add Book
        </button>
      </form>
    </div>
  );
}
