import {DARKTHEME} from '../action-types';

export const setDarkTheme = (darkTheme) => {
    return ({
        type: DARKTHEME,
        payload: {
            darkTheme
        }
    });
};
