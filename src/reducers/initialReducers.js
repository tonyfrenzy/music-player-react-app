import types from './../types';

const initialState = {
    data: [],
};

const musicReducer = (state=initialState, action) => {
    const {type} = action;
    switch(type) {
        case types.GET_TOP_SONGS:
            return {...state, data:action.data};
        case types.GET_TOP_ALBUMS:
            return {...state, data:action.data};
        default:
            return state;
    }
};

export default musicReducer;