import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import nilesh1 from "./nilesh1.jpeg";
import { CiSearch } from "react-icons/ci";
import MovieListing from "../MovieListing/MovieListing";

const nil5s = require("./nil5s.png");

const Header = () => {
  const [sortedBy, setSortedBy] = useState("");
  return (
    <div
      style={{
        color: "white",
        height: "72px",
        padding: "0px 40px ",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between ",
      }}
      className=""
    >
      <Link to="/">
        <img
          src={nil5s}
          alt=""
          style={{ width: "40%", height: "10%", marginLeft: "40px" }}
        ></img>
      </Link>

      <div className="flex">
        <Link to="/signin" className="tracking-wider text-white mr-8 ">
          Movies
        </Link>
        <Link to="/signin" className="tracking-wider text-white mr-8">
          TV Shows
        </Link>
        <CiSearch className="mr-14 mt-1" />
      </div>
    </div>
  );
};

export default Header;
