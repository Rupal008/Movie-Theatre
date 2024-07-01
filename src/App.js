import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div style={{margin:'0',padding:'0',boxSizing:'border-box', fontFamily:'sans-serif',textDecoration:'none'}}>
    <BrowserRouter >
      <Header/>
      <div >
      <Routes style={{margin:'0px 40px'}}>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:imdbID" element={<MovieDetail />}/>
        <Route path="/lag" element={<MovieDetail />}/>
        <Route path="/signin" element={<MovieDetail />}/>
        <Route components={PageNotFound} />
      </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
