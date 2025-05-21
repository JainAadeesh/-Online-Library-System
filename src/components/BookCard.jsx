import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 flex flex-col gap-2 border border-gray-100">
            <h3 className="text-2xl font-bold text-indigo-700">{book.title}</h3>
            <p className="text-gray-700 text-sm">
                <span className="font-medium">Author:</span> {book.author}
            </p>
            <p className="text-amber-500 font-medium text-sm">
                ⭐ Rating: {book.rating}
            </p>
            <Link
                to={`/book/${book.id}`}
                className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition duration-300"
            >
                View Details
            </Link>
        </div>
    );
}
