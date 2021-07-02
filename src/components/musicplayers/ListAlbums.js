import React, {useState, useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAlbumAsync} from '../../actions/getAlbumAction';

const ListAlbums = () => {
    const dispatch = useDispatch();
    const [album, setAlbum] = useState([]);
    const albumData = useSelector((state) => state.albumReducer?.data || []) // Get the data to the reducer.
    
    useEffect(() => {
        dispatch(getAlbumAsync());
    }, []);
    
    useEffect(() => {
        if (albumData.length){
            setAlbum(albumData)
        }
    }, [albumData]);
    return (
        <ul>
        {album.map((list) => (
            <div key={list.id}>
            <li>{list.title}</li>
            </div>
            ))}
        </ul>
    );
};
export default ListAlbums;