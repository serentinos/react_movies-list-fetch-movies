import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { FindMovie } from './components/FindMovie';
import { Movie } from './types/Movie';

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (movie: Movie) => {
    const isPresentInMovies = !!movies.find(checkMovie => (
      checkMovie.imdbId === movie.imdbId
    ));

    if (isPresentInMovies) {
      return;
    }

    setMovies(currentMovies => ([
      ...currentMovies,
      movie,
    ]));
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">
        <FindMovie onAddMovie={addMovie} />
      </div>
    </div>
  );
};
