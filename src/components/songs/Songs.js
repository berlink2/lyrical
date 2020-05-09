import React, {useContext} from 'react';
import {GlobalContext} from '../../context';
import Spinner from '../layout/Spinner';
import {Song} from './Song';

export const Songs = () => {
    const [state] = useContext(GlobalContext);
    const {song_list, heading} = state;

             if(song_list=== undefined || song_list.length ===0) {
                return <Spinner />
             } else {
                return (
                    <>
                        <h3 className="text-center mb-4">{heading}</h3>
                    <div className="row">
                        
                        {song_list.map(item=>
                            <Song key={item.track.track_id} song={item.track}/>
                            )}
                    </div>
                    </>
                );
             }
         
     
    
}
