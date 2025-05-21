import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBooks } from '../redux/bookSlice';
import { useState } from 'react';
import BookCard from '../components/BookCard';

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(selectBooks);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(
    (b) =>
      (category === 'all' || b.category.toLowerCase() === category.toLowerCase()) &&
      (b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        📚 Browse Books: {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Book Grid or Fallback */}
      {filteredBooks.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBooks.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">No books found. 📭</p>
      )}
    </div>
  );
}
