import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ni1 from "./ni1.jpeg";
import video3 from "./video3.mp4";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ExplicitIcon from "@mui/icons-material/Explicit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
  }, [dispatch, imdbID]);

  const data1 = useSelector((state) => {
    return state.list;
  });
  console.log(data1);

  const data2 = useSelector((state) => {
    return state.list1;
  });
  console.log(data2);

  return (
    <div>
      <div
        className="container"
        style={{ padding: "40px 0px", fontWeight: "400" }}
      >
        <div className="row ml-20">
          <div className="col-lg-8 col-mg-12 col-sm-12">
            <div style={{ fontSize: "40px" }}>{data.Title}</div>
            <div
              className="text-blue-300"
              style={{ paddingLeft: "3px", marginTop: "20px" }}
            >
              <span style={{ marginRight: "20px" }}>
                IMDB Rating{" "}
                <StarIcon className="mb-2" style={{ color: "#ff9e00" }} />:
                {data.imdbRating}
              </span>
              <span style={{ marginRight: "20px" }}>
                IMDB Votes{" "}
                <ThumbUpIcon className="mb-2" style={{ color: "#fafafa" }} />:
                {data.imdbVotes}
              </span>
              <span style={{ marginRight: "20px" }}>
                Runtime{" "}
                <ExplicitIcon
                  className="mb-2"
                  style={{ color: "rgb(191,213,214)" }}
                />
                :{data.Runtime}
              </span>
              <span style={{ marginRight: "20px" }}>
                Year{" "}
                <CalendarMonthIcon
                  className="mb-2"
                  style={{ color: "peachpuff" }}
                />
                :{data.Year}
              </span>
            </div>
            <div style={{ marginTop: "20px", lineHeight: "1.8rem" }}>
              {data.Plot}
            </div>
            <div className="movie-info">
              <div>
                <span
                  style={{
                    padding: "10px 0px",
                    fontWeight: "600",
                    width: "100px",
                    display: "inline-block",
                  }}
                >
                  Director
                </span>
                <span className="text-blue-500">{data.Director}</span>
              </div>
              <div>
                <span
                  style={{
                    padding: "10px 0px",
                    fontWeight: "600",
                    width: "100px",
                    display: "inline-block",
                  }}
                >
                  Stars
                </span>
                <span className="text-blue-500">{data.Actors}</span>
              </div>
              <div>
                <span
                  style={{
                    padding: "10px 0px",
                    fontWeight: "600",
                    width: "100px",
                    display: "inline-block",
                  }}
                >
                  Generes
                </span>
                <span className="text-blue-500">{data.Genre}</span>
              </div>
              <div>
                <span
                  style={{
                    padding: "10px 0px",
                    fontWeight: "600",
                    width: "100px",
                    display: "inline-block",
                  }}
                >
                  Language
                </span>
                <span className="text-blue-500">{data.Language}</span>
              </div>
              <div>
                <span
                  style={{
                    padding: "10px 0px",
                    fontWeight: "600",
                    width: "100px",
                    display: "inline-block",
                  }}
                >
                  Awards
                </span>
                <span className="text-blue-500">{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-mg-12 col-sm-12">
            <img src={data.Poster} alt={data.Title} className="ml-20" />
          </div>
        </div>
      </div>

      <div className="row ml-20  mb-7">
        {data2?.map((review) => {
          return (
            <>
              <div className="col-sm-1">
                <div className="  cursor-pointer">
                  <div className="  h-64 w-64 flex justify-center items-center -mt-14">
                    <img
                      src={review?.img}
                      className=" w-[80px] h-[80px] ml-5"
                      style={{ borderRadius: "50%" }}
                      alt=""
                    />
                  </div>
                  <div className="flex ml-28">
                    <p className="-mt-20">{review?.title}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>


      <div className="row ml-20 ">
      <video className="w-[330px] mb-4 " controls loop muted autoplay="autoplay">
                <source src={video3} />
        </video>
      <video className="w-[330px] mb-4 ml-2" controls loop muted autoplay="autoplay">
                <source src={video3} />
        </video>
      <video className="w-[330px] mb-4 ml-2" controls loop autoPlay="autoplay" muted>
                <source src={video3} />
        </video>
      <video className="w-[330px] mb-4 ml-2" controls loop muted autoplay="autoplay">
                <source src={video3} />
        </video>
      </div>



      <div className="row ml-20">
        {data1?.map((netflixData) => {
          return (
            <>
              <div className="col-sm-3">
                <div className="  cursor-pointer">
                  <div className="  h-64 w-64 flex justify-center items-center  ">
                    <img
                      src={netflixData?.img}
                      className=" rounded-t-lg  w-64 h-64  object-fixed"
                      alt=""
                    />
                  </div>
                  <div
                    className="  w-64  rounded-b-lg "
                    style={{ backgroundColor: "hsl(240deg 13.79% 11.37%)" }}
                  >
                    <div className="flex">
                      <p className="text-lg ml-2  tracking-wider text-white  pt-3">
                        {netflixData?.title}
                      </p>
                    </div>

                    <div className="pb-4 flex ">
                      <button className="tracking-wider text-left ml-2 text-white border py-1 px-2 rounded-lg bg-green-800 ">
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MovieDetail;
