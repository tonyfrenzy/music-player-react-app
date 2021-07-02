import types from "../types"

const getAlbum = (data) => ({
    type: types.GET_SONG, // thunk!
    data: data
}); // ACTION 

export const getAlbumAsync = () => async (dispatch) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(getAlbum(data));        
    } catch (error) {
        console.log(error);
    }
}; // THUNK