import { combineReducers } from 'redux';

import pageMain from './pageMain.reducer';

const kinoafishaApp = combineReducers(
    pageMain
);

export default kinoafishaApp;
