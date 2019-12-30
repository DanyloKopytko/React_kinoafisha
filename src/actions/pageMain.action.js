import {LOADING} from '../action-types';

export const setLoading = (loading) => {
    return (
        {
            type: LOADING,
            payload: {
                loading
            }
        }
    );
};
