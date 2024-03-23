import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";

import css from './Movies.module.css'
import {moviesActions} from "../../redux";
import {Movie} from "../Movie/Movie";


const Movies = () => {

    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    const prevHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    };

    const nextHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    };


    useEffect(() => {
        dispatch(moviesActions.getAll(+page))
    }, [dispatch, page])


    return (
        <div className={css.Movies}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}

            <div>
                <button disabled={+page === 1} onClick={prevHandler}>----------------------</button>
                <button disabled={+page === 500} onClick={nextHandler}>++++++++++++++++++++++</button>
            </div>
        </div>


    );


};

export {Movies};