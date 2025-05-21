import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-500 text-lg">
        📚 No books found. Try adding some!
      </div>
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-white rounded-2xl shadow hover:shadow-2xl border border-gray-100 transition-all duration-300"
        >
          <div className="p-5 flex flex-col gap-2">
            <h2 className="text-xl font-bold text-indigo-700">{book.title}</h2>
            <p className="text-gray-700 text-sm">
              <span className="font-medium">Author:</span> {book.author}
            </p>
            <p className="text-gray-500 text-sm">
              <span className="font-medium">Category:</span> {book.category}
            </p>
            <p className="text-amber-500 font-semibold text-sm">
              ⭐ {book.rating}
            </p>
            <Link
              to={`/book/${book.id}`}
              className="mt-3 text-sm inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
            >
              View Details →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
