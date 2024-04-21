import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {Movie} from "../Movie/Movie";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";

const MovieGenres = () => {
    const {genreId} = useParams();
    const dispatch = useAppDispatch();
    const {movies, genres} = useAppSelector(state => state.movies);
    useEffect(() => {
        dispatch(moviesActions.getGenres())
    }, [])
    console.log(genres);

    if (!genres) {
        return <div>Loading genres...</div>;
    }

    const genreMovies = movies.filter(movie =>
        movie.genres &&
        movie.genres.some(genre => +genre.id === +genreId)
    );


    console.log(movies);
    console.log(genreId);
    console.log(genreMovies);

    return (
        <div>
            {/*{genreMovies.map(movie => <Movie key={movie.id} movie={movie}/>)}*/}
            {genreMovies.map(movie => (
                <Movie key={movie.id} movie={movie}/>
            ))}

        </div>
    );
};

export {MovieGenres};