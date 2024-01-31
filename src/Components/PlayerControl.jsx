import React, { useState } from "react";
import "../css/PlayerControl.css"; 
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
// import { FiRepeat } from "react-icons/fi";
// import { useStateProvider } from "../utils/StateProvider";

// import { reducerCases } from "../utils/Constants";

export default function PlayerControl() {

  const [playerState, setPlayerState] = useState(false);

  return (
    <div className="box">
      {/* <div className="shuffle">
        <BsShuffle />
      </div> */}
      <div className="previous">
        <CgPlayTrackPrev style={{ fontSize: '50px' }}  />
      </div>
      <div className="state">
        {playerState ? (
          <BsFillPauseCircleFill style={{ fontSize: '50px' }}  onClick={()=>setPlayerState(!playerState)} />
        ) : (
          <BsFillPlayCircleFill style={{ fontSize: '50px' }}  onClick={()=>setPlayerState(!playerState)} />
        )}
      </div>
      <div className="next">
        <CgPlayTrackNext  style={{ fontSize: '50px' }} />
      </div>
      <div className="repeat">
        {/* <FiRepeat /> */}
      </div>
    </div>
  );
}
