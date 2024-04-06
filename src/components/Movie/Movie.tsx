import {FC} from 'react';

import {useAppDispatch} from "../../hooks/reduxHooks";
import {Link} from "react-router-dom";

import css from './Movie.module.css'
import {IMovie} from "../../interfaces";
import {urls} from "../../constants/urls";
import {moviesActions} from "../../redux";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {

    const {title, poster_path, vote_average} = movie

    const movieImage = `${urls.movieImageLowerQuality}${poster_path}`

    const dispatch = useAppDispatch();

    const id: string = movie.id

    return (
        <div className={css.Movie}>


            <div className={css.MovieCard}>
                <img src={movieImage} alt="img"/>
                <div>{vote_average}</div>
                <Link onClick={() => dispatch(moviesActions.getById({id}))} to={`${id}`}>{title}</Link>
            </div>

        </div>
    );
};

export {Movie};