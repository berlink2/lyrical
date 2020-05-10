import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import { GlobalContext} from '../../context';



export const Search = () => {
    const [state, setState] = useContext(GlobalContext);
    const [userInput,setUserInput] = useState("");
    const [songTitle, setSongTitle] = useState("");

    const handleChange = (event) => {
        setUserInput(event.target.value);

    }
    useEffect(()=>{
        
        const fetchData = async () => {

            const res = await axios(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`);
            let song_list = res.data.message.body.track_list;
            setState({song_list: song_list, heading: "Your search Results" });
        }
        fetchData();


    },[songTitle])

    const handleSubmit =  (event) => {
        event.preventDefault();
        setSongTitle(userInput)
        
    }

    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                <i className="fas fa-music"></i>
                            </h1>
                            <p className="lead text-center">
                                Find the lyrics for any song!
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                <input onChange={handleChange} type="text" className="form-control form-control-lg" placeholder="Song name..." name="songTitle" value={state.songTitle}/>
                                </div>
                                <button type="submit" className="btn btn-outline-primary btn-lg mb-5 btn-block">Get Lyrical</button>
                            </form>
                        </div>
                
            
        
    );
}
