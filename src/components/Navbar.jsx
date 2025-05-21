import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg px-6 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-white tracking-wide">📚 Online Library</h1>
            <div className="space-x-6">
                <Link
                    to="/"
                    className="text-white font-medium hover:text-yellow-300 transition duration-300"
                >
                    Home
                </Link>
                <Link
                    to="/books/all"
                    className="text-white font-medium hover:text-yellow-300 transition duration-300"
                >
                    Browse Books
                </Link>
                <Link
                    to="/add"
                    className="bg-yellow-300 text-gray-800 px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-400 transition duration-300"
                >
                    + Add Book
                </Link>
            </div>
        </nav>
    );
}
