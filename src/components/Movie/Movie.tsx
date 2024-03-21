import {FC} from 'react';

import {IMovie} from "../../interfaces";
import {urls} from "../../constants/urls";
import css from './Movie.module.css'

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {

    const {title, poster_path, vote_average} = movie

    const movieImage = `${urls.movieImage}${poster_path}`

    return (
        <div className={css.Movie}>


            <div className={css.MovieCard}>
                <img src={movieImage} alt="img"/>
                <div>{title}</div>
            </div>

        </div>
    );
};

export {Movie};