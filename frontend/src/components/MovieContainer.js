import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie);

  return (
    <div className="bg-black py-10">
      <div className="-mt-52 relative z-10">
        <MovieList title={"Popular Movies"} movies={movie.popularMovie} />
        <MovieList
          title={"Now Playing Movies"}
          movies={movie.nowPlayingMovies}
        />
        <MovieList title={"Top Tated Movies"} movies={movie.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies} />
        <MovieList title={"Joyful Movies"} movies={movie.popularMovie} />
        <MovieList title={"Emotional Movies"} movies={movie.topRatedMovies} />
        <MovieList title={"Action Movies"} movies={movie.upcomingMovies} />
        <MovieList title={"Comedies Movies"} movies={movie.popularMovie} />
      </div>
    </div>
  );
};

export default MovieContainer;
