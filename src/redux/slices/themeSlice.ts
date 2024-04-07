import {createSlice} from '@reduxjs/toolkit';

export enum ThemeMode {
    Light = 'light',
    Dark = 'dark',
}

interface ThemeState {
    mode: ThemeMode;
}

const initialState: ThemeState = {
    mode: ThemeMode.Light,
};

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
        },
    },
});


const {reducer: themeReducer, actions} = themeSlice;

const themeActions = {
    ...actions

}

export {
    themeReducer,
    themeActions
}
