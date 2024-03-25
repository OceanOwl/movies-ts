import {FC} from 'react';
import {IMovie} from "../../interfaces";

interface IProps {
    selectedMovie:IMovie
}

const SelectedMovie: FC<IProps> = ({selectedMovie}) => {
    const {id} = selectedMovie;
    return (
        <div>
            {SelectedMovie&&
            <div>{id}</div>
            }
            </div>
    );
};

export {SelectedMovie};