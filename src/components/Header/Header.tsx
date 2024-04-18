import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {Switch} from "@mui/material";
import css from './Header.module.css'
import {themeActions} from "../../redux";


const Header = () => {

    const dispatch = useDispatch();

    const toggleDarkMode = () => {
        dispatch(themeActions.toggleTheme());
    };

    return (
        <div className={css.Header}>

            <div>
                <NavLink to={'/'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
            </div>
            <Switch onClick={toggleDarkMode}/>

        </div>
    );
};

export {Header}