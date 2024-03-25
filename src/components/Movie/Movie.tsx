import {FC} from 'react';

import {IMovie} from "../../interfaces";
import {urls} from "../../constants/urls";
import css from './Movie.module.css'
import {useAppDispatch} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux";
import {Link} from "react-router-dom";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {

    const {title, poster_path, vote_average} = movie

    const movieImage = `${urls.movieImage}${poster_path}`

    const dispatch = useAppDispatch();

    const id = movie.id

    return (
        <div className={css.Movie}>


            <div className={css.MovieCard}>
                <img src={movieImage} alt="img"/>
                {/*<div onClick={() => dispatch(moviesActions.getById({id}))}>{title}</div>*/}
                <Link onClick={() => dispatch(moviesActions.getById({id}))} to={`${id}`}>{title}</Link>
            </div>

        </div>
    );
};

export {Movie};