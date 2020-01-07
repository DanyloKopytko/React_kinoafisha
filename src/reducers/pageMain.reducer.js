import {LOADING, GET_ALL_MOVIES, GET_GENRES, DARKTHEME} from '../action-types';

const initialState = {
    loading: false,
    movies: [],
    genres: {},
    darkTheme: false
};

const pageMain = (state = initialState, action) => {
    switch (action.type) {
        case LOADING: {
            const {payload: {loading}} = action;

            return {
                ...state,
                loading
            }
        }
        case GET_ALL_MOVIES: {
            const {payload: {movies}} = action;

            return {
                ...state,
                movies
            }
        }
        case GET_GENRES: {
            const {payload: {genres}} = action;

            return {
                ...state,
                genres
            }
        }
        case DARKTHEME: {
            const {payload: {darkTheme}} = action;

            return {
                ...state,
                darkTheme
            }
        }

        default:
            return state;
    }
};

export default pageMain;
