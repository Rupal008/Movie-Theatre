import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.css";
import nilll from "./nilll.jpg";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";
  console.log("movies", movies);

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div>
      <div className="cursor-pointer ">
        <div className="ml-20 mr-20">
          <div className="row ">
            <div
              style={{
                height: "72px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                position: "absolute",
              }}
              className="mx-auto"
            ></div>
            <img
              src={nilll}
              alt=""
              style={{ width: "100%", height: "20%", opacity: "0.29" }}
            ></img>

            <div className="img-text ">
              <div className="container mt-52">
                <p className="text-center text-5xl tracking-wider  font-semibold text-white">
                  WELCOME.
                </p>
                <p className="text-center text-lg tracking-wider text-white">
                  The Unlimited Entertainment Present, Explore Now
                </p>
                <div className=" flex flex-center m-auto w-6/12 mt-2  items-center justify-center bg-gray-200 rounded-2xl">
                  <div className="text-black text-center tracking-wider w-64">
                    Search Your Favourite Movie
                  </div>
                  <div
                    className="text-black py-1 ms-auto rounded-r-2xl tracking-wider  text-center w-20 inline"
                    style={{ background: "hsl(22 94% 63% / 1)" }}
                  >
                    Search
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row cursor-pointer mt-5 mb-4">
            <div>
              <div className="  font-semibold text-white text-xl tracking-wider">
                Trending
              </div>
            </div>
            <div className=" flex ms-auto bg-white rounded-2xl">
              <div
                className="text-black text-center tracking-wider rounded-2xl w-20"
                style={{ background: "hsl(22 94% 63% / 1)" }}
              >
                New
              </div>
              <div className="text-black tracking-wider    text-center w-20 inline">
                Old
              </div>
            </div>
          </div>

          <div className="movie-list">
            <h2 className="text-2xl text-orange-500 py-4">Movies</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
                gridGap: "15px",
              }}
            >
              {renderMovies}
            </div>
          </div>

          <div className="shows-list">
            <h2 className="text-2xl text-orange-500 py-4">Shows</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
                gridGap: "15px",
              }}
            >
              {renderShows}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
