import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components/Header/Header";
import {useAppSelector} from "../hooks/reduxHooks";
import {ThemeMode} from "../redux";
import css from "../components/Movies/Movies.module.css";

const MainLayout = () => {

    const themeMode = useAppSelector(state => state.theme.mode);


    return (
        <div className={themeMode === ThemeMode.Dark ? css.dark : css.light}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};