import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useParams} from "react-router-dom";

import {moviesActions} from "../../redux";
import {urls} from "../../constants/urls";
import css from './SelectedMovie.module.css'


interface IProps {
}

const SelectedMovie: FC<IProps> = () => {

        const {id} = useParams();
        const dispatch = useAppDispatch();
        const {selectedMovie, loading, error} = useAppSelector(state => state.movies);

        useEffect(() => {
            dispatch(moviesActions.getById({id}));
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
                                    <div>
                                        {selectedMovie.genres.map(genre => (
                                            <div key={genre.id}>{genre.name}</div>
                                        ))}
                                    </div>
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
