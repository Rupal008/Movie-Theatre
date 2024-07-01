import React from "react";
import "./movieCard.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="bg-gray-800 cursor-pointer">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="hov">
          <div style={{ height: "300px" }}>
            <img
              src={data?.Poster}
              alt={data?.Title}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div style={{ padding: "20px" }}>
            <div style={{ color: "white" }}>
              <h4
                style={{
                  fontSize: "22px",
                  fontWeight: "400",
                  marginBottom: "10px",
                }}
              >
                {data?.Title}
              </h4>
              <p>{data?.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
