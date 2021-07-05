import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAlbumAsync} from '../../actions/getAlbumAction';

const ListAlbums = () => {
    const dispatch = useDispatch();
    const [album, setAlbum] = useState([]);
    const albumData = useSelector((state) => state.musicReducer?.data) // Get the data to the reducer.
    
    useEffect(() => {
        dispatch(getAlbumAsync());
    }, [dispatch]);
    
    useEffect(() => {
        const retrievedAlbums = albumData.feed;
        if (retrievedAlbums){
            setAlbum(retrievedAlbums.entry)
        }
    }, [albumData]);
    return (
        <ul>
        {album.map((list) => (
            <div key={list.id.attributes["im:id"]}>
                <li>{list.title.label}</li>
            </div>
            ))}
        </ul>
    );
};
export default ListAlbums;