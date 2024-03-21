import React from 'react';

import {Movies} from "../../components/Movies/Movies";
import css from './MoviesPage.module.css'


const MoviesPage = () => {
    return (
        <div className={css.MoviesParent}>
            <Movies/>
        </div>
    );
};

export {MoviesPage};