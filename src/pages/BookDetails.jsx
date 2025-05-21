import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBooks } from '../redux/bookSlice';

export default function BookDetails() {
  const { id } = useParams();
  const books = useSelector(selectBooks);
  const navigate = useNavigate();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="text-center mt-20 text-gray-500 text-lg">
        ❌ Book not found.
      </div>
    );
  }

  return (
    <div className="px-6 py-10 max-w-3xl mx-auto bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">{book.title}</h2>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Author:</span> {book.author}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Description:</span> {book.description}
      </p>
      <p className="text-amber-500 font-medium mb-6">⭐ {book.rating}</p>

      <button
        onClick={() => navigate(-1)}
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
      >
        ← Back to Browse
      </button>
    </div>
  );
}
