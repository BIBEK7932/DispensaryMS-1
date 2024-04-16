import React, {useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";

import './videocall.css'

function Videoc(){
const [value, setValue] = useState();
const navigate = useNavigate();

const handleJoinRoom = useCallback(() =>{
    navigate(`/Videoc/Room/${value}`)

},[navigate, value])

    return(
    
           <div className="vid_call">
             <div className="vid_container">
            <h1 className="vid_heading1">Video Calling Page</h1>

            <input  className="vid_input"
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            
            type='text' placeholder="Enter Room Code"/>
            <button className="vid_button" onClick={handleJoinRoom}>Join</button>
            </div>
           </div>
          
        
    )
}

export default Videoc;