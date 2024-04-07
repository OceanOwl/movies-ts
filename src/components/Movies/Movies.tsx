import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";

import css from './Movies.module.css'
import {moviesActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import {Pagination} from "@mui/material";


const Movies = () => {

    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    // const prevHandler = () => {
    //     setQuery(prev => {
    //         prev.set('page', `${+page - 1}`)
    //         return prev
    //     })
    // };
    //
    // const nextHandler = () => {
    //     setQuery(prev => {
    //         prev.set('page', `${+page + 1}`)
    //         return prev
    //     })
    // };


    useEffect(() => {
        dispatch(moviesActions.getAll(+page))
    }, [dispatch, page])

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setQuery({page: value.toString()});
    };


    return (
        <div className={css.Movies}>

            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}

            <div>
                <Pagination
                    page={+page}
                    count={500}
                    onChange={handlePageChange}
                />
            </div>


        </div>


    );


};

export {Movies};