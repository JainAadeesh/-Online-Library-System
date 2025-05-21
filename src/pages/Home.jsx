import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBooks } from '../redux/bookSlice';
import BookCard from '../components/BookCard';

export default function Home() {
  const books = useSelector(selectBooks);
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">
        📚 Welcome to the Online Library
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Discover books by category, browse popular picks, and explore our growing collection!
      </p>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Browse by Category</h2>
        <ul className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                to={`/books/${cat.toLowerCase()}`}
                className="bg-indigo-100 text-indigo-700 font-medium px-4 py-2 rounded-full hover:bg-indigo-200 transition"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Popular Books */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Popular Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.slice(0, 3).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
