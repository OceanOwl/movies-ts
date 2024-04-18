import React, {FC, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux";

import css from './MovieTrailer.module.css'
import {HighlightOff} from "@mui/icons-material";
import {CircularProgress} from "@mui/joy";


interface IProps {
}

const MovieTrailer: FC<IProps> = () => {

    const {id} = useParams();
    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const { loading, error, trailer} = useAppSelector(state => state.movies);
    useEffect(() => {
        dispatch(moviesActions.getMovieTrailers({id}));
    }, [dispatch, id]);

    const getBackToSelectedMovie = () => {
        navigate(-1)
    }

    if (loading) {
        return <CircularProgress/>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!trailer || trailer.results.length === 0) {
        return (
            <div className={css.trailerContainerOnError}>
                <div className={css.closeButton} onClick={getBackToSelectedMovie}>
                    <HighlightOff/>
                </div>
                <div className={css.message}>No trailers available for this movie.</div>

            </div>
        );
    } else {
        return (

            <div className={css.trailerContainer}>
                {trailer.results.length === 1
                    ?
                    trailer.results.map(trailer => (

                        <div key={trailer.id} className={css.trailerItem}>

                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                title={trailer.name}
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))
                    :
                    trailer.results
                        .filter(trailer => trailer.name === 'Official Trailer')
                        .map(trailer => (

                            <div key={trailer.id} className={css.trailerItem}>
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${trailer.key}`}
                                    title={trailer.name}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                <div className={css.closeButton} onClick={getBackToSelectedMovie}>
                    <HighlightOff/>
                </div>
            </div>
        )
    }
}

export {MovieTrailer} ;
