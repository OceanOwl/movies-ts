import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {Movie} from "../Movie/Movie";
import {moviesActions} from "../../redux";

const MovieGenres = () => {
    const {genreId} = useParams();
    const dispatch = useAppDispatch();
    const {movies, genres} = useAppSelector(state => state.movies);
    const [query] = useSearchParams({page: '1'});
    const page = query.get('page');


    useEffect(() => {
        dispatch(moviesActions.getGenres());
        // dispatch(moviesActions.getAll(+page))
    }, [dispatch, page])
    console.log(genres);

    if (!genres||!movies) {
        return <div>Loading genres...</div>;
    }
    const genreMovies = movies.filter(movie =>
        movie.genre_ids &&
        movie.genre_ids.some(genre => genre === +genreId)
);
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