import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";

import {moviesActions} from "../../redux";
import css from '../Movies/Movies.module.css'
import {PaginationComponent} from "../PaginationComponent/PaginationComponent";
import {Movie} from "../Movie/Movie";



const MovieGenres = () => {

    const {genreId} = useParams();
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movies);
    const [query] = useSearchParams({page: '1'});

    const page = query.get('page');


    useEffect(() => {
        dispatch(moviesActions.getAllByGenreId({page: (+page), id: genreId}))
    }, [dispatch, page, genreId])


    return (
        <div className={css.Body}>
            <div className={css.Movies}>
                {movies.map(movie => (
                    <Movie key={movie.id} movie={movie}/>
                ))}
                <div>
                    <PaginationComponent/>
                </div>
            </div>
        </div>

    );
};

export {MovieGenres};