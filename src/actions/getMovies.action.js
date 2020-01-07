import {GET_ALL_MOVIES, LOADING} from "../action-types";

import axios from "axios";

export const getAllMovies = () => {
    return (dispatch) => {

        dispatch({
            type: LOADING,
            payload: {
                loading: true
            }
        });

        return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=cc809c60b58f948232bce08b642e354e')
            .then(({data = {}}) => {
                dispatch({
                    type: GET_ALL_MOVIES,
                    payload: {
                        movies: data
                    }
                });

                dispatch({
                    type: LOADING,
                    payload: {
                        loading: false
                    }
                });
            })
            .catch(err => {
                dispatch({
                    type: LOADING,
                    payload: {
                        loading: false
                    }
                });
            });
    }
};
