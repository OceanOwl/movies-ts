import {FC} from 'react';

import {useNavigate} from "react-router-dom";

import css from './Movie.module.css'
import {IMovie} from "../../interfaces";
import {urls} from "../../constants/urls";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {

    const {title, poster_path, vote_average} = movie

    const movieImage = `${urls.movieImageLowerQuality}${poster_path}`

    const id: string = movie.id
    const navigate = useNavigate();

    return (
        <div className={css.Movie}>


            <div className={css.MovieCard}>
                <img src={movieImage} alt="img"/>
                <div>{vote_average}</div>

                <div className={css.Button} onClick={() => navigate(`/movies/${id}`)}>{title}</div>
            </div>

        </div>
    );
};

export {Movie};