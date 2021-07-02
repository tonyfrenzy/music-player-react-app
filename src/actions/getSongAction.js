import types from "./../types"

const getSong = (data) => ({
    type: types.GET_SONG, // thunk!
    data: data
}); // ACTION 

export const getSongAsync = () => async (dispatch) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(getSong(data));        
    } catch (error) {
        console.log(error);
    }
}; // THUNK