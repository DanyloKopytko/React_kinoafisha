import {LOADING} from '../action-types';

const initialState = {
    loading: false,
};

const pageMain = (state = initialState, action) => {
    switch (action.type) {
        case LOADING: {
            const { payload: { loading } } = action;

            return {
                ...state,
                loading
            }
        }

        default:
            return state;
    }
};

export default pageMain;
