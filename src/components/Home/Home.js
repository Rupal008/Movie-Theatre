import React from 'react';
import { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing"
import movieApi from '../../common/apis/movieApi';
import {APIKey} from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';


const Home = () => {

    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch]);

    return (
        <div>
            <div style={{}}></div>
            <MovieListing/>
        </div>
    );
};

export default Home;