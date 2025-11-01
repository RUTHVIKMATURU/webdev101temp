import { useParams, useNavigate } from "react-router-dom";

export default function CardDetails({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((_, index) => index.toString() === id);

  if (!movie) {
    return (
      <div className="text-white text-center mt-20">
        <h2 className="text-2xl">Movie Not Found 😢</h2>
        <button onClick={() => navigate(-1)} className="mt-4 bg-red-600 px-4 py-2 rounded">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-8">
      <img src={movie.img} alt={movie.title} className="w-64 rounded-lg shadow-lg mb-6" />
      <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-300 mb-4 max-w-lg text-center">{movie.description}</p>
      <div className="text-gray-400 text-sm mb-6 space-y-1 text-center">
        <p><span className="text-gray-200 font-semibold">Genre:</span> {movie.genre}</p>
        <p><span className="text-gray-200 font-semibold">Release Date:</span> {movie.releaseDate}</p>
        <p><span className="text-gray-200 font-semibold">Rating:</span> ⭐ {movie.rating}/10</p>
      </div>
      <button onClick={() => navigate(-1)} className="mt-4 bg-red-600 px-6 py-2 rounded hover:bg-red-700 transition">
        Back to Home
      </button>
    </div>
  );
}
