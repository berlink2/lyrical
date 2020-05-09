import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';




export const GlobalContext = createContext();


export const Provider = ({children}) => {
    let initialState = {
        song_list: [
           
        ],
        heading: '',
    }
    const [state, setState] = useState(initialState);
    //const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);



    // useEffect(()=>{
    //     axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?
    //     chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
    //         .then(res=>{
    //             //console.log(res.data);
    //             setState({song_list:res.data.message.body.track_list, heading:state.heading});
    //         })
    //         .catch(err=>console.log(err));
    // },[])

   useEffect(()=>{
       
    const fetchData = async () => {
            
            const res = await axios(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?
                 chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`);
            
            setState({song_list:res.data.message.body.track_list, heading:"Top 10 songs in the US right now"});
            
        }
    fetchData();
   },[]);


    return (<GlobalContext.Provider value={[state, setState]}>
        {children}
    </GlobalContext.Provider>)
}

export const Consumer = GlobalContext.Consumer;


