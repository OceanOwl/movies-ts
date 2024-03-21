import {FC, useEffect} from 'react';

import css from './Movies.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import {IMovie} from "../../interfaces";


const Movies = () => {

    const {movies} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll())
    }, [])

    return (
        <div className={css.Movies}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};