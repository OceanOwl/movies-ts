import React from 'react';
import {NavLink} from "react-router-dom";
import {Switch} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import css from './Header.module.css'
import {RootState} from "../../types";
import {themeActions} from "../../redux";


const Header = () => {

    const dispatch = useDispatch();
    const themeMode = useSelector((state: RootState) => state.theme.mode);

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