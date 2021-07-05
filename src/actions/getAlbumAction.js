import types from "../types"

const getAlbum = (data) => ({
    type: types.GET_TOP_ALBUMS, // thunk!
    data: data
}); // ACTION 

export const getAlbumAsync = () => async (dispatch) => {
    try {
        const response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
        const data = await response.json();
        dispatch(getAlbum(data));        
    } catch (error) {
        console.log(error);
    }
}; // THUNK