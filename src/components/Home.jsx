import { Link } from "react-router-dom";

const movies = [
  {
    title: "Extraction 2",
    img: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    description:
      "After barely surviving his grievous wounds from his mission in Dhaka, Tyler Rake returns for another deadly extraction operation.",
    releaseDate: "2023-06-09",
    genre: "Action, Thriller",
    rating: "7.0",
  },
  {
    title: "Red Notice",
    img: "https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
    description:
      "An FBI profiler pursuing the world’s most wanted art thief becomes his reluctant partner in crime when a cunning con artist intervenes.",
    releaseDate: "2021-11-12",
    genre: "Action, Comedy, Crime",
    rating: "6.3",
  },
  {
    title: "The Gray Man",
    img: "https://image.tmdb.org/t/p/w500/1Wlwnhn5sXUIwlxpJgWszT622PS.jpg",
    description:
      "When a shadowy CIA agent uncovers agency secrets, he becomes the target of a global manhunt launched by his psychopathic former colleague.",
    releaseDate: "2022-07-22",
    genre: "Action, Thriller",
    rating: "6.7",
  },
  {
    title: "6 Underground",
    img: "https://image.tmdb.org/t/p/w500/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg",
    description:
      "After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",
    releaseDate: "2019-12-13",
    genre: "Action, Adventure",
    rating: "6.1",
  },
  {
    title: "Heart of Stone",
    img: "https://image.tmdb.org/t/p/w500/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    description:
      "An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable and dangerous weapon.",
    releaseDate: "2023-08-11",
    genre: "Action, Spy, Thriller",
    rating: "6.2",
  },
];

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="flex items-center justify-between px-8 py-4 bg-black bg-opacity-70 fixed top-0 left-0 w-full z-10">
        <h1 className="text-3xl font-bold text-red-600">NETFLIX</h1>
        <div className="space-x-4">
          <Link to="/login" className="text-sm text-gray-300 hover:underline">Log in</Link>
          <Link to="/signup" className="text-sm text-gray-300 hover:underline">Sign up</Link>
        </div>
      </nav>

      <div className="pt-20 px-8">
        <h2 className="text-3xl font-bold mb-6">Popular on Netflix</h2>
        <div className="flex space-x-4 overflow-x-auto pb-6">
          {movies.map((movie, i) => (
            <Link
              key={i}
              to={`/movie/${i}`}
              state={{ movie }}
              className="min-w-[200px] hover:scale-105 transform transition"
            >
              <img src={movie.img} alt={movie.title} className="rounded-lg shadow-lg" />
              <p className="mt-2 text-center text-gray-300">{movie.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
