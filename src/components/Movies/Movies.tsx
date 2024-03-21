import {FC, useEffect} from 'react';

import css from './Movies.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux";

interface IProps {

}

const Movies: FC<IProps> = () => {

    const {movies} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll())
    }, [])

    return (
        <div className={css.Movies}>
            {JSON.stringify(movies)}
        </div>
    );
};

export {Movies};