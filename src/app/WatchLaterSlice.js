import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openState: false,
    films: localStorage.getItem('watchLater') ? JSON.parse(localStorage.getItem('watchLater')) : [],
    filmsCount: localStorage.getItem('watchLaterCount') ? JSON.parse(localStorage.getItem('watchLaterCount')) : 0
}

const WatchLaterSlice = createSlice({
    initialState: initialState,
    name: 'watchLater',
    reducers: {
        toggleOpenState : (state, action) => {
            state.openState = action.payload.openState;
        },
        setNewFilm : (state, action) => {
            const itemIndex = state.films.findIndex((item) => item.poster_path === action.payload.poster_path);
            if (itemIndex < 0) {
            state.films.push(action.payload);
            localStorage.setItem('watchLater', JSON.stringify(state.films))
            if (state.filmsCount <= 8) {state.filmsCount+= 1;
            localStorage.setItem("watchLaterCount", JSON.stringify(state.filmsCount))
        }
        }
        },
        removeFilm : (state, action) => {
            const removeFilm = state.films.filter((item) => item.poster_path !== action.payload.poster_path);
            state.films = removeFilm;
            state.filmsCount -= 1;
            localStorage.setItem("watchLater", JSON.stringify(state.films));
            localStorage.setItem("watchLaterCount", JSON.stringify(state.filmsCount))
        },
        deleteAllFIlms : (state) => {
            state.films = [];
            state.filmsCount = 0;
            localStorage.setItem("watchLater", JSON.stringify(state.films));
            localStorage.setItem("watchLaterCount", JSON.stringify(state.filmsCount))
        }
    }
})

export const {toggleOpenState, setNewFilm, removeFilm, deleteAllFIlms} = WatchLaterSlice.actions;

export const selectOpenState = (state) => state.watchLater.openState;
export const selectFilms = (state) => state.watchLater.films;
export const selectFilmsCount = (state) => state.watchLater.filmsCount;

export default WatchLaterSlice.reducer;