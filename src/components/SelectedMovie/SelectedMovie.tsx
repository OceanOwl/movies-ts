import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {urls} from "../../constants/urls";
import css from './SelectedMovie.module.css'
import {Rating} from "@mui/material";
import {ITrailer} from "../../interfaces/trailerInterface";


interface IProps {
}

const SelectedMovie: FC<IProps> = () => {

        const {id} = useParams();
        const dispatch = useAppDispatch();
        const {selectedMovie, loading, error, trailers} = useAppSelector(state => state.movies);

        useEffect(() => {
            dispatch(moviesActions.getById({id}));
            dispatch(moviesActions.getMovieTrailers({id}));
        }, [dispatch, id]);

        if (loading) {
            return <div>Loading...</div>;
        }
        if (error) {
            return <div>Error: {error}</div>;
        }

        if (!selectedMovie) {
            return;
        }
        console.log(selectedMovie);
    console.log(trailers.results);

    return (
            <div className={css.SelectedMovie}>
                {selectedMovie && (
                    <div>
                        <div>
                            <div className={css.backdropImageContainer}>

                                <img className={css.backdropImage}
                                     src={`${urls.movieImageHigherQuality}${selectedMovie.backdrop_path}`}
                                     alt={selectedMovie.title}/>
                            </div>

                            <div className={css.mainInfoContainer}>
                                <img className={css.moviePoster}
                                     src={`${urls.movieImageLowerQuality}${selectedMovie.poster_path}`}
                                     alt={selectedMovie.title}/>
                                <div className={css.textInfo}>
                                    <h1>{selectedMovie.title}</h1>
                                    <div>{selectedMovie.release_date}</div>

                                    <div className={css.rating}>
                                        <Rating name="customized-10"
                                                defaultValue={selectedMovie.vote_average}
                                                max={10}
                                                precision={0.1}
                                                readOnly
                                        />
                                        <div className={css.voteAverage}>{selectedMovie.vote_average}</div>
                                        <div>({selectedMovie.vote_count})</div>

                                    </div>

                                    <div>{selectedMovie.runtime} min</div>

                                    <div>
                                        {selectedMovie.genres.map(genre => (
                                            <div key={genre.id}>{genre.name}</div>
                                        ))}
                                    </div>
                                    <h3>Overview</h3>
                                    <div>{selectedMovie.overview}</div>
                                    {/*<div className={css.trailersContainer}>*/}
                                    {/*    {trailers && trailers.map((trailer: ITrailer) => (*/}
                                    {/*        <div key={trailer.id} className={css.trailerItem}>*/}
                                    {/*            <iframe*/}
                                    {/*                width="560"*/}
                                    {/*                height="315"*/}
                                    {/*                src={`https://www.youtube.com/embed/${trailer.}`}*/}
                                    {/*                title={trailer.name}*/}
                                    {/*                allowFullScreen*/}
                                    {/*            ></iframe>*/}
                                    {/*            <p>{trailer.name}</p>*/}
                                    {/*        </div>*/}
                                    {/*    ))}*/}
                                    {/*</div>*/}
                                </div>

                            </div>

                        </div>

                    </div>
                )}
            </div>
        );
    }
;

export {SelectedMovie};
