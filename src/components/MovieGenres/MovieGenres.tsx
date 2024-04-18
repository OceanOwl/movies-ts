import React from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/reduxHooks";
import {Movie} from "../Movie/Movie";

const MovieGenres = () => {
    const { genreId } = useParams();

    const { movies,genres } = useAppSelector(state => state.movies);

    if (!genres) {
        return <div>Loading genres...</div>;
    }

    // Filter movies by genreId
    const genreMovies = movies.filter(movie =>
        movie.genres && movie.genres.some(genre => genre.id === +genreId)
    );

    console.log(genreId);
    console.log(genreMovies);

    return (
        <div>
            {genreMovies.map(movie => <Movie key={movie.id} movie={movie}/>)}


        </div>
    );
};

export {MovieGenres};