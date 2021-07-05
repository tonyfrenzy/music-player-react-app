import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getSongAsync} from '../../actions/getSongAction';

const ListSongs = () => {
    const dispatch = useDispatch();
    const [song, setSong] = useState([]);
    const songData = useSelector((state) => state.musicReducer?.data) // Get the data to the reducer.
    
    useEffect(() => {
        dispatch(getSongAsync());
    }, [dispatch]);
    
    useEffect(() => {
        const retrievedSongs = songData.feed;
        if (retrievedSongs){
            setSong(retrievedSongs.entry)
        }
    }, [songData]);
    return (
        // <ul>
        // {song.map((list) => (
        //     <div key={list.id.attributes["im:id"]}>
        //         <li>{list.title.label}</li>
        //     </div>
        //     ))}
        // </ul>
        <div class="container mt-3 col-sm-6">
            <h2>Musi App - Songs</h2>
            <p>...</p>
            
            {song.map((list) => (
            <div class="d-flex border p-3" key={list.id.attributes["im:id"]}>
                <img src={list["im:image"][1].label} 
                    alt="John Doe"
                    class="flex-shrink-0 me-3 mt-3 rounded-circle" 
                    style={{width:60 + 'px', height:60 + 'px'}} />
                <div>
                <div class="card w-100 d-block" style={{minWidth: 100 +'%'}}>
                    <div class="card-body">
                        <h5 class="card-title">{list["im:name"].label} - <a href={list["im:artist"].attributes.href} target="_blank" rel="noreferrer">{list["im:artist"].label}</a></h5>
                        <h6 class="card-subtitle mb-2 text-muted">Genre: {list.category.attributes.label}</h6>

                        <p class="card-text">
                            <audio controls class="w-100">
                                <source src={list.link[1].attributes.href} type="audio/mpeg">
                                </source>
                            </audio>
                        </p>
                        
                        {/*<small class="text-muted">{list["im:releaseDate"].label}</small> */}
                        <a href={list["im:collection"].link.attributes.href} class="card-link">View Page</a> 
                    </div>
                </div>
            </div>        
            </div>        
            ))}
        </div>
    );
};
export default ListSongs;