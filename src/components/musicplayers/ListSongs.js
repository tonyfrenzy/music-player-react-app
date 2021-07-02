import React, {useState, useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getSongAsync} from '../../actions/getSongAction';

const ListSongs = () => {
    const dispatch = useDispatch();
    const [song, setSong] = useState([]);
    const songData = useSelector((state) => state.songReducer?.data || []) // Get the data to the reducer.
    
    useEffect(() => {
        dispatch(getSongAsync());
    }, []);
    
    useEffect(() => {
        if (songData.length){
            setSong(songData)
        }
    }, [songData]);
    return (
        <ul>
        {song.map((list) => (
            <div key={list.id}>
            <li>{list.title}</li>
            </div>
            ))}
        </ul>
    );
};
export default ListSongs;