import React from 'react';
import {NavLink} from "react-router-dom";

import {Switch} from "@mui/joy";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/'}>Movies</NavLink>
            <NavLink to={'/genres'}>Genres</NavLink>
            <Switch/>

        </div>
    );
};

export {Header};