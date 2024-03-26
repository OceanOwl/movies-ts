import {FC} from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import {useParams} from "react-router-dom";

import {urls} from "../../constants/urls";


interface IProps {

}

const SelectedMovie: FC<IProps> = () => {

    const {id} = useParams();
    const {poster_path, backdrop_path, genres} = useAppSelector(state => state.movies.selectedMovie);
    const movieImage = `${urls.movieImage}${poster_path}`
    const backDropPath = `${urls.movieImage}${backdrop_path}`

    return (
        <div>
            <div>{id}</div>
            <img src={movieImage} alt={movieImage}/>
            <img src={backDropPath} alt={backdrop_path}/>
            <div>{genres.map(genre => <div key={genre.id}>{genre.name}</div>)}</div>

        </div>
    );
};

export {SelectedMovie};