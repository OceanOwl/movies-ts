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
                <div>{id}</div>
                {selectedMovie && (
                    <div className="full-screen">
                        <img src={`${urls.movieImage}${selectedMovie.backdrop_path}`} alt={selectedMovie.title}/>
                        <img src={`${urls.movieImage}${selectedMovie.backdrop_path}`} alt={selectedMovie.title}/>
                        <div>
                            {selectedMovie.genres.map(genre => (
                                <div key={genre.id}>{genre.name}</div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }
;

export {SelectedMovie};
