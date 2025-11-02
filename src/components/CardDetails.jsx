import { useLocation, useNavigate } from "react-router-dom";

export default function CardDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const movie = state?.movie;
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-red-500 hover:underline"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img src={movie.img} alt={movie.title} className="w-72 rounded-lg shadow-lg" />
        <div>
          <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
          <p className="text-gray-300 mb-4">{movie.description}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
        </div>
      </div>
    </div>
  );
}
