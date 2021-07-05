import types from "./../types"

const getSong = (data) => ({
    type: types.GET_TOP_SONGS, // thunk!
    data: data
}); // ACTION 

export const getSongAsync = () => async (dispatch) => {
    try {
        const response = await fetch('https://itunes.apple.com/us/rss/topsongs/limit=100/json');
        const data = await response.json();
        dispatch(getSong(data));        
    } catch (error) {
        console.log(error);
    }
}; // THUNK