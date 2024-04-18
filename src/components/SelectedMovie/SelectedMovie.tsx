import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useNavigate, useParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {urls} from "../../constants/urls";
import css from './SelectedMovie.module.css'
import {Fab, Rating} from "@mui/material";
import {PlayCircle} from "@mui/icons-material";


interface IProps {
}

const SelectedMovie: FC<IProps> = () => {

        const {id} = useParams();
        const dispatch = useAppDispatch();
        const {selectedMovie, loading, error} = useAppSelector(state => state.movies);
        const navigate = useNavigate();

        const navigateToMovieTrailer = () => {
            navigate('movieTrailer')
        }

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
                                                readOnly/>
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
                                    <Fab variant="extended" size="medium" color="primary" onClick={navigateToMovieTrailer}>
                                        <PlayCircle sx={{mr: 1}}/>
                                        Play Trailer
                                    </Fab>


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
