import {FC} from 'react';

import {IMovie} from "../../interfaces";
import {urls} from "../../constants/urls";
import css from './Movie.module.css'
import {Card} from "@mui/joy";

interface IProps {
movie:IMovie
}

const Movie: FC<IProps> = ({movie}) => {

    const {title,poster_path,vote_average}= movie

    const movieImage =`${urls.movieImage}${poster_path}`

    return (
        <div className={css.Movie}>
            {/*<Card className={css.Card}*/}

            {/*    color="primary"*/}
            {/*    invertedColors={false}*/}
            {/*    orientation="vertical"*/}
            {/*    size="lg"*/}
            {/*    variant="outlined"*/}

            {/*>*/}
            {/*    <img src={movieImage} alt="img"/>*/}
            {/*    <div>{title}</div>*/}
            {/*</Card>*/}

            <div className={css.MovieCard}>
                <img src={movieImage} alt="img"/>
                <div>{title}</div>
            </div>
            {/*<div>{title}</div>*/}
            {/*<img src={movieImage} alt="img"/>*/}
            {/*<div></div>*/}
        </div>
    );
};

export {Movie};