import {FC} from 'react';

import {SelectedMovie} from "../components/SelectedMovie/SelectedMovie";
import {IMovie} from "../interfaces";

interface IProps {
    selectedMovie: IMovie
}

const SingleMoviePage: FC<IProps> = ({selectedMovie}) => {
    return (
        <div>
            <SelectedMovie selectedMovie={selectedMovie}/>
        </div>
    );
};

export {SingleMoviePage};

// import React from 'react';
//
// import {SelectedMovie} from "../components/SelectedMovie/SelectedMovie";
//
//
// const SingleMoviePage = () => {
//
//     return (
//         <div>
//             {SelectedMovie&& <SelectedMovie selectedMovie={SelectedMovie}/>}
//         </div>
//     );
// };
//
// export {SingleMoviePage};