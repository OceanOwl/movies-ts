import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {Switch} from "@mui/material";

import css from './Header.module.css'


const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };


    return (
        <div className={css.Header}>

            <div>
                <NavLink to={'/'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
            </div>
            <Switch checked={darkMode} onChange={toggleDarkMode}/>
        </div>
    );
};

export {Header};