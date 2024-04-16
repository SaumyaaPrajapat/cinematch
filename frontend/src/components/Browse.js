import React, { useEffect, useRef } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import Footer from "./Footer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearchMovie from "./SearchMovie";
import queryString from "query-string";

const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const navigate = useNavigate();
  const location = useLocation();
  const movieContainerRef = useRef(null); // Reference to the MovieContainer section
  const queryParams = queryString.parse(location.search);
  const filter = queryParams.filter;

  // my custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    // Scroll to the MovieContainer section when a filter is applied
    if (filter && movieContainerRef.current) {
      movieContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [user, filter, navigate]);

  return (
    <div className="bg-gradient-to-b from-blue-900 to-black min-h-screen">
      <Header />
      <div>
        {toggle ? (
          <SearchMovie />
        ) : (
          <>
            <MainContainer />
            <div ref={movieContainerRef}>
              {/* Attach ref to MovieContainer */}
              <MovieContainer />
            </div>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
