import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";

import css from './Movies.module.css'
import {moviesActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import {PaginationComponent} from "../PaginationComponent/PaginationComponent";


const Movies = () => {

    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const [query] = useSearchParams({page: '1'});
    const page = query.get('page');


    useEffect(() => {
        dispatch(moviesActions.getAll(+page))
    }, [dispatch, page])


    return (
        <div className={css.Movies}>

            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}

            <div>
                <PaginationComponent/>
            </div>

        </div>


    );


};

export {Movies};